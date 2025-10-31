import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'شروط الاستخدام - FiitA',
  description: 'شروط وأحكام استخدام تطبيق FiitA للتغذية واللياقة البدنية',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-4xl mx-auto px-6 py-12 pb-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            📜 شروط الاستخدام
          </h1>
          <p className="text-neutral-600">
            آخر تحديث: أكتوبر 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Welcome */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              👋 مرحباً بك في FiitA
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              باستخدامك لتطبيق <strong>FiitA</strong>، فإنك توافق على هذه الشروط والأحكام.
              يُرجى قراءتها بعناية قبل استخدام التطبيق.
            </p>
          </section>

          {/* Section 1: Acceptance */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              ✅ قبول الشروط
            </h2>
            <div className="space-y-3 text-neutral-700">
              <p>
                باستخدام FiitA، أنت توافق على:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>الالتزام بجميع الشروط والأحكام</li>
                <li>الالتزام بسياسة الخصوصية</li>
                <li>استخدام التطبيق بطريقة قانونية وأخلاقية</li>
                <li>تحمل مسؤولية أي نشاط يتم من حسابك</li>
              </ul>
              <p className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded">
                <strong>تنبيه:</strong> إذا لم توافق على هذه الشروط، يُرجى عدم استخدام التطبيق.
              </p>
            </div>
          </section>

          {/* Section 2: Service Description */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              📱 وصف الخدمة
            </h2>
            <div className="space-y-3 text-neutral-700">
              <p><strong>FiitA</strong> يوفر:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-xl">
                  <p className="font-semibold mb-2">✅ المجاني:</p>
                  <ul className="text-sm space-y-1">
                    <li>• 3 تحليلات يومية</li>
                    <li>• تمارين أساسية</li>
                    <li>• نصائح عامة</li>
                    <li>• عرض إعلانات</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="font-semibold mb-2">⭐ المدفوع:</p>
                  <ul className="text-sm space-y-1">
                    <li>• تحليلات غير محدودة</li>
                    <li>• تمارين متقدمة</li>
                    <li>• خطط مخصصة</li>
                    <li>• بدون إعلانات</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              👤 مسؤوليات المستخدم
            </h2>
            <div className="space-y-3 text-neutral-700">
              <p>أنت توافق على:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li><strong>تقديم معلومات صحيحة:</strong> العمر، الطول، الوزن، إلخ</li>
                <li><strong>عدم إساءة الاستخدام:</strong> لا spam أو محتوى مسيء</li>
                <li><strong>حماية حسابك:</strong> الحفاظ على أمان بياناتك</li>
                <li><strong>احترام الآخرين:</strong> في حال وجود مجتمع</li>
                <li><strong>الاستخدام الشخصي فقط:</strong> لا إعادة بيع أو توزيع</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Prohibited Uses */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              🚫 الاستخدامات المحظورة
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <p className="font-semibold text-neutral-800 mb-3">
                ممنوع استخدام FiitA لـ:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>أنشطة غير قانونية أو احتيالية</li>
                <li>رفع محتوى مسيء أو غير لائق</li>
                <li>محاولة اختراق أو تعطيل الخدمة</li>
                <li>جمع بيانات المستخدمين الآخرين</li>
                <li>استخدام روبوتات أو أدوات آلية</li>
                <li>انتهاك حقوق الملكية الفكرية</li>
              </ul>
              <p className="mt-4 text-red-700 font-semibold">
                ⚠️ مخالفة هذه الشروط قد يؤدي إلى إيقاف حسابك فوراً
              </p>
            </div>
          </section>

          {/* Section 5: Medical Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              ⚕️ إخلاء المسؤولية الطبية
            </h2>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
              <p className="text-neutral-700 leading-relaxed space-y-3">
                <strong className="text-orange-700 block mb-2">
                  🚨 مهم جداً - يُرجى القراءة:
                </strong>
                <span className="block">
                  • <strong>FiitA ليس بديلاً عن الاستشارة الطبية.</strong> المعلومات المقدمة هي لأغراض تعليمية فقط.
                </span>
                <span className="block">
                  • <strong>استشر طبيبك</strong> قبل البدء بأي نظام غذائي أو برنامج رياضي.
                </span>
                <span className="block">
                  • <strong>لا نتحمل المسؤولية</strong> عن أي إصابات أو مشاكل صحية ناتجة عن استخدام التطبيق.
                </span>
                <span className="block">
                  • <strong>القيم الغذائية</strong> المقدمة هي تقديرية وقد تختلف عن الواقع.
                </span>
              </p>
            </div>
          </section>

          {/* Section 6: Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              ©️ الملكية الفكرية
            </h2>
            <div className="space-y-3 text-neutral-700">
              <p>
                جميع المحتويات في FiitA (الشعار، التصميم، الكود، النصوص، إلخ) محمية بحقوق الملكية الفكرية.
              </p>
              <div className="bg-neutral-100 rounded-xl p-4">
                <p className="font-semibold mb-2">✅ يمكنك:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>استخدام التطبيق للأغراض الشخصية</li>
                  <li>مشاركة نتائجك على السوشيال ميديا</li>
                </ul>
                <p className="font-semibold mt-4 mb-2">❌ لا يمكنك:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>نسخ أو تعديل التطبيق</li>
                  <li>إعادة بيع أو توزيع المحتوى</li>
                  <li>إزالة علامات حقوق الملكية</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Payment & Subscriptions */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              💳 الدفع والاشتراكات
            </h2>
            <div className="space-y-3 text-neutral-700">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-semibold mb-2">الخطط المدفوعة:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>الدفع:</strong> يتم عبر Stripe (آمن ومشفر)</li>
                  <li><strong>التجديد:</strong> تلقائي ما لم يتم الإلغاء</li>
                  <li><strong>الإلغاء:</strong> يمكنك الإلغاء أي وقت من الملف الشخصي</li>
                  <li><strong>الاسترداد:</strong> خلال 14 يوم من الشراء</li>
                  <li><strong>الضرائب:</strong> قد تُضاف حسب بلدك</li>
                </ul>
              </div>
              <p className="text-sm text-neutral-600">
                <strong>ملاحظة:</strong> الأسعار قابلة للتغيير، وسيتم إشعارك مسبقاً.
              </p>
            </div>
          </section>

          {/* Section 8: Termination */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              🔚 إنهاء الخدمة
            </h2>
            <div className="space-y-3 text-neutral-700">
              <p>نحتفظ بالحق في:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>إيقاف أو حذف حسابك في حال مخالفة الشروط</li>
                <li>تعديل أو إيقاف الخدمة أي وقت</li>
                <li>رفض الخدمة لأي شخص</li>
              </ul>
              <p className="bg-emerald-50 p-4 rounded-xl">
                <strong>أنت يمكنك:</strong> حذف حسابك أي وقت من الملف الشخصي.
              </p>
            </div>
          </section>

          {/* Section 9: Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              ⚖️ إخلاء المسؤولية والضمانات
            </h2>
            <div className="space-y-3 text-neutral-700">
              <p>
                <strong>FiitA يُقدم &quot;كما هو&quot;</strong> بدون أي ضمانات صريحة أو ضمنية:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4 text-sm">
                <li>لا نضمن دقة المعلومات الغذائية بنسبة 100%</li>
                <li>لا نضمن النتائج (خسارة الوزن، بناء العضلات، إلخ)</li>
                <li>لا نضمن خلو الخدمة من الأخطاء أو الانقطاعات</li>
                <li>لا نضمن توافق التطبيق مع جميع الأجهزة</li>
              </ul>
            </div>
          </section>

          {/* Section 10: Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              🛡️ حدود المسؤولية
            </h2>
            <div className="bg-neutral-100 rounded-xl p-6">
              <p className="text-neutral-700 leading-relaxed">
                لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية 
                ناتجة عن:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-neutral-600 text-sm">
                <li>استخدام أو عدم القدرة على استخدام الخدمة</li>
                <li>أي أخطاء أو سهو في المحتوى</li>
                <li>إصابات أو مشاكل صحية</li>
                <li>فقدان بيانات أو أرباح</li>
              </ul>
              <p className="mt-4 text-neutral-800 font-semibold">
                الحد الأقصى لمسؤوليتنا: قيمة اشتراكك (إن وُجد)
              </p>
            </div>
          </section>

          {/* Section 11: Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              📝 تعديل الشروط
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط أي وقت. سيتم:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-neutral-700">
              <li>نشر الإصدار الجديد على هذه الصفحة</li>
              <li>تحديث تاريخ &quot;آخر تحديث&quot; في الأعلى</li>
              <li>إشعارك بالتغييرات الكبيرة عبر البريد الإلكتروني</li>
            </ul>
            <p className="mt-4 text-neutral-700">
              <strong>استمرارك باستخدام التطبيق</strong> بعد التعديلات يعني موافقتك عليها.
            </p>
          </section>

          {/* Section 12: Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              ⚖️ القانون الحاكم
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              هذه الشروط تخضع لقوانين <strong>المملكة العربية السعودية</strong>.
              أي نزاعات ستُحل عبر التحكيم في الرياض، السعودية.
            </p>
          </section>

          {/* Section 13: Contact */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              📧 اتصل بنا
            </h2>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6">
              <p className="text-neutral-700 mb-4">
                إذا كان لديك أي أسئلة عن شروط الاستخدام:
              </p>
              <div className="space-y-2 text-neutral-800">
                <p>📧 <strong>البريد الإلكتروني:</strong> legal@fiita.app</p>
                <p>🌐 <strong>الموقع:</strong> https://fiita.app</p>
                <p>📱 <strong>الدعم:</strong> support@fiita.app</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t-2 border-emerald-200 pt-6">
            <p className="text-center text-neutral-600 text-sm">
              صُنع بـ ❤️ والتزام بالشفافية<br />
              <strong className="text-emerald-700">FiitA - شروط عادلة للجميع 📜</strong>
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

