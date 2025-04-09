import { pageData } from "../../config/api"; 
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
  return await pageData("dry-creek-wine-tours");
}

export async function generateMetadata() {
  const response = await getPageData(); 

  return {
    title: response?.seo?.title || "Affordable Dry Creek Valley Wine Tours | California Limo Wine Tours",
    description: response?.seo?.description || "California limo wine tour provides exclusive wine tour experiences Dry Creek Valley in luxury Sedan, suvs , Limo buses. Call on +1 877-359-3256 to book.",
    keywords: response?.seo?.keywords || "Dry Creek Valley wine tours , Limo service for wine tours , Dry Creek Valley group wine tours , Custom wine tour Dry Creek Valley , Dry Creek Valley wine testing tour , Wine tour transportation Dry Creek Valley , Dry Creek Valley AVA Listing",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/dry-creek-wine-tours",
    },
  };
}

export default function dryCreekWineTours() {
    return (
      <div>
        <header className="page-header" data-stellar-background-ratio="0.8">
            <div className="container">
                <h1>DRY CREEK VALLEY - TASTING TOUR</h1>
                <h6>AMERICAN VITICULTURAL AREAS (AVAS) </h6>
            </div>
        </header>
        <section className="content-section no-btm-space" data-background="#f5f1ea">
            <div className="container">
            
                <section className="content-section no-spacing">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 wow fadeIn">
                            <Link href="/dry-creek-valley-wine-tours">
                                    <div className="menu-pack-box">
                                        <figure>
                                            {" "}
                                            <img src="../assets/images/dry.jpg" alt="Image" />{" "}
                                        </figure>
                                        <div className="content">
                                            <h5>Dry Creek Valley Wine Tours</h5>
                                            <ul>
                                                <li>
                                                dry creek valley - tasting tour american viticultural…
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end content */}
                                    </div>
                                </Link>
                                {/* end menu-pack-box */}
                            </div>
                            <div className="col-lg-6 col-md-6 wow fadeIn">
                            <Link href="/san-francisco-to-dry-creek-valley-wine-tours">
                                    <div className="menu-pack-box">
                                        <figure>
                                            {" "}
                                            <img src="../assets/images/dry2.jpg" alt="Image" />{" "}
                                        </figure>
                                        <div className="content">
                                            <h5>San Francisco To Dry Creek Valley Wine Tours</h5>
                                            <ul>
                                                <li>
                                                DRY CREEK VALLEY - TASTING WINE 28 WINERIES - PLENTY OF TASTING OPPORTUNITIES – 9 HOUR DAY – We can whisk you away in one…
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>



                        </div>

                    </div>

                </section>
            </div>

        </section>
      </div>
    );
}