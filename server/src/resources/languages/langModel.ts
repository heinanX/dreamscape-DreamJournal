import { model, models, Schema } from "mongoose";
import Joi from 'joi';

const languageSchema = new Schema(
  {
    language: { type: String, required: true },
  },
  { versionKey: false }
);

export const languageJoiSchema = Joi.object(
  {
      _id: Joi.string(),
      language: Joi.string().required(),
  }
);


export const LanguageModel = models.languages || model("languages", languageSchema);
