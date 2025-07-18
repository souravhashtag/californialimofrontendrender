"use client";

import { getCompany } from "@/config/api";
import React from "react";
import { useEffect } from "react";

export function Contact() {
  const [companyData, setCompanyData] = React.useState("");


useEffect(() => {
  // 1. Load company data
  async function loadData() {
    try {
      const data = await getCompany();
      setCompanyData(data);
    } catch (err) {
      console.error("Failed to load company data", err);
    }
  }
  loadData();

  // 2. Create and append the iframe
  const iframe = document.createElement("iframe");
  iframe.src = "https://eckolimo.quotehives.com/public/quote.php?id=5";
  iframe.id = "your-iframe-id";
  iframe.style.width = "100%";
  iframe.style.border = "none";
  iframe.setAttribute("scrolling", "no");

  const container = document.getElementById("ssiframecontainerwidget8");
  if (container) {
    container.appendChild(iframe);
  }

  // 3. Auto-height adjustment for iframe
  function receiveMessage(event) {
    if (!isNaN(event.data)) {
      const iframe = document.getElementById("your-iframe-id");
      if (iframe) {
        iframe.style.height = `${event.data}px`;
      }
    }
  }

  window.addEventListener("message", receiveMessage, false);

  // 4. Cleanup on unmount
  return () => {
    window.removeEventListener("message", receiveMessage);
  };
}, []);






  return (
    <>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>Contact</h1>
        </div>
      </header>
      <section className="content-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-4 wow fadeIn"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <div className="contact-box">
                <figure>
                  <img src="../assets/images/icon-contact01.png" alt="Image" />
                </figure>
                <h6>Address</h6>
                <p> {companyData.companyAddress}</p>
              </div>
              {/* end contact-box */}
            </div>
            {/* end col-6 */}
            <div
              className="col-lg-4  wow fadeIn"
              data-wow-delay="0.15s"
              style={{
                visibility: "visible",
                animationDelay: "0.15s",
                animationName: "fadeIn",
              }}
            >
              <div className="contact-box">
                <figure>
                  <img src="../assets/images/icon-contact02.png" alt="Image" />
                </figure>
                <h6>Phone</h6>
                <p>
                  +1 {companyData.companyPhone} <br /> for booking
                </p>
              </div>
              {/* end contact-box */}
            </div>
            {/* end col-4 */}
            <div
              className="col-lg-4  wow fadeIn"
              data-wow-delay="0.30s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <div className="contact-box">
                <figure>
                  <img src="../assets/images/icon-contact03.png" alt="Image" />
                </figure>
                <h6>e-mail</h6>
                <p>
                  <a href="#">{companyData.companyEmail}</a>
                  <br />
                  for e-booking &amp; all
                </p>
              </div>
              {/* end contact-box */}
            </div>
            {/* end col-4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      <section
        className="content-section"
        data-background="#f5f1ea"
        style={{
          backgroundImage: 'url("#f5f1ea")',
          backgroundColor: "rgb(245, 241, 234)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <div className="side-content">
                <h6>REACH US</h6>
                <h3>
                  Most easy way to
                  <br /> reach us{" "}
                </h3>
              </div>
              {/* end side-content */}
            </div>
            {/* end col-6 */}
            <div
              className="col-lg-6  wow fadeIn"
              data-wow-delay="0.15s"
              style={{
                visibility: "visible",
                animationDelay: "0.15s",
                animationName: "fadeIn",
              }}
            >
              <div id="ssiframecontainerwidget8"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


