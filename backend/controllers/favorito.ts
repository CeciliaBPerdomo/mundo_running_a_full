import type { Request, Response } from "express";
import Favorito from "../models/favorito.js";
import type { ObjectId } from "mongoose";
import { Types } from "mongoose";

// ❤️ 1. POST — Agregar a favoritos
export const agregarFavorito = async (req: Request, res: Response) => {
    try {
        const { productoId } = req.body;
        const userId: ObjectId = (req as any).usuarioConfirmado._id;

        // verificar si ya existe
        const existe = await Favorito.findOne({
            usuarioId: userId,
            productoId
        });

        if (existe) {
            return res.status(400).json({
                msg: "El producto ya está en favoritos"
            });
        }

        const favorito = new Favorito({
            usuarioId: userId,
            productoId
        });

        await favorito.save();

        res.status(201).json({ favorito });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al agregar favorito" });
    }
};


// ⭐ 2. GET — Obtener favoritos del usuario (ordenados)
// 🔥 Ordenamos por el último agregado usando createdAt
export const getMisFavoritos = async (req: Request, res: Response) => {
    try {
        const userId: ObjectId = (req as any).usuarioConfirmado._id;

        const favoritos = await Favorito.find({
            usuarioId: userId
        })
            .populate("productoId")
            .sort({ createdAt: -1 }); // más reciente primero

        res.status(200).json({ favoritos });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al obtener favoritos"
        });
    }
};

// ❌ 3. DELETE — Quitar favorito
export const eliminarFavorito = async (req: Request, res: Response) => {
    try {
        const { productoId } = req.params;
        const userId: ObjectId = (req as any).usuarioConfirmado._id;

        // ✅ validar existencia
        if (!productoId) {
            return res.status(400).json({
                msg: "productoId es obligatorio"
            });
        }

        // ✅ validar formato mongo
        if (!Types.ObjectId.isValid(productoId)) {
            return res.status(400).json({
                msg: "ID inválido"
            });
        }

        // ✅ convertir
        const productoObjectId = new Types.ObjectId(productoId);

        const favorito = await Favorito.findOneAndDelete({
            usuarioId: userId,
            productoId: productoObjectId
        });

        if (!favorito) {
            return res.status(404).json({
                msg: "Favorito no encontrado"
            });
        }

        res.status(200).json({
            msg: "Producto eliminado de favoritos"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error al eliminar favorito"
        });
    }
};