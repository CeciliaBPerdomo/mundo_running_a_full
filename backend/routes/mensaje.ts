import { Router } from "express";
import { check } from "express-validator";
import {
    getMensajes,
    getMensajesPorEstado,
    patchEstadoMensaje,
    postMensaje
} from "../controllers/mensaje.js";
import { recoletarErrores } from "../middlewares/recoletarErrores.js";
import validarJWT from "../middlewares/validarJWT.js";
import { isAdmin } from "../middlewares/validarRol.js";

const router = Router();

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("apellido", "El apellido es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").not().isEmpty(),
        check("email", "El email no es valido").isEmail(),
        check("mensaje", "El mensaje es obligatorio").not().isEmpty(),
        recoletarErrores
    ],
    postMensaje
);

router.get(
    "/",
    [
        validarJWT,
        isAdmin,
        recoletarErrores
    ],
    getMensajes
);

router.get(
    "/estado/:estado",
    [
        validarJWT,
        isAdmin,
        recoletarErrores
    ],
    getMensajesPorEstado
);

router.patch(
    "/:mensajeId/estado",
    [
        validarJWT,
        isAdmin,
        check("estado", "El estado es obligatorio").not().isEmpty(),
        recoletarErrores
    ],
    patchEstadoMensaje
);

export default router;
