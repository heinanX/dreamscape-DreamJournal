import { NextFunction, Request, Response } from "express";
import { CommentsModel } from "./commentsModel";

// GET ALL COMMENTS FROM DB
export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await CommentsModel.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json(error);
  }
};

//GET ONE COMMENT FROM DB
export const getComment = async (req: Request, res: Response) => {
  try {
    const comment = await CommentsModel.findOne({ _id: req.params.id });
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json(error);
  }
};

// CREATE A COMMENT IN DATABASE
export const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comment = await CommentsModel.create(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json(error);
  }
};
