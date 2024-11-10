import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.listen(4000, () => console.log('hello11111'))