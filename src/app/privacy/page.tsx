import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية - FiitA',
  description: 'سياسة الخصوصية وحماية البيانات في تطبيق FiitA',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-4xl mx-auto px-6 py-12 pb-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            🔐 سياسة الخصوصية
          </h1>
          <p className="text-neutral-600">
            آخر تحديث: أكتوبر 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              📋 نظرة عامة
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              نحن في <strong>FiitA</strong> نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. 
              هذه السياسة توضح كيفية جمع واستخدام وحماية معلوماتك.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              📊 المعلومات التي نجمعها
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  المعلومات التي تقدمها طوعاً:
                </h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-1 mr-4">
                  <li>الاسم (اختياري)</li>
                  <li>العمر (اختياري)</li>
                  <li>الطول والوزن (اختياري)</li>
                  <li>الأهداف الرياضية</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  المعلومات التي نجمعها تلقائياً:
                </h3>
                <ul className="list-disc list-inside text-neutral-700 space-y-1 mr-4">
                  <li>صور الوجبات (للتحليل فقط - لا نحفظها)</li>
                  <li>نوع الجهاز والمتصفح</li>
                  <li>إحصائيات الاستخدام</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              💾 تخزين البيانات
            </h2>
            <div className="bg-emerald-50 rounded-xl p-6 space-y-3">
              <p className="text-neutral-700">
                <strong className="text-emerald-700">✅ البيانات المحلية:</strong> 
                {' '}تُحفظ في متصفحك فقط (LocalStorage)
              </p>
              <p className="text-neutral-700">
                <strong className="text-red-600">❌ صور الوجبات:</strong> 
                {' '}لا نحفظها على السيرفر أبداً
              </p>
              <p className="text-neutral-700">
                <strong className="text-emerald-700">✅ الإحصائيات:</strong> 
                {' '}مجهولة الهوية فقط
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              🔒 حماية البيانات
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-4">
                <p className="font-semibold text-neutral-800 mb-2">🔐 HTTPS</p>
                <p className="text-sm text-neutral-600">جميع الاتصالات مشفرة</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4">
                <p className="font-semibold text-neutral-800 mb-2">🗄️ No Database</p>
                <p className="text-sm text-neutral-600">لا نحفظ بيانات شخصية</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-4">
                <p className="font-semibold text-neutral-800 mb-2">📱 Local First</p>
                <p className="text-sm text-neutral-600">بياناتك في متصفحك</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4">
                <p className="font-semibold text-neutral-800 mb-2">🚫 No Tracking</p>
                <p className="text-sm text-neutral-600">لا نتتبع هويتك</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              🎯 Google AdSense
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              نستخدم <strong>Google AdSense</strong> لعرض الإعلانات للمستخدمين المجانيين. 
              يمكنك التحكم بإعلانات Google من:
            </p>
            <a 
              href="https://adssettings.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
            >
              إعدادات إعلانات Google
            </a>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              📧 حقوقك
            </h2>
            <p className="text-neutral-700 mb-4">
              لديك الحق في:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mr-4">
              <li><strong>الوصول:</strong> معرفة أي بيانات لدينا عنك</li>
              <li><strong>التصحيح:</strong> تصحيح البيانات الخاطئة</li>
              <li><strong>الحذف:</strong> طلب حذف بياناتك</li>
              <li><strong>الاعتراض:</strong> الاعتراض على معالجة بياناتك</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              🗑️ حذف بياناتك
            </h2>
            <div className="bg-neutral-100 rounded-xl p-6">
              <p className="text-neutral-700 mb-4">
                لحذف جميع بياناتك المحلية:
              </p>
              <div className="bg-neutral-900 text-emerald-400 p-4 rounded-lg font-mono text-sm">
                <p>{/* افتح Console (F12) واكتب: */}</p>
                <p>localStorage.clear();</p>
                <p>location.reload();</p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              📬 اتصل بنا
            </h2>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6">
              <p className="text-neutral-700 mb-4">
                إذا كان لديك أي أسئلة عن سياسة الخصوصية:
              </p>
              <p className="text-neutral-800">
                📧 <strong>البريد الإلكتروني:</strong> privacy@fiita.app<br />
                🌐 <strong>الموقع:</strong> https://fiita.app
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t-2 border-emerald-200 pt-6">
            <p className="text-center text-neutral-600 text-sm">
              صُنع بـ ❤️ واحترام لخصوصيتك<br />
              <strong className="text-emerald-700">FiitA - خصوصيتك أولويتنا! 🔐</strong>
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link 
            href="/"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition border-2 border-emerald-200"
          >
            ← العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

