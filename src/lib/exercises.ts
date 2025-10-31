export type Exercise = { 
  name: string; 
  reps: string; 
  note?: string;
};

// تمارين الحرق - مستوى سهل
const burnEasy: Exercise[] = [
  { name: 'مشية عالية الركبة (High Knees)', reps: '30 ثانية' },
  { name: 'طعنات أمامية (Forward Lunges)', reps: '10×2 لكل ساق' },
  { name: 'قفزات جاك (Jumping Jacks)', reps: '30 ثانية' },
];

// تمارين الحرق - مستوى متوسط
const burnMedium: Exercise[] = [
  { name: 'متسلّقو الجبال (Mountain Climbers)', reps: '40 ثانية' },
  { name: 'سكوات وزن الجسم (Bodyweight Squat)', reps: '15×3' },
  { name: 'بلانك كتف (Shoulder Taps)', reps: '12×3 لكل جهة' },
];

// تمارين الحرق - مستوى صعب
const burnHard: Exercise[] = [
  { name: 'بيربيز (Burpees)', reps: '12×3' },
  { name: 'قرفصاء قفزية (Jump Squat)', reps: '12×3' },
  { name: 'بلانك ديناميكي (Dynamic Plank)', reps: '45 ثانية × 3' },
];

// تمارين البناء - عضلات البطن
const buildAbs: Exercise[] = [
  { name: 'كرانشز (Crunches)', reps: '15×3' },
  { name: 'رفع الأرجل (Leg Raises)', reps: '12×3' },
  { name: 'بلانك (Plank)', reps: '60 ثانية × 3' },
  { name: 'بايسكل كرانش (Bicycle Crunch)', reps: '15×3 لكل جهة' },
  { name: 'هولو هولد (Hollow Hold)', reps: '30 ثانية × 3' },
];

// تمارين البناء - الجزء العلوي
const buildUpper: Exercise[] = [
  { name: 'ضغط (Push-Ups)', reps: '12×4' },
  { name: 'ضغط ماسي (Diamond Push-Ups)', reps: '10×3' },
  { name: 'ضغط بايك (Pike Push-Ups)', reps: '8×3' },
  { name: 'دبس بين كرسيين (Dips)', reps: '10×3' },
  { name: 'بلانك كتف (Plank Shoulder Taps)', reps: '12×3 لكل جهة' },
];

export function getBurnPlan(level: 'easy' | 'medium' | 'hard'): Exercise[] {
  if (level === 'easy') return burnEasy;
  if (level === 'medium') return burnMedium;
  return burnHard;
}

export function getBuildPlan(target: 'abs' | 'upper' = 'abs'): Exercise[] {
  return target === 'upper' ? buildUpper : buildAbs;
}

