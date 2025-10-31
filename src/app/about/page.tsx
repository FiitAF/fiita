import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'من نحن - FiitA',
  description: 'تعرف على FiitA - تطبيق التغذية والرياضة الذكي',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6 py-12 pb-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">💪</div>
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">
            من نحن
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            FiitA - رفيقك الذكي في رحلة الصحة واللياقة البدنية
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Story Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-emerald-700 mb-6">
              🌟 قصتنا
            </h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed text-lg">
              <p>
                بدأت <strong className="text-emerald-700">FiitA</strong> من فكرة بسيطة: 
                <em> جعل التغذية السليمة والرياضة متاحة للجميع</em>.
              </p>
              <p>
                كنا نرى الكثير من الناس يواجهون صعوبة في:
              </p>
              <ul className="list-disc list-inside mr-6 space-y-2">
                <li>معرفة السعرات الحرارية في وجباتهم</li>
                <li>اختيار التمارين المناسبة لأهدافهم</li>
                <li>الالتزام بنظام صحي</li>
                <li>تتبع تقدمهم</li>
              </ul>
              <p>
                فقررنا بناء حل <strong className="text-emerald-700">بسيط، ذكي، وعربي</strong> 
                {' '}يساعد الجميع في رحلة الصحة واللياقة.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              🎯 مهمتنا
            </h2>
            <p className="text-xl leading-relaxed">
              نسعى لجعل كل شخص في العالم العربي قادراً على:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-3">🍽️</div>
                <h3 className="font-bold text-xl mb-2">تحليل الوجبات</h3>
                <p className="text-emerald-50">
                  معرفة القيم الغذائية لأي وجبة في ثوانٍ
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-3">💪</div>
                <h3 className="font-bold text-xl mb-2">تمارين مخصصة</h3>
                <p className="text-emerald-50">
                  تمارين مناسبة لهدفك ومستواك
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-bold text-xl mb-2">تتبع التقدم</h3>
                <p className="text-emerald-50">
                  راقب تقدمك وحقق أهدافك
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="font-bold text-xl mb-2">تعلم وتطور</h3>
                <p className="text-emerald-50">
                  نصائح وإرشادات من خبراء التغذية
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-emerald-700 mb-8">
              ✨ ما يميزنا
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl">
                <div className="text-5xl mb-4">🇸🇦</div>
                <h3 className="font-bold text-xl mb-2">عربي 100%</h3>
                <p className="text-neutral-600">
                  مصمم خصيصاً للمستخدم العربي بلغة واضحة
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="font-bold text-xl mb-2">ذكاء اصطناعي</h3>
                <p className="text-neutral-600">
                  تحليل ذكي للوجبات واقتراحات مخصصة
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="font-bold text-xl mb-2">سريع وسهل</h3>
                <p className="text-neutral-600">
                  نتائج فورية بدون تعقيد
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="font-bold text-xl mb-2">خصوصية تامة</h3>
                <p className="text-neutral-600">
                  بياناتك محمية ولا نحفظ صورك
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="font-bold text-xl mb-2">مجاني</h3>
                <p className="text-neutral-600">
                  ابدأ مجاناً بدون بطاقة ائتمان
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="font-bold text-xl mb-2">متعدد الأجهزة</h3>
                <p className="text-neutral-600">
                  يعمل على الموبايل والتابلت والكمبيوتر
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">
              📈 إحصائياتنا
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">40+</div>
                <p className="text-blue-100">طعام في قاعدة البيانات</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">30+</div>
                <p className="text-blue-100">تمرين رياضي</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3</div>
                <p className="text-blue-100">طرق للإدخال</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-blue-100">عربي</p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">
              👥 فريقنا
            </h2>
            <p className="text-center text-neutral-600 text-lg mb-8">
              فريق متحمس من المطورين وخبراء التغذية والرياضة
            </p>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 text-center">
              <p className="text-neutral-700 text-lg leading-relaxed">
                نعمل بشغف لتقديم أفضل تجربة ممكنة للمستخدمين. 
                هدفنا هو مساعدة الملايين في العالم العربي على تحقيق أهدافهم الصحية والرياضية.
              </p>
              <p className="mt-6 text-emerald-700 font-semibold text-xl">
                💚 نؤمن بأن الصحة حق للجميع
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              📬 تواصل معنا
            </h2>
            <p className="text-xl mb-8 text-emerald-50">
              لديك سؤال أو اقتراح؟ نحب أن نسمع منك!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:info@fiita.app"
                className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-bold hover:shadow-lg transition"
              >
                📧 راسلنا
              </a>
              <Link 
                href="/"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition border-2 border-white"
              >
                🏠 العودة للرئيسية
              </Link>
            </div>
          </section>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16 text-neutral-600">
          <p className="text-2xl font-semibold mb-2">
            &quot;الصحة ثروة، والرياضة استثمار&quot;
          </p>
          <p className="text-lg">
            — فريق FiitA 💪
          </p>
        </div>
      </div>
    </div>
  );
}

