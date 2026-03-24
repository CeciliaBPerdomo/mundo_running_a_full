import type { Request, Response } from "express";
import type { INewsletter } from "../models/newsletter.js";
import Newsletter from "../models/newsletter.js";

export const postNewsletter = async (req: Request, res: Response) => {
    try {
        const { email }: INewsletter = req.body;

        const newsletterExistente = await Newsletter.findOne({ email });

        if (newsletterExistente) {
            return res.status(400).json({
                msg: "Este email ya esta suscripto al newsletter"
            });
        }

        const nuevoNewsletter = new Newsletter({
            email
        });

        await nuevoNewsletter.save();

        return res.status(201).json({
            msg: "Suscripcion al newsletter creada correctamente",
            newsletter: nuevoNewsletter
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error al guardar la suscripcion al newsletter"
        });
    }
};

export const getNewsletters = async (req: Request, res: Response) => {
    try {
        const newsletters = await Newsletter.find().sort({ createdAt: -1 });

        return res.status(200).json({ newsletters });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Error al obtener las suscripciones al newsletter"
        });
    }
};
