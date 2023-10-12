import { Router } from 'express'
import { createUser } from './userController';

export const userRouter = Router();


userRouter.post('/', createUser);