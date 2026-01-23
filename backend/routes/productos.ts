import { Router } from "express";
import { createProducts, getProductosDestacados, getProducts, getProductsbyCategory, productsController } from "../controllers/productos.js";
import { check } from "express-validator";
import { recoletarErrores } from "../middlewares/recoletarErrores.js";
import validarJWT from "../middlewares/validarJWT.js";
import { isAdmin } from "../middlewares/validarRol.js";
import { cargarProducto } from "../middlewares/productos/cargarProducto.js";

const router = Router()

router.post(
    "/createProduct",
    [
        validarJWT,
        isAdmin,
        check("marca", "La marca es obligatoria").not().isEmpty(),
        check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
        check("precio", "El precio es obligatorio").not().isEmpty(),
        check("categoria", "La categoria es obligatoria").not().isEmpty(),
        check("foto", "La foto es obligatoria").not().isEmpty(),
        check("talles", "Un talle es obligatorio").not().isEmpty(),
        check("colores", "Un color es obligatorio").not().isEmpty(),
        recoletarErrores
    ],
    createProducts
)

router.get(
    "/",
    getProducts
)

router.get(
    "/destacados",
    getProductosDestacados
)

router.get(
    "/category/:categoria",
    getProductsbyCategory
)

router.get(
    "/:id",
    cargarProducto, productsController
)

router.delete(
    "/:id",
    [
        validarJWT,
        isAdmin,
        recoletarErrores
    ],
    cargarProducto, productsController
)


router.patch(
    "/:id",
    [
        validarJWT,
        isAdmin,
        recoletarErrores
    ],
    cargarProducto, productsController
)

export default router