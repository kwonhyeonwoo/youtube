import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    meta: {
        views: Number,
        rating: Number,
    }
});

const Video = mongoose.model('Vide', videoSchema);
export default Video;