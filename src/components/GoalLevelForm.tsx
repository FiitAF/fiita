'use client';
import { useState } from 'react';
import type { Goal, Place, Level, Exercise } from '@/data/exercises';
import { buildPlan } from '@/lib/plan';

const goalLabels: Record<Goal, string> = {
  weight_loss: 'حرق',
  muscle_gain: 'بناء',
  abs: 'عضلات البطن',
};

export default function GoalLevelForm() {
  const [goal, setGoal]   = useState<Goal>('weight_loss');
  const [level, setLevel] = useState<Level>('medium');
  const [place, setPlace] = useState<Place>('home');
  const [plan, setPlan]   = useState<Exercise[] | null>(null);
  const [loading, setLoading] = useState(false);

  function onStart() {
    setLoading(true);
    setTimeout(() => {
      const p = buildPlan(goal, place, level);
      setPlan(p);
      setLoading(false);
    }, 3000);
  }

  return (
    <div className="max-w-xl w-full mx-auto rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.85)' }}>
      <h2 className="text-xl font-bold mb-4 text-center">اختر هدفك ومستوى الصعوبة</h2>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {(['weight_loss','muscle_gain','abs'] as Goal[]).map(g => (
          <button key={g}
            className={`py-2 rounded ${goal===g?'bg-black text-white':'bg-gray-100'}`}
            onClick={()=>setGoal(g)}>{goalLabels[g]}</button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {(['easy','medium','hard'] as Level[]).map(l => (
          <button key={l}
            className={`py-2 rounded ${level===l?'bg-black text-white':'bg-gray-100'}`}
            onClick={()=>setLevel(l)}>
            {l==='easy'?'سهل':l==='medium'?'متوسط':'صعب'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {(['home','gym'] as Place[]).map(p => (
          <button key={p}
            className={`py-2 rounded ${place===p?'bg-black text-white':'bg-gray-100'}`}
            onClick={()=>setPlace(p)}>
            {p==='home'?'بيت':'نادي'}
          </button>
        ))}
      </div>

      <button onClick={onStart}
        className="w-full py-3 rounded-lg font-semibold"
        style={{ background:'#0aa37f', color:'#fff' }}>
        ابدأ
      </button>

      {loading && (
        <div className="mt-4">
          <div className="h-2 w-full bg-gray-200 rounded overflow-hidden">
            <div className="h-2 bg-emerald-500 animate-pulse" style={{ width:'100%' }} />
          </div>
          <p className="text-sm mt-2 text-center">جاري تجهيز خطتك…</p>
        </div>
      )}

      {plan && !loading && (
        <div className="mt-6 space-y-3">
          <h3 className="font-bold">خطة {goalLabels[goal]} — {place==='home'?'بيت':'نادي'} — {level==='easy'?'سهل':level==='medium'?'متوسط':'صعب'}</h3>
          <ul className="space-y-2">
            {plan.map(ex => (
              <li key={ex.id} className="p-3 rounded-lg bg-gray-50">
                <div className="font-semibold">{ex.nameAr} — {ex.nameEn}</div>
                <div className="text-sm opacity-80">التكرارات/المدة: {ex.baseReps}</div>
                <a className="text-emerald-700 underline text-sm" href={ex.videoUrl} target="_blank" rel="noreferrer">
                  فيديو قصير للتمرين
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


