"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryRouter = void 0;
const express_1 = require("express");
const entriesController_1 = require("./entriesController");
const shared_1 = require("../../_middlewares/shared");
const entriesModel_1 = require("./entriesModel");
exports.entryRouter = (0, express_1.Router)();
exports.entryRouter.post('/', (0, shared_1.validate)(entriesModel_1.entriesJoiSchema), entriesController_1.createEntries);
