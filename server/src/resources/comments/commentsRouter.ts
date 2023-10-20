import { Router } from 'express';
import { getComments, getComment, createComment } from './commentsController';
export const commentsRouter = Router();
import { validate } from '../../_middlewares/validation';
import { commentsJoiSchema as schema } from './commentsModel';

commentsRouter.get('/', getComments);
commentsRouter.get('/:id', getComment);
commentsRouter.post('/', validate(schema), createComment);