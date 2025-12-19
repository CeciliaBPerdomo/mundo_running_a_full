import type { Request, Response } from "express";
import type { IIssue } from "../models/issue.js";
import type { ObjectId } from "mongoose";
import Issue from "../models/issue.js";

export const postNewIssues = async (req: Request, res: Response) => {
    const { title, description, priority }: IIssue = req.body

    const usuarioId: ObjectId = (req as any).usuarioConfirmado._id

    const issueData = { 
        title,
        description,
        priority,
        user: usuarioId,
        createdAt: new Date()
    }

    const issue = new Issue(issueData)
    await issue.save()
    res.status(201).json({ issue })
}