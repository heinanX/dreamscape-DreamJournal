import { NextFunction, Request, Response } from "express";
import { EntriesModel } from "./entriesModel";

export const createEntries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const checkCat = await EntriesModel.findOne(req.body);
    /* if (!checkCat) {
        const newCategory = await CatModel.create(req.body);
        res.status(201).json(newCategory);
    } else {
        res.status(404).json(req.body.category + ' already taken');
    } */
  } catch (error) {
    res.status(404).json(error);
  }
};