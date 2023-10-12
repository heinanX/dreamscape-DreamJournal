"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModel = void 0;
const mongoose_1 = require("mongoose");
const languageSchema = new mongoose_1.Schema({
    language: { type: String, required: true }
}, { versionKey: false });
exports.LanguageModel = mongoose_1.models.users || (0, mongoose_1.model)('language', languageSchema);
