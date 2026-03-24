import React from "react";
import { ErrorMessage, Field, Form as FormikForm, Formik } from "formik";
import { motion } from "framer-motion";
import { crearNewsletter } from "../../../axios/newsletter-axios";
import { newsletterInitialValues } from "../../../formik/initialValues";
import { newsletterValidationSchema } from "../../../formik/validationSchema";
import { mensaje } from "../../UI/Toast/mensaje";

const inputClassName = "w-full md:w-[80%] p-3 rounded-md border border-[var(--border-gray-300)] placeholder-[var(--color-placeholder)] text-[var(--p-negro)] outline-none";

const errorClassName = "text-sm text-red-600 mt-1 md:w-[80%]";

const Novedades = () => {
  const handleEnvioNews = async (values, actions) => {
    try {
      const response = await crearNewsletter(values.email);

      if (!response) {
        mensaje("Error al suscribirse al newsletter.");
        return;
      }

      mensaje("Te suscribiste correctamente al newsletter.");
      actions.resetForm();
    } catch (error) {
      mensaje(error.message || "Ocurrio un error al suscribirse.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 flex justify-center bg-[var(--color-background)]">
      <div className="w-[95%] max-w-6xl">
        <h2 className="text-[45px] font-bold text-center mb-16 text-[var(--color-titulos)]">
          ENTERATE DE LAS ULTIMAS NOVEDADES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <img
              src="/mail.png"
              alt="Newsletter"
              className="w-[250px] md:w-[320px]"
            />
          </div>

          <div className="mt-10 md:mt-0 text-center md:text-left">
            <h3 className="text-[30px] font-semibold text-[var(--p-negro)] mb-4">
              Unite a nuestro boletin informativo
            </h3>

            <p className="text-[var(--p-gris-claro)] text-[18px] mb-6 leading-relaxed">
              Recibe las ultimas novedades y ofertas exclusivas.
            </p>

            <Formik
              initialValues={newsletterInitialValues}
              validationSchema={newsletterValidationSchema}
              onSubmit={handleEnvioNews}
            >
              {({ isSubmitting }) => (
                <FormikForm className="space-y-4">
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

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="w-full md:w-[80%] bg-[var(--botones-rojos)] hover:bg-[var(--botones-rojos-hover)] text-[var(--p-blanco)] font-semibold px-8 py-3 rounded-md disabled:opacity-70"
                  >
                    {isSubmitting ? "Enviando..." : "Subscribirse ahora"}
                  </motion.button>
                </FormikForm>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Novedades;
