"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("./userController");
const userModel_1 = require("./userModel");
const shared_1 = require("../../_middlewares/shared");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/', (0, shared_1.validate)(userModel_1.userJoiSchema), userController_1.createUser);
