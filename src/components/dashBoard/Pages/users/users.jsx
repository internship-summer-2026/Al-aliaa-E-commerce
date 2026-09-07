import { Plus, Users as UsersIcon } from "lucide-react";

function Users() {
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">المستخدمون</h1>

          <p className="mt-1 text-sm text-slate-500">
            إدارة حسابات وبيانات المستخدمين
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-emerald-600"
        >
          <Plus size={17} />
          إضافة مستخدم
        </button>
      </div>

      <div className="min-h-80 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
            <UsersIcon size={23} />
          </div>

          <h2 className="text-lg font-semibold text-slate-800">
            قائمة المستخدمين
          </h2>
        </div>

        {/* أضف جدول المستخدمين هنا */}
      </div>
    </section>
  );
}

export default Users;
