import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
            })
        })
    })
});

export const { usePostAccountMutation, } = authApi;