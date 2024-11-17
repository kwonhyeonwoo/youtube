import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const authSchema = mongoose.Schema({
    email: { type: String, required: true },
    nickName: { type: String, required: true },
    password: { type: String, required: true }
});


const Auth = mongoose.model("Auth", authSchema);
export default Auth;