/**
 * API 응답 관련 타입 정의
 */

// 기본 API 응답 형태
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

// API 오류 객체 타입
export interface ApiError {
  code: string;
  message: string;
  status: number;
  timestamp?: string;
  path?: string;
  details?: Record<string, any>;
}

// 페이지네이션 요청 파라미터
export interface PaginationParams {
  page: number;
  size: number;
  sort?: string;
}

// 페이지네이션 응답 형태
export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
