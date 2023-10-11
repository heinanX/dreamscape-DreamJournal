"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryModel = void 0;
const mongoose_1 = require("mongoose");
const entrySchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    excerpt: { type: String, require: true },
    body: { type: String, require: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    categories: { type: String, require: true },
    publication_date: { type: Date, default: Date.now },
    comments: { type: String },
}, { versionKey: false });
exports.EntryModel = mongoose_1.models.entrySchema || (0, mongoose_1.model)("entries", entrySchema);
