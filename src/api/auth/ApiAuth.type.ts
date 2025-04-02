import { AuthUser } from "@/types/pages/auth/auth.type";
import { BaseApiRequest } from "../common/ApiCommon.type";

export interface ApiUser {
  id: number;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiLoginRequest extends BaseApiRequest {
  username: string;
  password: string;
}

export interface ApiLoginResponse {
  token: string;
  user: ApiUser;
}

export interface ApiRegisterRequest extends BaseApiRequest {
  username: string;
  password: string;
  email: string;
}

export interface ApiRegisterResponse {
  user: ApiUser;
}

export interface ApiLogoutResponse {
  message: string;
}

export interface ApiRefreshTokenResponse {
  token: string;
}

// 로그인 요청 타입
export interface LoginRequest {
  username: string;
  password: string;
  remember?: boolean;
}

// 로그인 응답 타입
export interface LoginResponse {
  token: string;
  refreshToken?: string;
  expiresIn: number;
  user: AuthUser;
}

// 회원가입 요청 타입
export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
  agreeToTerms: boolean;
}
