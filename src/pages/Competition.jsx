import React from 'react';
import frame1Img from '../assets/Frame 1.png';
import frame2Img from '../assets/Frame 2.png';
import frame3Img from '../assets/Frame 3.png';
import './Competition.css';

export default function Competition() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم تسليم الطلب بنجاح!');
  };

  return (
    <div className="page-wrapper">
      {/* 1. Navbar */}
      <header className="navbar">
        <div className="logo-group">
          <div className="logo-circle">م</div>
          <span>دار مداد العلماء</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#">الرئيسية</a></li>
          <li><a href="#about">عن المسابقة</a></li>
          <li><a href="#categories">المجالات</a></li>
          <li><a href="#conditions">الشروط</a></li>
          <li><a href="#contact">تواصل معنا</a></li>
        </ul>
        <button className="btn-primary-green">تسجيل الدخول</button>
      </header>

      <div className="container">
        {/* 2. Breadcrumb & Search Bar */}
        <div className="top-actions">
          <div>الرئيسية / المؤلفون / <b style={{ color: '#00a859' }}>المسابقة</b></div>
          <div className="search-field">
            <input type="text" placeholder="بحث..." />
            <button>بحث</button>
          </div>
        </div>

        {/* 3. Hero Section */}
        <section className="hero-section" style={{ textAlign: 'center', padding: '20px 0' }}>
          <img 
            src={frame1Img} 
            alt="مسابقة دار مداد العلماء" 
            style={{ width: '100%', maxWidth: '850px', height: 'auto', display: 'block', margin: '0 auto' }} 
          />
        </section>

        {/* 4. About Section */}
        <section className="gray-box" id="about" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <img 
            src={frame2Img} 
            alt="عن المسابقة" 
            style={{ width: '100%', maxWidth: '850px', height: 'auto', display: 'block' }} 
          />
        </section>

        {/* 5. Categories Section */}
        <section id="categories">
          <h2 className="section-head">مجالات المشاركة</h2>
          <div className="grid-4">
            <div className="card-item">
              <div className="card-icon">📖</div>
              <h3>الرواية</h3>
              <p>أعمال روائية متكاملة تعالج قضايا إنسانية أو اجتماعية أو فكرية بأسلوب إبداعي.</p>
            </div>
            <div className="card-item">
              <div className="card-icon">📗</div>
              <h3>القصة القصيرة</h3>
              <p>مجموعة قصصية أو قصة منفردة تتميز بالعمق واللغة السليمة.</p>
            </div>
            <div className="card-item">
              <div className="card-icon">✏️</div>
              <h3>الشعر</h3>
              <p>ديوان شعري أو مجموعة مختارة من القصائد المكتوبة باللغة العربية الفصحى.</p>
            </div>
            <div className="card-item">
              <div className="card-icon">🎓</div>
              <h3>الدراسات الفكرية</h3>
              <p>أبحاث أو دراسات تتناول قضايا فكرية أو ثقافية أو إنسانية بأسلوب علمي ومنهجي.</p>
            </div>
          </div>
        </section>

        {/* 6. Conditions Section */}
        <section className="gray-box" id="conditions">
          <h2 className="section-head">شروط المشاركة</h2>
          <div className="grid-4">
            <div className="cond-box">
              <div className="check-circle">✓</div>
              <h4 style={{ fontSize: '12px', fontWeight: '800' }}>اللغة</h4>
              <p style={{ fontSize: '9.5px', color: '#64748b' }}>الالتزام باستخدام اللغة العربية الفصحى.</p>
            </div>
            <div className="cond-box">
              <div className="check-circle">✓</div>
              <h4 style={{ fontSize: '12px', fontWeight: '800' }}>الأصالة</h4>
              <p style={{ fontSize: '9.5px', color: '#64748b' }}>أن يكون العمل أصيلاً وغير منشور سابقاً.</p>
            </div>
            <div className="cond-box">
              <div className="check-circle">✓</div>
              <h4 style={{ fontSize: '12px', fontWeight: '800' }}>صيغة الملف</h4>
              <p style={{ fontSize: '9.5px', color: '#64748b' }}>إرسال العمل بصيغة PDF وبخطوط واضحة.</p>
            </div>
            <div className="cond-box">
              <div className="check-circle">✓</div>
              <h4 style={{ fontSize: '12px', fontWeight: '800' }}>الحد الأدنى للكلمات</h4>
              <p style={{ fontSize: '9.5px', color: '#64748b' }}>ألا يقل العمل الروائي عن 15 ألف كلمة.</p>
            </div>
          </div>
        </section>

        {/* 7. Steps Section */}
        <section>
          <h2 className="section-head">آلية التقديم</h2>
          <div className="steps-container">
            <div className="step-node">
              <div className="step-num">1</div>
              <h4 style={{ fontSize: '12px', fontWeight: '800' }}>الإعداد</h4>
              <p style={{ fontSize: '10px', color: '#94a3b8' }}>إعداد الملف وتنسيق الشروط.</p>
            </div>
            <div className="step-node">
              <div className="step-num">2</div>
              <h4 style={{ fontSize: '12px', fontWeight: '800' }}>التعبئة</h4>
              <p style={{ fontSize: '10px', color: '#94a3b8' }}>تعبئة نموذج التقديم الإلكتروني.</p>
            </div>
            <div className="step-node">
              <div className="step-num">3</div>
              <h4 style={{ fontSize: '12px', fontWeight: '800' }}>رفع الملف</h4>
              <p style={{ fontSize: '10px', color: '#94a3b8' }}>رفع ملف العمل ونشر الطلب.</p>
            </div>
          </div>
        </section>

        {/* 8. Call to Action Section */}
        <section id="publish" style={{ textAlign: 'center', padding: '20px 0' }}>
          <img 
            src={frame3Img} 
            alt="هل أنت مستعد لنشر إبداعك" 
            style={{ width: '100%', maxWidth: '850px', height: 'auto', display: 'block', margin: '0 auto' }} 
          />
        </section>

        {/* 9. Contact Form & Map */}
        <section className="contact-section" id="contact">
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: '800', marginBottom: '4px' }}>تواصل معنا</h3>
            <p style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '12px' }}>أدخل بياناتك واستفسارك وسوف يتم التواصل معك.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group"><input type="text" placeholder="الاسم الكامل" required /></div>
              <div className="form-group"><input type="email" placeholder="البريد الإلكتروني" required /></div>
              <div className="form-group"><input type="tel" placeholder="رقم الهاتف" required /></div>
              <div className="form-group"><textarea rows="3" placeholder="اكتب رسالتك هنا..."></textarea></div>
              <div className="form-group"><input type="file" style={{ fontSize: '10px' }} /></div>
              <button type="submit" className="btn-primary-green" style={{ width: '100%' }}>إرسال البيانات</button>
            </form>
          </div>
          <div style={{ borderRadius: '8px', overflow: 'hidden', minHeight: '180px', border: '1px solid #e2e8f0' }}>
            <iframe title="map" src="https://maps.google.com/maps?q=Cairo&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{ width: '100%', height: '100%', border: 0 }}></iframe>
          </div>
        </section>
      </div>

      {/* 10. Complete Footer */}
      <footer>
        <div className="footer-content">
          <div style={{ textAlign: 'right' }}>
            <h4 style={{ fontSize: '13px', fontWeight: '800' }}>دار مداد العلماء</h4>
            <p style={{ fontSize: '10px', opacity: 0.8 }}>نفتح أبواب النشر أمام الأصوات الجديدة والمتميزة.</p>
          </div>
          <div>
            <span>تواصل معنا: info@medad.com</span>
          </div>
        </div>
        <p style={{ fontSize: '10px', opacity: 0.9 }}>دار مداد العلماء للنشر والتوزيع © 2026 - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}