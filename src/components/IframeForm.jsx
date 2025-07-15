"use client";
import { useState, useEffect } from "react";

export default function IframeForm() {
 
    useEffect(() => {
      // Create and append the iframe
      const iframe = document.createElement('iframe');
      iframe.src = 'https://eckolimo.quotehives.com/public/quote.php?id=5';
      iframe.id = 'your-iframe-id';
      iframe.style.width = '100%';
      iframe.style.border = 'none';
      iframe.setAttribute('scrolling', 'no');

      const container = document.getElementById('ssiframecontainerwidget8');
      if (container) {
        container.appendChild(iframe);
      }

      // Auto-resize script
      function receiveMessage(event) {
        if (!isNaN(event.data)) {
          const iframe = document.getElementById('your-iframe-id');
          if (iframe) {
            iframe.style.height = `${event.data}px`;
          }
        }
      }

      window.addEventListener('message', receiveMessage, false);

      // Cleanup
      return () => {
        window.removeEventListener('message', receiveMessage);
      };
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
