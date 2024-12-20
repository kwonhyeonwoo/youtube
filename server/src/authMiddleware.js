import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { refreshVerify, sign, verify } from "./utils/jwt-utils";

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
            console.log('??',err)
            return res.status(403).json({ msg: 'Invalid token' });
        }

        req.user = decoded; // 토큰의 payload를 req.user에 저장
        next();
    });
};


export const refresh = async (req, res) => {
  // access token과 refresh token의 존재 유무를 체크합니다.
  if (req.headers.authorization && req.headers.refresh) {
    const authToken = req.headers.authorization.split('Bearer ')[1];
    const refreshToken = req.headers.refresh;
    console.log('hello')
    // access token 검증 -> expired여야 함.
    const authResult = verify(authToken);

    const decoded = jwt.decode(authToken);
	
    if (decoded === null) {
      res.status(401).send({
        ok: false,
        message: 'No authorized!',
      });
    }
	
    /* access token의 decoding 된 값에서
      유저의 id를 가져와 refresh token을 검증. */
    const refreshResult = refreshVerify(refreshToken, decoded.id);

    // 재발급을 위해서는 access token이 만료되어 있어야합니다.
    if (authResult.ok === false && authResult.message === 'jwt expired') {
      // access token이 만료되고, refresh token도 만료 된 경우 => 새로 로그인
      if (refreshResult.ok === false) {
        res.status(401).send({
          ok: false,
          message: 'No authorized!',
        });
      } else {
        //  access token이 만료되고, refresh token은 만료되지 않은 경우 => 새로운 access token을 발급
        const newAccessToken = sign(user);

        res.status(200).send({ // 새로 발급한 access token과 원래 있던 refresh token 모두 클라이언트에게 반환.
          ok: true,
          data: {
            accessToken: newAccessToken,
            refreshToken,
          },
        });
      }
    } else {
      // access token이 만료되지 않은경우 => refresh 할 필요가 없
      res.status(400).send({
        ok: false,
        message: 'Acess token is not expired!',
      });
    }
  } else { // access token 또는 refresh token이 헤더에 없는 경우
    res.status(400).send({
      ok: false,
      message: 'Access token and refresh token are need for refresh!',
    });
  }
};
