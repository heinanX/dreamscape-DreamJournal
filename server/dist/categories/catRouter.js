"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catRouter = void 0;
const express_1 = require("express");
const catController_1 = require("./catController");
exports.catRouter = (0, express_1.Router)();
exports.catRouter.post('/', catController_1.createCategory);
