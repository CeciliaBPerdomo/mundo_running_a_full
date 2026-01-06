import React from "react";
import { Formik, Form as FormikForm } from "formik";

import { issueInitialValues } from "../../formik/initialValues";
import { issueValidationSchema } from "../../formik/validationSchema";

import IssueFields from "./IssueFields";
import SubmitButton from "../../components/UI/Form/BotonSubmit";
import { ToastContainer } from "react-toastify";
import { mensaje } from "../../components/UI/Toast/mensaje";
import { crearIssue } from "../../axios/issue-axios";

const Problemas = () => {

    const handleSubmit = async (values, actions) => {
        try {
            const problema = await crearIssue(values.titulo, values.descripcion, values.prioridad )
            
            if (!problema) {
                mensaje("❌ Error al enviar el reporte de la incidencia");
                return;
            }

            mensaje("✔️ El reporte del problema fue correctamente enviado a la programadora estrella ✨");
            actions.resetForm();
        } catch (error) {
            mensaje(`⚠️ ${error.message}.`)
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-xl">
                <h2 className="text-2xl font-semibold mb-6 text-center text-[var(--p-negro)]">
                    Reportar problema 🛠️
                </h2>

                <Formik
                    initialValues={issueInitialValues}
                    validationSchema={issueValidationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <FormikForm className="space-y-4">
                            <IssueFields />

                            <SubmitButton loading={isSubmitting}>
                                Enviar incidencia
                            </SubmitButton>
                        </FormikForm>
                    )}
                </Formik>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Problemas;
