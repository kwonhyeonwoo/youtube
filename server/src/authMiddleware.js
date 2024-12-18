import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const jwtToken = (req, res, next) => {
    const key = process.env.SECRET_KEY;
    // 인증 완료
    try {
        // 요청 헤더에 저장된 토큰(req.headers.authorization)과 비밀키를 사용하여 토큰을 req.decoded에 반환
        req.decoded = jwt.verify(req.headers.authorization, key);
        return next();
    } catch (error) {
        // 인증 실패
        // 유효시간이 초과된 경우
        if (error.name === "TokenExpiredError") {
            return res.status(419).json({
                code: 419,
                message: "토큰이 만료되었습니다.",
            });
        }
        // 토큰의 비밀키가 일치하지 않는 경우
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                code: 401,
                message: "유효하지 않은 토큰입니다.",
            });
        }
    }
};


// 인증 미들웨어
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer 토큰 추출
    console.log(token)
    if (!token) {
        return res.status(401).json({ msg: 'No token provided' });
    }

    // 토큰 검증
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ msg: 'Invalid token' });
        }

        req.user = decoded; // 토큰의 payload를 req.user에 저장
        console.log('decoded', req.user)
        next();
    });
};