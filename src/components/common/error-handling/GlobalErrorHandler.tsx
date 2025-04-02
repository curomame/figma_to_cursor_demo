import { useModal } from "@/hooks/\buse-modal";
import { useEffect, ReactNode } from "react";

interface GlobalErrorHandlerProps {
  children: ReactNode;
}

/**
 * 전역 에러 처리를 위한 컴포넌트
 * window.onerror 이벤트와 unhandledrejection 이벤트를 처리합니다.
 */
const GlobalErrorHandler = ({ children }: GlobalErrorHandlerProps) => {
  const { open } = useModal();

  useEffect(() => {
    // 처리되지 않은 예외 처리
    const handleGlobalError = (event: ErrorEvent) => {
      console.error("처리되지 않은 오류:", event.error || event.message);

      // 사용자에게 오류 알림
      open({
        title: "오류가 발생했습니다",
        type: "error",
        description: event.error || event.message,
      });

      // 오류가 처리되었음을 표시 (선택 사항)
      // event.preventDefault();
    };

    // 처리되지 않은 Promise 거부 처리
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("처리되지 않은 Promise 거부:", JSON.stringify(event?.reason));

      // 사용자에게 오류 알림
      open({
        title: "오류가 발생했습니다",
        type: "error",
        description: JSON.stringify(event?.reason),
      });

      // 오류가 처리되었음을 표시 (선택 사항)
      // event.preventDefault();
    };

    // 이벤트 리스너 등록
    window.addEventListener("error", handleGlobalError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    // 클린업 함수
    return () => {
      window.removeEventListener("error", handleGlobalError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, [open]);

  return <>{children}</>;
};

export default GlobalErrorHandler;
