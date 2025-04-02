import { authApi } from "@/api/auth/ApiAuth";
import { ApiLoginRequest, ApiRegisterRequest } from "@/api/auth/ApiAuth.type";
import { StateCreator } from "zustand";

// 사용자 정보 인터페이스
export interface User {
  id: number;
  username: string;
  role: string;
}

// 인증 상태 인터페이스
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// 인증 액션 인터페이스
export interface AuthActions {
  login: (data: ApiLoginRequest) => Promise<void>;
  register: (data: ApiRegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  isLoggedIn: boolean;
  username: string;
}

// 인증 슬라이스 인터페이스
export interface AuthSlice extends AuthState, AuthActions {}

// 인증 슬라이스 생성 함수
export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  username: "",

  login: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const response = await authApi.login(data);

      console.log("response", response);
      set({
        user: response.user,
        token: response.token,
        isAuthenticated: true,
        isLoggedIn: true,
        username: response.user.username,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "로그인 중 오류가 발생했습니다.",
        isLoading: false,
        isAuthenticated: false,
        isLoggedIn: false,
      });
    }
  },

  register: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const response = await authApi.register(data);
      set({
        user: response.user,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "회원가입 중 오류가 발생했습니다.",
        isLoading: false,
      });
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true, error: null });
      await authApi.logout();
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "로그아웃 중 오류가 발생했습니다.",
        isLoading: false,
      });
    }
  },

  clearError: () => set({ error: null }),
});
