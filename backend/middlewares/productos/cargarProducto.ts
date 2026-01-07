import { isValidObjectId } from "mongoose";
import Producto from "../../models/producto.js";
import type { Request, Response, NextFunction } from "express";

export const cargarProducto = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    if (!isValidObjectId(id)) {
        res.status(400).json({ msg: "ID inválido, modo hacker ruso desactivado" });
        return;
    }

    const producto = await Producto.findById(id);

    if (!producto) {
        res.status(404).json({ msg: "No existe el producto" });
        return;
    }

    (req as any).producto = producto;

    next();
};
