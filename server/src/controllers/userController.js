import express from "express";
import bcrypt from "bcryptjs";
import Auth from "../models/Auth";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const userController = express();

export const getUser = userController.get('/', (req, res) => { console.log('ggg') });


export const postAccount = async (req, res) => {
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
};

export const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const key = process.env.SECRET_KEY;

        const auth = await Auth.findOne({ email });
        const isMatch = await bcrypt.compare(password, auth.password);
        if (!isMatch || email !== auth.email) {
            console.log('여기')
            return res.status(400).json({
                state: false,
                msg: "이메일 또는 비밀번호가 틀립니다."
            });
        };
        let token = "";
        token = jwt.sign(
            {
                type: "JWT",
                email,
                id: auth._id,
            },
            key,
            {
                expiresIn: "15m", // 15분후 만료
                issuer: "토큰발급자",
            }
        );
        return res.status(200).json({
            state: true,
            msg: "로그인 성공",
            token,
        })
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
