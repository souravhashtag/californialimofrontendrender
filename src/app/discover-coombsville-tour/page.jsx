export const dynamic = 'force-dynamic';
import { pageData } from "../../config/api";
import parse from "html-react-parser";

async function getPageData() {
  return await pageData("discover-coombsville-tour");
}

export async function generateMetadata() {
  const response = await getPageData();

  return {
    title: response?.seo?.title || "Coombsville  Wine Tours | California Limo Wine Tours",
    description: response?.seo?.description || "California limo wine tour provides Coombsville  Wine Tour experiences  in lowest price. Call us on +1 877-359-3256 to book your trip.",
    keywords: response?.seo?.keywords || "default, keywords",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/discover-coombsville-tour",
    },
  };
}

export default async function DiscoverCoombsville() {
  const response = await getPageData();
  const content = response?.page.pagedata?.content || "";
  const title = response?.page.page || "Title";
  const header = response?.page.pagedata.header || "Header";
  const subHeader = response?.page.pagedata.subheader || "SubHeader";    
  
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
                <h2>{header}

                </h2>
                <h6>{subHeader}
                </h6>
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