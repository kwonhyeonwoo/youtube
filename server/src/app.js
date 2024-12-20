import express from "express";
import "./models/Video.js";
import cors from "cors";
import "./db.js";
import morgan from "morgan";
import rootRouter from "./routes/rootRouter";
import videoRouter from "./routes/videoRouter";
import userRouter from "./routes/userRouter";
import dotenv from "dotenv";
import Auth from "./models/Auth.js";
dotenv.config();
import { authenticateToken, refresh,  } from "./authMiddleware.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))
app.use('/', rootRouter);
app.get('/refresh',refresh)
app.get('/user/me', authenticateToken, async (req, res) => {
    console.log('user')
    try {
        console.log('user')

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
