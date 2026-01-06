import type { Request, Response } from "express";
import type { IProducto } from "../models/producto.js";
import Producto from "../models/producto.js";

export const createProducts = async( req: Request, res: Response) => {
    const { marca, descripcion, precio, categoria, foto, talles, colores } : IProducto = req.body

    const productosData = { 
        marca, 
        descripcion, 
        precio, 
        categoria, 
        foto, 
        talles, 
        colores, 
        createdAt: new Date()
    }

    const productos = new Producto(productosData)
    await productos.save()
    res.status(201).json({ productos })
}