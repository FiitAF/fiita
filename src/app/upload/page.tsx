'use client';
import { useEffect, useState } from 'react';
import UploadMeal from '@/components/UploadMeal';
import Link from 'next/link';

export default function UploadPage() {
  const [goal, setGoal] = useState<string>('burn');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const goalParam = params.get('goal') || 'burn';
      setGoal(goalParam);
    }
  }, []);

  return (
    <main className='min-h-[100svh] pb-20 bg-gradient-to-br from-emerald-50 to-emerald-100 p-4'>
      <div className="mx-auto max-w-md">
        {/* هيدر بسيط */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
            رجوع
          </Link>
          <div className="text-base font-bold text-emerald-800 bg-emerald-100 border-2 border-emerald-400 px-4 py-2 rounded-xl">
            الهدف: {goal === 'burn' ? 'حرق دهون' : goal === 'bulk' ? 'تضخيم' : goal === 'sixpack' ? 'عضلات البطن' : 'حفاظ'}
          </div>
        </div>

        {/* مكون الرفع الأصلي */}
        <div className='w-full rounded-2xl shadow-xl bg-gradient-to-br from-emerald-100 to-emerald-50 backdrop-blur p-6 space-y-6 border-2 border-emerald-300 text-emerald-900'>
          <header className='text-center space-y-3'>
            {/* لوجو FA */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center border-4 border-emerald-300">
                <span className="text-white text-3xl font-bold">FA</span>
              </div>
            </div>
            <h1 className='text-3xl font-bold text-emerald-800'>FiitA</h1>
            <p className='text-base font-medium text-emerald-700'>حمّل صورة الوجبة واحصل على تحليل ذكي</p>
          </header>

          <UploadMeal />
        </div>
      </div>
    </main>
  );
}

