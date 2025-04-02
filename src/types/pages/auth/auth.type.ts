/**
 * 인증 관련 타입 정의
 */

// 사용자 인증 정보
export interface AuthUser {
  id: number;
  username: string;
  email?: string;
  name?: string;
  roles: string[];
  permissions?: string[];
}

// 비밀번호 변경 요청 타입
export interface PasswordChangeRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// 인증 상태 타입
export interface AuthState {
  isLoggedIn: boolean;
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}
