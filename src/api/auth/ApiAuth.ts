import { apiClient } from "../axios";
import {
  ApiLoginRequest,
  ApiLoginResponse,
  ApiRegisterRequest,
  ApiRegisterResponse,
  ApiLogoutResponse,
  ApiRefreshTokenResponse,
} from "./ApiAuth.type";

// API 엔드포인트 정의
const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  REFRESH: "/auth/refresh",
} as const;

// 인증 관련 API 함수
export const authApi = {
  // 로그인
  login: (data: ApiLoginRequest) => {
    // return apiClient.post<ApiLoginResponse>(AUTH_ENDPOINTS.LOGIN, data);
    return {
      user: {
        id: 1,
        username: "sample",
        email: "sample@sample.com",
      },
      token: "sample",
    } as ApiLoginResponse;
  },

  // 회원가입
  register: (data: ApiRegisterRequest) => {
    return apiClient.post<ApiRegisterResponse>(AUTH_ENDPOINTS.REGISTER, data);
  },

  // 로그아웃
  logout: () => {
    return apiClient.post<ApiLogoutResponse>(AUTH_ENDPOINTS.LOGOUT);
  },

  // 토큰 갱신
  refreshToken: () => {
    return apiClient.post<ApiRefreshTokenResponse>(AUTH_ENDPOINTS.REFRESH);
  },
};
