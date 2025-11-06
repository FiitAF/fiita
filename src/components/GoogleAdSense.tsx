'use client';

import { useEffect } from 'react';

interface GoogleAdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  adStyle?: React.CSSProperties;
  adLayout?: string;
  fullWidthResponsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

/**
 * مكون Google AdSense
 * 
 * كيفية الاستخدام:
 * 1. سجل في Google AdSense: https://www.google.com/adsense
 * 2. احصل على رمز الموقع (ca-pub-XXXXXXXXXXXXXXXX)
 * 3. استبدله في layout.tsx
 * 4. أنشئ وحدات إعلانية واحصل على رقم الـ Slot
 * 5. استخدم هذا المكون في صفحاتك
 * 
 * مثال:
 * <GoogleAdSense adSlot="1234567890" adFormat="auto" />
 */
export default function GoogleAdSense({
  adSlot,
  adFormat = 'auto',
  adStyle = { display: 'block' },
  adLayout = '',
  fullWidthResponsive = true,
}: GoogleAdSenseProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="my-4 text-center">
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-9377524580433895"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}

