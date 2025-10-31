'use client';

export default function QuickTips({ weightKg }: { weightKg?: number }) {
  // حساب كمية الماء المطلوبة: 35 مل لكل كيلو
  const waterMl = weightKg ? Math.round(weightKg * 35) : undefined;
  const waterLiters = waterMl ? (waterMl / 1000).toFixed(1) : undefined;

  return (
    <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 text-sm leading-relaxed">
      <div className="font-bold text-emerald-800 mb-3">نصائح سريعة للنجاح</div>
      <ul className="space-y-2 text-emerald-900">
        <li className="flex items-start gap-2">
          <span className="text-blue-600 mt-0.5 font-bold">•</span>
          <span>
            {waterMl && waterLiters ? (
              <>
                اشرب تقريبًا <strong className="text-emerald-700">{waterLiters} لتر</strong> ({waterMl} مل) من الماء يوميًا.
              </>
            ) : (
              <>احرص على شرب الماء بانتظام طوال اليوم (2-3 لتر على الأقل).</>
            )}
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-emerald-600 mt-0.5 font-bold">•</span>
          <span>قسّم التمرين إلى <strong>3 جولات</strong> بدل جولة واحدة طويلة للحفاظ على الأداء.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-emerald-600 mt-0.5 font-bold">•</span>
          <span>اختبار أسبوعي: جرّب جولة واحدة طويلة (مثل 100 عدة) بدون إجهاد زائد.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-emerald-600 mt-0.5 font-bold">•</span>
          <span>نم <strong>7-9 ساعات</strong> يوميًا لتحسين التعافي والأداء.</span>
        </li>
      </ul>
    </div>
  );
}

