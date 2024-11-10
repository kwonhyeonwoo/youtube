import express from "express";
import "./db.js";

import morgan from "morgan";
import rootRouter from "./routes/rootRouter";
import videoRouter from "./routes/videoRouter";
import userRouter from "./routes/userRouter";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use('/', rootRouter);
app.use('/video', videoRouter);
app.use('/user', userRouter);

app.listen(4000, () => console.log('Server listening on port 4000'));
