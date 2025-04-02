import { Link } from "react-router-dom";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

/**
 * 에러 발생 시 표시할 UI 컴포넌트
 */
const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const handleReset = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 text-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">오류가 발생했습니다</h2>

        <div className="bg-red-50 p-4 rounded mb-4">
          <p className="text-red-800 font-medium">
            {error.message || "알 수 없는 오류가 발생했습니다."}
          </p>
        </div>

        <div className="text-gray-600 mb-6 text-sm">
          <p>일시적인 오류일 수 있습니다. 다시 시도하거나 홈페이지로 이동해주세요.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            다시 시도
          </button>

          <Link
            to="/"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
          >
            홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
