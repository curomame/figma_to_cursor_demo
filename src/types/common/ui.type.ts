/**
 * UI 관련 공통 타입 정의
 */

// 테마 타입
export type ThemeType = "light" | "dark" | "system";

// 모달 상태 관리 타입
export interface ModalState {
  id: string;
  isOpen: boolean;
  data?: any;
}

// 토스트 메시지 타입
export interface ToastMessage {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  duration?: number;
}

// 레이아웃 타입
export type LayoutType = "default" | "fullWidth" | "minimal";

// 버튼 크기 타입
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

// 버튼 색상 타입
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";
