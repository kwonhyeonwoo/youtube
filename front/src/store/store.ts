import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/auth";
import { authApi } from "../api/auth-api";

const store = configureStore({
    reducer: {
        // auth: AuthReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDetaultMiddleware) =>
        getDetaultMiddleware().concat(authApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;