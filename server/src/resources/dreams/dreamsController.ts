import { Request, Response, NextFunction } from "express";
import { DreamsModel } from "./dreamsModel";

export const getDreams = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dreams = await DreamsModel.find();
        res.status(200).json(dreams);
    } catch (error) {
        next(error);
    }
}
export const getDream = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dream = await DreamsModel.find({ _id: req.params.id });
        res.status(200).json(dream);
    } catch (error) {
        next(error);
    }
}

export const createDream = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
          const newDream = await DreamsModel.create(req.body);
          res.status(201).json(newDream);
  
    } catch (error) {
      next(error);
    }
  };

  export const deleteDream = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
          await DreamsModel.findOneAndDelete({_id: req.params.id});
          res.status(204).json( 'dream deleted' );
  
    } catch (error) {
      next(error);
    }
  };