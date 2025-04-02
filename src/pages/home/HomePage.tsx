import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/rootStore";

const HomePage = () => {
  const { isLoggedIn, username } = useAuthStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">리액트 프로젝트 템플릿</h1>

      <div className="max-w-2xl text-center mb-8">
        <p className="text-xl mb-4">
          이 프로젝트는 React, TypeScript, Tailwind CSS를 활용한 SI 프로젝트 템플릿입니다.
        </p>
        <p className="mb-4">
          {isLoggedIn ? (
            <span className="font-semibold text-green-600">
              {username || "사용자"}님, 환영합니다!
            </span>
          ) : (
            "로그인하여 모든 기능을 이용해보세요."
          )}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          About 페이지
        </Link>
        {isLoggedIn ? (
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            대시보드
          </Link>
        ) : (
          <Link
            to="/login"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomePage;
