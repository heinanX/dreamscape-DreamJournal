import { Schema, model, models } from "mongoose";
import Joi from 'joi';

const entriesSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    body: { type: String, require: true },
    user: { type: Schema.Types.ObjectId, ref: "users", required: true },
    categories: {  type: Schema.Types.ObjectId, ref: "categories", required: true},
    content_rating: { type: Schema.Types.ObjectId, ref: "contentratings", required: true},
    language: { type: Schema.Types.ObjectId, ref: "languages", required: true}
  }
);

export const entriesJoiSchema = Joi.object(
  {
    title: Joi.string().required(),
    description: Joi.string().required(),
    body: Joi.string().required(),
    user: Joi.string().required(),
    categories: Joi.string().required(),
    content_rating: Joi.string().required(),
    language: Joi.string().required()
  }
);

export const EntriesModel = models.entries || model("entries", entriesSchema);
