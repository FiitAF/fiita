'use client';
import { useEffect, useState } from "react";

function isPaidUser() {
  if (typeof window === "undefined") return false;
  const plan = localStorage.getItem("fiita_plan");
  return plan === "basic50" || plan === "pro100";
}

export default function AdBanner() {
  const [paid, setPaid] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPaid(isPaidUser());
    
    // تفعيل AdSense بعد تحميل الصفحة
    if (typeof window !== 'undefined' && !isPaidUser()) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  // لا نعرض الإعلان للمستخدمين المدفوعين
  if (!mounted || paid) return null;

  // في localhost نعرض preview للإعلان
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  return (
    <div className="w-full bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-xl p-4 my-4 shadow-md">
      <div className="text-center space-y-2">
        <p className="text-xs text-emerald-700 font-semibold">إعلان</p>
        
        {isLocalhost ? (
          // Preview للإعلان في localhost
          <div className="min-h-[120px] bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-emerald-400 p-6">
            <div className="text-center">
              <p className="text-emerald-700 font-bold mb-2">🎯 مكان الإعلان</p>
              <p className="text-sm text-emerald-600">الإعلانات ستظهر هنا بعد النشر</p>
              <p className="text-xs text-gray-500 mt-2">Google AdSense ID: ...93895</p>
            </div>
          </div>
        ) : (
          // Google AdSense الحقيقي في Production
          <div className="min-h-[100px] bg-white/50 rounded-lg flex items-center justify-center border border-emerald-200">
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-9377524580433895"
                 data-ad-slot="f08c47fec0942fa0"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>
        )}
        
        <p className="text-xs text-emerald-600">ادعم التطبيق بمشاهدة الإعلان</p>
      </div>
    </div>
  );
}

