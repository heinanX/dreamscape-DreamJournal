import { NextFunction, Request, Response } from "express";
import { CommentsModel } from "./commentsModel";

// GET ALL COMMENTS FROM DB
export const getComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comments = await CommentsModel.find();
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

//GET ONE COMMENT FROM DB
export const getComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comment = await CommentsModel.findOne({ _id: req.params.id });
    res.status(200).json(comment);
  } catch (error) {
    next(error);
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
    next(error);
  }
};

// DELETE A COMMENT IN DATABASE
export const deleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CommentsModel.findByIdAndDelete(req.params.id);
    res.status(200).json('comment deleted');
  } catch (error) {
    next(error);
  }
};
