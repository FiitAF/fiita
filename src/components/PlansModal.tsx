"use client";
import { PLANS, Plan } from "@/config/subscriptions";
import { setUserPlan } from "@/lib/userPlan";

export default function PlansModal({ onClose }:{ onClose: ()=>void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-6 max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold text-emerald-800 mb-6 text-center">اختر الباقة المناسبة لك</h3>
        <div className="grid gap-4">
          {/* باقة البداية - مجاني */}
          <div className="rounded-2xl border-2 border-emerald-300 bg-white p-6 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-2xl font-bold text-emerald-800 mb-1">{PLANS.free.title}</div>
                <div className="text-3xl font-bold text-emerald-600">مجاناً</div>
              </div>
              <button
                onClick={()=>{ setUserPlan('free' as Plan); onClose(); window.location.reload(); }}
                className="rounded-xl bg-emerald-600 px-6 py-3 text-white font-bold hover:bg-emerald-700 transition-colors shadow-md">
                اختيار
              </button>
            </div>
            <ul className="space-y-2 text-emerald-800">
              {PLANS.free.features.map((f,i)=><li key={i} className="flex items-start gap-2"><span className="text-emerald-600 font-bold">✓</span><span>{f}</span></li>)}
            </ul>
          </div>

          {/* باقة النشاط - 50 ريال */}
          <div className="rounded-2xl border-2 border-emerald-400 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-2xl font-bold text-emerald-800 mb-1">{PLANS.basic50.title}</div>
                <div className="text-3xl font-bold text-emerald-600 mb-1">50 ريال</div>
                <div className="text-sm text-emerald-700 font-medium">شامل الضريبة • شهرياً</div>
              </div>
              <button
                onClick={()=>{ setUserPlan('basic50' as Plan); onClose(); window.location.reload(); }}
                className="rounded-xl bg-emerald-600 px-6 py-3 text-white font-bold hover:bg-emerald-700 transition-colors shadow-md">
                اختيار
              </button>
            </div>
            <ul className="space-y-2 text-emerald-800">
              {PLANS.basic50.features.map((f,i)=><li key={i} className="flex items-start gap-2"><span className="text-emerald-600 font-bold text-xl">✓</span><span>{f}</span></li>)}
            </ul>
          </div>

          {/* باقة المحترف - 100 ريال */}
          <div className="rounded-2xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-100 to-white p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 rounded-bl-xl font-bold text-sm">الأفضل</div>
            <div className="flex items-start justify-between mb-4 mt-4">
              <div>
                <div className="text-2xl font-bold text-emerald-800 mb-1">{PLANS.pro100.title}</div>
                <div className="text-3xl font-bold text-emerald-600 mb-1">100 ريال</div>
                <div className="text-sm text-emerald-700 font-medium">شامل الضريبة • شهرياً</div>
              </div>
              <button
                onClick={()=>{ setUserPlan('pro100' as Plan); onClose(); window.location.reload(); }}
                className="rounded-xl bg-emerald-600 px-6 py-3 text-white font-bold hover:bg-emerald-700 transition-colors shadow-md">
                اختيار
              </button>
            </div>
            <ul className="space-y-2 text-emerald-800">
              {PLANS.pro100.features.map((f,i)=><li key={i} className="flex items-start gap-2"><span className="text-emerald-600 font-bold text-xl">✓</span><span>{f}</span></li>)}
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button onClick={onClose} className="text-emerald-700 hover:text-emerald-800 font-bold underline">إغلاق</button>
        </div>
      </div>
    </div>
  );
}
