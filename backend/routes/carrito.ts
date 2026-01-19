import { Router } from "express";
import { agregarAlCarrito } from "../controllers/carrito.js";
import validarJWT from "../middlewares/validarJWT.js";
import { recoletarErrores } from "../middlewares/recoletarErrores.js";
import validarProductoExiste from "../middlewares/productos/validarProductoExiste.js";
import { check } from "express-validator";

const router = Router()

router.post(
    "/",
    [
        validarJWT,
        validarProductoExiste,
        check("producto", "El producto es obligatorio").not().isEmpty(),
        check("precio", "El precio es obligatorio").not().isEmpty(),
        check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
        recoletarErrores
    ],
    agregarAlCarrito
)

export default router