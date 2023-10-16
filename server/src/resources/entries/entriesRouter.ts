import { Router } from 'express'
import { createEntries } from './entriesController';
import { validate } from '../../_middlewares/shared';
import { entriesJoiSchema } from './entriesModel';
export const entryRouter = Router();

entryRouter.post('/', validate(entriesJoiSchema), createEntries);