import { Router } from "express";
import { login, modifiedUser, register, usuarioVerificado } from "../controllers/auth.js";
import { check } from "express-validator";
import { existeEmail, existeUsuario } from "../helpers/validaciones.js";
import { recoletarErrores } from "../middlewares/recoletarErrores.js";
import validarJWT from "../middlewares/validarJWT.js";

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

router.post(
    "/login",
    [
        check("email", "El email es obligatorio").not().isEmpty(),
        check("email", "El email no es válido").isEmail(),
        check("email").custom(existeUsuario), 
        check("password", "El password debe ser mayor a 6 caracteres").isLength({ min: 6 }),
        recoletarErrores
    ],
    login
)

// Verificacion del codigo
router.patch(
    "/verify",
    [
        check("email", "El email es obligatorio").not().isEmpty(),
        check("email", "El email no es válido").isEmail(),
        check("email").custom(existeUsuario), 
        check("code").not().isEmpty(),
        recoletarErrores
    ],
    usuarioVerificado
)

router.patch(
    '/updateUser',
    [
        validarJWT,
        check("email", "El email es obligatorio").not().isEmpty(),
        check("email", "El email no es válido").isEmail(),
        check("email").custom(existeUsuario), 
        recoletarErrores
    ],
    modifiedUser
)

export default router