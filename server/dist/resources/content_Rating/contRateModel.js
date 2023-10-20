"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentRatingModel = exports.contentRatingJoiSchema = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
const contentRatingSchema = new mongoose_1.Schema({
    rating: { type: String, default: 'PG' }
}, { versionKey: false });
exports.contentRatingJoiSchema = joi_1.default.object({
    _id: joi_1.default.string(),
    rating: joi_1.default.string()
});
exports.contentRatingModel = mongoose_1.models.contentrating || (0, mongoose_1.model)('contentrating', contentRatingSchema);
