import React from "react";
import { ErrorMessage, Field, Form as FormikForm, Formik } from "formik";
import { ToastContainer } from "react-toastify";

import { crearMensaje } from "../../../axios/mensaje-axios";
import { contactInitialValues } from "../../../formik/initialValues";
import { contactValidationSchema } from "../../../formik/validationSchema";
import { mensaje } from "../../UI/Toast/mensaje";
import SubmitButton from "../../UI/Form/BotonSubmit";

const inputClassName = "w-full p-3 border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] rounded-md outline-none";

const errorClassName = "text-sm text-red-600 mt-1";

const Contacto = () => {
  const handleEnvioMensaje = async (values, actions) => {
    try {
      const response = await crearMensaje(
        values.nombre,
        values.apellido,
        values.email,
        values.mensaje
      );

      if (!response) {
        mensaje("Error al enviar tu mensaje.");
        return;
      }

      mensaje("Tu mensaje fue enviado correctamente.");
      actions.resetForm();
    } catch (error) {
      mensaje(error.message || "Ocurrio un error al enviar tu mensaje.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 bg-[var(--color-background)] flex justify-center">
      <div className="w-[95%] max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-[35px] font-bold text-[var(--botones-rojos)] mb-4">
            Contactate con nosotros
          </h2>

          <p className="text-[18px] text-[var(--p-negro)] leading-relaxed mb-8">
            Si quieres saber mas acerca de nuestros productos o servicios no dudes
            en enviarnos un mensaje!
          </p>

          <h3 className="text-[30px] font-semibold text-[var(--botones-rojos)] mb-2">
            Visitanos en:
          </h3>

          <p className="text-[18px] text-[var(--p-negro)] mb-8">
            Jose Salvo 305 esquina Defensa, Juan Lacaze, Uruguay
          </p>

          <div className="h-[241px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="mapa"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.078334334815!2d-57.340918!3d-34.4358747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959835ed9dcd31df%3A0xe84df1602043614d!2sJos%C3%A9%20Salvo%20305%2C%2070000%20Juan%20Lacaze%2C%20Departamento%20de%20Colonia!5e0!3m2!1ses-419!2suy!4v1700000000000"
            ></iframe>
          </div>
        </div>

        <div className="">
          <p className="text-[18px] text-[var(--p-negro)] mb-8">
            Completa el formulario para enviarnos tu mensaje:
          </p>

          <Formik
            initialValues={contactInitialValues}
            validationSchema={contactValidationSchema}
            onSubmit={handleEnvioMensaje}
          >
            {({ isSubmitting }) => (
              <FormikForm className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Field
                      type="text"
                      name="nombre"
                      placeholder="Nombre"
                      className={inputClassName}
                    />
                    <ErrorMessage
                      name="nombre"
                      component="p"
                      className={errorClassName}
                    />
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="apellido"
                      placeholder="Apellido"
                      className={inputClassName}
                    />
                    <ErrorMessage
                      name="apellido"
                      component="p"
                      className={errorClassName}
                    />
                  </div>
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className={inputClassName}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className={errorClassName}
                  />
                </div>

                <div>
                  <Field
                    as="textarea"
                    name="mensaje"
                    placeholder="Mensaje"
                    rows={5}
                    className={`${inputClassName} resize-none`}
                  />
                  <ErrorMessage
                    name="mensaje"
                    component="p"
                    className={errorClassName}
                  />
                </div>

                <SubmitButton loading={isSubmitting}>
                  Enviar mensaje
                </SubmitButton>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contacto;
