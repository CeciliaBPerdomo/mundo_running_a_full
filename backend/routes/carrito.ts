import { Router } from "express";
import { agregarAlCarrito } from "../controllers/carrito.js";

const router = Router()

router.post(
    "/",
    [],
    agregarAlCarrito

)

export default router