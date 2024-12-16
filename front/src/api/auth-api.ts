import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginType } from 'user';

export const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
    endpoints: (builder) => ({
        postAccount: builder.mutation({
            query: ({ email, nickName, password }) => ({
                url: "/user",
                method: "POST",
                body: {
                    email,
                    nickName,
                    password
                }
            }),
        }),
        postLogin: builder.mutation({
            query: ({ email, password }: LoginType) => ({
                url: '/user/login',
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    email,
                    password
                }
            })
        })
    }),
});

export const { usePostAccountMutation, usePostLoginMutation } = authApi;