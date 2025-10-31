// src/app/api/nutrition/analyze/route.ts
import { NextResponse } from 'next/server';

// قاعدة بيانات شاملة للقيم الغذائية - أطعمة عربية وعالمية
const nutritionDatabase: Record<string, { calories: number; protein: number; fat: number; carbs: number }> = {
  // أطعمة عربية (لكل 100 جرام)
  'أرز بخاري': { calories: 320, protein: 18, fat: 12, carbs: 45 },
  'كبسة': { calories: 280, protein: 15, fat: 10, carbs: 38 },
  'مندي': { calories: 350, protein: 20, fat: 15, carbs: 42 },
  'فلافل': { calories: 333, protein: 13, fat: 18, carbs: 32 },
  'حمص': { calories: 166, protein: 8, fat: 10, carbs: 14 },
  'تبولة': { calories: 36, protein: 1, fat: 1, carbs: 6 },
  'شاورما': { calories: 250, protein: 18, fat: 14, carbs: 15 },
  'منسف': { calories: 320, protein: 22, fat: 18, carbs: 20 },
  
  // أطعمة عالمية
  'chicken breast': { calories: 165, protein: 31, fat: 4, carbs: 0 },
  'white rice': { calories: 130, protein: 3, fat: 0, carbs: 28 },
  'brown rice': { calories: 112, protein: 2, fat: 1, carbs: 24 },
  'salmon': { calories: 206, protein: 22, fat: 13, carbs: 0 },
  'beef steak': { calories: 271, protein: 25, fat: 19, carbs: 0 },
  'pasta': { calories: 131, protein: 5, fat: 1, carbs: 25 },
  'bread': { calories: 265, protein: 9, fat: 3, carbs: 49 },
  'eggs': { calories: 155, protein: 13, fat: 11, carbs: 1 },
  'greek yogurt': { calories: 59, protein: 10, fat: 0, carbs: 4 },
  'oatmeal': { calories: 68, protein: 2, fat: 1, carbs: 12 },
  'banana': { calories: 89, protein: 1, fat: 0, carbs: 23 },
  'apple': { calories: 52, protein: 0, fat: 0, carbs: 14 },
  'broccoli': { calories: 34, protein: 3, fat: 0, carbs: 7 },
  'sweet potato': { calories: 86, protein: 2, fat: 0, carbs: 20 },
  'almonds': { calories: 579, protein: 21, fat: 50, carbs: 22 },
  'avocado': { calories: 160, protein: 2, fat: 15, carbs: 9 },
  'pizza': { calories: 266, protein: 11, fat: 10, carbs: 33 },
  'burger': { calories: 354, protein: 17, fat: 17, carbs: 33 },
  'sandwich': { calories: 200, protein: 10, fat: 5, carbs: 30 },
  'salad': { calories: 50, protein: 3, fat: 2, carbs: 8 },
  
  // أطعمة إضافية شائعة
  'ملوخية': { calories: 58, protein: 5, fat: 1, carbs: 10 },
  'فاصولياء': { calories: 127, protein: 8, fat: 0, carbs: 23 },
  'بامية': { calories: 33, protein: 2, fat: 0, carbs: 7 },
  'كوسا محشي': { calories: 165, protein: 8, fat: 7, carbs: 20 },
  'ورق عنب': { calories: 158, protein: 6, fat: 8, carbs: 18 },
};

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    
    if (!query) {
      return NextResponse.json({ error: 'No food name provided' }, { status: 400 });
    }

    console.log('Nutrition query:', query);

    // أولاً: جرب Nutritionix API
    try {
      const apiKey = process.env.NEXT_PUBLIC_NUTRITIONIX_API_KEY;
      const appId = process.env.NUTRITIONIX_APP_ID;
      
      if (apiKey && appId) {
        const response = await fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-app-id': appId,
            'x-app-key': apiKey
          },
          body: JSON.stringify({ query }),
          cache: 'no-store'
        });

        if (response.ok) {
          const data = await response.json();
          const item = data?.foods?.[0];
          
          if (item) {
            const result = {
              calories: Math.round(item.nf_calories ?? 0),
              protein: Math.round(item.nf_protein ?? 0),
              fat: Math.round(item.nf_total_fat ?? 0),
              carbs: Math.round(item.nf_total_carbohydrate ?? 0),
            };
            console.log('Nutritionix success:', result);
            return NextResponse.json({ ok: true, ...result });
          }
        }
      }
    } catch {
      console.log('Nutritionix failed, using fallback database');
    }

    // ثانياً: استخدم قاعدة البيانات المحلية مع بحث ذكي
    const queryLower = query.toLowerCase().trim();
    
    // بحث مباشر
    let nutrition = nutritionDatabase[queryLower];
    
    // إذا لم نجد نتيجة مباشرة، جرب البحث الجزئي
    if (!nutrition) {
      for (const [foodName, foodData] of Object.entries(nutritionDatabase)) {
        const foodNameLower = foodName.toLowerCase();
        
        // بحث جزئي - إذا كان اسم الطعام يحتوي على جزء من الاستعلام أو العكس
        if (foodNameLower.includes(queryLower) || queryLower.includes(foodNameLower)) {
          nutrition = foodData;
          console.log('Found partial match:', foodName, 'for query:', query);
          break;
        }
        
        // بحث في الكلمات المفردة للأطعمة المركبة
        if (queryLower.includes('أرز') && foodNameLower.includes('أرز')) {
          nutrition = foodData;
          console.log('Found rice-based match:', foodName);
          break;
        }
        
        if (queryLower.includes('chicken') && foodNameLower.includes('chicken')) {
          nutrition = foodData;
          console.log('Found chicken-based match:', foodName);
          break;
        }
        
        if (queryLower.includes('rice') && (foodNameLower.includes('rice') || foodNameLower.includes('أرز'))) {
          nutrition = foodData;
          console.log('Found rice match:', foodName);
          break;
        }
      }
    }
    
    if (nutrition) {
      console.log('Using database for:', queryLower, nutrition);
      return NextResponse.json({ ok: true, ...nutrition });
    }

    // ثالثاً: قيم افتراضية
    const defaultNutrition = {
      calories: 200,
      protein: 10,
      fat: 5,
      carbs: 30,
    };
    
    console.log('Using default values');
    return NextResponse.json({ ok: true, ...defaultNutrition });

  } catch (err: unknown) {
    console.error('Nutrition API error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
  }
}
