import { Schema, model, models } from 'mongoose';
import Joi from 'joi';

const contentRatingSchema = new Schema(
    {
        rating: { type: String, default: 'PG'}
    },
    {versionKey: false}
)

export const contentRatingJoiSchema = Joi.object(
    {
        _id: Joi.string(),
        rating: Joi.string()
    }
)

export const contentRatingModel = models.contentratings || model('contentratings', contentRatingSchema);