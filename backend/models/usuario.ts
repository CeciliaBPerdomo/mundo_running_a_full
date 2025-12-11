import { model, Model, Schema } from "mongoose";
import { ROLES } from "../helpers/constantes.js";

export interface IUsuarioMR {
    nombre: string;
    email: string;
    password: string;
    celular: string;
    ciudad: string;
    rol?: string;           //  →  No lo va a mandar el usuario, si ponemos el ? es opcional
    code?: string;
    verified?: string;
    active?: boolean;
    newsletter?: boolean;
}

const UsuarioMRSchema = new Schema<IUsuarioMR>({
    nombre: { type: String, required: [true, "El nombre del usuario es obligatorio"] },
    email: { type: String, required: [true, "El correo del usuario es obligatorio"] },
    password: { type: String, required: [true, "La contraseña del usuario es obligatoria"] },
    celular: { type: String, required: [true, "El celular del usuario es obligatorio"] },
    ciudad: { type: String, required: [true, "La ciudad del usuario es obligatorio"] },
    rol: { type: String, default: ROLES.user },
    code: { type: String },  //  →  le envia un codigo para ver si es el usuario, y luego verified pasa a true
    verified: { type: Boolean, default: false },
    active: { type: Boolean, default: true }, // para el soft delete
    newsletter: { type: Boolean, default: true }, // si quiere recibir el boletin de novedades
})

UsuarioMRSchema.methods.toJSON = function() {
    //  → lo que no quiero mostrarle al usuario (lo que esta destructurado es lo que no va a mostrar)
    const {__v, password, _id, code, ...usuario } = this.toObject()
    return usuario
}

const UsuarioMR: Model<IUsuarioMR> = model<IUsuarioMR>("UsuarioMR", UsuarioMRSchema)
export default UsuarioMR