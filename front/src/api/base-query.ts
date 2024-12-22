import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

interface RefreshResponse {
    accessToken: string;
}
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4000', // API 기본 URL 설정
    prepareHeaders: (headers) => {
        const accessToken = localStorage.getItem('accessToken'); // accessToken 가져오기

        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`); // Authorization 헤더 추가
        }
        return headers;
    },
});

export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 403) {
        // accessToken이 만료된 경우 refreshToken으로 재발급 시도
        const refreshToken = localStorage.getItem('refreshToken'); // refreshToken 가져오기

        if (refreshToken) {
            // 새 accessToken 요청
            const refreshResult = await baseQuery(
                {
                    url: '/token',
                    method: 'POST',
                    body: { token: refreshToken },
                },
                api,
                extraOptions
            );

            const refreshData = refreshResult.data as RefreshResponse;
            if (refreshData?.accessToken) {
                // 새 accessToken 저장
                localStorage.setItem('accessToken', refreshData.accessToken);

                // 기존 요청을 새 accessToken으로 재시도
                result = await baseQuery(args, api, extraOptions);
            } else {
                // refreshToken도 만료된 경우 로그아웃 처리
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            }
        } else {
            // refreshToken이 없는 경우 로그아웃 처리
            api.dispatch({ type: 'auth/logout' });
        }
    }

    return result;
};
