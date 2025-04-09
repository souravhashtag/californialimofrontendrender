import { pageData } from "../../config/api";
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
  return await pageData("russian-river-wine-tours");
}

export async function generateMetadata() {
  const response = await getPageData();

  return {
    title:
      response?.seo?.title ||
      "Top rated Russian River valley Wine Tours | California Limo Wine Tours",
    description:
      response?.seo?.description ||
      "California limo wine tour provides exclusive wine tour experiences Russian River valley in luxury Sedan , suvs , Limo buses. Call on +1 877-359-3256 to book",
    keywords:
      response?.seo?.keywords ||
      "Russian River valley wine tours , Limo service for wine tours , Russian River valley group wine tours , Custom wine tour Russian River valley , Russian River valley wine testing tour , Wine tour transportation Russian River valley , Russian River valley",
    alternates: {
      canonical:
        response?.seo?.canonical ||
        "https://www.californialimowinetours.com/russian-river-wine-tours",
    },
  };
}

export default function RussianRiver() {
  return (
    <div>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>RUSSIAN RIVER VALLEY </h1>
          <h6>ROLLING HILLS - ANCIENT REDWOODS</h6>
        </div>
      </header>
      <section
        className="content-section no-btm-space"
        data-background="#f5f1ea"
      >
        <div className="container">
          <section className="content-section no-spacing">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 wow fadeIn">
                  <Link href="/russian-river-valley-wine-tours">
                    <div className="menu-pack-box">
                      <figure>
                        {" "}
                        <img
                          src="../assets/images/menu-pack-thumb05.jpg"
                          alt="Image"
                        />{" "}
                      </figure>
                      <div className="content">
                        <h5>Russian River Valley Wine Tours</h5>
                        <ul>
                          <li>
                            russian river valley rolling hills - ancient
                            redwoods…
                          </li>
                        </ul>
                      </div>
                      {/* end content */}
                    </div>
                  </Link>
                  {/* end menu-pack-box */}
                </div>
                <div className="col-lg-6 col-md-6 wow fadeIn">
                  <Link href="/san-francisco-to-russian-river-valley-wine-tours">
                    <div className="menu-pack-box">
                      <figure>
                        {" "}
                        <img
                          src="../assets/images/menu-pack-thumb10.jpg"
                          alt="Image"
                        />{" "}
                      </figure>
                      <div className="content">
                        <h5>
                          San Francisco To Russian River Valley Wine Tours
                        </h5>
                        <ul>
                          <li>
                            Russian River Wine Tours - Premier Wine Regions
                            Pinot Noir - Popular Wine – 9 Hour Day – The Russian
                            River Valley Is Quickly Becoming…
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
