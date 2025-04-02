import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/rootStore";

/**
 * 인증이 필요한 라우트를 보호하는 컴포넌트
 * 로그인되지 않은 사용자는 로그인 페이지로 리다이렉트됩니다.
 */
const ProtectedRoute = () => {
  const { isLoggedIn } = useAuthStore();
  const location = useLocation();

  // 사용자가 로그인되어 있는지 확인
  if (!isLoggedIn) {
    // 로그인되지 않은 경우 로그인 페이지로 리다이렉트하면서 원래 가려던 위치 정보를 state로 전달
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 로그인되어 있으면 원래 보려던 컴포넌트 렌더링
  return <Outlet />;
};

export default ProtectedRoute;
