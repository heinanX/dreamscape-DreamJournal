import { Router } from 'express'
import { getEntries, getEntry, createEntries, deleteEntry } from './entriesController';
import { validate } from '../_middlewares/validation';
import { entriesJoiSchema } from './entriesModel';
export const entryRouter = Router();

entryRouter.get('/', getEntries);
entryRouter.get('/:id', getEntry);
entryRouter.post('/create-new', validate(entriesJoiSchema), createEntries);
entryRouter.delete('/:id', deleteEntry);