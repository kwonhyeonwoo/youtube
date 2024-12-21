import mongoose from "mongoose";

const RefreshSchema = mongoose.Schema({
    userId: { type: String, required: true },
    token: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: {
        type: Date,
        default: function () {
            return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7일 후 자동 설정
        },
    }, // 토큰 만료시간
});

const Refresh = mongoose.model("Refresh", RefreshSchema);

export default Refresh;