"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    mail: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    entry: { type: String, default: "entries" },
    likes: { type: Number, default: 0 },
    comments: { type: String, default: "hello" },
    joinDate: { type: Date, default: Date.now },
}, { versionKey: false });
exports.UserModel = mongoose_1.models.userSchema || (0, mongoose_1.model)("users", userSchema);
