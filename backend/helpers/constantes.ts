export const ROLES = {
    admin: "admin",
    user: "user"
}

export const CATEGORIAS = {
    ciclismo: "Ciclismo",
    natacion: "Natación",
    running: "Running"
}

export const ESTADOS = {
    activo: "activo",
    pendientepago: "pendiente de pago",
    pendienteenvio: "pendiente de envio",
    enviado: "enviado"
} as const;

export type EstadoCarrito = typeof ESTADOS[keyof typeof ESTADOS];