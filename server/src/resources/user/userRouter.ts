import { Router } from 'express'
import { createUser,  getUsers, login, logout, deleteUser } from './userController';
import { userJoiSchema } from './userModel';
import { validate } from '../../_middlewares/shared';

export const userRouter = Router();


userRouter.get('/', getUsers);
userRouter.post('/create', validate(userJoiSchema), createUser);
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.delete('/delete/:id', deleteUser);