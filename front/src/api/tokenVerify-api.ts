import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './base-query';

export const verifyApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getUserProfile: builder.query({
            query: () => '/user/me', // 사용자 정보를 가져오는 엔드포인트
        }),
    }),
});
export const { useGetUserProfileQuery } = verifyApi;
