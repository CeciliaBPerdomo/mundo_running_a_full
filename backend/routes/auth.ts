import { Router } from "express";
import { register } from "../controllers/auth.js";
import { check } from "express-validator";
import { existeEmail } from "../helpers/validaciones.js";
import { recoletarErrores } from "../middlewares/recoletarErrores.js";

const router = Router()

// localhost:8080/auth/register
router.post(
    "/register",
    [
        // valida que los datos sean ingresados por si el front - end (o sea yo) es medio banana
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").isEmail(),  
        check("email").custom(existeEmail),  // para chequear si ya esta en la bd
        check("password", "El password debe ser mayor a 6 caracteres").isLength({ min: 6}),
        check("ciudad", "La ciudad es obligatoria").not().isEmpty(),
        check("celular", "El celular es obligatorio").not().isEmpty(),
        recoletarErrores
    ],
    register
)

export default router