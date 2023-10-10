import { Router } from 'express'
import { createCategory } from './catController';
export const catRouter = Router();

catRouter.post('/', createCategory);