import React from 'react'
// Formik
import { Formik, Form } from "formik";
import { envioInitialValues } from '../../formik/initialValues';
import { envioValidationSchema } from '../../formik/validationSchema';
import EnvioFields from "./EnvioFields"

// Guardar carrito
import { confirmarCarrito } from '../../axios/carrito-axios';

// UI
import SubmitButton from "../UI/Form/BotonSubmit"
import { mensaje } from "../UI/Toast/mensaje"
import { ToastContainer } from 'react-toastify';

// Confirmacion del carrito 
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { limpiarCarrito } from "../../redux/carrito/carritoSlice";


const DatosEnvio = ({ envio }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitEnvio = async (values, actions) => {
    try {
      await confirmarCarrito(values)
      mensaje("Compra confirmada. Queda pendiente de pago 💳")

      dispatch(limpiarCarrito())

      actions.setSubmitting(false)

      setTimeout(() => {
        navigate("/")
      }, 1500)

    } catch (error) {
      console.error("Error al guardar envío", error)
      mensaje("Error al confirmar la compra. Probá nuevamente.")
      actions.setSubmitting(false)
    }
  }

  return (
    <div className="bg-[var(--color-background)] border border-[var(--recuadro)] rounded-2xl shadow-md p-6 space-y-6">
      <h2 className="text-xl font-semibold text-[var(--color-titulos)] mb-3">Datos de envío:</h2>
      {/* <span className='text-[var(--text-gray-500)]'>Si tu datos de envío son distintos a los de tu usuario, completa la siguiente información: </span> */}

      <Formik
        initialValues={envio || envioInitialValues}
        validationSchema={envioValidationSchema}
        enableReinitialize
        onSubmit={handleSubmitEnvio}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 mt-2">

            <EnvioFields />

            <SubmitButton loading={isSubmitting}>
              Confirmar compra
            </SubmitButton>

          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  )
}

export default DatosEnvio