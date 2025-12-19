import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"
import Usuario, { type IUsuarioMR } from "../models/usuario.js";
import 'dotenv/config';

const validarJWT = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["x-token"] as string

    if (!token) {
        res.status(401).json({ msg: "No hay token en la petición" })
        return
    }

    try {
        const claveSecreta = process.env.CLAVE_SECRETA as string
        const payload = jwt.verify(token, claveSecreta) as JwtPayload

        const { uid } = payload;

        if (!uid) {
            res.status(401).json({ msg: "Token inválido (sin uid)" });
            return;
        }

        const usuarioConfirmado: IUsuarioMR | null = await Usuario.findById(uid);

        if (!usuarioConfirmado) {
            res.status(404).json({ msg: "El usuario no se ha encontrado en la BD" })
            return
        }

        (req as any).usuarioConfirmado = usuarioConfirmado
        next()
    } catch (error) {
        console.error(error)
        res.status(401).json({ msg: "Token no válido" })
    }
}

export default validarJWT