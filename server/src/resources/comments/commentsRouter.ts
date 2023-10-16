import { Router } from 'express';
import { createComment } from './commentsController';
export const commentsRouter = Router();
import { validate } from '../../_middlewares/shared';
import { commentsJoiSchema as schema } from './commentsModel';

commentsRouter.post('/', validate(schema), createComment);