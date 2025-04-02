import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/rootStore";
import SystemOverviewCard from "./components/SystemOverviewCard";
import UserInfoCard from "./components/UserInfoCard";
import ActivitySummaryTable from "./components/ActivitySummaryTable";
import { ActivityItem } from "../../types/pages/dashboard/dashboard.type";

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuthStore();

  // 임시 데이터
  const uptime = "5일 3시간 27분";
  const status = "정상 작동 중";
  const username = user?.username || "사용자";
  const role = user?.role || "관리자";
  const lastLogin = "2023-12-25 08:30:22";

  // 활동 내역 샘플 데이터
  const activityData: ActivityItem[] = [
    {
      id: 1,
      action: "로그인",
      timestamp: "2023-12-25 08:30:22",
      details: "IP: 192.168.1.1",
      user: username,
    },
    {
      id: 2,
      action: "데이터 수정",
      timestamp: "2023-12-24 15:45:30",
      details: "사용자 설정 업데이트",
      user: username,
    },
    {
      id: 3,
      action: "보고서 다운로드",
      timestamp: "2023-12-23 11:22:15",
      details: "월간 보고서",
      user: username,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">대시보드</h1>
        <Link
          to=""
          onClick={logout}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
        >
          로그아웃
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <SystemOverviewCard uptime={uptime} status={status} />
        <UserInfoCard username={username} role={role} lastLogin={lastLogin} />
      </div>

      <ActivitySummaryTable activities={activityData} />
    </div>
  );
};

export default DashboardPage;
