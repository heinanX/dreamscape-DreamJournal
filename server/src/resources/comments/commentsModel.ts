import { Schema, model, models } from 'mongoose';
import Joi from 'joi';

const commentsSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "users", default: null, required: true },
        entry: { type: Schema.Types.ObjectId, ref: "entries", required: true },
        body: { type: String, required: true}
    },
    {versionKey: false}
);

export const commentsJoiSchema = Joi.object(
    {
        _id: Joi.string(),
        user: Joi.string().required(),
        entry: Joi.string(),
        body: Joi.string().required()
    }
);

export const CommentsModel = models.comments || model('comments', commentsSchema);