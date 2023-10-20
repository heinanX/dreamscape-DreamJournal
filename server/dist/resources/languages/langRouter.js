"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langRouter = void 0;
const express_1 = require("express");
const langController_1 = require("./langController");
const langModel_1 = require("../languages/langModel");
const validation_1 = require("../_middlewares/validation");
const checkAdmin_1 = require("../_middlewares/checkAdmin");
exports.langRouter = (0, express_1.Router)();
exports.langRouter.get('/', langController_1.getLanguages);
exports.langRouter.get('/:id', langController_1.getLanguage);
exports.langRouter.post('/create', checkAdmin_1.checkAdmin, (0, validation_1.validate)(langModel_1.languageJoiSchema), langController_1.createLanguage);
exports.langRouter.delete('/:id', checkAdmin_1.checkAdmin, langController_1.deleteLanguage);
