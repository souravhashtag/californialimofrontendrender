
export const dynamic = 'force-dynamic';
import { pageData } from "../../config/api";
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
  return await pageData("russian-river-wine-tours");
}

export async function generateMetadata() {
  const response = await getPageData();

  return {
    title: response?.seo?.title || "Russian River Valley wine tour | California Limo Wine Tour",
    description: response?.seo?.description || "Experience the best Limo and car services for Russian River Valley wine tour. call us at 877-359-3256 for instant booking",
    keywords: response?.seo?.keywords || "",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/russian-river-valley-wine-tours",
    },
  };
}



export default function russianRiverVallyWineTours() {
  return (
    <div>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>Russian River Valley Wine Tours</h1>
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
                <h2>
                  RUSSIAN RIVER VALLEY

                  <br />
                </h2>
                <h6>
                  ROLLING HILLS – ANCIENT REDWOODS BEAUTIFUL GARDENS –

                  <br />
                  LANDSCAPING, NATURAL ELEGANCE, WORLD-CLASS WINES

                </h6>
                <img
                  src="../assets/images/title-shape.png"
                  alt="Image"
                  className="title-shape"
                />{" "}
              </div>
              {/* end section-title */}
            </div>
            <p className='txtcenter'>Russian River Valley is the County’s largest appellation, specializing in cool climate varietals like Pinot Noir and Chardonnay. The cooling fog pouring in from the Sonoma Coast results in an extended growing season, allowing grapes to ripen slowly and mature fully. The terrain is level in this coastal area, presenting little challenge and providing ideal grape-growing conditions.</p>

            <div class="col-lg-6"><figure><img src="../assets/images/img-3p.jpg" alt="Image" width="100%" /></figure></div>
            <div class="col-lg-6">
              <h5>You will cross the Russian River through the heart of wine country, where you will taste the depth and richness of this region’s excellent wines.Whether you prefer a Pinot Noir or an old vine Zinfandel, the Russian River Valley will not disappoint you. The area’s Sonoma wineries offer beautiful gardens with impeccable landscaping, natural elegance, and world-class wines.</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}