import express from "express";
import "./models/Video.js";
import cors from "cors";
import "./db.js";
import morgan from "morgan";
import rootRouter from "./routes/rootRouter";
import videoRouter from "./routes/videoRouter";
import userRouter from "./routes/userRouter";
import dotenv from "dotenv";
dotenv.config();
import { jwtToken } from "./authMiddleware.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))
app.use('/', rootRouter);
app.get("/payload", jwtToken, (req, res) => {
    const email = req.decoded.email;
    console.log('sucess')
    return res.status(200).json({
        code: 200,
        message: "토큰이 정상입니다.",
        data: {
            email
        },
    });
});
app.use('/user', userRouter);
app.use('/video', videoRouter);

app.listen(4000, () => console.log('Server listening on port 4000'));
