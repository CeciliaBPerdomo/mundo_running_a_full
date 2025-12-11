import type { Request, Response } from "express";
import type { IUsuarioMR } from "../models/usuario.js";
import UsuarioMR from "../models/usuario.js";

import bcryptjs from "bcryptjs"
import randomstring from "randomstring"

import { ROLES } from "../helpers/constantes.js";

export const register = async(req: Request, res: Response) => {
    const { nombre, email, password, celular, ciudad, rol }: IUsuarioMR = req.body
    
    const usuario = new UsuarioMR({
        nombre, email, password, celular, ciudad, rol
    }) 

    // genera la clave encriptada con 10 saltos
    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password, salt)

    // atraves de los headers le paso si es admin o no
    const adminKey = req.headers["admin-key"]
    if (adminKey === process.env.KEY_ADMIN){
        usuario.rol = ROLES.admin
    }

    const newCode = randomstring.generate(6)
    usuario.code = newCode

    await usuario.save()
    
    res.status(201).json({
        msg: "Usuario creado con éxito",
        usuario
    })
}