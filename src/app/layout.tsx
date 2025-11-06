import './globals.css';
import type { Metadata, Viewport } from 'next';
import BottomNav from '@/components/BottomNav';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'FiitA - تطبيق التغذية والرياضة الذكي',
  description: 'حلل وجباتك واحصل على تمارين مخصصة لأهدافك. تطبيق عربي ذكي للتغذية واللياقة البدنية.',
  keywords: ['تغذية', 'رياضة', 'لياقة بدنية', 'تمارين', 'سعرات حرارية', 'بروتين', 'دايت', 'FiitA'],
  authors: [{ name: 'FiitA Team' }],
  openGraph: {
    title: 'FiitA - تطبيق التغذية والرياضة الذكي',
    description: 'حلل وجباتك واحصل على تمارين مخصصة لأهدافك',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FiitA - تطبيق التغذية والرياضة الذكي',
    description: 'حلل وجباتك واحصل على تمارين مخصصة لأهدافك',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ar' dir='rtl'>
      <head>
        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-9377524580433895" />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9377524580433895"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* تفعيل إعلانات AdSense */}
        <Script id="adsense-init" strategy="afterInteractive">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({});
          `}
        </Script>
        
        {/* Google Analytics - اختياري */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className='min-h-screen text-neutral-900 antialiased bg-white overflow-x-hidden'>
        <div className="max-w-sm mx-auto bg-white min-h-screen relative">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
