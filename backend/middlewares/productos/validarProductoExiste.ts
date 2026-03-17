import type { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import Producto from "../../models/producto.js";

const validarProductoExiste = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 🔥 soporta body y params + nombres distintos
  const productoId =
    req.body.productoId ||
    req.body.producto ||
    req.params.productoId ||
    req.params.producto;

  if (!productoId || !Types.ObjectId.isValid(productoId)) {
    return res.status(400).json({
      msg: "Producto inválido"
    });
  }

  const productoDB = await Producto.findById(productoId);

  if (!productoDB || productoDB.delete) {
    return res.status(404).json({
      msg: "El producto no existe"
    });
  }

  // lo dejamos disponible siempre igual
  (req as any).productoDB = productoDB;
  (req as any).productoId = productoId;

  next();
};

export default validarProductoExiste;