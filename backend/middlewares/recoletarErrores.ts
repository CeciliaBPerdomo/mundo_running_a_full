// middlewares: de medio y de tupperware 

import type { NextFunction, Request, Response } from "express";
import { Result, validationResult, type ValidationError } from "express-validator";

export const recoletarErrores = (req: Request, res: Response, next: NextFunction): void => {
    const errores: Result<ValidationError> = validationResult(req)

    if (!errores.isEmpty()) {
        res.status(400).json(errores)
    } else {
        next() // si no hay errores sigue con el siguiente
    }
}