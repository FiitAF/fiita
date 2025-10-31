'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      // تحليل الوجبة مباشرة
      const response = await fetch('/api/nutrition/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim() })
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        const macros = {
          calories: data.calories || 0,
          protein: data.protein || 0,
          fat: data.fat || 0,
          carbs: data.carbs || 0
        };
        localStorage.setItem('fiita:analysis', JSON.stringify(macros));
        
        // تحديث عداد الاستخدام
        const used = Number(localStorage.getItem('analysis_count') || '0') + 1;
        localStorage.setItem('analysis_count', String(used));
        
        // المحاولة الثالثة: إعلان تحذيري
        if (used === 3) {
          alert('🎉 هذه آخر محاولة مجانية! للاستمرار، سنحتاج منك الترقية للنسخة المميزة.');
        }
        
        // توجيه للنتائج
        router.push('/results');
      } else {
        alert('فشل التحليل، حاول مرة أخرى');
      }
    } catch (e) {
      console.error(e);
      alert('تعذر الاتصال بالخادم');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-dvh pb-20 p-4 bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="w-full max-w-md mx-auto space-y-6 pt-8">
        {/* هيدر */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/results" className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
            رجوع
          </Link>
        </div>

        <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 backdrop-blur rounded-2xl shadow-xl p-6 space-y-4 border-2 border-emerald-300">
          <header className="text-center space-y-3">
            {/* لوجو FA */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center border-2 border-emerald-300">
                <span className="text-white text-2xl font-bold">FA</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-emerald-800">البحث عن وجبة</h1>
            <p className="text-base text-emerald-700 font-medium">اكتب اسم الوجبة أو مكوناتها</p>
          </header>

          <div className="space-y-3">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="مثال: أرز بخاري مع لحم غنم وخضار مشكلة، أو كبسة دجاج، أو سلطة سيزر..."
              className="w-full px-4 py-3 rounded-xl border-2 border-emerald-400 bg-white text-emerald-900 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              rows={4}
            />

            <button
              onClick={handleSearch}
              disabled={loading || !query.trim()}
              className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-colors shadow-lg ${
                loading || !query.trim()
                  ? 'bg-emerald-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              {loading ? 'جاري التحليل...' : 'تحليل الوجبة'}
            </button>
          </div>

          <div className="pt-4 border-t-2 border-emerald-200 text-center text-sm text-emerald-700 font-medium">
            سنحلل القيم الغذائية ونقترح لك تمارين مناسبة
          </div>
        </div>
      </div>
    </main>
  );
}
