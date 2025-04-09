"use client";
import { useState, useEffect } from "react";

export default function IframeForm() {
 
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://quotes.eckolimo.com/quote-widget-script/8";
        script.async = true;
        document.getElementById('ssiframecontainerwidget8').appendChild(script);
    }, []);

  return (
    <>
        <div className='frm'>
            <div id="ssiframecontainerwidget8">
            </div>
        </div>
    </>
  );
}
