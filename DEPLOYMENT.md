# دليل نشر تطبيق FiitA 🚀

هذا الدليل يشرح كيفية نشر التطبيق على منصات مختلفة.

---

## 📋 قبل النشر

### 1. اختبر التطبيق محلياً
```bash
cd fiita-app
npm install
npm run build
npm start
```

افتح `http://localhost:3000` وتأكد من:
- ✅ رفع الصور يعمل
- ✅ الكاميرا تعمل (على HTTPS فقط)
- ✅ إدخال النص يعمل
- ✅ التحليل يعمل
- ✅ الانتقال لصفحة النتائج يعمل
- ✅ التمارين تظهر بشكل صحيح

### 2. (اختياري) أضف Nutritionix API
للحصول على دقة أفضل في القيم الغذائية:

1. اذهب إلى [Nutritionix API](https://www.nutritionix.com/business/api)
2. سجل حساب مجاني
3. احصل على `APP_ID` و `API_KEY`
4. أنشئ ملف `.env.local`:
```bash
NEXT_PUBLIC_NUTRITIONIX_API_KEY=your_api_key_here
NUTRITIONIX_APP_ID=your_app_id_here
```

> **ملاحظة:** التطبيق يعمل بشكل ممتاز بدون API باستخدام قاعدة البيانات المحلية.

---

## 🌐 النشر على Vercel (موصى به)

### الطريقة 1: عبر واجهة Vercel

1. **رفع الكود على GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: FiitA app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fiita-app.git
git push -u origin main
```

2. **اذهب إلى [Vercel](https://vercel.com)**

3. **اضغط "New Project"**

4. **استورد من GitHub** - اختر مستودع `fiita-app`

5. **إعدادات المشروع:**
   - Framework Preset: `Next.js`
   - Root Directory: `fiita-app`
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. **المتغيرات البيئية (اختياري):**
   - أضف `NEXT_PUBLIC_NUTRITIONIX_API_KEY`
   - أضف `NUTRITIONIX_APP_ID`

7. **اضغط "Deploy"** 🎉

### الطريقة 2: عبر Vercel CLI

```bash
npm install -g vercel
cd fiita-app
vercel
```

اتبع التعليمات في الشاشة.

---

## 🔷 النشر على Netlify

### 1. رفع على GitHub
```bash
git init
git add .
git commit -m "FiitA initial commit"
git push origin main
```

### 2. الإعدادات في Netlify
1. اذهب إلى [Netlify](https://netlify.com)
2. "Add new site" → "Import from Git"
3. اختر GitHub repository
4. **Build settings:**
   - Base directory: `fiita-app`
   - Build command: `npm run build`
   - Publish directory: `fiita-app/.next`

5. **متغيرات البيئة:**
   - Site settings → Environment variables
   - أضف API keys (إن وُجدت)

6. Deploy!

### ملاحظة مهمة لـ Netlify:
أضف ملف `netlify.toml` في `fiita-app/`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🚂 النشر على Railway

### 1. التحضير
أنشئ ملف `railway.json` في `fiita-app/`:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### 2. النشر
1. اذهب إلى [Railway](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. اختر repository
4. سيتم رصد Next.js تلقائياً
5. أضف متغيرات البيئة (إن وُجدت)
6. Deploy!

---

## 🐳 النشر على Docker

### 1. أنشئ `Dockerfile` في `fiita-app/`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### 2. أضف للـ `next.config.ts`:

```typescript
export default {
  output: 'standalone',
  // ... باقي الإعدادات
}
```

### 3. بناء وتشغيل:

```bash
docker build -t fiita-app .
docker run -p 3000:3000 fiita-app
```

---

## 🌊 النشر على DigitalOcean App Platform

1. **اذهب إلى [DigitalOcean](https://www.digitalocean.com)**

2. **Apps → Create App**

3. **اختر GitHub repository**

4. **الإعدادات:**
   - Type: `Web Service`
   - Environment: `Node.js`
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - HTTP Port: `3000`

5. **أضف متغيرات البيئة**

6. **Launch!**

---

## ⚙️ إعدادات إضافية للإنتاج

### 1. Domain مخصص
في أي منصة، يمكنك ربط domain مخصص:
- Vercel: Settings → Domains
- Netlify: Domain settings → Add custom domain
- Railway: Settings → Domains

### 2. SSL/HTTPS
جميع المنصات توفر SSL مجاني تلقائياً ✅

### 3. تحسين الأداء

في `next.config.ts`:
```typescript
export default {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
```

### 4. Analytics (اختياري)

أضف Google Analytics أو Vercel Analytics:

```bash
npm install @vercel/analytics
```

في `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 🐛 حل مشاكل النشر

### المشكلة: Build يفشل
**الحل:**
1. تأكد من `package.json` صحيح
2. حذف `node_modules` و `.next`
3. `npm install` و `npm run build` محلياً

### المشكلة: الكاميرا لا تعمل
**الحل:** الكاميرا تحتاج HTTPS - تأكد من:
- النشر على domain بـ SSL
- استخدام https:// وليس http://

### المشكلة: البيئة المتغيرات لا تعمل
**الحل:**
- للمتغيرات العامة: استخدم `NEXT_PUBLIC_` prefix
- للمتغيرات الخاصة (server-side): بدون prefix
- أعد deploy بعد إضافة المتغيرات

### المشكلة: صفحة 404
**الحل:**
- تأكد من Root Directory صحيح
- تأكد من Output Directory هو `.next`

---

## 📊 المراقبة والصيانة

### 1. لوغات Logs
- **Vercel:** Dashboard → Deployments → Function Logs
- **Netlify:** Site → Deploys → Deploy log
- **Railway:** Project → Deployments → Logs

### 2. تحديثات
عند تحديث الكود:
```bash
git add .
git commit -m "تحديث: وصف التحديث"
git push
```

جميع المنصات ستعيد النشر تلقائياً! 🔄

### 3. Rollback
إذا حصل خطأ:
- **Vercel:** Deployments → اختر نسخة قديمة → Promote to Production
- **Netlify:** Deploys → اختر deploy قديم → Publish deploy

---

## ✅ قائمة التحقق قبل النشر

- [ ] التطبيق يعمل محلياً بدون أخطاء
- [ ] `npm run build` ينجح
- [ ] جميع الصفحات تعمل (home, results)
- [ ] رفع الصور، الكاميرا، النص كلها تعمل
- [ ] التحليل يعطي نتائج صحيحة
- [ ] التمارين تظهر بشكل صحيح
- [ ] README محدّث
- [ ] متغيرات البيئة جاهزة (إن وُجدت)
- [ ] .gitignore يحتوي على `.env.local`, `node_modules`, `.next`

---

## 🎉 بعد النشر

1. **اختبر التطبيق Live:**
   - جرب جميع المزايا
   - اختبر على أجهزة مختلفة
   - تأكد من HTTPS يعمل

2. **شارك الرابط:**
   - أضف الرابط في README
   - شاركه على السوشيال ميديا
   - اجمع feedback من المستخدمين

3. **راقب الأداء:**
   - تابع الـ logs
   - راقب الأخطاء
   - تحقق من سرعة التحميل

---

## 💡 نصائح إضافية

### التكلفة
جميع المنصات تقدم خطة مجانية ممتازة:
- **Vercel:** مجاني للمشاريع الشخصية
- **Netlify:** 100GB bandwidth/month مجاناً
- **Railway:** $5 credit شهرياً مجاناً

### السرعة
لأفضل أداء:
1. استخدم CDN (Vercel/Netlify يوفرونها)
2. فعّل caching
3. ضغط الصور قبل الرفع

### الأمان
- لا تشارك `.env.local` في GitHub
- أضف `.env.local` في `.gitignore`
- استخدم متغيرات البيئة في المنصة

---

**تهانينا! التطبيق الآن جاهز للعالم! 🎊**

للمساعدة: افتح Issue على GitHub

