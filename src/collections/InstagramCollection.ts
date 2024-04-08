import { InferSchemaType, Schema } from "mongoose";
import mongoose from "../config/database";

const InstagramSchema = new Schema({
    account: String,
    userName: String,
    followersAtPosting: Number,
    postCreated: Date,
    postCreatedDate: Date,
    postCreatedTime: String,
    type: String,
    totalInteractions: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    likeAndViewCountsDisabled: Boolean,
    url: String,
    link: String,
    photo: String,
    title: String,
    description: String,
    imageText: String,
    sponsorId: String,
    sponsorName: String,
    totalInteractionsWeighted: {
        type: Number,
        default: 0
    },
    overperformingScore: {
        type: Number,
        default: 0
    }
});

const InstagramCollection = mongoose.model('Instagram', InstagramSchema);

export default InstagramCollection;
export type Instagram = InferSchemaType<typeof InstagramSchema>;
