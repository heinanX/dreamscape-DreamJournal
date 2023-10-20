import { Router } from 'express';
import { getComments, getComment, createComment, deleteComment } from './commentsController';
export const commentsRouter = Router();
import { validate } from '../_middlewares/validation';
import { commentsJoiSchema as schema } from './commentsModel';
import { ProfanityCheck } from '../_middlewares/profanity_handler';

commentsRouter.get('/', getComments);
commentsRouter.get('/:id', getComment);
commentsRouter.post('/', validate(schema), ProfanityCheck, createComment);
commentsRouter.delete('/:id', deleteComment);