import { Request, Response } from "express";
import { EntriesModel } from "./entriesModel";

export const createEntries = async (
  req: Request,
  res: Response,
) => {
  try {
        const newEntry = await EntriesModel.create(req.body);
        res.status(201).json(newEntry);

  } catch (error) {
    res.status(404).json(error);
  }
};