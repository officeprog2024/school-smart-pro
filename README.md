# School Smart Pro

منصة الإدارة المدرسية الذكية - صفحة هبوط مع 4 تصاميم قابلة للتبديل.

## التشغيل

```bash
# 1. تثبيت المتطلبات (مرة واحدة)
npm install

# 2. تشغيل خادم التطوير
npm run dev
```

سيفتح المتصفح تلقائياً على http://localhost:5173

## البناء للإنتاج

```bash
npm run build      # ينتج مجلد dist/
npm run preview    # معاينة البناء النهائي
```

### متى تستخدم كل أمر؟

| الأمر | متى تستخدمه |
|---|---|
| `npm run dev` | **أثناء التطوير والتجربة** — خادم محلي مع التحديث التلقائي (Hot Reload). هذا ما تحتاجه في الغالب. |
| `npm run build` | **عند النشر على الإنترنت فقط** — ينتج ملفات HTML/CSS/JS مُحسَّنة جاهزة للرفع على استضافة (Netlify / Vercel / أي استضافة ثابتة). |
| `npm run preview` | لمعاينة ناتج `build` محلياً قبل النشر. |

**بمعنى آخر:**
- 🟢 تستعرض وتعدّل وتجرب → `npm run dev` فقط.
- 🟢 خلصت التصميم وتبي ترفعه على موقع → نفّذ `npm run build` ثم ارفع محتويات مجلد `dist/`.

---

## تعليمات استخدام GitHub و Git مع Claude Design

### المتطلبات (مرة واحدة فقط)

1. ثبّت [Git](https://git-scm.com).
2. أنشئ حساباً على [GitHub](https://github.com) إن لم يكن لديك.

### رفع المشروع لأول مرة

1. أنشئ repo جديداً على [github.com/new](https://github.com/new) باسم `school-smart-pro` (بدون أي ملفات افتراضية).
2. من Terminal داخل مجلد `vite-project`:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/school-smart-pro.git
git push -u origin main
```

> استبدل `USERNAME` باسم مستخدمك على GitHub.

### سير العمل عند كل تحديث من Claude

1. حمّل الملفات المُعدَّلة (عادةً `App.jsx` و `styles.css`).
2. استبدلها في `vite-project/src/`.
3. ارفعها لـ GitHub:

```bash
git add .
git commit -m "Update from Claude"
git push
```

### العمل على جهاز آخر

```bash
git clone https://github.com/USERNAME/school-smart-pro.git
cd school-smart-pro
npm install
npm run dev
```

### التراجع لإصدار سابق

```bash
git log --oneline              # عرض كل التعديلات
git checkout HASH -- file.jsx  # استرجاع ملف معين
```

### النشر المباشر على الإنترنت (اختياري)

- **[Vercel](https://vercel.com)** — Import Project → اختر المستودع → النشر تلقائي.
- **[Netlify](https://netlify.com)** — نفس الفكرة، يدعم Vite تلقائياً.

عند كل `git push` يتحدّث الموقع المنشور تلقائياً.

## الأنماط المتوفرة

- **كلاسيكي** — كحلي + برتقالي (مؤسسي)
- **وزارة التعليم** — تركواز/أزرق/أخضر (مستوحى من هوية MOE)
- **حيوي** — Glassmorphism بألوان زاهية
- **مينيمال** — أبيض/أسود + لمسة صدئة

التبديل من المبدّل في أسفل اليسار. التفضيل محفوظ في localStorage.

## هيكل المشروع

```
vite-project/
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx        نقطة الدخول
    ├── App.jsx         جميع المكونات
    └── styles.css      الأنماط + متغيرات الـ themes
```
