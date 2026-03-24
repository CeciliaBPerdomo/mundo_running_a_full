import * as Yup from "yup"

// Validaciones del registro
export const registerValidationSchema = Yup.object({
    nombre: Yup.string()
        .required("Tu nombre completo es un campo obligatorio."),

    email: Yup.string()
        .email("Ingrese un email valido")
        .required("Tu correo electronico es un campo obligatorio."),

    password: Yup.string()
        .min(6, "Debes ingresar 6 caracteres minimo")
        .required("El password es un campo requerido"),

    celular: Yup.string()
        .matches(/^[0-9]{9}$/, "El celular debe tener exactamente 9 numeros.")
        .required("Tu celular es un campo obligatorio."),

    ciudad: Yup.string()
        .required("Tu ciudad es un campo obligatorio.")
})

// Validaciones del inicio de sesion
export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .email("Ingrese un email valido")
        .required("Tu correo electronico es un campo obligatorio."),

    password: Yup.string()
        .min(6, "Debes ingresar 6 caracteres minimo")
        .required("El password es un campo requerido")
})

// Validacion para reportar la incidencia
export const issueValidationSchema = Yup.object({
    titulo: Yup.string()
        .required("El titulo es un campo obligatorio."),
    descripcion: Yup.string()
        .required("La descripcion es un campo obligatorio."),
    prioridad: Yup.number()
        .required("La prioridad es un campo obligatorio.")
})

// Validacion para contacto
export const contactValidationSchema = Yup.object({
    nombre: Yup.string()
        .required("El nombre es un campo obligatorio."),
    apellido: Yup.string()
        .required("El apellido es un campo obligatorio."),
    email: Yup.string()
        .email("Ingrese un email valido")
        .required("Tu correo electronico es un campo obligatorio."),
    mensaje: Yup.string()
        .required("El mensaje es un campo obligatorio.")
})

// Validacion para newsletter
export const newsletterValidationSchema = Yup.object({
    email: Yup.string()
        .email("Ingrese un email valido")
        .required("Tu correo electronico es un campo obligatorio.")
})

// Validacion al agregar producto
export const productValidationSchema = Yup.object({
    marca: Yup.string()
        .required("La marca es un campo obligatorio."),
    precio: Yup.number()
        .typeError("El precio debe ser un numero valido.")
        .moreThan(0, "El precio debe ser mayor a 0.")
        .required("El precio es un campo obligatorio."),
    categoria: Yup.string()
        .required("La categoria es un campo obligatorio."),
    talles: Yup.string()
        .test(
            "talles-validos",
            "Ingresa al menos un talle valido",
            value =>
                value?.split(",").map(t => t.trim()).filter(Boolean).length > 0
        )
        .required(),
    descripcion: Yup.string()
        .required("La descripcion es un campo obligatorio."),
    colores: Yup.string()
        .test(
            "colores-validos",
            "Ingresa al menos un color valido",
            value =>
                value?.split(",").map(c => c.trim()).filter(Boolean).length > 0
        )
        .required(),
    foto: Yup.string()
        .required("La url de la foto es requerida."),
})

export const verifiedValidationSchema = Yup.object({
    codigo: Yup.string()
        .required("El codigo es un campo obligatorio.")
})

// Validaciones de la modificacion de usuario
export const modifiedUserValidationSchema = Yup.object({
    nombre: Yup.string()
        .required("Tu nombre completo es un campo obligatorio."),

    email: Yup.string()
        .email("Ingrese un email valido")
        .required("Tu correo electronico es un campo obligatorio."),

    celular: Yup.string()
        .matches(/^[0-9]{9}$/, "El celular debe tener exactamente 9 numeros.")
        .required("Tu celular es un campo obligatorio."),

    ciudad: Yup.string()
        .required("Tu ciudad es un campo obligatorio.")
})

// Validaciones para el envio
export const envioValidationSchema = Yup.object({
    nombre: Yup.string()
        .required("Tu nombre completo es un campo obligatorio."),
    celular: Yup.string()
        .matches(/^[0-9]{9}$/, "El celular debe tener exactamente 9 numeros.")
        .required("Tu celular es un campo obligatorio."),
    ciudad: Yup.string()
        .required("Tu ciudad es un campo obligatorio."),
    departamento: Yup.string()
        .required("El departamento es un campo obligatorio."),
    direccion: Yup.string()
        .required("La direccion es un campo obligatorio.")
})
