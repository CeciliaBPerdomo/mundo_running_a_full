import { model, Model, Schema } from "mongoose";

export const ESTADOS_MENSAJE = {
    sinLeer: "Sin leer",
    leido: "Leido",
    respondido: "Respondido",
    pendienteDeResponder: "Pendiente de responder",
    archivado: "Archivado"
} as const;

export type EstadoMensaje = typeof ESTADOS_MENSAJE[keyof typeof ESTADOS_MENSAJE];

export interface IMensaje {
    nombre: string;
    apellido: string;
    email: string;
    mensaje: string;
    createdAt: Date;
    modifiedAt: Date;
    estado: EstadoMensaje;
}

const MensajeSchema = new Schema<IMensaje>(
    {
        nombre: {
            type: String,
            required: [true, "El nombre es obligatorio"],
            trim: true
        },
        apellido: {
            type: String,
            required: [true, "El apellido es obligatorio"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "El email es obligatorio"],
            trim: true
        },
        mensaje: {
            type: String,
            required: [true, "El mensaje es obligatorio"],
            trim: true
        },
        estado: {
            type: String,
            enum: Object.values(ESTADOS_MENSAJE),
            default: ESTADOS_MENSAJE.sinLeer
        }
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "modifiedAt"
        }
    }
);

MensajeSchema.methods.toJSON = function () {
    const { __v, ...mensaje } = this.toObject();
    return mensaje;
};

const Mensaje: Model<IMensaje> = model<IMensaje>("Mensaje", MensajeSchema);
export default Mensaje;
