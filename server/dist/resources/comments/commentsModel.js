"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModel = void 0;
const mongoose_1 = require("mongoose");
const commentsSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "users", default: null, required: true },
    body: { type: String, required: true }
}, { versionKey: false });
exports.CommentsModel = mongoose_1.models.comments || (0, mongoose_1.model)('comments', commentsSchema);
