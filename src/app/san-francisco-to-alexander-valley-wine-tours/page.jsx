import { pageData } from "../../config/api"; 
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
  return await pageData("san-francisco-to-alexander-valley-wine-tours");
}

export async function generateMetadata() {
  const response = await getPageData(); 

  return {
    title: response?.seo?.title || "San Francisco to Dry Creek valley | California Limo Wine Tours",
    description: response?.seo?.description || "For the ultimate Italian experience pair a Dry Creek Valley wine with a pizza with our luxury car service.",
    keywords: response?.seo?.keywords || "",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/san-francisco-to-alexander-valley-wine-tours",
    },
  };
}

export default function SanFranciscoToAlexanderValleyWineTours() {
    return (
      <div>
                  <header className="page-header" data-stellar-background-ratio="0.8">
              <div className="container">
                  <h1>ALEXANDER VALLEY - "TASTE ALEXANDER VALLEY
                  </h1>
              </div>
          </header>
          <section className="content-section">
          <div className="container">
              <div className="row justify-content-center">
                  <div
              className="col-12 wow fadeIn"
              style={{ visibility: "visible", animationName: "fadeIn" }}
          >
              <div className="section-title">
              <h6>
              HELD EVENT EACH YEAR - 30 WINERIES PARTICIPATE
              
  
              </h6>
              <h2>
              – 9 TO 10 HOUR DAY –
  
              </h2>
      
              <img
                  src="../assets/images/title-shape.png"
                  alt="Image"
                  className="title-shape"
              />{" "}
              </div>
              {/* end section-title */}
                  </div>
                  
                  
                  <div className="col-lg-6"><figure><img src="../assets/images/img-44.jpg" alt="Image" width="100%" /></figure></div>
                  <div className="col-lg-6">
                      <h5>
                      With more than 40 wineries to choose from, you’re guaranteed to find exactly what suits your palate. Although Alexander Valley is known for its world-famous Cabernet Sauvignon grapes, the area’s gravelly loam soils also boast Zinfandel and Rhone varieties, including the Syrah. Alexander Valley offers a “Taste Alexander Valley” event each year. Over 30 wineries participate in this weekend event in May.</h5>
                      <h5>Named after pioneer Cyrus Alexander, the valley stretches 22 miles along the Russian River from Cloverdale to Healdsburg. Just 40 years ago, the valley was known for its succulent prunes and walnuts.</h5>
                     
                  </div>
              </div>
          </div>
      </section>
      </div>
    )
  }