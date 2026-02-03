import type { Request, Response } from "express";
import Carrito from "../models/carrito.js";
import type { ObjectId } from "mongoose";
import { ESTADOS } from "../helpers/constantes.js";

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

export const getCarritoActual = async (req: Request, res: Response) => {
    const userId: ObjectId = (req as any).usuarioConfirmado._id;

    const carrito = await Carrito.findOne({
        user: userId,
        estado: "activo",
        deleted: false
    }).populate("items.producto");

    if (!carrito) {
        return res.status(200).json({
            carrito: null,
            msg: "El usuario no tiene carrito activo"
        });
    }

    res.status(200).json({ carrito });
};

export const confirmarCarrito = async (req: Request, res: Response) => {
    const { envio } = req.body
    const userId = (req as any).usuarioConfirmado._id

    const carrito = await Carrito.findOne({
        user: userId,
        estado: "activo",
        deleted: false
    })

    if (!carrito) {
        return res.status(404).json({ msg: "No hay carrito activo" })
    }

    carrito.envio = envio
    carrito.estado = ESTADOS.pendientepago

    await carrito.save()

    res.status(200).json({ carrito })
}

export const getCarritosUsuario = async (req: Request, res: Response) => {
    const userId: ObjectId = (req as any).usuarioConfirmado._id;

    const carritos = await Carrito.find({
        user: userId,
        deleted: false,
        estado: { $ne: ESTADOS.activo } // 👈 todo menos el activo
    })
        .populate("items.producto")
        .sort({ createdAt: -1 }); // último primero

    res.status(200).json({ carritos });
};

export const getCarritosPendientes = async (req: Request, res: Response) => {
  try {
    const carritos = await Carrito.find({
      deleted: false,
      estado: ESTADOS.pendientepago, 
    })
      .populate("user", "nombre email") 
      .populate("items.producto")
      .sort({ createdAt: -1 });

    res.status(200).json({ carritos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al obtener carritos pendientes" });
  }
};
