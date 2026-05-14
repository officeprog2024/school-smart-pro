import React from 'react'

// ====== Icons (clean line icons) ======
const Ico = {
  Shield: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||20} height={p.s||20}><path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>),
  Cloud: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||20} height={p.s||20}><path d="M17.5 19a4.5 4.5 0 0 0 1-8.9A7 7 0 0 0 5 11a4 4 0 0 0-.6 8h13.1Z"/></svg>),
  Headset: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||20} height={p.s||20}><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z"/><path d="M20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z"/><path d="M17 18a4 4 0 0 1-4 4h-1"/></svg>),
  Mobile: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||20} height={p.s||20}><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>),
  UserCheck: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||26} height={p.s||26}><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="m16 12 2 2 4-4"/></svg>),
  Doc: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||26} height={p.s||26}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="m12 13-3 3 3 3"/><path d="m16 13 3 3-3 3"/></svg>),
  Cert: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||26} height={p.s||26}><circle cx="12" cy="9" r="5"/><path d="M8.5 13 7 21l5-3 5 3-1.5-8"/></svg>),
  Chart: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||26} height={p.s||26}><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 3"/><path d="M12 12 4 9"/></svg>),
  Folder: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||26} height={p.s||26}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/></svg>),
  Pie: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||26} height={p.s||26}><path d="M21 12A9 9 0 1 1 12 3v9h9Z"/><path d="M14 3.2A9 9 0 0 1 20.8 10H14V3.2Z"/></svg>),
  School: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||28} height={p.s||28}><path d="M3 21V9l9-5 9 5v12"/><path d="M9 21v-7h6v7"/><path d="M12 4v3"/></svg>),
  Users: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||28} height={p.s||28}><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15 20a4 4 0 0 1 7-2.7"/></svg>),
  TrendUp: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||28} height={p.s||28}><path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>),
  ShieldCheck: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||28} height={p.s||28}><path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>),
  Check: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width={p.s||12} height={p.s||12}><path d="m5 12 5 5 9-11"/></svg>),
  Arrow: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||14} height={p.s||14}><path d="M14 5 7 12l7 7"/></svg>),
  Play: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" width={p.s||14} height={p.s||14}><path d="M8 5v14l11-7z"/></svg>),
  Building: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||18} height={p.s||18}><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg>),
  UserGrp: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||18} height={p.s||18}><circle cx="9" cy="9" r="3"/><path d="M3 19a6 6 0 0 1 12 0"/><circle cx="17" cy="10" r="2"/><path d="M15 19a5 5 0 0 1 6-3"/></svg>),
  Teacher: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||18} height={p.s||18}><circle cx="12" cy="7" r="3"/><path d="M5 21a7 7 0 0 1 14 0"/><path d="M9 12h6"/></svg>),
  Book: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||18} height={p.s||18}><path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"/><path d="M4 17a3 3 0 0 1 3-3h11"/></svg>),
  Wallet: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||18} height={p.s||18}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><circle cx="16" cy="14" r="1.2" fill="currentColor"/></svg>),
  Bell: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.s||18} height={p.s||18}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>),
  Tw: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" width={p.s||16} height={p.s||16}><path d="M18.244 2H21.5l-7.5 8.6L23 22h-6.844l-5.36-6.95L4.6 22H1.34l8.04-9.2L1 2h7l4.86 6.34L18.244 2Z"/></svg>),
  In: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" width={p.s||16} height={p.s||16}><path d="M4 4h4v16H4zM6 2.5A2.5 2.5 0 1 1 6 7.5a2.5 2.5 0 0 1 0-5ZM10 9h4v2h.05a4.4 4.4 0 0 1 3.95-2.2c4 0 4.5 2.6 4.5 5.7V20h-4v-5.5c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9V20h-4V9Z"/></svg>),
  Yt: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" width={p.s||16} height={p.s||16}><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12s0-3.2-.4-4.8ZM10 15V9l5 3-5 3Z"/></svg>),
};

// ====== Components ======
function LogoEmblem({ theme }) {
  if (theme === 'moe') {
    return (
      <div className="moe-emblem" aria-hidden="true">
        <span className="c c1"></span>
        <span className="c c2"></span>
        <span className="c c3"></span>
        <span className="c c4"></span>
        <span className="c c5"></span>
      </div>
    );
  }
  if (theme === 'editorial') {
    return (
      <div className="logo-emblem" style={{background:'#1a1a1a',color:'#fff',width:36,height:36,display:'grid',placeItems:'center',fontWeight:900,fontSize:18,borderRadius:0}}>S</div>
    );
  }
  if (theme === 'vibrant') {
    return (
      <div className="logo-emblem" style={{background:'linear-gradient(135deg,#4F46E5,#06B6D4)',color:'#fff',width:36,height:36,display:'grid',placeItems:'center',fontWeight:800,fontSize:16,borderRadius:12}}>S</div>
    );
  }
  return <div className="logo-emblem classic">S</div>;
}

function Navbar({ theme, themePicker, onHamburger }) {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="logo-wrap">
          <div className="logo">
            <LogoEmblem theme={theme}/>
            <span>School Smart</span>
            <span className="logo-pro">Pro</span>
          </div>
          <div className="logo-sub">منصة الإدارة المدرسية الذكية</div>
        </div>
        <ul className="nav-links">
          <li><a href="#home" className="active">الرئيسية</a></li>
          <li><a href="#about">عن المنصة</a></li>
          <li><a href="#services">الخدمات</a></li>
          <li><a href="#sections">الأقسام</a></li>
          <li><a href="#features">المزايا</a></li>
          <li><a href="#pricing">الأسعار</a></li>
          <li><a href="#contact">التواصل</a></li>
        </ul>
        <div className="nav-cta">
          {themePicker}
          <button className="btn btn-outline">تسجيل الدخول</button>
          <button className="btn btn-primary">طلب تجربة مجانية</button>
          <button className="nav-hamburger" onClick={onHamburger} aria-label="القائمة">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" width="22" height="22"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="en">School Smart Pro</span>
            <span className="ar">منصة الإدارة المدرسية الذكية</span>
          </h1>
          <p className="hero-desc">
            منصة متكاملة لإدارة جميع أعمال المدرسة بكفاءة وذكاء، تجمع البيانات، تحللها، وتحوّلها إلى رؤى تساعدك على اتخاذ قرارات أفضل... كل ذلك في مكان واحد.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg">ابدأ تجربتك المجانية</button>
            <button className="btn btn-outline btn-lg"><Ico.Play s={11}/> استعراض المنصة</button>
          </div>
          <div className="hero-feature-pills">
            <div className="pill"><div className="pill-ico"><Ico.Shield/></div><div className="pill-label">آمن وموثوق</div></div>
            <div className="pill"><div className="pill-ico"><Ico.Cloud/></div><div className="pill-label">سحابي بالكامل</div></div>
            <div className="pill"><div className="pill-ico"><Ico.Headset/></div><div className="pill-label">دعم فني متميز</div></div>
            <div className="pill"><div className="pill-ico"><Ico.Mobile/></div><div className="pill-label">متوافق مع الجوال</div></div>
          </div>
        </div>
        <HeroVisual/>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual-ph"></div>
      <div className="hero-visual-inner">
        <div className="mock-laptop">
          <div className="mock-screens">
            <div className="mock-card">
              <div className="label">مؤشرات المدرسة</div>
              <div className="val">96%</div>
              <div className="mock-bars">
                <span style={{height:'30%'}}/><span style={{height:'55%'}}/><span style={{height:'40%'}}/>
                <span style={{height:'80%'}}/><span style={{height:'65%'}}/><span style={{height:'90%'}}/>
                <span style={{height:'50%'}}/><span style={{height:'70%'}}/>
              </div>
            </div>
            <div className="mock-card center">
              <div className="mock-ai">AI</div>
            </div>
            <div className="mock-card">
              <div className="label">تحليلات الأداء</div>
              <div className="mock-line">
                <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                  <polyline points="0,30 15,22 30,28 45,15 60,20 75,10 90,16 100,8"
                    fill="none" stroke="#6bb6ff" strokeWidth="1.5"/>
                  <polyline points="0,30 15,22 30,28 45,15 60,20 75,10 90,16 100,8 100,40 0,40"
                    fill="url(#g)" opacity="0.3"/>
                  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6bb6ff"/><stop offset="100%" stopColor="#6bb6ff" stopOpacity="0"/>
                  </linearGradient></defs>
                </svg>
              </div>
              <div className="val" style={{fontSize:14,marginTop:6}}>78%</div>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:8}}>
            <div className="mock-card" style={{minHeight:60}}>
              <div className="label">الحضور والغياب</div>
              <div style={{display:'flex',alignItems:'center',gap:8,marginTop:6}}>
                <div style={{width:24,height:24,borderRadius:6,background:'rgba(107,182,255,0.3)',display:'grid',placeItems:'center'}}><Ico.Users s={14}/></div>
                <div className="val" style={{fontSize:16}}>98%</div>
              </div>
            </div>
            <div className="mock-card" style={{minHeight:60}}>
              <div className="label">اتخاذ القرارات</div>
              <div style={{display:'flex',alignItems:'center',gap:8,marginTop:6}}>
                <div style={{width:24,height:24,borderRadius:6,background:'rgba(107,182,255,0.3)',display:'grid',placeItems:'center'}}><Ico.ShieldCheck s={14}/></div>
                <div className="val" style={{fontSize:13}}>محسّن</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mock-laptop-base"></div>
      </div>
    </div>
  );
}

const SERVICES = [
  { icon: <Ico.UserCheck/>, color: 'alt-blue',   title: 'الحضور والانصراف', desc: 'إدارة الحضور والغياب للطلاب والمعلمين بدقة وسهولة مع تقارير فورية.' },
  { icon: <Ico.Doc/>,       color: 'alt-orange', title: 'الاختبارات والتقويم', desc: 'إنشاء الاختبارات إلكترونياً وتصحيحها وتحليل النتائج باحترافية.' },
  { icon: <Ico.Cert/>,      color: '',           title: 'شهادات التدريب',   desc: 'إصدار الشهادات تلقائياً بتصميم احترافي ومعتمد رقمياً.' },
  { icon: <Ico.Chart/>,     color: 'alt-blue',   title: 'تقييم الأداء الوظيفي', desc: 'تقييم أداء المعلمين والموظفين بناءً على مؤشرات واضحة وشفافة.' },
  { icon: <Ico.Folder/>,    color: 'alt-orange', title: 'النماذج والملفات', desc: 'إنشاء النماذج تلقائياً وحفظ الملفات وأرشفتها بشكل منظم وآمن.' },
  { icon: <Ico.Pie/>,       color: '',           title: 'التقارير والتحليلات', desc: 'تقارير ذكية وتحليلات متقدمة تدعم اتخاذ القرارات المناسبة.' },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">كل ما تحتاجه لإدارة مدرستك بذكاء</div>
          <h2 className="section-title">خدمات المنصة</h2>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card" key={i}>
              <div className={`service-icon ${s.color}`}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#" className="service-link">المزيد <Ico.Arrow s={12}/></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { ico: <Ico.School/>,       num: '+99.9%',     lbl: 'وقت تشغيل المنصة' },
    { ico: <Ico.TrendUp/>,      num: '+1,000,000', lbl: 'عملية يومية تتم عبر المنصة' },
    { ico: <Ico.Users/>,        num: '+50,000',    lbl: 'مستخدم نشط' },
    { ico: <Ico.ShieldCheck/>,  num: '+500',       lbl: 'مدرسة تثق بنا' },
  ];
  // Reverse so RTL reads: 500 schools first on the right
  return (
    <section className="stats-wrap">
      <div className="container">
        <div className="stats">
          {[...items].reverse().map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat-ico">{s.ico}</div>
              <div>
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const feats = [
    'منصة مكاملة تغطي جميع احتياجات المدرسة',
    'واجهة سهلة الاستخدام وتصميم عصري',
    'تقارير ذكية وتحليلات تساعد على اتخاذ القرار',
    'أمان عالي وحماية كاملة للبيانات',
    'دعم فني على مدار الساعة',
  ];
  const depts = [
    { ico: <Ico.Building/>, name: 'الإدارة المدرسية' },
    { ico: <Ico.UserGrp/>,  name: 'شؤون الطلاب' },
    { ico: <Ico.Teacher/>,  name: 'شؤون المعلمين والموظفين' },
    { ico: <Ico.Book/>,     name: 'الشؤون الأكاديمية' },
    { ico: <Ico.Wallet/>,   name: 'الشؤون المالية' },
    { ico: <Ico.Bell/>,     name: 'التواصل والإشعارات' },
  ];
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left col in RTL = first DOM = right side */}
          <div className="about-col">
            <h2><span style={{direction:'ltr',display:'inline-block'}}>: School Smart Pro</span></h2>
            <ul className="feat-list">
              {feats.map((f, i) => (
                <li key={i}><span className="feat-check"><Ico.Check/></span><span>{f}</span></li>
              ))}
            </ul>
            <button className="btn btn-primary">تعرف على المزيد</button>
          </div>

          <div className="about-visual">
            <div className="mock-dashboard">
              <div className="mock-dash-row">
                <div className="mock-dash-cell">
                  <div style={{fontSize:9,opacity:.85,marginBottom:4}}>الحضور</div>
                  <div style={{fontSize:14,fontWeight:800,color:'#fff'}}>1,248</div>
                </div>
                <div className="mock-dash-cell">
                  <div style={{fontSize:9,opacity:.85,marginBottom:4}}>المعدل</div>
                  <div style={{fontSize:14,fontWeight:800,color:'#fff'}}>92%</div>
                </div>
              </div>
              <div className="mock-dash-big">
                <div className="pct">28%</div>
                <div className="mock-bar-stack">
                  <span style={{height:'30%'}}/><span style={{height:'60%'}}/>
                  <span style={{height:'45%'}}/><span style={{height:'80%'}}/>
                  <span style={{height:'55%'}}/><span style={{height:'70%'}}/>
                  <span style={{height:'40%'}}/><span style={{height:'85%'}}/>
                </div>
              </div>
              <div style={{textAlign:'center',marginTop:10,fontSize:9,color:'#cfe2ff',opacity:.7}}>لوحة التحكم الذكية</div>
            </div>
          </div>

          <div className="about-col">
            <h2>الأقسام الرئيسية</h2>
            <div className="dept-list">
              {depts.map((d, i) => (
                <div className="dept-item" key={i}>
                  <span>{d.name}</span>
                  <span className="dept-ico">{d.ico}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">School Smart <span style={{color:'var(--accent)'}}>Pro</span></div>
            <div className="footer-sub">منصة الإدارة المدرسية الذكية</div>
          </div>
          <div>
            <div className="footer-tag">نحو إدارة مدرسية ذكية... مستقبل أفضل للتعليم</div>
            <div className="footer-social">
              <a href="#" aria-label="Twitter"><Ico.Tw/></a>
              <a href="#" aria-label="LinkedIn"><Ico.In/></a>
              <a href="#" aria-label="YouTube"><Ico.Yt/></a>
            </div>
          </div>
          <div className="vision-badge">
            <div className="vision-meta">
              <span style={{fontSize:11,color:'#b9c8e2'}}>رؤية</span>
              <strong>VISION</strong>
              <span style={{fontSize:9.5,color:'#8fa3c5',lineHeight:1.3}}>المملكة العربية السعودية<br/>Kingdom of Saudi Arabia</span>
            </div>
            <div className="vision-num">2030</div>
          </div>
        </div>
        <div className="footer-divider">
          © 2026 School Smart Pro · جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}

const THEMES = [
  { id: 'classic',   name: 'كلاسيكي',       desc: 'كحلي + برتقالي · مؤسسي احترافي', swatch: ['#1a3a6e', '#f5a623'] },
  { id: 'moe',       name: 'وزارة التعليم', desc: 'تركواز + أزرق + أخضر · هوية تعليمية', swatch: ['#0DA9A6', '#3D7EB9', '#07A869'] },
  { id: 'vibrant',   name: 'حيوي',          desc: 'بنفسجي + سماوي · حديث وزاهي', swatch: ['#4F46E5', '#06B6D4', '#F59E0B'] },
  { id: 'editorial', name: 'مينيمال',       desc: 'أبيض + أسود + صدئ · تحريري أنيق', swatch: ['#1a1a1a', '#D97757'] },
];

function ThemePicker({ theme, setTheme }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const current = THEMES.find(t => t.id === theme) || THEMES[0];

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onEsc   = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  const swatchBg = (sw) => sw.length === 2
    ? `linear-gradient(135deg, ${sw[0]} 50%, ${sw[1]} 50%)`
    : `conic-gradient(${sw[0]} 0 33%, ${sw[1]} 33% 66%, ${sw[2]} 66%)`;

  return (
    <div className="theme-picker" data-open={open} ref={ref}>
      <button
        className="theme-picker-btn"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="اختيار المظهر"
      >
        <span className="swatch-mini" style={{background: swatchBg(current.swatch)}}></span>
        <span>المظهر</span>
        <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      <div className="theme-menu" role="listbox">
        <div className="theme-menu-head">
          <h4>اختر المظهر الافتراضي</h4>
          <p>سيُحفظ اختيارك ويُطبَّق تلقائياً عند الزيارة القادمة. يمكنك تغييره في أي وقت.</p>
        </div>
        {THEMES.map(t => (
          <button
            key={t.id}
            className={`theme-option ${theme === t.id ? 'active' : ''}`}
            onClick={() => { setTheme(t.id); }}
            role="option"
            aria-selected={theme === t.id}
          >
            <div className="swatch-row">
              {t.swatch.map((c, i) => (
                <span key={i} className="swatch-dot" style={{background: c}}></span>
              ))}
            </div>
            <div className="opt-meta">
              <div className="opt-name">{t.name}</div>
              <div className="opt-desc">{t.desc}</div>
            </div>
            <span className="opt-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><path d="m5 12 5 5 9-11"/></svg>
            </span>
          </button>
        ))}
        <div className="theme-menu-foot">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg>
          الحالي: <strong>{current.name}</strong>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ open, setOpen, mode, setMode, theme }) {
  const navItems = [
    { id: 'home',     name: 'الرئيسية',  ico: <Ico.School s={18}/> },
    { id: 'about',    name: 'عن المنصة', ico: <Ico.ShieldCheck s={18}/> },
    { id: 'services', name: 'الخدمات',   ico: <Ico.Folder s={18}/> },
    { id: 'sections', name: 'الأقسام',   ico: <Ico.Building s={18}/> },
    { id: 'features', name: 'المزايا',   ico: <Ico.Cert s={18}/> },
    { id: 'pricing',  name: 'الأسعار',   ico: <Ico.Wallet s={18}/> },
    { id: 'contact',  name: 'التواصل',   ico: <Ico.Bell s={18}/> },
  ];
  const modes = [
    { id: 'auto',   name: 'تلقائي',  desc: 'تظهر عند تمرير المؤشر على الحافة اليمنى وتختفي تلقائياً.' },
    { id: 'always', name: 'دائم',    desc: 'مثبتة باستمرار في جانب الشاشة (محتوى الصفحة يُزاح).' },
    { id: 'manual', name: 'يدوي',    desc: 'مخفية. اضغط زر القائمة لإظهارها أو إخفائها.' },
  ];

  const handleNavClick = (id, e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Auto-close on link click for manual/auto modes
    if (mode !== 'always') setOpen(false);
  };

  return (
    <React.Fragment>
      <div className={`sidebar-backdrop ${open && mode !== 'always' ? 'show' : ''}`} onClick={() => setOpen(false)}></div>
      <aside className={`sidebar ${open ? 'open' : ''}`} onMouseLeave={() => { if (mode === 'auto') setOpen(false); }}>
        <div className="sidebar-head">
          <div className="sidebar-brand">
            <div className="sb-logo">School Smart <span className="pro">Pro</span></div>
            <div className="sb-sub">القائمة الجانبية</div>
          </div>
          <button className="sidebar-close" onClick={() => setOpen(false)} aria-label="إغلاق">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" width="18" height="18"><path d="M6 6l12 12M6 18 18 6"/></svg>
          </button>
        </div>

        <div className="sidebar-section">
          <h5>التنقل</h5>
          <ul className="sidebar-nav">
            {navItems.map((it, i) => (
              <li key={it.id}>
                <a href={`#${it.id}`} className={i === 0 ? 'active' : ''} onClick={(e) => handleNavClick(it.id, e)}>
                  <span className="ico">{it.ico}</span>
                  <span>{it.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h5>وضع الشريط الجانبي</h5>
          <div className="sidebar-mode-grid">
            {modes.map(m => (
              <button key={m.id} className={`mode-opt ${mode === m.id ? 'active' : ''}`} onClick={() => setMode(m.id)}>
                <span className="mode-radio"></span>
                <div className="mode-meta">
                  <div className="mode-name">{m.name}</div>
                  <div className="mode-desc">{m.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="sidebar-cta">
          <button className="sb-btn">طلب تجربة مجانية</button>
        </div>
      </aside>
    </React.Fragment>
  );
}

function App() {
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem('ssp-theme') || 'classic'; } catch(e) { return 'classic'; }
  });
  const [sidebarMode, setSidebarMode] = React.useState(() => {
    try { return localStorage.getItem('ssp-sidebar-mode') || 'manual'; } catch(e) { return 'manual'; }
  });
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('ssp-theme', theme); } catch(e) {}
  }, [theme]);

  React.useEffect(() => {
    try { localStorage.setItem('ssp-sidebar-mode', sidebarMode); } catch(e) {}
    if (sidebarMode === 'always') {
      document.body.classList.add('sidebar-always');
      setSidebarOpen(true);
    } else {
      document.body.classList.remove('sidebar-always');
      setSidebarOpen(false);
    }
  }, [sidebarMode]);

  const handleEdgeEnter = () => { if (sidebarMode === 'auto') setSidebarOpen(true); };
  const showToggle = sidebarMode !== 'always';

  return (
    <React.Fragment>
      <Navbar
        theme={theme}
        themePicker={<ThemePicker theme={theme} setTheme={setTheme}/>}
        onHamburger={() => setSidebarOpen(true)}
      />
      <Hero/>
      <Services/>
      <Stats/>
      <About/>
      <Footer/>

      {sidebarMode === 'auto' && !sidebarOpen && (
        <div className="edge-trigger" onMouseEnter={handleEdgeEnter}></div>
      )}

      {showToggle && (
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(o => !o)}
          aria-label="فتح/إغلاق القائمة الجانبية"
        >
          {sidebarOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" width="20" height="20"><path d="M6 6l12 12M6 18 18 6"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" width="20" height="20"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          )}
        </button>
      )}

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        mode={sidebarMode}
        setMode={setSidebarMode}
        theme={theme}
      />
    </React.Fragment>
  );
}

export default App;
