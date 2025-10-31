'use client';

import Link from 'next/link';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      {/* Header */}
      <div className="flex justify-center items-center px-4 py-4 border-b-2 border-emerald-300 bg-emerald-100">
        <h1 className="text-2xl font-bold text-emerald-800">FiitA</h1>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        {/* Welcome Card */}
        <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-6 mb-6 border-2 border-emerald-400 shadow-xl">
          <div className="flex items-center space-x-3 space-x-reverse mb-4">
            <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-3xl">🍽️</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-800">مرحباً بك في FiitA</h2>
              <p className="text-emerald-700 text-base font-medium">ابدأ رحلتك نحو الصحة واللياقة</p>
            </div>
          </div>
          <Link 
            href="/results"
            className="bg-emerald-600 text-white px-6 py-4 rounded-xl font-bold text-lg text-center block hover:bg-emerald-700 transition-colors shadow-lg"
          >
            ابدأ الآن
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link href="/search" className="bg-gradient-to-br from-emerald-100 to-emerald-50 border-2 border-emerald-400 rounded-2xl p-5 text-center hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="font-bold text-emerald-800 text-lg">بحث سريع</h3>
            <p className="text-base text-emerald-700 font-medium">ابحث عن وجبة</p>
          </Link>
          
          <Link href="/upload" className="bg-gradient-to-br from-emerald-100 to-emerald-50 border-2 border-emerald-400 rounded-2xl p-5 text-center hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-3xl">📷</span>
            </div>
            <h3 className="font-bold text-emerald-800 text-lg">رفع صورة</h3>
            <p className="text-base text-emerald-700 font-medium">حلل بالكاميرا</p>
          </Link>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-5 border-2 border-emerald-400 shadow-lg">
          <div className="flex items-start space-x-3 space-x-reverse">
            <span className="text-3xl">💡</span>
            <div>
              <h3 className="font-bold text-emerald-800 mb-2 text-lg">نصيحة اليوم</h3>
              <p className="text-base text-emerald-700 font-medium">
                اشرب كوب من الماء قبل كل وجبة لتحسين الهضم وتقليل الشهية
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
