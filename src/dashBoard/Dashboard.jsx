import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashBoardLayout() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>لوحة التحكم (Dashboard)</h2>
      {/* Outlet هي اللي بتعرض الصفحات الفرعية زي الإشعارات والكتب */}
      <Outlet />
    </div>
  );
}