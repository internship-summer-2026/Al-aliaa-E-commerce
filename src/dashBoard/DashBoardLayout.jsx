import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './DashBoardLayout.css';

export default function DashBoardLayout() {
  const location = useLocation();
  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="dashboard-wrapper" dir="rtl">
      {/* القائمة الجانبية (Sidebar) */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon-svg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div className="logo-text">
             <span className="main-title">مداد العليا</span>
             <span className="sub-title">لوحة التحكم</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
             لوحة التحكم
          </Link>
          <Link to="/dashboard/books" className={`nav-item ${isActive('books') ? 'active' : ''}`}>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
             الكتب
          </Link>
          <Link to="/dashboard/users" className="nav-item">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
             المستخدمين
          </Link>
          <Link to="/dashboard/blog" className="nav-item">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
             المدونة
          </Link>
          <Link to="/dashboard/notifications" className={`nav-item ${isActive('notifications') ? 'active' : ''}`}>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
             الإشعارات
             <span className="badge">12</span>
          </Link>
          <Link to="/dashboard/comments" className="nav-item">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
             التعليقات
          </Link>
          <Link to="/dashboard/categories" className="nav-item">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
             التصنيفات
          </Link>
          <Link to="/dashboard/reports" className="nav-item">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
             التقارير والإحصائيات
          </Link>
        </nav>
      </aside>

      {/* المحتوى الرئيسي */}
      <div className="main-container">
        {/* الشريط العلوي */}
        <header className="top-header">
          {/* الجانب الأيمن من الهيدر (فارغ للحفاظ على دفع باقي العناصر لليسار) */}
          <div className="header-right-empty"></div>

          {/* الجانب الأيسر من الهيدر: اسم المستخدم والأيقونات */}
          <div className="header-user-section-left">
            <div className="user-avatar-circle">أ</div>
            
            <div className="user-details">
              <span className="user-name">أحمد محمد</span>
              <span className="user-role">مدير النظام</span>
            </div>

            <div className="arrow-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </div>

            <div className="action-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>

            <div className="action-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
          </div>
        </header>

        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
}