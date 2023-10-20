import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from 'joi'

export function validate(schema: ObjectSchema) {
    return function (
        req: Request,
        res: Response,
        next: NextFunction) {
      const { error } = schema.validate(req.body);
      if (!error) {
        return next();
      };
      next(error)
    };
  };