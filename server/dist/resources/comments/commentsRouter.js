"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const express_1 = require("express");
const commentsController_1 = require("./commentsController");
exports.commentsRouter = (0, express_1.Router)();
const shared_1 = require("../../_middlewares/shared");
const commentsModel_1 = require("./commentsModel");
exports.commentsRouter.post('/', (0, shared_1.validate)(commentsModel_1.commentsJoiSchema), commentsController_1.createComment);
