"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DreamsModel = exports.dreamsJoiSchema = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
const dreamsSchema = new mongoose_1.Schema({
    // user: { type: Schema.Types.ObjectId, ref: "users", required: true },
    entry: { type: mongoose_1.Schema.Types.ObjectId, ref: "entries", required: true },
    publication_date: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    likes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "users" }],
    comments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "comments" }],
});
exports.dreamsJoiSchema = joi_1.default.object({
    // user: Joi.string().required(),
    entry: joi_1.default.string(),
    publication_date: joi_1.default.date(),
    updated: joi_1.default.date(),
    likes: joi_1.default.array(),
    comments: joi_1.default.array(),
});
exports.DreamsModel = mongoose_1.models.dreams || (0, mongoose_1.model)('dreams', dreamsSchema);
