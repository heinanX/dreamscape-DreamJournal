import { NextFunction, Request, Response } from "express";
import { CatModel } from "./catModel";

export const getCats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await CatModel.find();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

export const getCat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await CatModel.findOne({ _id: req.params.id });
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

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
      res.status(404).json( req.body.category + ' already taken' );
    }
  } catch (error) {
    next(error);
  }
};

export const deleteCat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CatModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json( 'category deleted' );
  } catch (error) {
    next(error);
  }
};
