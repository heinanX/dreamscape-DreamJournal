import { Router } from 'express'
import { createCategory } from './catController';
import { formatData } from '../../_middlewares/catMiddleware';
export const catRouter = Router();

catRouter.post('/', formatData, createCategory);