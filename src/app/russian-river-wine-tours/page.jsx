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

export default async function RussianRiver() {
  const response = await getPageData();
  const page = response?.page || { pagedata: {} };
  // const content = page.pagedata?.content || "";
  const title = page.page || "Title";
  const sub = page.pagedata?.subheader || "sub";
  const tours = Array.isArray(page.pagedata?.gallery)
    ? page.pagedata.gallery
    : [];
  return (
    <div>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>{title}</h1>
          <h6>{sub}</h6>
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
                {tours.map((tour, index) => (
                  <div className="col-lg-6 col-md-6 wow fadeIn" key={index}>
                    <Link href={tour.url}>
                      <div className="menu-pack-box">
                        <figure>
                          <img src={tour.url} alt={tour.title} />
                        </figure>
                        <div className="content">
                          <h5>{tour.head}</h5>
                          <ul>
                            <li>{tour.subhead}</li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
