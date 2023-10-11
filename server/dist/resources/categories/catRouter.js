"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catRouter = void 0;
const express_1 = require("express");
const catController_1 = require("./catController");
const catMiddleware_1 = require("../../_middlewares/catMiddleware");
exports.catRouter = (0, express_1.Router)();
exports.catRouter.post('/', catMiddleware_1.formatData, catController_1.createCategory);
