import { Router } from 'express'
import { createCategory, deleteCat, getCats, getCat } from './catController';
import { formatData } from '../_middlewares/catMiddleware';
import { catJoiSchema } from './catModel';
import { validate } from '../_middlewares/validation';
import { checkAdmin } from '../_middlewares/checkAdmin';

export const catRouter = Router();

catRouter.get('/', getCats);
catRouter.get('/:id', getCat);
catRouter.post('/create', checkAdmin, validate(catJoiSchema), formatData, createCategory);
catRouter.delete('/:id', checkAdmin, deleteCat);