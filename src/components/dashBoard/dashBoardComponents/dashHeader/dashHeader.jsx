import { Bell, Plus, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

function DashHeader() {
  return (
    <header
      dir="rtl"
      className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-5 md:px-7"
    >
      {/* الناحية اليمين: اللوجو والأزرار */}
      <div className="flex min-w-0 items-center gap-4 lg:gap-23">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
            <span className="text-xl font-bold text-emerald-600">م</span>
          </div>

          <div className="hidden sm:block">
            <h2 className="whitespace-nowrap text-base font-bold text-slate-900">
              مداد للطباعة
            </h2>

            <p className="mt-0.5 text-xs text-slate-400">لوحة التحكم</p>
          </div>
        </div>

        {/* أزرار الإضافة */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/dashboard/books/add"
            className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-emerald-600"
          >
            <Plus size={17} />
            <span>إضافة كتاب</span>
          </Link>

          <Link
            to="/dashboard/blog/add"
            className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-emerald-600"
          >
            <Plus size={17} />
            <span>إضافة مقال</span>
          </Link>
        </div>
      </div>

      {/* الناحية الشمال: المستخدم والإشعارات */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="الإشعارات"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-emerald-600"
        >
          <Bell size={19} />

          <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
            12
          </span>
        </button>

        <button
          type="button"
          aria-label="الإحصائيات"
          className="hidden h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors duration-200 hover:bg-emerald-100 sm:flex"
        >
          <TrendingUp size={20} />
        </button>

        <div className="hidden h-8 w-px bg-slate-200 lg:block" />

        <div className="hidden text-left lg:block">
          <p className="text-sm font-semibold text-slate-800">أحمد محمد</p>

          <p className="text-xs text-slate-400">مدير النظام</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white ring-4 ring-emerald-50">
          أ
        </div>
      </div>
    </header>
  );
}

export default DashHeader;
