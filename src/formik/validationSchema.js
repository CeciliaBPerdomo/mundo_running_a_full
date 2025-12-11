import * as Yup from "yup"

export const registerValidationSchema = Yup.object({
    nombre: Yup.string()
        .required("Tu nombre completo es un campo obligatorio."),

    email: Yup.string()
        .email("Ingrese un email válido")
        .required("Tu correo electrónico es un campo obligatorio."),

    password: Yup.string()
        .min(6, "Debes ingresar 6 caracteres mínimo")
        .required("El password es un campo requerido"),

    celular: Yup.string()
        .matches(/^[0-9]{9}$/, "El celular debe tener exactamente 9 números.")
        .required("Tu celular es un campo obligatorio."),

    ciudad: Yup.string()
        .required("Tu ciudad es un campo obligatorio.")
})
