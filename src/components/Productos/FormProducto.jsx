import React from "react";

// Formik 
import { Formik } from 'formik';
import { Form as FormikForm } from 'formik';

import { productInitialValues } from "../../formik/initialValues";
import { productValidationSchema } from "../../formik/validationSchema";

import FormProductoFields from "./FormProductoFields";
import { postProductos } from "../../axios/productos-axios";

// UI
import SubmitButton from "../UI/Form/BotonSubmit";
import { mensaje } from "../UI/Toast/mensaje";

const FormProducto = ({ onClose }) => {

    const handleSubmit = async (values, actions) => {
        console.log(values)
        try {
            const productoFormateado = {
                ...values,
                talles: values.talles
                    .split(",")
                    .map(t => t.trim())
                    .filter(Boolean),

                colores: values.colores
                    .split(",")
                    .map(c => c.trim())
                    .filter(Boolean),
            };

            const producto = await postProductos(
                productoFormateado.marca,
                productoFormateado.descripcion,
                productoFormateado.precio,
                productoFormateado.categoria,
                productoFormateado.foto,
                productoFormateado.talles,
                productoFormateado.colores
            )
            
            if (!producto) {
                mensaje("❌ Error al guardar el producto, intentá más tarde");
                return;
            }
            mensaje("✔️ Tú producto ha sido guardado con éxito total");
            actions.resetForm();
        } catch (error) {
            mensaje("❌ Ocurrió un error inesperado. Intentá más tarde.");
            console.error(error)
        } finally {
            actions.setSubmitting(false);
        }
    }

    return (
        <Formik
            initialValues={productInitialValues}
            validationSchema={productValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <FormikForm className="space-y-6">

                    <FormProductoFields />

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4">

                        <button type="button" className="text-[var(--p-negro)] w-full sm:w-auto px-4 py-2 border border-[var(--border-gray-300)] rounded-md hover:bg-[var(--border-gray-50)] transition" onClick={onClose} >
                            Cancelar
                        </button>

                        <SubmitButton loading={isSubmitting}>
                            Guardar producto
                        </SubmitButton>

                    </div>
                </FormikForm>
            )}
        </Formik>
    );
};

export default FormProducto;
