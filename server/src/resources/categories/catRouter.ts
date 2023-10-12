import { Router } from 'express'
import { createCategory } from './catController';
import { formatData } from '../../_middlewares/catMiddleware';
import { catJoiSchema } from './catModel';
import { validate } from '../../_middlewares/shared';

export const catRouter = Router();

catRouter.post('/', validate(catJoiSchema), formatData, createCategory);