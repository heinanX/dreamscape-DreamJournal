import { Schema, model, models } from "mongoose";
import Joi from 'joi';

const entriesSchema = new Schema(
  {
    title: { type: String, require: true },
    excerpt: { type: String, require: true },
    body: { type: String, require: true },
    author: { type: Schema.Types.ObjectId, ref: "users", required: true },
    categories: {  type: Schema.Types.ObjectId, ref: "categories", required: true},
    publication_date: { type: Date, default: Date.now },
    comments: { type: String, default:'default here'},
    language: { type: Schema.Types.ObjectId, ref: "languages", required: true}
  },
  { versionKey: false }
);

export const entriesJoiSchema = Joi.object(
  {
    title: Joi.string().required(),
    excerpt: Joi.string().required(),
    body: Joi.string().required(),
    author: Joi.string().required(),
    categories: Joi.string().required(),
    publication_date: Joi.date(),
    comments: Joi.string(),
    language: Joi.string().required()
  }
);

export const EntriesModel = models.entries || model("entries", entriesSchema);
