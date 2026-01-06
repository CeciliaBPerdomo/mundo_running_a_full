import type { Request, Response } from "express";
import type { IIssue } from "../models/issue.js";
import type { ObjectId } from "mongoose";
import Issue from "../models/issue.js";
import { sendIssueEmail } from "../mailer/sendIssueEmail.js";

export const postNewIssues = async (req: Request, res: Response) => {
    const { title, description, priority }: IIssue = req.body

    const usuarioId: ObjectId = (req as any).usuarioConfirmado._id
    const usuario = (req as any).usuarioConfirmado;

    const issueData = {
        title,
        description,
        priority,
        user: usuarioId,
        createdAt: new Date()
    }

    const issue = new Issue(issueData)

    await issue.save()

    // 🔔 mail en segundo plano (no bloquea)
    Promise.resolve().then(() =>
        sendIssueEmail(issue, usuario.nombre, usuario.email)
    );
    
    res.status(201).json({ issue })
}