import { Router } from 'express'
import { createUser,  getUsers, login, logout, deleteUser } from './userController';
import { userJoiSchema } from './userModel';
import { validate } from '../_middlewares/validation';
import { checkAdmin } from '../_middlewares/checkAdmin';

export const userRouter = Router();


userRouter.get('/', checkAdmin, getUsers);
userRouter.post('/create', validate(userJoiSchema), createUser);
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.delete('/delete/:id', checkAdmin, deleteUser);