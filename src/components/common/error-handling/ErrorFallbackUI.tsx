import React from "react";

interface ErrorFallbackUIProps {
  error: Error;
  resetErrorBoundary?: () => void;
  title?: string;
}

/**
 * 재사용 가능한 에러 폴백 UI 컴포넌트
 * 다양한 ErrorBoundary에서 사용할 수 있는 공통 에러 UI를 제공합니다.
 */
const ErrorFallbackUI: React.FC<ErrorFallbackUIProps> = ({
  error,
  resetErrorBoundary,
  title = "오류가 발생했습니다",
}) => {
  const handleReset = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="bg-red-50 p-6 rounded-lg border border-red-200 shadow-md">
      <h3 className="text-lg font-medium text-red-800 mb-2">{title}</h3>
      <p className="text-red-600 mb-4">{error.message || "알 수 없는 오류가 발생했습니다."}</p>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        새로고침
      </button>
    </div>
  );
};

export default ErrorFallbackUI;
