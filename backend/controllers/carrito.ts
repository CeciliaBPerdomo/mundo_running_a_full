import type { Request, Response } from "express";
import Carrito from "../models/carrito.js";

export const agregarAlCarrito = async (req: Request, res: Response) => {
    const { user, producto, cantidad = 1, precio } = req.body;

    // buscar carrito activo del usuario
    let carrito = await Carrito.findOne({
        user,
        estado: "activo",
        deleted: false
    });

    // si no existe, crear uno nuevo
    if (!carrito) {
        carrito = new Carrito({
            user,
            items: [{ producto, cantidad, precio }]
        });

        await carrito.save();
        return res.status(201).json({ carrito });
    }

    // si existe, agregar item
    carrito.items.push({ producto, cantidad, precio });

    await carrito.save();

    res.status(200).json({ carrito });
};
