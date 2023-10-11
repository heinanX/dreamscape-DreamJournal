import { Router } from 'express';
import { createComment } from './commentsController';
export const commentsRouter = Router();

commentsRouter.post('/', createComment);