import { Router } from "express";
import { getRatings, getRating, createRating, deleteRating } from "./contRateController";
export const contentRatingRouter = Router();
import { validate } from '../_middlewares/validation';
import { contentRatingJoiSchema as schema } from "./contRateModel";
import { checkAdmin } from "../_middlewares/checkAdmin";

contentRatingRouter.get('/', getRatings);
contentRatingRouter.get('/:id', getRating);
contentRatingRouter.post('/create', validate(schema), checkAdmin, createRating);
contentRatingRouter.delete('/:id', checkAdmin, deleteRating);