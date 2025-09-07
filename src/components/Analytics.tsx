"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Analytics() {
  const GA: string | undefined = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();

  useEffect(() => {
    if (!GA) return;                 // no GA id -> do nothing
    if (typeof window === "undefined") return; // SSR guard
    if (!window.gtag) return;        // script not loaded yet

    const params = new URLSearchParams(window.location.search);
    const query = params.toString();
    const pagePath = pathname + (query ? `?${query}` : "");

    // Debug (only on localhost/dev)
    if (process.env.NODE_ENV === "development") {
      console.log("[GA Debug] page_view", pagePath);
    }

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: document.title,
    });
  }, [pathname, GA]);

  if (!GA) return null;

  return (
    <>
      {/* bootstrap gtag */}
      <Script id="ga4-init">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
      `}</Script>

      {/* GA script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
        strategy="afterInteractive"
      />

      {/* GA config */}
      <Script id="ga4-config" strategy="afterInteractive">{`
        gtag('js', new Date());
        gtag('config', '${GA}', { anonymize_ip: true });
      `}</Script>
    </>
  );
}
