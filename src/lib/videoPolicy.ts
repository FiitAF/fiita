// سياسة ترشيح الفيديوهات
export type VideoFilter = {
  maxDuration: number; // بالثواني
  preferredGender: 'male' | 'female' | 'any';
  language: 'ar' | 'en' | 'any';
};

export const DEFAULT_FILTER: VideoFilter = {
  maxDuration: 90, // 90 ثانية للـ Shorts
  preferredGender: 'male', // حسب الطلب
  language: 'any'
};

// فلترة روابط اليوتيوب
export function filterVideoUrls(urls: string[], filter: VideoFilter = DEFAULT_FILTER): string[] {
  return urls.filter(url => {
    // تأكد أنه YouTube Shorts
    if (!url.includes('youtube.com/shorts/')) {
      return false;
    }
    
    // يمكن إضافة منطق إضافي هنا للتحقق من:
    // - مدة الفيديو (يحتاج API)
    // - جنس المدرب (يحتاج تحليل الصورة المصغرة)
    // - اللغة (يحتاج تحليل العنوان)
    // يمكن استخدام filter هنا لاحقاً
    console.log('Filter config:', filter); // للاستخدام المستقبلي
    
    return true;
  });
}

// تحويل روابط YouTube العادية إلى Shorts
export function convertToShorts(url: string): string {
  if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    if (videoId) {
      return `https://www.youtube.com/shorts/${videoId}`;
    }
  }
  return url;
}

// فحص صحة رابط YouTube Shorts
export function isValidShortsUrl(url: string): boolean {
  const shortsPattern = /^https:\/\/www\.youtube\.com\/shorts\/[a-zA-Z0-9_-]+$/;
  return shortsPattern.test(url);
}

// اختيار أفضل فيديو حسب المعايير
export function selectBestVideo(urls: string[], criteria: {
  preferFitnessChannels?: boolean;
  preferArabic?: boolean;
  preferMale?: boolean;
} = {}): string {
  // منطق بسيط لاختيار أفضل فيديو
  // يمكن تطويره لاحقاً باستخدام API
  console.log('Selection criteria:', criteria); // للاستخدام المستقبلي
  
  const filteredUrls = filterVideoUrls(urls);
  return filteredUrls[0] || urls[0] || '';
}

// قائمة بقنوات الفتنس المفضلة (يمكن توسيعها)
export const PREFERRED_FITNESS_CHANNELS = [
  'athleanx',
  'calisthenic-movement',
  'fitness-blender',
  'jeff-nippard'
];

// كلمات مفتاحية لفلترة التمارين المناسبة
export const FITNESS_KEYWORDS = {
  male: ['men', 'guy', 'بطل', 'رجال'],
  beginner: ['beginner', 'مبتدئ', 'easy', 'سهل'],
  advanced: ['advanced', 'متقدم', 'pro', 'expert'],
  home: ['home', 'منزل', 'no gym', 'bodyweight'],
  gym: ['gym', 'نادي', 'weights', 'أوزان']
};
