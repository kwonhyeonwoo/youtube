import express from "express";
import { postUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.route('/').post(postUser);

export default userRouter;