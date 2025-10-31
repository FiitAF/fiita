import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    CLARIFAI_PAT: process.env.CLARIFAI_PAT ? 'موجود' : 'غير موجود',
    NUTRITIONIX_APP_ID: process.env.NUTRITIONIX_APP_ID ? 'موجود' : 'غير موجود',
    NEXT_PUBLIC_NUTRITIONIX_API_KEY: process.env.NEXT_PUBLIC_NUTRITIONIX_API_KEY ? 'موجود' : 'غير موجود',
  });
}
