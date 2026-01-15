import type { Request, Response } from "express";
import type { IProducto } from "../models/producto.js";
import Producto from "../models/producto.js";
import { isValidObjectId } from "mongoose";

export const createProducts = async (req: Request, res: Response) => {
    const { marca, descripcion, precio, categoria, foto, talles, colores }: IProducto = req.body

    const productosData = {
        marca,
        descripcion,
        precio,
        categoria,
        foto,
        talles,
        colores,
        createdAt: new Date(),
        modifiedAt: new Date(),
        delete: false
    }

    const productos = new Producto(productosData)
    await productos.save()
    res.status(201).json({ productos })
}

export const getProducts = async (req: Request, res: Response) => {
    const productos = await Producto.find({ delete: false })
    res.status(200).json({ productos })
}

export const getProductsbyCategory = async (req: Request, res: Response) => {

    const producto = await Producto.find({
        categoria: req.params.categoria ?? "",
        delete: false
    })

    res.status(200).json({ productos: producto })
}

export const productsController = async (req: Request, res: Response) => {

    const producto = (req as any).producto;
    const metodo = req.method;

    switch (metodo) {
        case "GET":
            res.status(200).json({ producto });
            break;

        case "DELETE":
            await Producto.findByIdAndUpdate(producto._id, { delete: true });
            res.status(204).end();
            break;

        case "PATCH":
            // lo que venga del body actualiza
            const cambios = req.body;

            const actualizado = await Producto.findByIdAndUpdate(
                producto._id,
                cambios,
                { new: true, runValidators: true }
            );

            return res.status(200).json({
                msg: "Producto actualizado ✔️",
                producto: actualizado
            });

        default:
            res.status(405).json({ msg: "Método no permitido" });
    }
};