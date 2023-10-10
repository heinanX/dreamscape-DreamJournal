import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
    mail: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    entry: { type: String, default: "entries" },
    likes: { type: Number, default: 0 },
    comments: { type: String, default: "hello" },
    joinDate: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export const UserModel = models.userSchema || model("users", userSchema);
