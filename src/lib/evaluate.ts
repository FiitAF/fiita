export type Goal = "burn" | "bulk" | "sixpack" | "maintain";

export function evaluateMeal(goal: Goal, macros:{ calories:number; protein:number; fat:number; carbs:number }) {
  // قواعد بسيطة كبداية — قابلة للتحسين لاحقًا
  const { calories, protein, fat } = macros;
  if (goal === "sixpack") {
    const ok = calories <= 500 && fat <= 15 && protein >= 15;
    return { ok, tip: ok ? "ممتاز لهدف البطن — سعرات معتدلة وبروتين كفاية"
                         : "قلّل السعرات/الدهون، وارفع البروتين لنتيجة أفضل للبطن" };
  }
  if (goal === "burn") {
    const ok = calories <= 450 && fat <= 18;
    return { ok, tip: ok ? "جيّد لحرق الدهون — سعرات منخفضة نسبيًا"
                         : "اختر خيار أخف سعرات أو حضّر وجبتك بطريقة أخفّ دهونًا" };
  }
  if (goal === "bulk") {
    const ok = protein >= 20 && calories >= 450;
    return { ok, tip: ok ? "يدعم التضخيم — لا تنسَ كارب نظيف وبروتين كفاية"
                         : "ارفَع البروتين والسعرات قليلًا لنتيجة أحسن في التضخيم" };
  }
  // maintain
  const ok = calories <= 600 && protein >= 15;
  return { ok, tip: ok ? "مناسب للحفاظ على المستوى"
                       : "وازن السعرات والبروتين لنتيجة أحسن في الثبات" };
}
