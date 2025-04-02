import { create } from "zustand";
import { createAuthSlice, AuthSlice } from "./slices/authSlice";
import { persist, createJSONStorage } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

// 루트 스토어 인터페이스 (모든 슬라이스 통합)
export interface RootState extends AuthSlice {}

// 루트 스토어 생성
export const useStore = create<RootState>()(
  persist(
    (set, get, api) => ({
      ...createAuthSlice(set, get, api),
    }),
    {
      name: "root-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        // 저장할 상태만 지정
        isLoggedIn: state.isLoggedIn,
        username: state.username,
        token: state.token,
        user: state.user,
      }),
    },
  ),
);

// 각 슬라이스에 대한 선택자 함수 (성능 최적화를 위해)
export const useAuthStore = () => {
  return useStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      username: state.username,
      token: state.token,
      user: state.user,
      error: state.error,
      isLoading: state.isLoading,
      login: state.login,
      logout: state.logout,
      clearError: state.clearError,
    })),
  );
};

// 기본 스토어 내보내기
export default useStore;
