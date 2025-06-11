
# منصة كورس بريدج - CoursBridge Connect 🎓

منصة تعليمية إلكترونية متطورة مصممة لربط الطلاب والمعلمين في بيئة تعليمية تفاعلية وحديثة.

## ✨ المميزات الرئيسية

- 🎯 **دورات متنوعة**: مجموعة واسعة من الدورات التعليمية في مختلف المجالات
- 👨‍🏫 **مدربين مؤهلين**: فريق من أفضل المدربين والخبراء
- 💬 **منتديات تفاعلية**: مساحة للنقاش والتفاعل بين الطلاب
- 📱 **تصميم متجاوب**: يعمل بسلاسة على جميع الأجهزة
- 🌐 **واجهة عربية**: دعم كامل للغة العربية والاتجاه من اليمين إلى اليسار

## 🚀 التقنيات المستخدمة

- **React 18** - مكتبة JavaScript لبناء واجهات المستخدم
- **TypeScript** - نظام أنواع البيانات المتقدم
- **Vite** - أداة بناء سريعة وحديثة
- **Tailwind CSS** - إطار عمل CSS للتصميم السريع
- **Shadcn/UI** - مكونات واجهة المستخدم الحديثة
- **React Router** - للتنقل بين الصفحات
- **TanStack Query** - إدارة حالة البيانات
- **Lucide React** - مكتبة الأيقونات

## 📋 متطلبات النظام

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn أو bun

## 🛠️ التثبيت والإعداد

### 1. استنساخ المشروع

```bash
git clone https://github.com/Rasheed1506993/coursebridge-connect.git
cd coursebridge-connect
```

### 2. تثبيت التبعيات

```bash
npm install
# أو
yarn install
# أو
bun install
```

### 3. تشغيل الخادم المحلي

```bash
npm run dev
# أو
yarn dev
# أو
bun dev
```

الآن يمكنك زيارة `http://localhost:8080` لرؤية المشروع يعمل محلياً.

## 🏗️ البناء للإنتاج

```bash
npm run build
# أو
yarn build
# أو
bun run build
```

سيتم إنشاء مجلد `dist` يحتوي على ملفات الإنتاج المُحسَّنة.

## 📁 هيكل المشروع

```
coursebridge-connect/
├── public/              # الملفات الثابتة
├── src/
│   ├── components/      # مكونات React القابلة لإعادة الاستخدام
│   │   └── ui/         # مكونات واجهة المستخدم الأساسية
│   ├── pages/          # صفحات التطبيق
│   ├── hooks/          # React Hooks مخصصة
│   ├── lib/            # وظائف مساعدة ومرافق
│   └── main.tsx        # نقطة دخول التطبيق
├── package.json
└── README.md
```

## 📄 الصفحات المتاحة

- **الصفحة الرئيسية** (`/`) - مقدمة عن المنصة والمميزات
- **الدورات** (`/courses`) - قائمة بجميع الدورات المتاحة
- **تفاصيل الدورة** (`/course/:id`) - معلومات مفصلة عن دورة معينة
- **المنتديات** (`/forums`) - منتديات النقاش والتفاعل
- **تسجيل الدخول** (`/login`) - صفحة تسجيل الدخول

## 🌐 النشر

تم نشر المشروع على GitHub Pages ويمكن الوصول إليه عبر:
[https://rasheed1506993.github.io/coursebridge-connect/](https://rasheed1506993.github.io/coursebridge-connect/)

### نشر محلي

يمكنك نشر المشروع على أي منصة استضافة ويب حديثة مثل:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 🎨 التخصيص

### الألوان والتصميم

يمكنك تخصيص ألوان المشروع من خلال تعديل ملف `src/index.css` و `tailwind.config.ts`.

### الخطوط

يستخدم المشروع خط "Tajawal" من Google Fonts المناسب للنصوص العربية.

## 🤝 المساهمة

نرحب بمساهماتكم! يرجى اتباع الخطوات التالية:

1. اعمل Fork للمشروع
2. أنشئ فرع جديد للميزة (`git checkout -b feature/amazing-feature`)
3. اعمل Commit للتغييرات (`git commit -m 'Add some amazing feature'`)
4. ادفع للفرع (`git push origin feature/amazing-feature`)
5. افتح Pull Request

## 📝 الترخيص

هذا المشروع مفتوح المصدر ومتاح تحت رخصة MIT.

## 📞 التواصل

- **المطور**: Rasheed
- **GitHub**: [Rasheed1506993](https://github.com/Rasheed1506993)
- **المشروع**: [coursebridge-connect](https://github.com/Rasheed1506993/coursebridge-connect)

## 🙏 شكر وتقدير

شكر خاص لـ:
- فريق React على هذه المكتبة الرائعة
- مطوري Tailwind CSS
- مجتمع shadcn/ui
- مجتمع المطورين العرب

---

⭐ إذا أعجبك هذا المشروع، لا تنس إعطاؤه نجمة على GitHub!
