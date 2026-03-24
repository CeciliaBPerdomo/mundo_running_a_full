import { Router } from "express";
import { check } from "express-validator";
import { getNewsletters, postNewsletter } from "../controllers/newsletter.js";
import { recoletarErrores } from "../middlewares/recoletarErrores.js";
import validarJWT from "../middlewares/validarJWT.js";
import { isAdmin } from "../middlewares/validarRol.js";

const router = Router();

router.post(
    "/",
    [
        check("email", "El email es obligatorio").not().isEmpty(),
        check("email", "El email no es valido").isEmail(),
        recoletarErrores
    ],
    postNewsletter
);

router.get(
    "/",
    [
        validarJWT,
        isAdmin,
        recoletarErrores
    ],
    getNewsletters
);

export default router;
