import React from 'react'
import SubmitButton from "../UI/Form/BotonSubmit"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { envioInitialValues } from '../../formik/initialValues';
import { envioValidationSchema } from '../../formik/validationSchema';
import EnvioFields from "./EnvioFields"
import { confirmarCarrito } from '../../axios/carrito-axios';


const DatosEnvio = ({ envio }) => {
  const handleSubmitEnvio = async (values, actions) => {
    try {
      await confirmarCarrito(values)
      actions.setSubmitting(false)
    } catch (error) {
      console.error("Error al guardar envío", error)
    }
  }

  return (
    <div className="bg-white border border-[var(--recuadro)] rounded-2xl shadow-md p-6 space-y-6">
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

            <SubmitButton disabled={isSubmitting}>
              Confirmar compra
            </SubmitButton>

          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DatosEnvio