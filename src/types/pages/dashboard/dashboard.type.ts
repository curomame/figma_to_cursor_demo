/**
 * 대시보드 페이지 관련 타입 정의
 */

// 사용자 데이터 타입
export interface UserData {
  id: number;
  name: string;
  email: string;
  joinDate: string;
  status: "active" | "inactive" | "suspended";
}

// 활동 데이터 항목 타입
export interface ActivityItem {
  id: number;
  action: string;
  timestamp: string;
  details: string;
  user: string;
}

// 대시보드 카드 타입
export interface DashboardCard {
  id: string;
  title: string;
  value: number | string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: string;
}

// 차트 데이터 타입
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}
