import { Schema, model, models } from "mongoose";
import Joi from 'joi';

const dreamsSchema = new Schema(
    {
        // user: { type: Schema.Types.ObjectId, ref: "users", required: true },
        entry: { type: Schema.Types.ObjectId, ref: "entries", required: true },
        publication_date: { type: Date, default: Date.now },
        updated: { type: Date, default: Date.now },
        likes: [{ type: Schema.Types.ObjectId, ref: "users" }],
        comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
    }
);

export const dreamsJoiSchema = Joi.object(
    {
        // user: Joi.string().required(),
        entry: Joi.string(),
        publication_date: Joi.date(),
        updated: Joi.date(),
        likes: Joi.array(),
        comments: Joi.array(),
    }
);

export const DreamsModel = models.dreams || model('dreams', dreamsSchema);