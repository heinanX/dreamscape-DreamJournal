import { Router } from 'express'
import { createEntries } from './entriesController';
//import { formatData } from '../_middlewares/catMiddleware';
export const entryRouter = Router();

entryRouter.post('/', createEntries);