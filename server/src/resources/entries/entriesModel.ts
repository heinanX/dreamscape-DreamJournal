import { Schema, model, models } from "mongoose";

const entriesSchema = new Schema(
  {
    title: { type: String, require: true },
    excerpt: { type: String, require: true },
    body: { type: String, require: true },
    author: { type: Schema.Types.ObjectId, ref: "users", required: true },
    categories: { type: String, require: true },
    publication_date: { type: Date, default: Date.now },
    comments: { type: String},
  },
  { versionKey: false }
);

export const EntriesModel = models.entries || model("entries", entriesSchema);
