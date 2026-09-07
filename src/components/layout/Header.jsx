import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold" style={{ color: "#289D61" }}>
          مداد العلياء
        </div>
        <nav className="hidden md:flex space-x-4 space-x-reverse">
          <Link to="/" className="hover:text-[#289D61] transition">
            الرئيسية
          </Link>
          <Link to="/courses" className="hover:text-[#289D61] transition">
            الدورات
          </Link>
          <Link to="/about" className="hover:text-[#289D61] transition">
            من نحن
          </Link>
          <Link to="/contact" className="hover:text-[#289D61] transition">
            اتصل بنا
          </Link>
        </nav>
        <div className="flex space-x-2 space-x-reverse">
          <Link
            to="/login"
            className="px-4 py-2 border border-[#289D61] text-[#289D61] rounded hover:bg-[#289D61] hover:text-white transition"
          >
            دخول
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-[#289D61] text-white rounded hover:bg-opacity-90 transition"
          >
            تسجيل
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
