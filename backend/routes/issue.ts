import { Router } from "express";
import { recoletarErrores } from "../middlewares/recoletarErrores.js";
import { postNewIssues } from "../controllers/issue.js";
import validarJWT from "../middlewares/validarJWT.js";
import { isAdmin } from "../middlewares/validarRol.js";
import { check } from "express-validator";

const router = Router()

router.post(
    "/",
    [
        validarJWT, 
        isAdmin,
        check("title", "El título es obligatorio").not().isEmpty(),
        check("description", "La descripcion es obligatoria").not().isEmpty(),
        check("priority", "La prioridad es obligatoria").not().isEmpty(),
        recoletarErrores
    ],
    postNewIssues
)

export default router