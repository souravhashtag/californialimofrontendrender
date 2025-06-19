"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "UA-XXXXX-Y";

  return (
    <>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', '${GA_TRACKING_ID}', 'auto');
            ga('send', 'pageview');
          `,
        }}
      />
    </>
  );
}
