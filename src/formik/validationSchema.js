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

// Validación al agregar producto
export const productValidationSchema = Yup.object({
    marca: Yup.string()
        .required("La marca es un campo obligatorio."),
    precio: Yup.number()
        .typeError("El precio debe ser un número válido.")
        .moreThan(0, "El precio debe ser mayor a 0.")
        .required("El precio es un campo obligatorio."),
    categoria: Yup.string()
        .required("La categoría es un campo obligatorio."),
    talles: Yup.string()
        .test(
            "talles-validos",
            "Ingresá al menos un talle válido",
            value =>
                value?.split(",").map(t => t.trim()).filter(Boolean).length > 0
        )
        .required(),
    descripcion: Yup.string()
        .required("La descripcion es un campo obligatorio."),
    colores: Yup.string()
        .test(
            "colores-validos",
            "Ingresá al menos un color válido",
            value =>
                value?.split(",").map(c => c.trim()).filter(Boolean).length > 0
        )
        .required(),
    foto: Yup.string()
        .required("La url de la foto es requerida."),
})

export const verifiedValidationSchema = Yup.object({
    codigo: Yup.string()
        .required("El código es un campo obligatorio.")
})

// Validaciones de la modificación de usuario
export const modifiedUserValidationSchema = Yup.object({
    nombre: Yup.string()
        .required("Tu nombre completo es un campo obligatorio."),

    email: Yup.string()
        .email("Ingrese un email válido")
        .required("Tu correo electrónico es un campo obligatorio."),

    celular: Yup.string()
        .matches(/^[0-9]{9}$/, "El celular debe tener exactamente 9 números.")
        .required("Tu celular es un campo obligatorio."),

    ciudad: Yup.string()
        .required("Tu ciudad es un campo obligatorio.")
})
