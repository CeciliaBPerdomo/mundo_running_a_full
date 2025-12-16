import type { Request, Response } from "express";
import type { IUsuarioMR } from "../models/usuario.js";
import UsuarioMR from "../models/usuario.js";

import bcryptjs from "bcryptjs"
import randomstring from "randomstring"

import { ROLES } from "../helpers/constantes.js";
import { sendEmail } from "../mailer/sendEmails.js";
import { generarJWT } from "../helpers/generarJWT.js";

export const register = async (req: Request, res: Response) => {
    const { nombre, email, password, celular, ciudad, rol }: IUsuarioMR = req.body

    const usuario = new UsuarioMR({ nombre, email, password, celular, ciudad, rol })

    // genera la clave encriptada con 10 saltos
    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password, salt)

    // atraves de los headers le paso si es admin o no
    const adminKey = req.headers["admin-key"]
    if (adminKey === process.env.KEY_ADMIN) {
        usuario.rol = ROLES.admin
    }

    const newCode = randomstring.generate(6)
    usuario.code = newCode

    await usuario.save()
   // await sendEmail(email, newCode, nombre)

    res.status(201).json({
        msg: "Usuario creado con éxito",
        usuario
    })

    // ENVIAR EMAIL EN SEGUNDO PLANO (no bloqueante)
    setTimeout(async () => {
      try {
        await sendEmail( email, newCode, nombre );
        console.log(`✅ Email enviado a ${email}`);
      } catch (emailError) {
        console.error('❌ Error enviando email (background):', emailError);
        // Puedes registrar este error en una DB para reintentar después
      }
    }, 0);
}

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password }: IUsuarioMR = req.body

    try {
        const usuario = await UsuarioMR.findOne({ email })

        if (!usuario) {
            res.status(404).json({ msg: "Usuario no encontrado" })
            return
        }

        const validarPass = bcryptjs.compareSync(password, usuario.password)
        if (!validarPass) {
            res.status(401).json({ "msg": "Password incorrecto" })
            return
        }

        const token = await generarJWT(usuario.email)
        res.status(202).json({
            usuario,
            token
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "Te pido mildis, error en el servidor"
        })
    }
}

export const usuarioVerificado = async (req: Request, res: Response): Promise<void> => {
    const { email, code } = req.body

    try {
        const usuario = await UsuarioMR.findOne({ email })
        if (!usuario) {
            res.status(404).json({ "msg": "No se encontró el email en la DB" })
            return
        }


        if (usuario?.verified) {
            res.status(400).json({
                msg: "El usuario ya fue verificado"
            })
        }

        if (code !== usuario?.code) {
            res.status(401).json({
                msg: "El código ingresado no es el correcto"
            })
        }

        await UsuarioMR.findOneAndUpdate(
            { email },
            { verified: true }
        )

        res.status(200).json({
            msg: "Usuario verificado correctamente",
            usuario
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "Te pido mildis, error en el servidor"
        })
    }
}