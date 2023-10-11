"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const express_1 = require("express");
const commentsController_1 = require("./commentsController");
exports.commentsRouter = (0, express_1.Router)();
exports.commentsRouter.post('/', commentsController_1.createComment);
