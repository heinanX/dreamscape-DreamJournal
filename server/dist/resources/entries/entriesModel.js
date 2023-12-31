"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesModel = exports.entriesJoiSchema = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
const entriesSchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    excerpt: { type: String, require: true },
    body: { type: String, require: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "users", required: true },
    categories: { type: mongoose_1.Schema.Types.ObjectId, ref: "categories", required: true },
    content_rating: { type: mongoose_1.Schema.Types.ObjectId, ref: "contentratings", required: true },
    publication_date: { type: Date, default: Date.now },
    last_updated: { type: Date, default: Date.now },
    likes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "users" }],
    comments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "comments" }],
    language: { type: mongoose_1.Schema.Types.ObjectId, ref: "languages", required: true }
});
exports.entriesJoiSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    excerpt: joi_1.default.string().required(),
    body: joi_1.default.string().required(),
    author: joi_1.default.string().required(),
    categories: joi_1.default.string().required(),
    content_rating: joi_1.default.string().required(),
    publication_date: joi_1.default.date(),
    last_updated: joi_1.default.date(),
    likes: joi_1.default.array(),
    comments: joi_1.default.array(),
    language: joi_1.default.string().required()
});
exports.EntriesModel = mongoose_1.models.entries || (0, mongoose_1.model)("entries", entriesSchema);
