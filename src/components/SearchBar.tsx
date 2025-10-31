"use client";
import { useState } from "react";

export default function SearchBar({ value, onChange, onSubmit }:{
  value: string; onChange: (v:string)=>void; onSubmit: ()=>void;
}) {
  const [text, setText] = useState(value ?? "");
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-emerald-400">
        <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none">
          <path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <input
          value={text}
          onChange={(e)=>{ setText(e.target.value); onChange(e.target.value); }}
          onKeyDown={(e)=>{ if(e.key==='Enter') onSubmit(); }}
          className="flex-1 bg-transparent outline-none placeholder:text-emerald-500/60"
          placeholder="اكتب اسم الأكل… (مثال: Bread, Apple)"
        />
        <button
          onClick={onSubmit}
          className="rounded-full bg-emerald-600 px-4 py-1.5 text-white text-sm font-medium hover:bg-emerald-700"
        >
          تحليل
        </button>
      </div>
      <p className="mt-1 text-xs text-emerald-700/70 text-center">نقبل إنجليزي حاليًا. مثال سريع: &quot;bread&quot;, &quot;chicken breast&quot;.</p>
    </div>
  );
}
