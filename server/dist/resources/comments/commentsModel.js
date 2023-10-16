"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModel = exports.commentsJoiSchema = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
const commentsSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "users", default: null, required: true },
    entry: { type: mongoose_1.Schema.Types.ObjectId, ref: "entries", required: true },
    body: { type: String, required: true }
}, { versionKey: false });
exports.commentsJoiSchema = joi_1.default.object({
    _id: joi_1.default.string(),
    user: joi_1.default.string().required(),
    entry: joi_1.default.string(),
    body: joi_1.default.string().required()
});
exports.CommentsModel = mongoose_1.models.comments || (0, mongoose_1.model)('comments', commentsSchema);
