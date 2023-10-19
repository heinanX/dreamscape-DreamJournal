import { NextFunction, Request, Response } from "express";
import { CatModel } from "./catModel";

export const getCat = async(
  req: Request,
  res: Response
) => {
  try {
      const categories = await CatModel.find( );
      res.status(200).json(categories);
  } catch (error) {
      res.status(404).json(error);
  }
}

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const checkCat = await CatModel.findOne(req.body);
    if (!checkCat) {
        const newCategory = await CatModel.create(req.body);
        res.status(201).json(newCategory);
    } else {
        res.status(404).json(req.body.category + ' already taken');
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
