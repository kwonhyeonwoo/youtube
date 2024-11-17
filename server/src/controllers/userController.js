import express from "express";
import bcrypt from "bcryptjs";
import Auth from "../models/Auth";
const userController = express();

export const getUser = userController.get('/', (req, res) => { console.log('ggg') });


export const postUser = async (req, res) => {
    const { email, nickName, password } = req.body;
    if (!email || !nickName || !password) {
        return res.status(400).json({
            state: false,
            msg: "올바른 양식으로 보내주십시오."
        })
    };
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        await Auth.create({
            email,
            nickName,
            password: hashPassword,
        });

        return res.json({
            state: true,
            msg: "회원가입을 성공 하였습니다"
        })

    } catch (error) {
        return res.status(500).json({
            state: false,
            msg: "네트워크 오류 입니다."
        })
    }
}
