import { NextFunction, Request, Response } from "express";
import { CommentsModel } from "./commentsModel";

export const createComment = async( req: Request, res: Response, next: NextFunction) => {
    try {
        const comment = await CommentsModel.create(req.body)
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json(error);
    }
}