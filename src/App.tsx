import GlobalErrorHandler from "./components/common/error-handling/GlobalErrorHandler";
import ErrorBoundary from "./components/common/error-handling/ErrorBoundary";
import ErrorFallback from "./components/common/error-handling/ErrorFallback";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <ErrorBoundary
      fallback={({ error }) => <ErrorFallback error={error} />}
      onError={(error, errorInfo) => {
        // 여기에 오류 로깅이나 모니터링 서비스로 에러 보고 로직 추가
        console.error("Application Error:", error);
        console.error("Error Info:", errorInfo);
      }}
    >
      <GlobalErrorHandler>
        <AppRouter />
      </GlobalErrorHandler>
    </ErrorBoundary>
  );
}

export default App;
