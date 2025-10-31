import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'اتصل بنا - FiitA',
  description: 'تواصل مع فريق FiitA - نحن هنا لمساعدتك',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6 py-12 pb-24">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">📬</div>
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">
            تواصل معنا
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            نحن هنا لمساعدتك! يسعدنا سماع آرائك واقتراحاتك
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📧</div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    البريد الإلكتروني
                  </h3>
                  <p className="text-neutral-600 mb-3">
                    راسلنا وسنرد خلال 24-48 ساعة
                  </p>
                  <a 
                    href="mailto:info@fiita.app"
                    className="text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    info@fiita.app
                  </a>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🆘</div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    الدعم الفني
                  </h3>
                  <p className="text-neutral-600 mb-3">
                    مشاكل تقنية أو أسئلة عن الاستخدام
                  </p>
                  <a 
                    href="mailto:support@fiita.app"
                    className="text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    support@fiita.app
                  </a>
                </div>
              </div>
            </div>

            {/* Business */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💼</div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    التعاون التجاري
                  </h3>
                  <p className="text-neutral-600 mb-3">
                    شراكات، إعلانات، أو تعاون
                  </p>
                  <a 
                    href="mailto:business@fiita.app"
                    className="text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    business@fiita.app
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔐</div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    الخصوصية والأمان
                  </h3>
                  <p className="text-neutral-600 mb-3">
                    أسئلة عن البيانات أو الخصوصية
                  </p>
                  <a 
                    href="mailto:privacy@fiita.app"
                    className="text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    privacy@fiita.app
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              أرسل رسالة
            </h2>
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-neutral-700 font-semibold mb-2">
                  الاسم
                </label>
                <input 
                  type="text"
                  placeholder="أدخل اسمك"
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-neutral-700 font-semibold mb-2">
                  البريد الإلكتروني
                </label>
                <input 
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-neutral-700 font-semibold mb-2">
                  الموضوع
                </label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none transition">
                  <option>اختر الموضوع</option>
                  <option>استفسار عام</option>
                  <option>مشكلة تقنية</option>
                  <option>اقتراح</option>
                  <option>شكوى</option>
                  <option>تعاون تجاري</option>
                  <option>أخرى</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-neutral-700 font-semibold mb-2">
                  الرسالة
                </label>
                <textarea 
                  rows={5}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-500 focus:outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-4 rounded-xl hover:shadow-lg transition"
              >
                📤 إرسال الرسالة
              </button>

              <p className="text-sm text-neutral-500 text-center">
                سنرد على رسالتك خلال 24-48 ساعة
              </p>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            ❓ الأسئلة الشائعة
          </h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="border-r-4 border-emerald-500 bg-emerald-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                كيف يمكنني إلغاء اشتراكي؟
              </h3>
              <p className="text-neutral-700">
                يمكنك إلغاء اشتراكك أي وقت من صفحة الملف الشخصي → إدارة الاشتراك → إلغاء الاشتراك.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="border-r-4 border-blue-500 bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                هل بياناتي آمنة؟
              </h3>
              <p className="text-neutral-700">
                نعم! نحن نحترم خصوصيتك ولا نحفظ صور وجباتك. 
                راجع <a href="/privacy" className="text-blue-600 font-semibold">سياسة الخصوصية</a> للمزيد.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="border-r-4 border-purple-500 bg-purple-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                كيف أحصل على استرداد أموالي؟
              </h3>
              <p className="text-neutral-700">
                يمكنك طلب استرداد كامل خلال 14 يوم من الشراء. راسلنا على support@fiita.app.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="border-r-4 border-orange-500 bg-orange-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                هل التطبيق يعمل على الكمبيوتر؟
              </h3>
              <p className="text-neutral-700">
                نعم! FiitA يعمل على جميع الأجهزة: الموبايل، التابلت، والكمبيوتر.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            📱 تابعنا على السوشيال ميديا
          </h2>
          <p className="mb-6 text-emerald-50">
            كن أول من يعرف بالتحديثات والميزات الجديدة!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://twitter.com/fiitaapp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-neutral-800 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
            >
              🐦 Twitter
            </a>
            <a 
              href="https://instagram.com/fiitaapp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-neutral-800 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
            >
              📸 Instagram
            </a>
            <a 
              href="https://facebook.com/fiitaapp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-neutral-800 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
            >
              👥 Facebook
            </a>
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


