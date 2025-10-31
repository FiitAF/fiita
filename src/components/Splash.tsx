"use client";
import { useEffect, useState } from "react";

export default function Splash({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => {
        const n = Math.min(100, p + 5);
        if (n === 100) {
          clearInterval(t);
          setTimeout(onDone, 300);
        }
        return n;
      });
    }, 200);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-28 w-28">
          <div className="absolute inset-0 rounded-full bg-emerald-500/15 animate-ping" />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-emerald-500 text-white text-3xl font-bold">
            FA
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-emerald-700">FiitA — الأحلام تصبح حقيقة</p>
          <div className="mt-3 h-2 w-64 overflow-hidden rounded-full bg-emerald-200">
            <div className="h-full bg-emerald-600 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

