import express from 'express';
import cors from 'cors';
import { entryRouter } from './resources/entries/entriesRouter';
import { userRouter } from './resources/user/userRouter';
import { catRouter } from './resources/categories/catRouter';
import { commentsRouter } from './resources/comments/commentsRouter';
export const app = express();

app.use(cors())
app.use(express.json())

app.use(express.static('public'));
app.use('/api/users', userRouter)
app.use('/api/categories', catRouter)
app.use('/api/entries', entryRouter)
app.use('/api/comments', commentsRouter)