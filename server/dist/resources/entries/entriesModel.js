"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesModel = void 0;
const mongoose_1 = require("mongoose");
const entriesSchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    excerpt: { type: String, require: true },
    body: { type: String, require: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "users", required: true },
    categories: { type: String, require: true },
    publication_date: { type: Date, default: Date.now },
    comments: { type: String },
    langauge: { type: mongoose_1.Schema.Types.ObjectId, ref: "languages", required: true }
}, { versionKey: false });
exports.EntriesModel = mongoose_1.models.entries || (0, mongoose_1.model)("entries", entriesSchema);
