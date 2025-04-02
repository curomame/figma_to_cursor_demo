/**
 * 환경 변수와 설정을 관리하는 모듈
 * Vite의 환경 변수는 import.meta.env로 접근 가능합니다.
 */

// API 기본 URL
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

// 환경 정보
export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  NODE_ENV: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,

  // API 타임아웃 (ms)
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || "10000", 10),

  // 로컬 스토리지 키
  STORAGE_KEYS: {
    AUTH_TOKEN: "auth-token",
    AUTH_STATE: "auth-storage",
    USER_PREFERENCES: "user-preferences",
  },

  // 인증 설정
  AUTH: {
    TOKEN_HEADER: "Authorization",
    TOKEN_PREFIX: "Bearer",
  },
};

// 기능 플래그 (Feature flags)
export const FEATURES = {
  // 예: 'dark_mode', 'new_dashboard' 등
  ENABLE_DARK_MODE: import.meta.env.VITE_ENABLE_DARK_MODE === "true",
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
  MAINTENANCE_MODE: import.meta.env.VITE_MAINTENANCE_MODE === "true",
};

export default {
  API_BASE_URL,
  ENV,
  FEATURES,
};
