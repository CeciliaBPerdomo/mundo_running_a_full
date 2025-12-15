import type { IUsuarioMR } from "../models/usuario.js"
import UsuarioMR from "../models/usuario.js"

// devuelve una promesa vacia, como las de mi ex, modo catarsis terminado 
export const existeEmail = async (email: string): Promise<void> => {
    const emailEnDB: IUsuarioMR | null = await UsuarioMR.findOne({email})

    if (emailEnDB) { 
        throw new Error(`El correo: ${email} ya está registrado`)
    }
}

export const existeUsuario = async (email: string): Promise<void> => {
    const usuario: IUsuarioMR | null = await UsuarioMR.findOne({ email })

    if (!usuario) {
        throw new Error(`El usuario con email: ${email} no está registrado`)
    }
}
