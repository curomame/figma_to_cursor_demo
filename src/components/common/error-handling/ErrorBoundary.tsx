import React, { Component, ErrorInfo, ReactNode, ReactElement } from "react";

// fallback 타입 정의
type FallbackProps = {
  error: Error;
};

type FallbackElement = ReactElement<FallbackProps>;
type FallbackRender = (props: FallbackProps) => ReactElement;

interface ErrorBoundaryProps {
  children: ReactNode;
  // fallback은 ReactElement 또는 렌더 함수 중 하나여야 함
  fallback?: FallbackElement | FallbackRender;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * 에러 경계 컴포넌트
 * 하위 컴포넌트에서 발생한 JavaScript 오류를 캐치하고 대체 UI를 표시합니다.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // 다음 렌더링에서 대체 UI가 보이도록 상태 업데이트
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // 오류 로깅이나 에러 보고 서비스에 전송
    console.error("컴포넌트 오류 발생:", error, errorInfo);

    // 사용자 정의 오류 처리 함수 호출 (제공된 경우)
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      const { fallback } = this.props;

      // fallback이 제공된 경우
      if (fallback) {
        if (typeof fallback === "function") {
          // 함수인 경우 호출하여 ReactElement 반환
          return fallback({ error: this.state.error });
        } else {
          // 이미 ReactElement인 경우 그대로 반환 (error prop이 이미 설정되어 있어야 함)
          return fallback;
        }
      }

      // 기본 오류 UI
      return (
        <div className="p-6 bg-red-50 rounded-lg max-w-lg mx-auto my-8 text-center">
          <h2 className="text-xl text-red-700 font-semibold mb-4">오류가 발생했습니다</h2>
          <p className="text-red-600 mb-4">
            {this.state.error.message || "알 수 없는 오류가 발생했습니다."}
          </p>
          <div className="mt-4">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              페이지 새로고침
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
