import type { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import Producto from "../../models/producto.js";

const validarProductoExiste = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { producto } = req.body;

  // validar ObjectId
  if (!Types.ObjectId.isValid(producto)) {
    return res.status(400).json({
      msg: "Producto inválido"
    });
  }

  const productoDB = await Producto.findById(producto);

  if (!productoDB || productoDB.delete) {
    return res.status(404).json({
      msg: "El producto no existe"
    });
  }

  // opcional: lo dejamos disponible para el controller
  (req as any).productoDB = productoDB;

  next();
};

export default validarProductoExiste;