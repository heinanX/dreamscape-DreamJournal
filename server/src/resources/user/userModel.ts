import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
    mail: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    profilePicture: {type: String, default: '/profilePicture/monster.jpg'},
    entry: [{ type: Schema.Types.ObjectId, ref: "entries" }],
    likes: { type: Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
    joinDate: { type: Date, default: Date.now }
    
  },
  { versionKey: false }
);

export const UserModel = models.users || model("users", userSchema);
