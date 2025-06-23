import { pageData } from "../../config/api"; 
import Link from "next/link";
import Image from "next/image";

// async function getPageData() {
//   return await pageData("san-francisco-to-russian-river-valley-wine-tours");
// }

// export async function generateMetadata() {
//   const response = await getPageData(); 

//   return {
//     title: response?.seo?.title || "San Francisco Wine Tours | California Limo Wine Tours",
//     description: response?.seo?.description || "Limo and car services for San Francisco to  Russian River Valley wine tour. call us at 877-359-3256 for instant booking",
//     keywords: response?.seo?.keywords || "",
//     alternates: {
//       canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/san-francisco-to-russian-river-valley-wine-tours",
//     },
//   };
// }

export default function San_francisco_to_russian_river_valley_wine_tours()  {
    return (
      <div>
          <header className="page-header" data-stellar-background-ratio="0.8">
              <div className="container">
                  <h1>RUSSIAN RIVER WINE TOURS - PREMIER WINE REGIONS</h1>
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
              – 9 HOUR DAY –
              </h6>
              <h2>
              PINOT NOIR - POPULAR WINE
              </h2>
      
              <img
                  src="../assets/images/title-shape.png"
                  alt="Image"
                  className="title-shape"
              />{" "}
              </div>
              {/* end section-title */}
                  </div>
                  
                  
                  <div class="col-lg-6"><figure><img src="../assets/images/img-42.jpg" alt="Image" width="100%" /></figure></div>
                  <div class="col-lg-6">
                      <h5>Pinot Noir is the popular wine enjoyed in the Russian River Valley. While most red wines focus on flavor, the Pinor Noir is about texture. Its juicy, fleshy, sensual feeling is what makes it so alluring.</h5>
                      <h5>A trip to the Russian River Valley isn’t complete until you take the leisurely trip down Westside Road. This winding two-lane road is often compared to Tuscany and goes through the heart of the wine country, over rolling hills, across the Russian River, and through redwood forests.</h5>
                  </div>
              </div>
          </div>
      </section>
      </div>
    )
  }