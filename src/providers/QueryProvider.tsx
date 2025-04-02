import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

// React Query 클라이언트 설정
const defaultOptions = {
  queries: {
    refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 refetch 비활성화
    retry: 1, // 실패 시 1번 재시도
    staleTime: 5 * 60 * 1000, // 5분간 데이터를 신선하게 유지
  },
};

interface QueryProviderProps {
  children: ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  // 컴포넌트가 마운트될 때마다 새 QueryClient 인스턴스 생성
  const [queryClient] = useState(() => new QueryClient({ defaultOptions }));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
