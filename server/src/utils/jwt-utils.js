import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '15s' });
};

export const generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '7d' });
};