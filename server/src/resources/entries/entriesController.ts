import { Request, Response, NextFunction } from "express";
import { EntriesModel } from "./entriesModel";

export const getEntries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const entries = await EntriesModel.find();
    res.status(200).json(entries);
  } catch (error) {
    next(error);
  }
};

export const getEntry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const entry = await EntriesModel.findOne({ _id: req.params.id});
    res.status(200).json(entry);
  } catch (error) {
    next(error);
  }
};

export const createEntries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
        const newEntry = await EntriesModel.create(req.body);
        res.status(201).json(newEntry);

  } catch (error) {
    next(error);
  }
};

// export const updateEntries = async (
//   req: Request,
//   res: Response, next: NextFunction
// ) => {
//   try {
//         const newEntry = await EntriesModel.updateOne({_id: req.params.id}, updatedData);
//         res.status(201).json(newEntry);

//   } catch (error) {
//     next(error);
//   }
// };

export const deleteEntry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
        await EntriesModel.findOneAndDelete({_id: req.params.id});
        res.status(204).json( 'entry deleted' );

  } catch (error) {
    next(error);
  }
};