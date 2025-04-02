import axios from "axios";

// API 오류 유형 정의
export interface ApiError {
  status: number;
  message: string;
  code?: string;
  details?: any;
}

// API 기본 설정
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 인증 오류 처리
      localStorage.removeItem("auth-token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// HTTP 메서드 헬퍼 함수
export const apiClient = {
  // GET 요청
  get: <T>(url: string, params?: any): Promise<T> => {
    return api.get<T>(url, { params }).then((response) => response.data);
  },

  // POST 요청
  post: <T>(url: string, data?: any): Promise<T> => {
    return api.post<T>(url, data).then((response) => response.data);
  },
};

export default apiClient;
