import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto bg-emerald-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          {/* عن FiitA */}
          <div>
            <h3 className="font-bold text-lg mb-4">FiitA</h3>
            <p className="text-sm text-emerald-100">
              تطبيقك الذكي للتغذية والرياضة. حلل وجباتك واحصل على تمارين مخصصة لأهدافك.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-emerald-100 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-emerald-100 hover:text-white transition-colors">
                  التحليل
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-emerald-100 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-emerald-100 hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* سياسات */}
          <div>
            <h3 className="font-bold text-lg mb-4">السياسات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-emerald-100 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-emerald-100 hover:text-white transition-colors">
                  شروط الاستخدام
                </Link>
              </li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-2 text-sm text-emerald-100">
              <li>📧 info@fiita.app</li>
              <li>📱 +966 XX XXX XXXX</li>
              <li>🇸🇦 الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t border-emerald-600 pt-6 text-center">
          <p className="text-sm text-emerald-100">
            © {new Date().getFullYear()} FiitA. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-emerald-200 mt-2">
            صُنع بـ ❤️ في المملكة العربية السعودية
          </p>
        </div>
      </div>
    </footer>
  );
}


