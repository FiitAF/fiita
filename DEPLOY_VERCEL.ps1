# سكريبت نشر سريع على Vercel
# للتشغيل: .\DEPLOY_VERCEL.ps1

Write-Host "🚀 نشر FiitA على Vercel" -ForegroundColor Green
Write-Host ""

# تأكد من المجلد الصحيح
cd "$env:USERPROFILE\OneDrive\Desktop\FiitA25 woh\fiita-app"

if (-not (Test-Path .\package.json)) {
    Write-Host "❌ package.json غير موجود!" -ForegroundColor Red
    Write-Host "تأكد إنك في المجلد الصحيح" -ForegroundColor Yellow
    return
}

Write-Host "✅ package.json موجود" -ForegroundColor Green
Write-Host ""

# تثبيت Vercel CLI
Write-Host "📦 تثبيت Vercel CLI..." -ForegroundColor Cyan
npm install -g vercel

Write-Host ""
Write-Host "🔐 تسجيل الدخول لـ Vercel..." -ForegroundColor Cyan
Write-Host "(سيفتح المتصفح للتسجيل)" -ForegroundColor Yellow
vercel login

Write-Host ""
Write-Host "🚀 نشر التطبيق..." -ForegroundColor Cyan
Write-Host "(اضغط Enter على كل الأسئلة)" -ForegroundColor Yellow
vercel --prod

Write-Host ""
Write-Host "✅ تم النشر بنجاح!" -ForegroundColor Green
Write-Host "الرابط موجود فوق ☝️" -ForegroundColor Yellow

