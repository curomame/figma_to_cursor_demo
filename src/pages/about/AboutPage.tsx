import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">About</h1>

      <div className="max-w-2xl text-lg mb-8">
        <p className="mb-4">
          이 프로젝트는 기업형 SI 프로젝트를 위한 React와 TypeScript 기반 템플릿입니다.
        </p>
        <p className="mb-4">
          재사용 가능한 컴포넌트, 상태 관리, 라우팅, 인증 등의 기본 기능을 제공합니다.
        </p>
      </div>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default AboutPage;
