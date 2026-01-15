import React from "react";
import { useNavigate } from "react-router-dom";

// Formik 
import { Formik } from 'formik';
import { Form as FormikForm } from 'formik';

import { productInitialValues } from "../../formik/initialValues";
import { productValidationSchema } from "../../formik/validationSchema";

import FormProductoFields from "./FormProductoFields";
import { postProductos, updateProductos } from "../../axios/productos-axios";

// UI
import SubmitButton from "../UI/Form/BotonSubmit";
import { mensaje } from "../UI/Toast/mensaje";

// Token
import { isTokenExpired } from "../../helpers/auth/TokenValido"

const FormProducto = ({ onClose, onSuccess, producto }) => {
    const esEdicion = Boolean(producto);
    const navigate = useNavigate()

    const handleSubmit = async (values, actions) => {

        if (isTokenExpired()) {
            mensaje("⏳ Tu sesión venció. Volvé a iniciar sesión.")
            localStorage.removeItem("token")

            setTimeout(() => {
                navigate("/login");
            }, 1500)

            return
        }

        try {
            const productoFormateado = {
                ...values,
                talles: values.talles.split(",").map(t => t.trim()).filter(Boolean),
                colores: values.colores.split(",").map(c => c.trim()).filter(Boolean),
            };

            const response = esEdicion
                ? await updateProductos(producto._id, productoFormateado)
                : await postProductos(
                    productoFormateado.marca,
                    productoFormateado.descripcion,
                    productoFormateado.precio,
                    productoFormateado.categoria,
                    productoFormateado.foto,
                    productoFormateado.talles,
                    productoFormateado.colores
                );

            if (!response) {
                mensaje("❌ Error al guardar el producto, intentá más tarde");
                return;
            }
            actions.resetForm();
            onSuccess()
        } catch (error) {
            mensaje("❌ Ocurrió un error inesperado. Intentá más tarde.");
            console.error(error)
        } finally {
            actions.setSubmitting(false);
        }
    }

    return (
        <Formik
            enableReinitialize
            initialValues={
                esEdicion
                    ? {
                        marca: producto.marca,
                        descripcion: producto.descripcion,
                        precio: producto.precio,
                        categoria: producto.categoria,
                        foto: producto.foto,
                        talles: producto.talles.join(", "),
                        colores: producto.colores.join(", "),
                    }
                    : productInitialValues
            }
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
                            {esEdicion ? "Actualizar productos" : "Guardar producto"}
                        </SubmitButton>

                    </div>
                </FormikForm>
            )}
        </Formik>
    );
};

export default FormProducto;
