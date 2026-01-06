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

export const getProductsbyId = async (req: Request, res: Response) => {
    const { id } = req.params

    if (!isValidObjectId(id)) {
        res.status(400).json({ msg: "El id no es válido, no te hagas el hacker ruso" })
        return
    }

    const producto: IProducto | null = await Producto.findById(id)

    if (!producto) {
        res.status(404).json({ msg: "No existe el producto" })
        return
    }
    res.status(200).json({ producto })
}

export const getProductsbyCategory = async (req: Request, res: Response) => {
    const { categoria } = req.body
    const producto = await Producto.find({ categoria, delete: false })

    if (!producto) {
        res.status(404).json({ msg: "No hay productos para la categoria" })
        return
    }
    res.status(200).json({ producto })
}