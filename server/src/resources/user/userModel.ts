import { Schema, model, models } from "mongoose";
import Joi, { boolean } from 'joi';

const userSchema = new Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
    mail: { type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    profilePicture: {type: String, default: '/profilePicture/monster.jpg'},
    entry: [{ type: Schema.Types.ObjectId, ref: "entries" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "entries"}],
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
    joinDate: { type: Date, default: Date.now },
    isOnline: {type: Boolean, default: false}
    
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
    joinDate: Joi.date(),
    isOnline: Joi.boolean()
  }
);



export const UserModel = models.users || model("users", userSchema);
