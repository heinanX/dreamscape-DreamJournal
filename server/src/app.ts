import cors from 'cors';
import express from 'express';
import cookieSession from 'cookie-session';
import { entryRouter } from './resources/entries/entriesRouter';
import { userRouter } from './resources/user/userRouter';
import { catRouter } from './resources/categories/catRouter';
import { commentsRouter } from './resources/comments/commentsRouter';
import { langRouter } from './resources/languages/langRouter';
import { errorHandler, notFound } from './resources/_middlewares/errorHandling';
import { contentRatingRouter } from './resources/content_Rating/contRateRouter';

const envSecret = process.env.COOKIE_SESSION_KEY
if (!envSecret) {
    throw new Error('The COOKIE_SESSION_KEY environment variable is not defined.');
}

export const app = express();
app.use(cookieSession({
    name: 'session',
    keys: [envSecret],
    sameSite: "strict",
    httpOnly: true,
    secure: false,
    maxAge: 36 * 60 * 60 * 1000
}));

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/users', userRouter);
app.use('/api/categories', catRouter);
app.use('/api/entries', entryRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/language', langRouter);
app.use('/api/content-rating', contentRatingRouter);

app.use(notFound);
app.use(errorHandler);