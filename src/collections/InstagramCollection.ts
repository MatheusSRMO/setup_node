import { InferSchemaType, Schema } from "mongoose";
import mongoose from "../config/database";

const InstagramSchema = new Schema({
    id: { type: String, required: true },
    username: { type: String, required: true },
    profile_picture: { type: String, required: true },
    full_name: { type: String, required: true },
    bio: { type: String, required: true },
    website: { type: String, required: true },
    is_business: { type: Boolean, required: true },
    media: { type: Array, required: true },
    followers: { type: Number, required: true },
    following: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const InstagramCollection = mongoose.model('Instagram', InstagramSchema);

export default InstagramCollection;
export type Instagram = InferSchemaType<typeof InstagramSchema>;
