import {
  BookOpen,
  DollarSign,
  FileText,
  Package,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const stats = [
  {
    title: "إجمالي الكتب",
    value: "1,245",
    percentage: "+12.5%",
    trend: "up",
    icon: BookOpen,
    iconStyle: "bg-emerald-100 text-emerald-500",
  },
  {
    title: "إجمالي المستخدمين",
    value: "8,492",
    percentage: "+18.2%",
    trend: "up",
    icon: Users,
    iconStyle: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "إجمالي الإيرادات",
    value: "285,000 ر.س",
    percentage: "+8.7%",
    trend: "up",
    icon: DollarSign,
    iconStyle: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    title: "إجمالي المقالات",
    value: "342",
    percentage: "-2.4%",
    trend: "down",
    icon: FileText,
    iconStyle: "bg-amber-100 text-orange-500",
  },
];

const revenueData = [
  { month: "يناير", revenue: 36000 },
  { month: "فبراير", revenue: 29000 },
  { month: "مارس", revenue: 31000 },
  { month: "أبريل", revenue: 28500 },
  { month: "مايو", revenue: 26000 },
  { month: "يونيو", revenue: 22000 },
  { month: "يوليو", revenue: 24000 },
  { month: "أغسطس", revenue: 21000 },
  { month: "سبتمبر", revenue: 18000 },
  { month: "أكتوبر", revenue: 13500 },
  { month: "نوفمبر", revenue: 15000 },
  { month: "ديسمبر", revenue: 12000 },
];

const orders = [
  {
    id: "#12453",
    book: "البؤساء - الجزء الأول",
    customer: "محمد أحمد العلي",
    date: "2024-01-28",
    quantity: 3,
    status: "في الانتظار",
  },
  {
    id: "#12452",
    book: "مئة عام من العزلة",
    customer: "فاطمة سعيد",
    date: "2024-01-28",
    quantity: 1,
    status: "قيد الطباعة",
  },
  {
    id: "#12451",
    book: "الخيميائي",
    customer: "خالد محمود",
    date: "2024-01-27",
    quantity: 2,
    status: "قيد الشحن",
  },
  {
    id: "#12450",
    book: "قواعد العشق الأربعون",
    customer: "نور الدين حسن",
    date: "2024-01-27",
    quantity: 1,
    status: "في الانتظار",
  },
  {
    id: "#12449",
    book: "الأمير الصغير",
    customer: "ليلى عبدالله",
    date: "2024-01-26",
    quantity: 5,
    status: "قيد الطباعة",
  },
  {
    id: "#12448",
    book: "1984",
    customer: "عمر إبراهيم",
    date: "2024-01-26",
    quantity: 2,
    status: "قيد الشحن",
  },
];

function StatusBadge({ status }) {
  const statusStyles = {
    "في الانتظار": "border-red-200 bg-red-50 text-red-500",
    "قيد الطباعة": "border-indigo-200 bg-indigo-50 text-indigo-600",
    "قيد الشحن": "border-orange-200 bg-orange-50 text-orange-500",
  };

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-md border px-2.5 py-1 text-xs font-medium ${
        statusStyles[status] ?? "border-slate-200 bg-slate-50 text-slate-500"
      }`}
    >
      {status}
    </span>
  );
}

function Dashboard() {
  return (
    <section className="space-y-5">
      {/* الإحصائيات */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;

          return (
            <article
              key={stat.title}
              className="group min-h-[190px] rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-[box-shadow,border-color] duration-500 ease-in-out hover:border-emerald-100 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                {/* الأيقونة */}
                <div
                  className={`rounded-xl p-3 transition-transform duration-300 ease-out group-hover:scale-[1.03] ${stat.iconStyle}`}
                >
                  <Icon size={27} strokeWidth={1.8} />
                </div>
                {/* النسبة */}
                <div
                  dir="ltr"
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  <span>{stat.percentage}</span>
                  <TrendIcon size={17} />
                </div>
              </div>

              <div className="mt-7 text-right">
                <p className="text-base text-slate-500">{stat.title}</p>

                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h3>
              </div>
            </article>
          );
        })}
      </div>

      {/* الرسم البياني */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
        <div className="mb-7">
          <h2 className="text-xl font-bold text-slate-900">
            الإيرادات الشهرية
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            نظرة عامة على الإيرادات خلال العام
          </p>
        </div>

        <div dir="ltr" className="h-72 w-full md:h-80">
          <ResponsiveContainer width="100%" height="100%" debounce={200}>
            <LineChart
              data={revenueData}
              margin={{
                top: 10,
                right: 15,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid
                stroke="#e2e8f0"
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                axisLine={{ stroke: "#e2e8f0" }}
                tickLine={false}
                interval="preserveStartEnd"
                tick={{
                  fill: "#64748b",
                  fontSize: 11,
                }}
              />

              <YAxis
                width={42}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#64748b",
                  fontSize: 11,
                }}
                tickFormatter={(value) => `${value / 1000}K`}
              />

              <Tooltip
                isAnimationActive={false}
                cursor={{
                  stroke: "#cbd5e1",
                  strokeDasharray: "4 4",
                }}
                formatter={(value) => [
                  `${Number(value).toLocaleString()} ر.س`,
                  "الإيرادات",
                ]}
                labelStyle={{
                  color: "#0f172a",
                  marginBottom: "4px",
                }}
                contentStyle={{
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 12px rgb(15 23 42 / 8%)",
                }}
              />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#00b96b"
                strokeWidth={3}
                isAnimationActive={false}
                dot={{
                  r: 4,
                  fill: "#00b96b",
                  stroke: "#ffffff",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: "#00b96b",
                  stroke: "#ffffff",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* الطلبات المعلقة */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-3 p-5 md:px-7">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-orange-500">
            <Package size={21} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              الطلبات المعلقة
            </h2>

            <p className="mt-0.5 text-sm text-slate-400">
              6 طلب في انتظار المعالجة
            </p>
          </div>
        </div>

        <div className="overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-slate-100">
          <table className="w-full min-w-[850px] text-right">
            <thead className="border-y border-slate-200 bg-slate-50">
              <tr className="text-sm font-medium text-slate-600">
                <th className="px-6 py-4">رقم الطلب</th>
                <th className="px-6 py-4">عنوان الكتاب</th>
                <th className="px-6 py-4">اسم العميل</th>
                <th className="px-6 py-4">التاريخ</th>
                <th className="px-6 py-4">الكمية</th>
                <th className="px-6 py-4">الحالة</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="text-sm text-slate-600 transition-colors duration-150 hover:bg-slate-50"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-800">
                    {order.id}
                  </td>

                  <td className="px-6 py-4">{order.book}</td>

                  <td className="px-6 py-4">{order.customer}</td>

                  <td
                    dir="ltr"
                    className="whitespace-nowrap px-6 py-4 text-right"
                  >
                    {order.date}
                  </td>

                  <td className="px-6 py-4">{order.quantity}</td>

                  <td className="px-6 py-4">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
