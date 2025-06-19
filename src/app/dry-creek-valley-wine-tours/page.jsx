import { pageData } from "../../config/api"; 
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
  return await pageData("napa-valley-wine-tour");
}

export async function generateMetadata() {
  const response = await getPageData(); 

  return {
    title: response?.seo?.title || "Dry Creek Valley Wine Tours | California Limo Wine Tours",
    description: response?.seo?.description || "Book Dry Creek Valley Wine Tours, luxury car service with California Limo wine Tours. We provide wine tours according to your need. Call us @+1 877-359-3256",
    keywords: response?.seo?.keywords || "Dry Creek Valley wine tours , Limo service for wine tours , Dry Creek Valley group wine tours , Custom wine tour Dry Creek Valley, Dry Creek Valley wine testing tour , Wine tour transportation Dry Creek Valley, Napa Valley Dry Creek Valley",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/dry-creek-valley-wine-tours",
    },
  };
}

export default function DryCreekWineTours() {
    return (
      <div>
          <header className="page-header" data-stellar-background-ratio="0.8">
              <div className="container">
                  <h1>Dry Creek Valley Wine Tours </h1>
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
              AMERICAN VITICULTURAL AREAS (AVAS)
              </h6>
              <h2>
              DRY CREEK VALLEY – TASTING TOUR
  
  
                  <br />
                  VINEYARDS OVER 140 YEARS OLD
              </h2>
       
              <img
                  src="../assets/images/title-shape.png"
                  alt="Image"
                  className="title-shape"
              />{" "}
              </div>
              {/* end section-title */}
                  </div>
                  <p className='txtcenter'>Dry Creek Valley is one of the smallest American Viticultural Areas (AVAs), measuring just 16 miles long and two miles wide. Its viticultural history dates back to the mid-1800s, when Zinfandel grapes were the dominant crop and its wines were well on their way to becoming some of the most highly regarded in the industry. This region has vineyards over 140 years old that produce deeply textured, complex wines with a long finish.</p>
                  
                  <div class="col-lg-6"><figure><img src="../assets/images/img-37.jpg" alt="Image" width="100%" /></figure></div>
                  <div class="col-lg-6">
                      <h5>Dry Creek Valley is impacted by inland and coastal elements. The coastal mountain range keeps daily temperatures warm—ideal conditions for grapes to fully ripen—yet allows the cooling coastal fog to blanket the area at night, enabling slow maturation of the grapes.
                      Come with us to a place where time seems to have stood still. On our private Dry Creek Valley wine tasting tours, sample the spicy Zinfandels, vibrant Cabernet Sauvignons, refreshing Sauvignon Blancs, and elegant Chardonnays from this northern Sonoma County region. You will leave here with a new appreciation for yet another fabulous Sonoma County grape growing region.</h5>
                  </div>
              </div>
          </div>
      </section>
      </div>
    )
  }