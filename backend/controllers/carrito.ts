import type { Request, Response } from "express";
import Carrito from "../models/carrito.js";
import type { ObjectId } from "mongoose";

export const agregarAlCarrito = async (req: Request, res: Response) => {
    const { producto, cantidad = 1, precio, envio } = req.body;
    const userId: ObjectId = (req as any).usuarioConfirmado._id

    // buscar carrito activo del usuario
    let carrito = await Carrito.findOne({
        user: userId,
        estado: "activo",
        deleted: false
    });

    // si no existe, crear uno nuevo
    if (!carrito) {
        carrito = new Carrito({
            user: userId,
            items: [{ producto, cantidad, precio }],
            envio
        });

        await carrito.save();
        return res.status(201).json({ carrito });
    }

    const itemExistente = carrito.items.find(
        (item: any) => item.producto.toString() === producto
    );

    if (itemExistente) {
        // si existe → sumar cantidad
        itemExistente.cantidad += cantidad;
    } else {
        // si no existe → agregar nuevo item
        carrito.items.push({ producto, cantidad, precio });
    }

    // actualizar envio si viene
    if (envio) {
        carrito.envio = envio;
    }

    await carrito.save();

    res.status(200).json({ carrito });
};
