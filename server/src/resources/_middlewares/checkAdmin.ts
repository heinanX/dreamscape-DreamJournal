import { Request, Response, NextFunction } from "express";

export const checkAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    //if (req.session.isAdmin) next();
};
