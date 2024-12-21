import express from "express";
import "./models/Video.js";
import cors from "cors";
import "./db.js";
import jwt from "jsonwebtoken";

import morgan from "morgan";
import rootRouter from "./routes/rootRouter";
import videoRouter from "./routes/videoRouter";
import userRouter from "./routes/userRouter";
import dotenv from "dotenv";
import Auth from "./models/Auth.js";
import Refresh from "./models/Refresh.js";
dotenv.config();
import { authenticateToken, } from "./authMiddleware.js";
import { generateAccessToken } from "./utils/jwt-utils.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))
app.use('/', rootRouter);
// accessToken 재발급
app.post('/token', async (req, res) => {
    const { token } = req.body;
    const refresh = await Refresh.findOne({ token });

    if (!token) return res.status(401).json({ message: "토큰이 없습니다." });
    // DB에서 RefreshToken 확인
    if (!refresh.token) return res.status(403).json({
        message: "refresh token이 만료되었습니다."
    });

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({
            message: "에러"
        });

        const accessToken = generateAccessToken({ id: user.id });
        return res.status(200).json({ accessToken });
    });
});
app.get('/user/me', authenticateToken, async (req, res) => {
    try {

        const user = await Auth.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: '회원을 찾을 수 없습니다' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        if (error.name === 'CastError') {
            return res.status(400).json({ msg: '잘못된 사용자 ID입니다.' });
        }
        res.status(500).json({ msg: '서버 오류가 발생했습니다.' });
    }
});
app.use('/user', userRouter);
app.use('/video', videoRouter);

app.listen(4000, () => console.log('Server listening on port 4000'));
