import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


// 인증 미들웨어
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer 토큰 추출
    if (!token) {
        return res.status(401).json({ msg: 'No token provided' });
    }

    // 토큰 검증
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log('??', err)
            return res.status(403).json({ msg: 'Invalid token' });
        }

        req.user = decoded; // 토큰의 payload를 req.user에 저장
        next();
    });
};