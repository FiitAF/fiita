import type { Plan } from "@/config/subscriptions";

// مؤقتًا: استخرج الخطة من localStorage إلى أن نربط بوابة دفع لاحقًا
export function getUserPlan(): Plan {
  if (typeof window === "undefined") return "free";
  return (localStorage.getItem("fiita_plan") as Plan) || "free";
}

export function setUserPlan(p: Plan) {
  if (typeof window === "undefined") return;
  localStorage.setItem("fiita_plan", p);
}

