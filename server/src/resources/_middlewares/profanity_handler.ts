// PROFANITY HANDLER FOR ENGLISH LANGUAGE
import Filter from 'bad-words'

import { Request, Response, NextFunction } from "express";

export const ProfanityCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const filter = new Filter();

    function filterBadWords() {
        // Filters the text using the bad-words library
        return filter.clean(req.body.body);
    }
    req.body.body = filterBadWords()
    next();
}