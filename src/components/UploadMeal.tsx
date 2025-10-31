'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { analyzeWithNutritionix } from '@/lib/nutritionix';

const SLEEP = (ms: number) => new Promise(r => setTimeout(r, ms));

export default function UploadMeal() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<{ foodName: string; calories: number; protein: number; fat: number; carbs: number } | null>(null);
  
  // حالات جديدة للكاميرا والنص
  const [showCamera, setShowCamera] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [inputMethod, setInputMethod] = useState<'file' | 'camera' | 'text'>('file');

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // دوال الكاميرا
  const startCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' }, // استخدام الكاميرا الخلفية إن أمكن
        audio: false 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setShowCamera(true);
      setError('');
    } catch (err) {
      setError('لا يمكن الوصول للكاميرا. تأكد من إعطاء الإذن للموقع.');
      console.error('Camera error:', err);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  }, [stream]);

  const capturePhoto = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'camera-photo.jpg', { type: 'image/jpeg' });
            setFile(file);
            stopCamera();
            setInputMethod('file');
          }
        }, 'image/jpeg', 0.8);
      }
    }
  }, [stopCamera]);

  // تنظيف الكاميرا عند إغلاق المكون
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  async function handleAnalyze() {
    // تحقق من الإدخال حسب النوع
    if (inputMethod === 'file' && !file) { 
      setError('رجاءً اختر صورة أو التقط صورة'); 
      return; 
    }
    if (inputMethod === 'text' && !textInput.trim()) { 
      setError('رجاءً اكتب اسم الوجبة أو مكوناتها'); 
      return; 
    }

    setLoading(true); setError(''); setResult(null); setProgress(0);

    // شريط تقدم وهمي 4–5 ثواني
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setProgress(prev => prev >= 95 ? 95 : prev + 1);
    }, 50);

    try {
      let foodName = '';

      if (inputMethod === 'text') {
        // إذا كان النص، استخدمه مباشرة
        foodName = textInput.trim();
      } else {
        // إذا كان صورة، أرسلها للتحليل
        if (!file) throw new Error('لا توجد صورة للتحليل');
        
        const form = new FormData();
        form.append('file', file);
        const clarifaiResp = await fetch('/api/meal/analyze', { method: 'POST', body: form });
        const clarifaiJson = await clarifaiResp.json();
        if (!clarifaiResp.ok || !clarifaiJson?.foodName) {
          throw new Error(clarifaiJson?.error || 'فشل التعرف على الأكلة');
        }
        foodName = clarifaiJson.foodName;
      }

      // تحليل القيم الغذائية
      await SLEEP(1500); // زيادة إحساس التحميل
      const macros = await analyzeWithNutritionix(foodName);

      setResult({ foodName, ...macros });
      setProgress(100);

      // حفظ البيانات للصفحة النتائج
      localStorage.setItem('fiita:analysis', JSON.stringify(macros));
      
      // تحديث عداد الاستخدام
      const used = Number(localStorage.getItem('analysis_count') || '0') + 1;
      localStorage.setItem('analysis_count', String(used));
      
      // المحاولة الثالثة: إعلان تحذيري
      if (used === 3) {
        alert('🎉 هذه آخر محاولة مجانية! للاستمرار، سنحتاج منك الترقية للنسخة المميزة.');
      }
      
      // انتظر قليلاً لعرض النجاح ثم انتقل
      await SLEEP(800);
      
      router.push('/results');
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : 'حدث خطأ غير متوقع';
      setError(errorMessage);
    } finally {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-emerald-100 to-emerald-50 backdrop-blur p-6 rounded-2xl shadow-xl border-2 border-emerald-300">
      <h1 className="text-center text-3xl font-bold text-emerald-800 mb-2">FiitA — الأحلام تصبح حقيقة</h1>
      <p className="text-center text-base text-emerald-700 font-medium mb-6">حلّل وجبتك واقترح لك تمارين تناسب هدفك.</p>

      {/* طرق الإدخال */}
      <div className="mb-4">
        <div className="flex border-b-2 border-emerald-400 mb-4">
          <button
            onClick={() => {setInputMethod('file'); setShowCamera(false); setError('');}}
            className={`flex-1 py-3 text-base font-bold ${inputMethod === 'file' ? 'border-b-4 border-emerald-600 text-emerald-800 bg-emerald-200' : 'text-emerald-700 bg-emerald-100'}`}
          >
            📁 رفع صورة
          </button>
          <button
            onClick={() => {setInputMethod('camera'); setError('');}}
            className={`flex-1 py-3 text-base font-bold ${inputMethod === 'camera' ? 'border-b-4 border-emerald-600 text-emerald-800 bg-emerald-200' : 'text-emerald-700 bg-emerald-100'}`}
          >
            📷 كاميرا
          </button>
          <button
            onClick={() => {setInputMethod('text'); setShowCamera(false); setError('');}}
            className={`flex-1 py-3 text-base font-bold ${inputMethod === 'text' ? 'border-b-4 border-emerald-600 text-emerald-800 bg-emerald-200' : 'text-emerald-700 bg-emerald-100'}`}
          >
            ✏️ نص
          </button>
        </div>

        {/* رفع صورة */}
        {inputMethod === 'file' && (
          <label className="block border-2 border-emerald-400 bg-emerald-50 rounded-xl p-4 cursor-pointer text-center hover:bg-emerald-100 transition">
            <input type="file" accept="image/*" hidden onChange={(e) => setFile(e.target.files?.[0] || null)} />
            {file ? <span className="text-base font-bold text-emerald-800">{file.name}</span> : <span className="text-base font-medium text-emerald-700">اختر صورة للوجبة…</span>}
          </label>
        )}

        {/* الكاميرا */}
        {inputMethod === 'camera' && (
          <div>
            {!showCamera ? (
              <button
                onClick={startCamera}
                className="w-full border-2 border-emerald-400 bg-emerald-50 rounded-xl p-4 text-center text-base font-bold text-emerald-800 hover:bg-emerald-100 transition"
              >
                🎥 فتح الكاميرا
              </button>
            ) : (
              <div className="space-y-3">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full rounded-xl bg-black border-2 border-emerald-400"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="flex gap-2">
                  <button
                    onClick={capturePhoto}
                    className="flex-1 bg-emerald-600 text-white rounded-xl py-3 text-base font-bold hover:bg-emerald-700 transition"
                  >
                    📸 التقط صورة
                  </button>
                  <button
                    onClick={stopCamera}
                    className="flex-1 border-2 border-emerald-400 bg-emerald-100 text-emerald-800 rounded-xl py-3 text-base font-bold hover:bg-emerald-200 transition"
                  >
                    ❌ إغلاق
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* إدخال النص */}
        {inputMethod === 'text' && (
          <div>
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="اكتب اسم الوجبة أو مكوناتها... مثال: أرز بخاري مع لحم غنم وخضار مشكلة"
              className="w-full border-2 border-emerald-400 bg-white rounded-xl p-4 text-base text-emerald-900 font-medium resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
              rows={4}
            />
          </div>
        )}
      </div>

      {/* زر التحليل */}
      <button
        onClick={handleAnalyze}
        disabled={loading || (inputMethod === 'file' && !file) || (inputMethod === 'text' && !textInput.trim())}
        className="w-full bg-emerald-600 disabled:bg-emerald-400 text-white rounded-xl py-4 text-lg font-bold hover:bg-emerald-700 transition shadow-lg"
      >
        {loading ? 'يتم التحليل…' : 'ابدأ التحليل الآن'}
      </button>

      {/* شريط تقدم */}
      {loading && (
        <div className="mt-4 h-3 bg-emerald-200 rounded-full overflow-hidden border-2 border-emerald-400">
          <div className="h-full bg-emerald-600 transition-all" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* أخطاء */}
      {error && <p className="mt-4 text-center text-red-600 text-base font-bold bg-red-50 border-2 border-red-600 rounded-xl p-3">{error}</p>}

      {/* نتيجة */}
      {result && (
        <div className="mt-4 border-2 border-emerald-400 rounded-xl p-4 bg-emerald-50">
          <p className="font-bold mb-2 text-emerald-800 text-lg">مرحبًا صديقي 👋</p>
          <p className="mb-3 text-emerald-800 font-medium">تعرّفنا على: <span className="font-bold text-emerald-900">{result.foodName}</span></p>
          <div className="grid grid-cols-2 gap-2 text-base">
            <div className="bg-white border-2 border-emerald-400 p-3 rounded-lg">السعرات: <b className="text-emerald-800">{result.calories}</b></div>
            <div className="bg-white border-2 border-emerald-400 p-3 rounded-lg">البروتين: <b className="text-emerald-800">{result.protein}g</b></div>
            <div className="bg-white border-2 border-emerald-400 p-3 rounded-lg">الدهون: <b className="text-emerald-800">{result.fat}g</b></div>
            <div className="bg-white border-2 border-emerald-400 p-3 rounded-lg">الكربوهيدرات: <b className="text-emerald-800">{result.carbs}g</b></div>
          </div>
        </div>
      )}

      {/* Canvas مخفي للكاميرا */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}