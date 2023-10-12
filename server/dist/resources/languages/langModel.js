"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModel = exports.languageJoiSchema = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
const languageSchema = new mongoose_1.Schema({
    language: { type: String, required: true },
}, { versionKey: false });
exports.languageJoiSchema = joi_1.default.object({
    _id: joi_1.default.string(),
    language: joi_1.default.string().required(),
});
exports.LanguageModel = mongoose_1.models.languages || (0, mongoose_1.model)("languages", languageSchema);
