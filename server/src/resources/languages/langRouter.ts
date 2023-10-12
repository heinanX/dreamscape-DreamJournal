import { Router } from 'express';
import { createLanguage, getLanguages } from './langController';
import { languageJoiSchema } from '../languages/langModel';
import { validate } from '../../_middlewares/shared';
export const langRouter = Router();

langRouter.get('/', getLanguages);
langRouter.post('/', validate(languageJoiSchema), createLanguage);