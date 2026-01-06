import * as Yup from "yup"

// Validaciones del registro
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


// Validaciones del inicio de sesion
export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .email("Ingrese un email válido")
        .required("Tu correo electrónico es un campo obligatorio."),

    password: Yup.string()
        .min(6, "Debes ingresar 6 caracteres mínimo")
        .required("El password es un campo requerido")
})

// Validacion para reportar la incidencia
export const issueValidationSchema = Yup.object({
    titulo: Yup.string()
        .required("El título es un campo obligatorio."),
    descripcion: Yup.string()
        .required("La descripción es un campo obligatorio."),
    prioridad: Yup.number()
        .required("La proridad es un campo obligatorio.")
})