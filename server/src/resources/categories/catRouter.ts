import { Router } from 'express'
import { createCategory, getCat } from './catController';
import { formatData } from '../../_middlewares/catMiddleware';
import { catJoiSchema } from './catModel';
import { validate } from '../../_middlewares/shared';

export const catRouter = Router();

catRouter.get('/', getCat);
catRouter.post('/', validate(catJoiSchema), formatData, createCategory);