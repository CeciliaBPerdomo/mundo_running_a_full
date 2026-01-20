import { Router } from "express";
import { agregarAlCarrito, confirmarCarrito, getCarritoActual, getCarritosUsuario } from "../controllers/carrito.js";
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

router.get(
    "/",
    [
        validarJWT,
        recoletarErrores
    ],
    getCarritoActual
)

router.patch(
    "/confirmar",
    [
        validarJWT,
        recoletarErrores
    ],
    confirmarCarrito
)

router.get(
    "/historial", 
    [
        validarJWT,
        recoletarErrores
    ], 
    getCarritosUsuario);

export default router