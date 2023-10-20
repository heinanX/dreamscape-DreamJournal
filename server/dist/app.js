"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const entriesRouter_1 = require("./resources/entries/entriesRouter");
const userRouter_1 = require("./resources/user/userRouter");
const catRouter_1 = require("./resources/categories/catRouter");
const commentsRouter_1 = require("./resources/comments/commentsRouter");
const langRouter_1 = require("./resources/languages/langRouter");
const envSecret = process.env.COOKIE_SESSION_KEY;
if (!envSecret) {
    throw new Error('The COOKIE_SESSION_KEY environment variable is not defined.');
}
exports.app = (0, express_1.default)();
exports.app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: [envSecret],
    sameSite: "strict",
    httpOnly: true,
    secure: false,
    maxAge: 36 * 60 * 60 * 1000
}));
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.static('public'));
exports.app.use('/api/users', userRouter_1.userRouter);
exports.app.use('/api/categories', catRouter_1.catRouter);
exports.app.use('/api/entries', entriesRouter_1.entryRouter);
exports.app.use('/api/comments', commentsRouter_1.commentsRouter);
exports.app.use('/api/language', langRouter_1.langRouter);
