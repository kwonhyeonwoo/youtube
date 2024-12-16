import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const verifyApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000', // API 기본 URL 설정
        prepareHeaders: (headers, { getState }) => {
            // Redux state에서 토큰 가져오기 (또는 localStorage 사용 가능)
            const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰 가져오기
            if (token) {
                headers.set('Authorization', `Bearer ${token}`); // Authorization 헤더 추가
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUserProfile: builder.query({
            query: () => '/user/me', // 사용자 정보를 가져오는 엔드포인트
        }),
    }),
});

export const { useGetUserProfileQuery } = verifyApi;
