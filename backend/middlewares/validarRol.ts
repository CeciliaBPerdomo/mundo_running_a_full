import type { NextFunction, Request, Response } from "express";
import { ROLES } from "../helpers/constantes.js";

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { rol } = (req as any).usuarioConfirmado

    if (rol !== ROLES.admin) {
        res.status(401).json({ msg: "El usuario no es administrador"})
        return
    }
    next()
}