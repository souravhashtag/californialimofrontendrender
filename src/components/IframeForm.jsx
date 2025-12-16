"use client";
import { useEffect, useRef } from "react";

export default function IframeForm() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const el = containerRef.current;
    if (!el) return;

    const scriptSrc = "https://quotes.eckolimo.com/quote-widget-script/8";

    // avoid adding the script multiple times
    if (el.querySelector(`script[src=\"${scriptSrc}\"]`)) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;

    script.onload = () => {
      // loaded successfully; widget should initialize itself
    };

    script.onerror = () => {
      // graceful fallback if script fails to load in production
      const fallback = document.createElement("div");
      fallback.innerHTML =
        '<a href="https://quotes.eckolimo.com/quote-widget/8" target="_blank" rel="noreferrer">Open booking widget</a>';
      el.appendChild(fallback);
    };

    el.appendChild(script);

    // no cleanup: keep the widget present across navigations
  }, []);

  return (
    <>
      <div className="frm">
        <div id="ssiframecontainerwidget8" ref={containerRef}></div>
      </div>
    </>
  );
}
