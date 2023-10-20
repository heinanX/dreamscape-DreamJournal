import { NextFunction, Request, Response } from "express";

export const formatData = (req: Request, res: Response, next: NextFunction) => {
  const { category } = req.body;
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  req.body = { category: formattedCategory };
  next();
};