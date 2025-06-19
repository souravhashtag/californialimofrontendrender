import { pageData } from "../../config/api";
import parse from "html-react-parser";

async function getPageData() {
  return await pageData("spring-mountain-wine-tours");
}

export async function generateMetadata() {
  const response = await getPageData();

  return {
    title: response?.seo?.title || "Spring Mountain wine tour | California limo wine tour",
    description: response?.seo?.description || "California limo wine tour provides Luxury wine tour experiences Spring Mountain wine tour . Call us on +1 877-359-3256 to book your trip.",
    keywords: response?.seo?.keywords || "",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/spring-mountain-wine-tours",
    },
  };
}

export default async function SpringMountain() {
  const response = await getPageData();
  const title = response?.page.page || "Title";
  const header = response?.page.pagedata.header || "Header";
  const content = response?.page.pagedata?.content || "";
  return (
    <div>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>{title}
          </h1>
        </div>
      </header>
      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-12 wow fadeIn" >
              <div className="section-title">
                <h2>{header}
                </h2>

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