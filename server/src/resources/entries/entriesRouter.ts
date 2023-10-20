import { Router } from 'express'
import { getEntries, getEntry, createEntries, deleteEntry } from './entriesController';
import { validate } from '../_middlewares/validation';
import { entriesJoiSchema } from './entriesModel';
import { ProfanityCheck } from '../_middlewares/profanity_handler';
export const entryRouter = Router();

entryRouter.get('/', getEntries);
entryRouter.get('/:id', getEntry);
entryRouter.post('/create-new', validate(entriesJoiSchema), ProfanityCheck, createEntries);
entryRouter.delete('/:id', deleteEntry);