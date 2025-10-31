# سكريبت نشر على Netlify
# للتشغيل: .\DEPLOY_NETLIFY.ps1

Write-Host "🚀 نشر FiitA على Netlify" -ForegroundColor Green
Write-Host ""

# تأكد من المجلد الصحيح
cd "$env:USERPROFILE\OneDrive\Desktop\FiitA25 woh\fiita-app"

if (-not (Test-Path .\package.json)) {
    Write-Host "❌ package.json غير موجود!" -ForegroundColor Red
    return
}

Write-Host "✅ package.json موجود" -ForegroundColor Green
Write-Host ""

# تثبيت المكتبات
Write-Host "📦 تثبيت المكتبات..." -ForegroundColor Cyan
npm install

# بناء التطبيق
Write-Host ""
Write-Host "🔨 بناء التطبيق..." -ForegroundColor Cyan
$env:NODE_ENV="production"
npm run build

# تثبيت Netlify CLI
Write-Host ""
Write-Host "📦 تثبيت Netlify CLI..." -ForegroundColor Cyan
npm install -g netlify-cli

# تسجيل الدخول
Write-Host ""
Write-Host "🔐 تسجيل الدخول لـ Netlify..." -ForegroundColor Cyan
Write-Host "(سيفتح المتصفح للتسجيل)" -ForegroundColor Yellow
netlify login

# النشر
Write-Host ""
Write-Host "🚀 نشر التطبيق..." -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️ ملاحظة: Next.js 15 يحتاج إعداد خاص على Netlify" -ForegroundColor Yellow
Write-Host "الأفضل استخدام Vercel للنشر السريع" -ForegroundColor Yellow
Write-Host ""

# نشر مجلد .next
netlify deploy --prod --dir=.next

Write-Host ""
Write-Host "✅ تم محاولة النشر" -ForegroundColor Green
Write-Host "إذا ما اشتغل، استخدم Vercel أفضل!" -ForegroundColor Yellow

