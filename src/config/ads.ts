// src/config/ads.ts
export type AdCategory = "Healthy Food" | "Protein Meals" | "Gyms" | "Supplements" | "Sports Gear";

export type PartnerAd = {
  id: string;
  title: string;          // نص قصير
  url: string;            // رابط الشريك
  category: AdCategory;   // فئة الإعلان
  active?: boolean;       // لتفعيل/تعطيل سريع
};

// الفئات المسموح بها فقط:
export const ALLOWED_CATEGORIES: AdCategory[] = [
  "Healthy Food",
  "Protein Meals",
  "Gyms",
  "Supplements",
  "Sports Gear",
];

// ضع إعلان واحد فقط مبدئيًا — تقدر تبدّل النص والرابط لاحقًا:
export const PARTNER_ADS: PartnerAd[] = [
  {
    id: "gymtime-001",
    title: "خصم 15% في GymTime Club لعملاء FiitA",
    url: "https://example.com/gym-partner",  // غيّره لاحقًا لرابط شريكك
    category: "Gyms",
    active: true,
  },
  // أمثلة مستقبلية (ابقها inactive):
  // { id: "protein-001", title: "باك بروتين بسعر خاص", url: "https://example.com/protein", category: "Protein Meals", active: false },
];

