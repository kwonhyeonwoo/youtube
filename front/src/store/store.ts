import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/auth";
import { authApi } from "../api/auth-api";
import { verifyApi } from "../api/tokenVerify-api";

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        [authApi.reducerPath]: authApi.reducer,
        [verifyApi.reducerPath]: verifyApi.reducer,
    },
    middleware: (getDetaultMiddleware) =>
        getDetaultMiddleware()
            .concat(authApi.middleware)
            .concat(verifyApi.middleware)
    ,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;