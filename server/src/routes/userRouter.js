import express from "express";
import { postAccount, postLogin } from "../controllers/userController";
const userRouter = express.Router();

userRouter.route('/').post(postAccount);
userRouter.post('/login', postLogin)

export default userRouter;