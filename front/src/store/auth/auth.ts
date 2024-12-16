import { createSlice } from "@reduxjs/toolkit";
type StateProps = {
    uid: string;
}
const initialState: StateProps = {
    uid: "",
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SetUid: (state, action) => {
            state.uid = action.payload;
        }
    }
});
export const { SetUid } = authSlice.actions
export default authSlice.reducer;