"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catRouter = void 0;
const express_1 = require("express");
const catController_1 = require("./catController");
const catMiddleware_1 = require("../../_middlewares/catMiddleware");
const catModel_1 = require("./catModel");
const validation_1 = require("../../_middlewares/validation");
exports.catRouter = (0, express_1.Router)();
exports.catRouter.get('/', catController_1.getCat);
exports.catRouter.post('/', (0, validation_1.validate)(catModel_1.catJoiSchema), catMiddleware_1.formatData, catController_1.createCategory);
