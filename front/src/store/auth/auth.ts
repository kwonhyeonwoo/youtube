import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "user";
type StateProps = {
    user:Auth;
}
const initialState: StateProps = {
    user:{
        email:"",
        profile:"",
        uid: "",
        nickName:""
    }
}
const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SetUser:(state,action)=>{
            state.user = action.payload;
        }
    }
});
export const { SetUser } = authReducer.actions
export default authReducer.reducer;