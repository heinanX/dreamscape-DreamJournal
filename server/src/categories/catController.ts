import { NextFunction, Request, Response } from "express";
import { CatModel } from "./catModel";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category } = req.body;
    const checkCat = await CatModel.findOne({ category });
    if (!checkCat) {
        const newCategory = await CatModel.create(req.body);
        res.status(201).json(newCategory);
    } else {
        res.status(404).json(category + ' already taken');
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
