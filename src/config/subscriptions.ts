export type Plan = "free" | "basic50" | "pro100";

export const PLANS: Record<Plan, {
  title: string;
  priceSAR: number;
  features: string[];
}> = {
  free: {
    title: "باقة البداية",
    priceSAR: 0,
    features: [
      "2 تحليل بالصور",
      "2 تحليل بالنص",
      "مستوى تمارين سهل (ثابت)",
      "إعلانات على جانب التطبيق"
    ]
  },
  basic50: {
    title: "باقة النشاط",
    priceSAR: 50,
    features: [
      "5 تحليلات بالصور",
      "20 تحليل بالنص",
      "إمكانية تغيير مستوى التمارين",
      "بدون إعلانات"
    ]
  },
  pro100: {
    title: "باقة المحترف",
    priceSAR: 100,
    features: [
      "10 تحليلات بالصور",
      "45 تحليل بالنص",
      "جميع مستويات التمارين",
      "بدون إعلانات"
    ]
  }
};

export function hasAccess(plan: Plan, feature: "chooseMode"|"fiveExercises"|"dashboard") {
  if (feature === "chooseMode") return plan === "basic50" || plan === "pro100";
  if (feature === "fiveExercises") return plan === "basic50" || plan === "pro100";
  if (feature === "dashboard") return plan === "pro100";
  return false;
}

