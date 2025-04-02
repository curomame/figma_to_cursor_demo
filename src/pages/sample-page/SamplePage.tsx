import { Link } from "react-router-dom";
import { Counter } from "./components/Counter";

const SamplePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">샘플 페이지</h1>

      <div className="mb-8">
        <p className="text-lg text-gray-600 mb-4">
          이 페이지는 컴포넌트 사용 예시를 보여주는 샘플 페이지입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">카운터 예제</h2>
          <Counter />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">정보</h2>
          <p className="text-gray-600 mb-4">
            이 템플릿은 React 18, TypeScript, React Router, Zustand, Tailwind CSS를 사용하여
            구축되었습니다.
          </p>
          <p className="text-gray-600">각 기능별 예시와 컴포넌트를 확인할 수 있습니다.</p>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default SamplePage;
