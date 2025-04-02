export const MESSAGES = {
  ERROR: {
    DEFAULT: "알 수 없는 오류가 발생했습니다.",
    NETWORK: "네트워크 오류가 발생했습니다.",
    UNAUTHORIZED: "인증되지 않은 사용자입니다.",
    FORBIDDEN: "접근 권한이 없습니다.",
    NOT_FOUND: "요청한 리소스를 찾을 수 없습니다.",
    SERVER: "서버 오류가 발생했습니다.",
  },
  SUCCESS: {
    LOGIN: "로그인되었습니다.",
    LOGOUT: "로그아웃되었습니다.",
    SAVE: "저장되었습니다.",
    DELETE: "삭제되었습니다.",
  },
} as const;
