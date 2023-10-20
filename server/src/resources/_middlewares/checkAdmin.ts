import { Request, Response, NextFunction } from "express";

export const checkAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    if (req.session?.isAdmin) {
      next();
    } else {
      res.status(403).json( `Access denied. You don't have permission to perform this action.` );
    }
};
