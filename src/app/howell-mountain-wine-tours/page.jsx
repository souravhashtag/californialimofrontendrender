import { pageData } from "../../config/api";
import parse from "html-react-parser";
async function getPageData() {
  return await pageData("howell-mountain-wine-tours");
}

export async function generateMetadata() {
  const response = await getPageData();

  return {
    title: response?.seo?.title || "Howell Mountain Wine Tours | California Limo Wine Tours",
    description: response?.seo?.description || "California limo wine tour provides exclusive wine tour experiences Howell Mountain in luxury Sedan, suvs , Limo buses. Call us on +1 877-359-3256 to book.",
    keywords: response?.seo?.keywords || "Howell Mountain wine tours , Limo service for wine tours , Howell Mountain group wine tours , Custom wine tour Howell Mountain , Howell Mountain wine testing tour , Wine tour transportation Howell Mountain",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/howell-mountain-wine-tours",
    },
  };
}

export default async function HowellMountain() {
  const response = await getPageData();
  const title = response?.page?.page || response?.pagedata?.title || "Title";
  const header = response?.page?.pagedata?.header || response?.pagedata?.header || "Header";
  const subHeader = response?.page?.pagedata?.subheader || response?.pagedata?.subheader || "SubHeader";
  const content = response?.page?.pagedata?.content || response?.pagedata?.content || "";
  return (
    <div>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </header>
      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-12 wow fadeIn" >
              <div className="section-title">
                <h2>
                  {header}

                  <br />
                </h2>
                <h6>{subHeader}</h6>
                <img
                  src="../assets/images/title-shape.png"
                  alt="Image"
                  className="title-shape"
                />{" "}
              </div>
            </div>
            {parse(content)}

          </div>
        </div>
      </section>

    </div>
  )
}