import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

// Refresh API 응답 타입 정의
interface RefreshResponse {
    accessToken: string;
}

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4000', // API 기본 URL 설정
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token'); // accessToken 가져오기
        if (token) {
            headers.set('Authorization', `Bearer ${token}`); // Authorization 헤더 추가
        }
        return headers;
    },
});

// Base Query를 래핑하여 401 에러 처리
const baseQueryWithReauth : BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>= async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // accessToken이 만료된 경우 refreshToken으로 재발급 시도
        const refreshToken = localStorage.getItem('refreshToken'); // refreshToken 가져오기
        if (refreshToken) {
            // 새 accessToken 요청
            const refreshResult = await baseQuery(
                {
                    url: '/refresh',
                    method: 'POST',
                    body: { refreshToken },
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
                api.dispatch({ type: 'auth/logout' });
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

// API 생성
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
