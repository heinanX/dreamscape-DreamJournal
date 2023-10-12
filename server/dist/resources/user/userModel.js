"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.userJoiSchema = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
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
exports.userJoiSchema = joi_1.default.object({
    _id: joi_1.default.string(),
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    mail: joi_1.default.string().email({ minDomainSegments: 2 }).required(),
    isAdmin: joi_1.default.boolean(),
    profilePicture: joi_1.default.string(),
    entry: joi_1.default.array(),
    likes: joi_1.default.number(),
    comments: joi_1.default.array(),
    joinDate: joi_1.default.date()
});
exports.UserModel = mongoose_1.models.users || (0, mongoose_1.model)("users", userSchema);
