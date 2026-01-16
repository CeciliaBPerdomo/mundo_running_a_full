import React from "react";
import Campo from "./Campos"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../../redux/usuario/usuarioSlice"

// Formik
import { Formik, Form } from "formik"
import { modifiedUserValidationSchema } from "../../formik/validationSchema";

// UI
import SubmitButton from "../UI/Form/BotonSubmit";
import { mensaje } from "../UI/Toast/mensaje";
import { updateUser } from "../../axios/registro-axios";

const ModalEditarUsuario = ({ usuario, onClose }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async(values, actions) => {
    try {
      await updateUser(values, usuario)
      mensaje(" Usuario actualizado 🎉 Por seguridad, iniciá sesión nuevamente")

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

      <div className="w-full max-w-lg bg-[var(--color-background)] rounded-xl shadow-xl p-6 relative animate-fade-in border border-[var(--border-gray-300)]">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[var(--color-titulos)]">
            Modificar datos
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        <Formik
          enableReinitialize
          initialValues={{
            nombre: usuario?.nombre || "",
            email: usuario?.email || "",
            celular: usuario?.celular || "",
            ciudad: usuario?.ciudad || "",
          }}
          validationSchema={modifiedUserValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <Campo label="Nombre" name="nombre" />
              <Campo label="Email" name="email" />
              <Campo label="Celular" name="celular" />
              <Campo label="Ciudad" name="ciudad" />

              {/* Acciones */}
              <div className="flex justify-end gap-3 pt-6">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-md border border-[var(--border-gray-300)] text-[var(--p-negro)] hover:bg-[var(--text-gray-500)] hover:text-[var(--p-blanco)] transition"
                >
                  Cancelar
                </button>

                <SubmitButton loading={isSubmitting}>
                  Guardar cambios
                </SubmitButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};



export default ModalEditarUsuario;
