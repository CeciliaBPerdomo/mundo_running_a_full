import { Router } from "express";
import { agregarAlCarrito, confirmarCarrito, getCarritoActual, getCarritosPendientes, getCarritosPendientesEnvio, getCarritosUsuario, patchEstadoCarrito } from "../controllers/carrito.js";
import validarJWT from "../middlewares/validarJWT.js";
import { recoletarErrores } from "../middlewares/recoletarErrores.js";
import validarProductoExiste from "../middlewares/productos/validarProductoExiste.js";
import { check } from "express-validator";
import { isAdmin } from "../middlewares/validarRol.js";

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
    getCarritosUsuario
)

router.get(
    "/pendientes",
    [
        validarJWT,
        recoletarErrores
    ],
    getCarritosPendientes
)

router.get(
    "/pendientes-envio",
    [
        validarJWT,
        isAdmin,
        recoletarErrores
    ],
    getCarritosPendientesEnvio
)

router.patch(
    "/:carritoId/estado",
    [
        validarJWT,
        isAdmin,
        recoletarErrores
    ],
    patchEstadoCarrito
);

export default router