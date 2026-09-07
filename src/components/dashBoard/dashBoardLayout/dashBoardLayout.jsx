import { Outlet } from "react-router-dom";

import DashSidebar from "../dashBoardComponents/dashSidebar/dashSidebar";
import DashHeader from "../dashBoardComponents/dashHeader/dashHeader";

function DashBoardLayout() {
  return (
    <div dir="rtl" className="h-screen overflow-hidden bg-slate-50">
      <DashHeader />
      <DashSidebar />

      <main className="fixed bottom-0 left-0 right-0 top-20 overflow-y-auto lg:right-64 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        <div className="p-4 sm:p-5 md:p-7">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashBoardLayout;
