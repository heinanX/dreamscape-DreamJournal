import { Router } from 'express'
import { createUser } from './userController';
import { userJoiSchema } from './userModel';
import { validate } from '../../_middlewares/shared';

export const userRouter = Router();


userRouter.post('/', validate(userJoiSchema), createUser);