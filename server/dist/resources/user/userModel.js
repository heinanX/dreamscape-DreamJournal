"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    mail: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    profilePicture: { type: String, default: '/profilePicture/monster.jpg' },
    entry: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "entries" }],
    likes: { type: Number, default: 0 },
    comments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "comments" }],
    joinDate: { type: Date, default: Date.now }
}, { versionKey: false });
exports.UserModel = mongoose_1.models.users || (0, mongoose_1.model)("users", userSchema);
