import { Schema, model, models } from "mongoose";
import Joi from 'joi';

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

export const userJoiSchema = Joi.object(
  {
    _id: Joi.string(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    mail: Joi.string().email({ minDomainSegments: 2 }).required(),
    isAdmin: Joi.boolean(),
    profilePicture: Joi.string(),
    entry: Joi.array(),
    likes: Joi.number(),
    comments: Joi.array(),
    joinDate: Joi.date()
  }
);



export const UserModel = models.users || model("users", userSchema);
