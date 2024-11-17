import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    hashtags: [{ type: String }],
    meta: {
        views: Number,
        rating: Number,
    }
});

const Video = mongoose.model('Vide', videoSchema);
export default Video;