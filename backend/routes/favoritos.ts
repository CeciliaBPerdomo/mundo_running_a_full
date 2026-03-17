import { Router } from "express";
import { check } from "express-validator";

import {
    agregarFavorito,
    getMisFavoritos,
    eliminarFavorito
} from "../controllers/favorito.js";

import validarJWT from "../middlewares/validarJWT.js";
import validarProductoExiste from "../middlewares/productos/validarProductoExiste.js";
import { recoletarErrores } from "../middlewares/recoletarErrores.js";

const router = Router();

/**
 * ❤️ POST — Agregar producto a favoritos
 */
router.post(
    "/",
    [
        validarJWT,
        validarProductoExiste,
        check("productoId", "El productoId es obligatorio").not().isEmpty(),
        recoletarErrores
    ],
    agregarFavorito
);

/**
 * ⭐ GET — Obtener mis favoritos
 */
router.get(
    "/",
    [
        validarJWT,
        recoletarErrores
    ],
    getMisFavoritos
);

/**
 * ❌ DELETE — Quitar producto de favoritos
 */
router.delete(
    "/:productoId",
    [
        validarJWT,
        recoletarErrores
    ],
    eliminarFavorito
);

export default router;