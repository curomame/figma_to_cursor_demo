import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../../store/rootStore";
import { LoginForm } from "./components/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, error, clearError } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (username: string, password: string) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    clearError();

    try {
      await login({ username, password });
      if (!error) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("로그인 처리 중 오류 발생:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">로그인</h1>
          <p className="text-gray-600">계정에 로그인하여 대시보드와 기타 기능에 접근하세요.</p>
        </div>

        <LoginForm onSubmit={handleLogin} isSubmitting={isSubmitting} error={error} />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            계정이 없으신가요?{" "}
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
              회원가입
            </Link>
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
