import { Router } from 'express';
import { createLanguage, deleteLanguage, getLanguage, getLanguages } from './langController';
import { languageJoiSchema } from '../languages/langModel';
import { validate } from '../_middlewares/validation';
import { checkAdmin } from '../_middlewares/checkAdmin';
export const langRouter = Router();

langRouter.get('/', getLanguages);
langRouter.get('/:id', getLanguage);
langRouter.post('/create', checkAdmin, validate(languageJoiSchema), createLanguage);
langRouter.delete('/:id', checkAdmin, deleteLanguage);