"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryRouter = void 0;
const express_1 = require("express");
const entriesController_1 = require("./entriesController");
//import { formatData } from '../_middlewares/catMiddleware';
exports.entryRouter = (0, express_1.Router)();
exports.entryRouter.post('/', entriesController_1.createEntries);
