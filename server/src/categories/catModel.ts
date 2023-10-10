import { Schema, model, models } from "mongoose";

const catSchema = new Schema(
  {
    category: { type: String, require: true }
  },
  { versionKey: false }
);

export const CatModel = models.catSchema || model("categories", catSchema);
