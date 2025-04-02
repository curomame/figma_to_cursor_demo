import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/layout/ProtectedRoute";

// 페이지 컴포넌트들
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/login/LoginPage";
import SamplePage from "../pages/sample-page/SamplePage";
import NotFoundPage from "../pages/not-found/NotFoundPage";

export const AppRouter = () => {
  return (
    <Routes>
      {/* 공개 라우트 */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sample" element={<SamplePage />} />

      {/* 보호된 라우트 - 인증 필요 */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* 여기에 더 많은 보호된 라우트 추가 가능 */}
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
