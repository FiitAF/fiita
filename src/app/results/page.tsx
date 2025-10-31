'use client';

import { useEffect, useMemo, useState } from 'react';
import QuickTips from '@/components/QuickTips';
import AdBanner from '@/components/AdBanner';
import { getBurnPlan, getBuildPlan, type Exercise } from '@/lib/exercises';

type Macros = { calories?: number; protein?: number; fat?: number; carbs?: number };

export default function ResultsPage() {
  const [macros, setMacros] = useState<Macros>({});
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [goal, setGoal] = useState<'burn' | 'build'>('burn');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [place, setPlace] = useState<'home' | 'gym'>('home');
  const [hasResult, setHasResult] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    try {
      // قراءة النتائج السابقة
      const savedMacros = localStorage.getItem('fiita:analysis');
      if (savedMacros) {
        setMacros(JSON.parse(savedMacros));
        setHasResult(true);
      }
      
      // قراءة الهدف والمكان المحفوظ
      const savedGoal = localStorage.getItem('fiita:goal');
      const savedPlace = localStorage.getItem('fiita:place');
      const savedDifficulty = localStorage.getItem('fiita:difficulty');
      
      if (savedGoal) setGoal(savedGoal as 'burn' | 'build');
      if (savedPlace) setPlace(savedPlace as 'home' | 'gym');
      if (savedDifficulty) setDifficulty(savedDifficulty as 'easy' | 'medium' | 'hard');
    } catch {}
  }, []);

  async function handleAnalyze() {
    if (!query.trim()) {
      setError('رجاءً اكتب وصف الوجبة');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/nutrition/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim() })
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        const newMacros = {
          calories: data.calories || 0,
          protein: data.protein || 0,
          fat: data.fat || 0,
          carbs: data.carbs || 0
        };
        setMacros(newMacros);
        setHasResult(true);
        localStorage.setItem('fiita:analysis', JSON.stringify(newMacros));
        
        // إظهار الرسالة المتحركة
        setShowAnimation(true);
        setTimeout(() => setShowAnimation(false), 3000);
      } else {
        setError(data.error || 'فشل التحليل، حاول مرة أخرى');
      }
    } catch (e) {
      console.error(e);
      setError('تعذر الاتصال بالخادم');
    } finally {
      setLoading(false);
    }
  }

  const handleGoalChange = (newGoal: 'burn' | 'build') => {
    setGoal(newGoal);
    localStorage.setItem('fiita:goal', newGoal);
  };

  const handlePlaceChange = (newPlace: 'home' | 'gym') => {
    setPlace(newPlace);
    localStorage.setItem('fiita:place', newPlace);
  };

  const handleDifficultyChange = (newDiff: 'easy' | 'medium' | 'hard') => {
    setDifficulty(newDiff);
    localStorage.setItem('fiita:difficulty', newDiff);
  };

  // التمارين المناسبة
  const exercises: Exercise[] = useMemo(() => {
    if (goal === 'burn') {
      return getBurnPlan(difficulty);
    } else {
      return getBuildPlan('abs');
    }
  }, [goal, difficulty]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      {/* Header */}
      <div className="flex justify-center items-center px-4 py-4 border-b-2 border-emerald-300 bg-emerald-100">
        <h1 className="text-2xl font-bold text-emerald-800">تحليل الوجبات</h1>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 pb-24">
        {/* كارد البحث */}
        <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl shadow-lg border-2 border-emerald-300 p-6 space-y-4">
          {/* حقل البحث */}
          <textarea
            className="w-full border-2 border-emerald-400 rounded-xl px-4 py-3 text-base font-medium resize-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-emerald-900"
            rows={3}
            placeholder="اكتب اسم الوجبة... (مثال: صحن أرز مع دجاج)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {error && (
            <p className="text-base text-red-600 text-center font-bold bg-red-50 border-2 border-red-600 rounded-xl p-3">{error}</p>
          )}

          {/* زر التحليل */}
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? 'جاري التحليل...' : 'ابدأ التحليل الآن'}
          </button>

          {loading && (
            <div className="w-full bg-emerald-200 rounded-full h-3 overflow-hidden border-2 border-emerald-400">
              <div className="bg-emerald-600 h-3 animate-pulse" style={{ width: '100%' }} />
            </div>
          )}
        </div>

        {/* الرسالة المتحركة */}
        {showAnimation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-8 mx-4 text-center animate-bounce border-4 border-emerald-400 shadow-2xl">
              <div className="text-2xl font-bold text-emerald-800 mb-2">
                مع FiitA الأحلام تصبح حقيقة ✨
              </div>
              <div className="text-base font-medium text-emerald-700">
                استمر في رحلتك نحو الصحة واللياقة
              </div>
            </div>
          </div>
        )}

        {/* النتائج */}
        {hasResult && (
          <div className="mt-6 space-y-4">
            {/* القيم الغذائية */}
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl shadow-lg border-2 border-emerald-300 p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4 text-center">القيم الغذائية</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl text-center border-2 border-emerald-400 shadow-md">
                  <p className="text-base text-emerald-700 mb-1 font-bold">السعرات</p>
                  <p className="text-4xl font-bold text-emerald-800">{macros.calories || 0}</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center border-2 border-emerald-400 shadow-md">
                  <p className="text-base text-emerald-700 mb-1 font-bold">البروتين</p>
                  <p className="text-4xl font-bold text-emerald-800">{macros.protein || 0}g</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center border-2 border-emerald-400 shadow-md">
                  <p className="text-base text-emerald-700 mb-1 font-bold">الدهون</p>
                  <p className="text-4xl font-bold text-emerald-800">{macros.fat || 0}g</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center border-2 border-emerald-400 shadow-md">
                  <p className="text-base text-emerald-700 mb-1 font-bold">كربوهيدرات</p>
                  <p className="text-4xl font-bold text-emerald-800">{macros.carbs || 0}g</p>
                </div>
              </div>
            </div>

            {/* اختيار الهدف والمكان */}
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl shadow-lg border-2 border-emerald-300 p-6 space-y-4">
              <h3 className="text-xl font-bold text-emerald-800 text-center">اختر هدفك</h3>
              
              <div className="flex gap-3">
                <button
                  onClick={() => handleGoalChange('burn')}
                  className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all border-2 ${
                    goal === 'burn'
                      ? 'bg-emerald-600 text-white shadow-lg border-emerald-600'
                      : 'bg-white text-emerald-700 border-emerald-400'
                  }`}
                >
                  حرق دهون
                </button>
                <button
                  onClick={() => handleGoalChange('build')}
                  className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all border-2 ${
                    goal === 'build'
                      ? 'bg-emerald-600 text-white shadow-lg border-emerald-600'
                      : 'bg-white text-emerald-700 border-emerald-400'
                  }`}
                >
                  بناء عضلات
                </button>
              </div>

              {/* اختيار المكان */}
              <div>
                <p className="text-base font-bold text-emerald-800 text-center mb-2">المكان</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handlePlaceChange('home')}
                    className={`flex-1 py-3 text-base rounded-xl font-bold transition-all border-2 ${
                      place === 'home'
                        ? 'bg-emerald-500 text-white shadow-md border-emerald-500'
                        : 'bg-white text-emerald-700 border-emerald-300'
                    }`}
                  >
                    بيت
                  </button>
                  <button
                    onClick={() => handlePlaceChange('gym')}
                    className={`flex-1 py-3 text-base rounded-xl font-bold transition-all border-2 ${
                      place === 'gym'
                        ? 'bg-emerald-500 text-white shadow-md border-emerald-500'
                        : 'bg-white text-emerald-700 border-emerald-300'
                    }`}
                  >
                    نادي
                  </button>
                </div>
              </div>

              {/* المستوى للحرق فقط */}
              {goal === 'burn' && (
                <div>
                  <p className="text-base font-bold text-emerald-800 text-center mb-2">المستوى</p>
                  <div className="flex gap-2">
                    {(['easy', 'medium', 'hard'] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => handleDifficultyChange(level)}
                        className={`flex-1 py-3 text-base rounded-xl font-bold transition-all border-2 ${
                          difficulty === level
                            ? 'bg-emerald-500 text-white shadow-md border-emerald-500'
                            : 'bg-white text-emerald-700 border-emerald-300'
                        }`}
                      >
                        {level === 'easy' ? 'سهل' : level === 'medium' ? 'متوسط' : 'صعب'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* التمارين المقترحة */}
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl shadow-lg border-2 border-emerald-300 p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">
                تمارين {goal === 'burn' ? 'الحرق' : 'البناء'}
              </h2>
              <div className="space-y-3">
                {exercises.map((ex, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border-2 border-emerald-400 shadow-md">
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-emerald-900 text-lg">{ex.name}</div>
                      <div className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-full font-bold">
                        {ex.reps}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <QuickTips
              weightKg={70}
            />

            {/* إعلان Google AdSense */}
            <AdBanner />
          </div>
        )}
      </div>
    </div>
  );
}
