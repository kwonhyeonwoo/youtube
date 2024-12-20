import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export function sign(user){
    const payload = {
        id:user._id,
        role:user.role
    };
    return jwt.sign(payload,process.env.SECRET_KEY,{
        algorithm:"HS256",
        expiresIn:"30s"
    })
};

// access token 검증
export function verify(token){
    let decoded = null;
    try{    
        decoded = jwt.verify(token,process.env.SECRET_KEY);
        return{
            ok:true,
            id:decoded.id,
            role:decoded.role
        }
    }catch(err){
        return {
            ok:false,
            message:err.message
        }
    }
};


// refresh token 발급
export function refresh(){
    return jwt.sign({},process.env.SECRET_KEY,{
        algorithm:"HS256",
        expiresIn:"14d"
    })
};

// refresh token 검증
export async function refreshVerify(token,userId){
   const getAsync = promisify(redisClient.get).bind(redisClient);

  try {
    const storedToken = await getAsync(userId);
    if (token === storedToken) {
      try {
        jwt.verify(token, process.env.SECRET_KEY);
        return true;
      } catch (err) {
        console.error('Token verification failed:', err.message);
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    console.error('Redis operation failed:', err.message);
    return false;
  }
}