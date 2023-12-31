import { Schema, model, models } from "mongoose";
import Joi from 'joi';

const catSchema = new Schema(
  {
    category: { type: String, require: true }
  },
  { versionKey: false }
);

export const catJoiSchema = Joi.object(
  {
    _id: Joi.string(),
    category: Joi.string().required()
  }
);

export const CatModel = models.categories || model("categories", catSchema);
