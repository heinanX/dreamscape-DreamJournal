import { NextFunction, Request, Response } from "express";

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    if (req.session?._id) {
        next();
    } else {
        res.status(401).json({ message: `No user in session` })
    }
}