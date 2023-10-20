import { Request, Response, NextFunction } from "express";
import { contentRatingModel } from "./contRateModel";

export const getRatings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ratings = await contentRatingModel.find();
    res.status(200).json(ratings);
  } catch (error) {
    next(error);
  }
};

export const getRating = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rating = await contentRatingModel.findOne({ _id: req.params.id });
    res.status(200).json(rating);
  } catch (error) {
    next(error);
  }
};

export const createRating = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const existingRating = await contentRatingModel.findOne({ rating: req.body.rating });

    if (existingRating) { return res.status(400).json( 'already registered' ) }

    const rating = await contentRatingModel.create(req.body);
    res.status(201).json(rating);
  } catch (error) {
    next(error);
  }
};

export const deleteRating = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await contentRatingModel.findByIdAndDelete({ _id: req.params.id });
    res.status(201).json( 'rating deleted' );
  } catch (error) {
    next(error);
  }
};
