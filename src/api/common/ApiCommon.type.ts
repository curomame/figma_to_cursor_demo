/**
 * API 응답의 기본 구조를 정의하는 타입
 */

// API 응답의 기본 구조
export interface BaseApiResponse<T> {
  data: T;
  meta?: {
    message?: string;
    timestamp?: string;
    pagination?: {
      currentPage: number;
      lastPage: number;
      total: number;
      perPage: number;
    };
  };
}

// API 요청의 기본 구조
export interface BaseApiRequest {
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// API 요청 파라미터
export interface ApiRequestParams extends BaseApiRequest {
  [key: string]: any;
}

// 에러 응답
export interface ApiErrorResponse {
  error: {
    message: string;
    code: string;
    status: number;
    details?: Record<string, any>;
  };
}
