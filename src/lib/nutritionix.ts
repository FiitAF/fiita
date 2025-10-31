export type NutritionixResult = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
};

export async function analyzeWithNutritionix(query: string): Promise<NutritionixResult> {
  try {
    const response = await fetch('/api/nutrition/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.error || 'Nutritionix API error');
    }

    const data = await response.json();
    
    if (!data.ok) {
      throw new Error(data.error || 'No food found');
    }

    return {
      calories: data.calories,
      protein: data.protein,
      fat: data.fat,
      carbs: data.carbs,
    };
  } catch (error) {
    console.error('Nutritionix error:', error);
    throw error;
  }
}