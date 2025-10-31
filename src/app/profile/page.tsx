'use client';
import { useEffect, useState } from 'react';

type UserInfo = { name?: string; age?: string; height?: string; weight?: string; goal?: 'burn' | 'build' };

export default function ProfilePage() {
  const [user, setUser] = useState<UserInfo>({});

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem('fiita:user') || '{}');
      setUser(savedUser);
    } catch {}
  }, []);

  const handleChange = (key: keyof UserInfo, value: string) => {
    const newUser = { ...user, [key]: value };
    setUser(newUser);
    localStorage.setItem('fiita:user', JSON.stringify(newUser));
  };

  const handleUpgrade = (plan: string) => {
    alert(`تم اختيار باقة ${plan}! سيتم توجيهك للدفع قريباً`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      {/* Header */}
      <div className="flex justify-center items-center px-4 py-4 border-b-2 border-emerald-300 bg-emerald-100">
        <h1 className="text-2xl font-bold text-emerald-800">الملف الشخصي</h1>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 pb-24">

        {/* معلومات المستخدم */}
        <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl shadow-lg border-2 border-emerald-300 p-6 mb-6">
          <h2 className="text-xl font-bold text-emerald-800 mb-4 text-center">معلوماتك</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-emerald-800 mb-2">الاسم</label>
              <input
                type="text"
                value={user.name || ''}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full bg-white border-2 border-emerald-400 text-emerald-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="اكتب اسمك"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-semibold text-emerald-800 mb-2">العمر</label>
                <input
                  type="number"
                  value={user.age || ''}
                  onChange={(e) => handleChange('age', e.target.value)}
                  className="w-full bg-white border-2 border-emerald-400 text-emerald-900 rounded-xl px-3 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-center"
                  placeholder="20"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-emerald-800 mb-2">الطول</label>
                <input
                  type="number"
                  value={user.height || ''}
                  onChange={(e) => handleChange('height', e.target.value)}
                  className="w-full bg-white border-2 border-emerald-400 text-emerald-900 rounded-xl px-3 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-center"
                  placeholder="175"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-emerald-800 mb-2">الوزن</label>
                <input
                  type="number"
                  value={user.weight || ''}
                  onChange={(e) => handleChange('weight', e.target.value)}
                  className="w-full bg-white border-2 border-emerald-400 text-emerald-900 rounded-xl px-3 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-center"
                  placeholder="70"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-emerald-800 mb-2">هدفك</label>
              <div className="flex gap-3">
                <button
                  onClick={() => handleChange('goal', 'burn')}
                  className={`flex-1 py-3 rounded-xl font-bold transition-all border-2 ${
                    user.goal === 'burn'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-emerald-700 border-emerald-400'
                  }`}
                >
                  حرق دهون
                </button>
                <button
                  onClick={() => handleChange('goal', 'build')}
                  className={`flex-1 py-3 rounded-xl font-bold transition-all border-2 ${
                    user.goal === 'build'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-emerald-700 border-emerald-400'
                  }`}
                >
                  بناء عضلات
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* الباقات */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-emerald-800 text-center">الباقات</h2>

          {/* باقة 50 ريال */}
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl shadow-lg border-2 border-emerald-300 p-6">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-emerald-800 mb-1">50 ريال</div>
              <div className="text-sm text-emerald-700">5 تحليلات بالصور + 20 بالنص</div>
              <div className="text-xs text-emerald-600 font-medium mt-1">شامل الضريبة</div>
            </div>
            <button
              onClick={() => handleUpgrade('50 ريال')}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold transition shadow-md"
            >
              اشترك الآن
            </button>
          </div>

          {/* باقة 100 ريال */}
          <div className="bg-gradient-to-br from-emerald-100 to-white rounded-2xl shadow-xl border-2 border-emerald-400 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              الأفضل
            </div>
            <div className="text-center mb-4 mt-2">
              <div className="text-3xl font-bold text-emerald-800 mb-1">100 ريال</div>
              <div className="text-sm text-emerald-700">10 تحليلات بالصور + 45 بالنص</div>
              <div className="text-xs text-emerald-600 font-medium mt-1">شامل الضريبة</div>
            </div>
            <button
              onClick={() => handleUpgrade('100 ريال')}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold transition shadow-md"
            >
              اشترك الآن
            </button>
          </div>

          {/* ملاحظة */}
          <div className="text-center text-sm text-emerald-700 space-y-1 mt-4 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <p className="font-semibold">جميع الأسعار شاملة الضريبة</p>
            <p>الدفع آمن ومشفر 🔒</p>
          </div>
        </div>
      </div>
    </div>
  );
}
