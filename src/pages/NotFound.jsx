import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mb-6">الصفحة غير موجودة</h2>
      <p className="mb-8 text-gray-600">
        عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#289D61] text-white rounded hover:bg-opacity-90 transition"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
