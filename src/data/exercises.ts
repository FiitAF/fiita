export type Goal = 'weight_loss' | 'muscle_gain' | 'abs';
export type Place = 'home' | 'gym';
export type Level = 'easy' | 'medium' | 'hard';

export type Exercise = {
  id: string;
  goal: Goal;
  place: Place;
  nameAr: string;
  nameEn: string;
  baseReps: string;      // مثل "4x10" أو "45s" أو "10min"
  videoUrl: string;      // YouTube Shorts (رجال فقط)
};

// مبدئيًا ضع فيديوهات placeholder ثم استبدل VIDEO_ID لاحقًا بروابط Shorts مناسبة
export const EXERCISES: Exercise[] = [
  // حرق - بيت
  { id:'wl_home_1', goal:'weight_loss', place:'home', nameAr:'قفز النجمة', nameEn:'Star Jump', baseReps:'3x20', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_1' },
  { id:'wl_home_2', goal:'weight_loss', place:'home', nameAr:'رفع الركبتين', nameEn:'High Knees', baseReps:'3x40s', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_2' },

  // حرق - نادي
  { id:'wl_gym_1', goal:'weight_loss', place:'gym',  nameAr:'إليبتكال', nameEn:'Elliptical', baseReps:'10min', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_3' },
  { id:'wl_gym_2', goal:'weight_loss', place:'gym',  nameAr:'هرولة خفيفة', nameEn:'Treadmill Jog', baseReps:'12min', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_4' },

  // بناء - بيت
  { id:'mg_home_1', goal:'muscle_gain', place:'home', nameAr:'ضغط', nameEn:'Push-Ups', baseReps:'4x10', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_5' },
  { id:'mg_home_2', goal:'muscle_gain', place:'home', nameAr:'سكوات وزن الجسم', nameEn:'Bodyweight Squat', baseReps:'4x12', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_6' },

  // بناء - نادي
  { id:'mg_gym_1', goal:'muscle_gain', place:'gym', nameAr:'ضغط بالبار', nameEn:'Barbell Bench Press', baseReps:'4x8', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_7' },
  { id:'mg_gym_2', goal:'muscle_gain', place:'gym', nameAr:'سكوات بار', nameEn:'Barbell Back Squat', baseReps:'4x6', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_8' },

  // عضلات البطن - بيت
  { id:'abs_home_1', goal:'abs', place:'home', nameAr:'بلانك', nameEn:'Plank', baseReps:'3x45s', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_9' },
  { id:'abs_home_2', goal:'abs', place:'home', nameAr:'سوبرمان هولد', nameEn:'Superman Hold', baseReps:'3x30s', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_10' },

  // عضلات البطن - نادي
  { id:'abs_gym_1', goal:'abs', place:'gym', nameAr:'كابل كرنش', nameEn:'Cable Crunch', baseReps:'4x12', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_11' },
  { id:'abs_gym_2', goal:'abs', place:'gym', nameAr:'رفع الركب متعلّق', nameEn:'Hanging Knee Raise', baseReps:'4x10', videoUrl:'https://www.youtube.com/shorts/VIDEO_ID_12' },
];
