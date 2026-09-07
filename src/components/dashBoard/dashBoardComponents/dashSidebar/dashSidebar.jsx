import { NavLink } from "react-router-dom";
import {
  BarChart3,
  Bell,
  BookOpen,
  FileText,
  Layers3,
  LayoutDashboard,
  MessageSquare,
  Users,
} from "lucide-react";

const sidebarLinks = [
  {
    title: "لوحة التحكم",
    path: "/dashboard",
    icon: LayoutDashboard,
    end: true,
  },
  {
    title: "الكتب",
    path: "/dashboard/books",
    icon: BookOpen,
  },
  {
    title: "المستخدمون",
    path: "/dashboard/users",
    icon: Users,
  },
  {
    title: "المدونة",
    path: "/dashboard/blog",
    icon: FileText,
  },
  {
    title: "الإشعارات",
    path: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "التعليقات",
    path: "/dashboard/comments",
    icon: MessageSquare,
    notification: 12,
  },
  {
    title: "التصنيفات",
    path: "/dashboard/categories",
    icon: Layers3,
  },
  {
    title: "التقارير والإحصائيات",
    path: "/dashboard/reports",
    icon: BarChart3,
  },
];

function DashSidebar() {
  return (
    <aside
      dir="rtl"
      className="fixed bottom-0 right-0 top-20 z-40 hidden w-64 overflow-y-auto border-l border-slate-200 bg-white px-4 py-5 lg:block"
    >
      <nav className="flex flex-col gap-1.5">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `group relative flex h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium transition-colors duration-200 ease-out ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-sm shadow-emerald-100"
                    : "text-slate-500 hover:bg-emerald-50 hover:text-emerald-600"
                }`
              }
            >
              <Icon
                size={20}
                strokeWidth={1.8}
                className="shrink-0 transition-transform duration-200 group-hover:scale-110"
              />

              <span>{item.title}</span>

              {item.notification && (
                <span className="mr-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
                  {item.notification}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default DashSidebar;
