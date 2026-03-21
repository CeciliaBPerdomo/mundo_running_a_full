import type { Request, Response } from "express";
import type { IMensaje } from "../models/mensaje.js";
import Mensaje, { ESTADOS_MENSAJE } from "../models/mensaje.js";
import { Types } from "mongoose";
import { sendMessageEmail } from "../mailer/sendMessageEmail.js";

export const postMensaje = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido, email, mensaje }: IMensaje = req.body;

        const nuevoMensaje = new Mensaje({
            nombre,
            apellido,
            email,
            mensaje
        });

        await nuevoMensaje.save();
        await sendMessageEmail(email, nombre, apellido);

        res.status(201).json({
            msg: "Mensaje enviado correctamente",
            mensaje: nuevoMensaje
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al guardar el mensaje"
        });
    }
};

export const getMensajes = async (req: Request, res: Response) => {
    try {
        const mensajes = await Mensaje.find().sort({ createdAt: -1 });

        res.status(200).json({ mensajes });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al obtener los mensajes"
        });
    }
};

export const getMensajesPorEstado = async (req: Request, res: Response) => {
    try {
        const { estado } = req.params;

        if (!estado) {
            return res.status(400).json({
                msg: "El estado es obligatorio"
            });
        }

        const estadosValidos = Object.values(ESTADOS_MENSAJE);

        if (!estadosValidos.includes(estado as (typeof estadosValidos)[number])) {
            return res.status(400).json({
                msg: "Estado invalido",
                estadosValidos
            });
        }

        const mensajes = await Mensaje.find({ estado }).sort({ createdAt: -1 });

        return res.status(200).json({ mensajes });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error al obtener los mensajes por estado"
        });
    }
};

export const patchEstadoMensaje = async (req: Request, res: Response) => {
    try {
        const { mensajeId } = req.params;
        const { estado } = req.body;

        if (!mensajeId) {
            return res.status(400).json({
                msg: "mensajeId es obligatorio"
            });
        }

        if (!Types.ObjectId.isValid(mensajeId)) {
            return res.status(400).json({
                msg: "ID invalido"
            });
        }

        if (!estado) {
            return res.status(400).json({
                msg: "El estado es obligatorio"
            });
        }

        const estadosValidos = Object.values(ESTADOS_MENSAJE);

        if (!estadosValidos.includes(estado as (typeof estadosValidos)[number])) {
            return res.status(400).json({
                msg: "Estado invalido",
                estadosValidos
            });
        }

        const mensajeActualizado = await Mensaje.findByIdAndUpdate(
            mensajeId,
            { estado },
            { new: true, runValidators: true }
        );

        if (!mensajeActualizado) {
            return res.status(404).json({
                msg: "Mensaje no encontrado"
            });
        }

        return res.status(200).json({
            msg: "Estado del mensaje actualizado correctamente",
            mensaje: mensajeActualizado
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error al actualizar el estado del mensaje"
        });
    }
};
