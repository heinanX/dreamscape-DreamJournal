import express from 'express';
import cors from 'cors';
import { userRouter } from './user/userRouter';
import { catRouter } from './categories/catRouter';
export const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/categories', catRouter)