import React, { useState } from "react";
import ErrorBoundary from "../../../components/common/error-handling/ErrorBoundary";
import ErrorFallbackUI from "../../../components/common/error-handling/ErrorFallbackUI";

interface SystemOverviewCardProps {
  uptime: string;
  status: string;
}

// 실제 카드 컨텐츠 컴포넌트
const SystemOverviewCardContent: React.FC<SystemOverviewCardProps> = ({ uptime, status }) => {
  const [shouldError, setShouldError] = useState(false);

  // 에러 테스트 함수
  const triggerError = () => {
    setShouldError(true);
  };

  // 의도적으로 에러 발생
  if (shouldError) {
    throw new Error("Errorboundary test");
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">시스템 개요</h2>
      <p className="text-gray-600 mb-4">
        이 대시보드에서는 시스템 전반의 상태를 모니터링할 수 있습니다.
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600">가동 시간:</span>
        <span className="text-green-600 font-semibold">{uptime}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-600">현재 상태:</span>
        <span className="text-green-600 font-semibold">{status}</span>
      </div>

      <div className="mt-6">
        <button
          onClick={triggerError}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          에러 발생시키기
        </button>
      </div>
    </div>
  );
};

// 에러 바운더리를 포함한 컴포넌트
const SystemOverviewCard: React.FC<SystemOverviewCardProps> = (props) => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error("시스템 개요 컴포넌트 오류:", error);
    console.error("컴포넌트 스택:", errorInfo.componentStack);
  };

  return (
    <ErrorBoundary
      fallback={({ error }) => <ErrorFallbackUI error={error} title="시스템 개요 로딩 오류" />}
      onError={handleError}
    >
      <SystemOverviewCardContent {...props} />
    </ErrorBoundary>
  );
};

export default SystemOverviewCard;
