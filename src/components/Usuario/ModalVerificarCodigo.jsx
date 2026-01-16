import React from "react"
import { FaTimes, FaCheckCircle } from "react-icons/fa"
import { verificarCodigo } from "../../axios/registro-axios"
import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../../redux/usuario/usuarioSlice"

// Toast
import { mensaje } from "../UI/Toast/mensaje"
import { ToastContainer } from "react-toastify"

// Formik
import { Formik, Form, Field, ErrorMessage } from "formik"
import { verifiedInitialValues } from "../../formik/initialValues"
import { verifiedValidationSchema } from "../../formik/validationSchema"
import SubmitButton from "../UI/Form/BotonSubmit"

const ModalVerificarCodigo = ({ onClose }) => {
  const usuario = useSelector((state) => state.usuario.usuarioActual)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = async (values, actions) => {
    try {
      await verificarCodigo(usuario.email, values.codigo)

      mensaje(" Cuenta verificada 🎉 Por seguridad, iniciá sesión nuevamente")

      setTimeout(() => {
        dispatch(logout())
        onClose()
        navigate("/login")
      }, 1500)

    } catch (error) {
      mensaje(error.response?.data?.msg || "Código incorrecto")
    } finally {
      actions.setSubmitting(false)
    }
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[var(--color-background)] w-full max-w-md rounded-xl shadow-lg p-6 relative animate-fade-in">

        {/* Cerrar */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FaTimes size={18} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <FaCheckCircle className="text-[var(--botones-rojos)]" size={28} />
          <h2 className="text-xl font-semibold text-[var(--color-titulos)]">
            Verificar cuenta
          </h2>
        </div>

        <p className="text-sm text-[var(--text-gray-500)] mb-6">
          Ingresá el código que te enviamos por email.
        </p>

        <Formik
          initialValues={verifiedInitialValues}
          validationSchema={verifiedValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>

              {/* Input */}
              <div className="mb-6">
                <label className="block text-sm text-[var(--text-gray-500)] mb-2">
                  Código de verificación
                </label>

                <Field
                  name="codigo"
                  type="text"
                  placeholder="Ej: 123456"
                  className="w-full rounded-md border border-[var(--border-gray-300)] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--botones-rojos)]"
                />

                <ErrorMessage
                  name="codigo"
                  component="p"
                  className="text-sm text-red-500 mt-2"
                />
              </div>

              {/* Acciones */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-md border border-[var(--border-gray-300)] text-gray-600 hover:bg-gray-100"
                >
                  Cancelar
                </button>

                <SubmitButton loading={isSubmitting}>
                  Verificar
                </SubmitButton>
              </div>

            </Form>
          )}
        </Formik>
      </div>

      <ToastContainer />
    </div>
  )
}

export default ModalVerificarCodigo
