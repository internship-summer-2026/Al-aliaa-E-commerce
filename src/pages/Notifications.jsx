
import React from 'react';
import './Notifications.css';

const notificationsData = [
  {
    id: 1,
    user: "محمد أحمد",
    action: "بالتعليق على مقال",
    target: '"أفضل ممارسات تطوير الويب الحديث"',
    time: "منذ 5 دقائق",
    type: "comment",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=150",
  },
  {
    id: 2,
    user: "فاطمة حسن",
    action: "بمقال",
    target: '"مستقبل الذكاء الاصطناعي في التكنولوجيا"',
    time: "منذ 15 دقيقة",
    type: "like",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=150",
  },
  {
    id: 3,
    user: "عمر خالد",
    action: "كتاب",
    target: '"رحلة في عالم البرمجة"',
    time: "منذ 30 دقيقة",
    type: "favorite",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150",
  },
  {
    id: 4,
    user: "سارة علي",
    action: "شراء كتاب",
    target: '"تعلم JavaScript من الصفر"',
    time: "منذ ساعة",
    type: "cart",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=150",
  }
];

export default function Notifications() {
  return (
    <div className="notifications-container" dir="rtl">
      {/* عنوان الصفحة مع أيقونة الجرس الخضراء */}
      <div className="notifications-header-title">
        <h1>الإشعارات</h1>
        <div className="bell-badge">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </div>
      </div>

      {/* قائمة الكروت */}
      <div className="notifications-cards-list">
        {notificationsData.map((item) => (
          <div key={item.id} className="single-notification-card">
            
            {/* جهة اليمين: أيقونة المستخدم وأيقونة نوع الحدث exact كـ Figma */}
            <div className="card-right-icons">
              <div className="user-profile-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <div className={`action-type-icon ${item.type}`}>
                {item.type === 'comment' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                )}
                {item.type === 'like' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                )}
                {item.type === 'favorite' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                )}
                {item.type === 'cart' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                )}
              </div>
            </div>

            {/* المنتصف: النص والتوقيت */}
            <div className="notification-info">
              <p className="notification-message">
                {item.type === 'comment' && 'قام '}
                {item.type === 'like' && 'أعجب '}
                {item.type === 'favorite' && 'أضاف '}
                {item.type === 'cart' && 'طلب '}
                <strong>{item.user}</strong> {item.action} <strong>{item.target}</strong>
                {item.type === 'favorite' && ' إلى المفضلة'}
              </p>
              <span className="notification-timestamp">{item.time}</span>
            </div>

            {/* أقصى اليسار: صورة المقال/الكتاب الحقيقية */}
            <img src={item.img} alt="cover" className="article-cover-img" />

          </div>
        ))}
      </div>

      {/* زر تحميل المزيد */}
      <div className="load-more-wrapper">
        <button className="load-more-btn">تحميل المزيد من الإشعارات</button>
      </div>
    </div>
  );
}