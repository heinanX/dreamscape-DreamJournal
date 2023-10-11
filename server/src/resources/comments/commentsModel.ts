import { Schema, model, models } from 'mongoose';

const commentsSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "users", default: null, required: true },
        body: { type: String, required: true}
    },
    {versionKey: false}
);

export const CommentsModel = models.comments || model('comments', commentsSchema);