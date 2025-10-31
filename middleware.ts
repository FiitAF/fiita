import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // توجيه الصفحة الرئيسية إلى صفحة النتائج
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/results', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};

