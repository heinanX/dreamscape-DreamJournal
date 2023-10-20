"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const express_1 = require("express");
const commentsController_1 = require("./commentsController");
exports.commentsRouter = (0, express_1.Router)();
const validation_1 = require("../../_middlewares/validation");
const commentsModel_1 = require("./commentsModel");
exports.commentsRouter.get('/', commentsController_1.getComments);
exports.commentsRouter.get('/:id', commentsController_1.getComment);
exports.commentsRouter.post('/', (0, validation_1.validate)(commentsModel_1.commentsJoiSchema), commentsController_1.createComment);
