# 🚀 سكريبت النشر السريع - FiitA
# PowerShell Script for Quick Deployment

Write-Host "═══════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "    🚀 FiitA - سكريبت النشر السريع" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# التحقق من وجود git
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitInstalled) {
    Write-Host "❌ Git غير مثبت!" -ForegroundColor Red
    Write-Host "⬇️  حمّل Git من: https://git-scm.com/download/win" -ForegroundColor Yellow
    pause
    exit
}

Write-Host "✅ Git مثبت" -ForegroundColor Green
Write-Host ""

# التحقق من وجود Node.js
$nodeInstalled = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeInstalled) {
    Write-Host "❌ Node.js غير مثبت!" -ForegroundColor Red
    Write-Host "⬇️  حمّل Node.js من: https://nodejs.org" -ForegroundColor Yellow
    pause
    exit
}

Write-Host "✅ Node.js مثبت - الإصدار: $(node --version)" -ForegroundColor Green
Write-Host ""

# اختبار البناء
Write-Host "🔨 جاري اختبار البناء..." -ForegroundColor Yellow
Write-Host ""

try {
    npm run build
    Write-Host ""
    Write-Host "✅ البناء نجح!" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host ""
    Write-Host "❌ فشل البناء!" -ForegroundColor Red
    Write-Host "💡 راجع الأخطاء أعلاه وأصلحها أولاً" -ForegroundColor Yellow
    pause
    exit
}

# خيارات النشر
Write-Host "═══════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "    اختر طريقة النشر:" -ForegroundColor White
Write-Host "═══════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "1️⃣  Vercel (الأسهل - موصى به)" -ForegroundColor Green
Write-Host "2️⃣  Netlify" -ForegroundColor Blue
Write-Host "3️⃣  Railway" -ForegroundColor Magenta
Write-Host "4️⃣  رفع على GitHub فقط" -ForegroundColor Yellow
Write-Host "0️⃣  إلغاء" -ForegroundColor Red
Write-Host ""

$choice = Read-Host "اختر رقم (1-4)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "🌐 النشر على Vercel..." -ForegroundColor Cyan
        Write-Host ""
        Write-Host "الخطوات:" -ForegroundColor Yellow
        Write-Host "1. ارفع الكود على GitHub (سيتم ذلك الآن)" -ForegroundColor White
        Write-Host "2. اذهب إلى: https://vercel.com" -ForegroundColor White
        Write-Host "3. سجل دخول بحساب GitHub" -ForegroundColor White
        Write-Host "4. Add New Project → Import من GitHub" -ForegroundColor White
        Write-Host "5. اختر fiita-app واضغط Deploy" -ForegroundColor White
        Write-Host ""
        
        # سنقوم برفع على GitHub
        $continueGit = Read-Host "هل تريد رفع الكود على GitHub الآن؟ (y/n)"
        
        if ($continueGit -eq "y") {
            Write-Host ""
            Write-Host "📦 جاري التحضير لـ Git..." -ForegroundColor Yellow
            
            # تحقق من وجود .git
            if (-not (Test-Path ".git")) {
                Write-Host "🆕 إنشاء مستودع git جديد..." -ForegroundColor Yellow
                git init
                git branch -M main
            }
            
            Write-Host "📝 جاري إضافة الملفات..." -ForegroundColor Yellow
            git add .
            
            $commitMessage = Read-Host "أدخل رسالة commit (أو اضغط Enter للرسالة الافتراضية)"
            if ([string]::IsNullOrWhiteSpace($commitMessage)) {
                $commitMessage = "🚀 Ready for deployment"
            }
            
            git commit -m $commitMessage
            
            Write-Host ""
            Write-Host "⚠️  الآن تحتاج:" -ForegroundColor Yellow
            Write-Host "1. أنشئ repository جديد على GitHub" -ForegroundColor White
            Write-Host "2. انسخ رابط الـ repository" -ForegroundColor White
            Write-Host ""
            
            $repoUrl = Read-Host "ألصق رابط GitHub repository هنا (أو اضغط Enter للتخطي)"
            
            if (-not [string]::IsNullOrWhiteSpace($repoUrl)) {
                try {
                    git remote add origin $repoUrl 2>$null
                } catch {
                    git remote set-url origin $repoUrl
                }
                
                Write-Host ""
                Write-Host "📤 جاري الرفع على GitHub..." -ForegroundColor Yellow
                git push -u origin main
                
                Write-Host ""
                Write-Host "✅ تم الرفع على GitHub بنجاح!" -ForegroundColor Green
                Write-Host ""
                Write-Host "الآن اذهب إلى Vercel:" -ForegroundColor Cyan
                Write-Host "👉 https://vercel.com/new" -ForegroundColor White
                Write-Host ""
            }
        }
        
        Write-Host "📖 لمزيد من التفاصيل، راجع: DEPLOYMENT_GUIDE.md" -ForegroundColor Cyan
    }
    
    "2" {
        Write-Host ""
        Write-Host "🌐 النشر على Netlify..." -ForegroundColor Cyan
        Write-Host ""
        Write-Host "الخطوات:" -ForegroundColor Yellow
        Write-Host "1. اذهب إلى: https://app.netlify.com" -ForegroundColor White
        Write-Host "2. Add new site → Import from Git" -ForegroundColor White
        Write-Host "3. اختر GitHub واختر repository" -ForegroundColor White
        Write-Host "4. Build settings:" -ForegroundColor White
        Write-Host "   - Build command: npm run build" -ForegroundColor Gray
        Write-Host "   - Publish directory: .next" -ForegroundColor Gray
        Write-Host "5. Deploy!" -ForegroundColor White
        Write-Host ""
        Write-Host "📖 لمزيد من التفاصيل، راجع: DEPLOYMENT_GUIDE.md" -ForegroundColor Cyan
    }
    
    "3" {
        Write-Host ""
        Write-Host "🚂 النشر على Railway..." -ForegroundColor Cyan
        Write-Host ""
        Write-Host "الخطوات:" -ForegroundColor Yellow
        Write-Host "1. اذهب إلى: https://railway.app" -ForegroundColor White
        Write-Host "2. سجل دخول بحساب GitHub" -ForegroundColor White
        Write-Host "3. New Project → Deploy from GitHub" -ForegroundColor White
        Write-Host "4. اختر repository وانتظر" -ForegroundColor White
        Write-Host "5. Railway سيكتشف Next.js تلقائياً!" -ForegroundColor White
        Write-Host ""
        Write-Host "📖 لمزيد من التفاصيل، راجع: DEPLOYMENT_GUIDE.md" -ForegroundColor Cyan
    }
    
    "4" {
        Write-Host ""
        Write-Host "📦 رفع على GitHub فقط..." -ForegroundColor Yellow
        
        if (-not (Test-Path ".git")) {
            Write-Host "🆕 إنشاء مستودع git جديد..." -ForegroundColor Yellow
            git init
            git branch -M main
        }
        
        Write-Host "📝 جاري إضافة الملفات..." -ForegroundColor Yellow
        git add .
        
        $commitMessage = Read-Host "أدخل رسالة commit (أو اضغط Enter للرسالة الافتراضية)"
        if ([string]::IsNullOrWhiteSpace($commitMessage)) {
            $commitMessage = "🚀 FiitA v1.0 - Ready to deploy"
        }
        
        git commit -m $commitMessage
        
        Write-Host ""
        Write-Host "✅ Commit تم بنجاح!" -ForegroundColor Green
        Write-Host ""
        Write-Host "الآن:" -ForegroundColor Yellow
        Write-Host "1. أنشئ repository على GitHub" -ForegroundColor White
        Write-Host "2. نفّذ الأوامر التالية:" -ForegroundColor White
        Write-Host ""
        Write-Host "git remote add origin YOUR_REPO_URL" -ForegroundColor Gray
        Write-Host "git push -u origin main" -ForegroundColor Gray
        Write-Host ""
    }
    
    "0" {
        Write-Host ""
        Write-Host "❌ تم الإلغاء" -ForegroundColor Red
        exit
    }
    
    default {
        Write-Host ""
        Write-Host "❌ خيار غير صحيح!" -ForegroundColor Red
        exit
    }
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "    ✅ العملية اكتملت!" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "📚 ملفات مفيدة:" -ForegroundColor Yellow
Write-Host "   📄 DEPLOYMENT_GUIDE.md - دليل النشر الكامل" -ForegroundColor White
Write-Host "   📄 ADSENSE_SETUP.md - دليل تفعيل الإعلانات" -ForegroundColor White
Write-Host "   📄 PRIVACY_POLICY.md - سياسة الخصوصية" -ForegroundColor White
Write-Host ""
Write-Host "🎉 بالتوفيق! 💪" -ForegroundColor Green
Write-Host ""

pause

