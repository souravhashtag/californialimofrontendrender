export const dynamic = 'force-dynamic';
import parse from "html-react-parser";
import { pageData } from "../../config/api";

// Fetch data server-side
async function getPageData() {
  return await pageData("about");
}

export async function generateMetadata() {
  const response = await getPageData();

  return {
    title: response?.seo?.title || "About - My Website",
    description: response?.seo?.description || "Welcome to my Next.js website!",
    keywords: response?.seo?.keywords || "default, keywords",
    alternates: {
      canonical: response?.seo?.canonical || "http://localhost:4000/about-us",
    },
  };
}

// Server component: no useState, just render async
export default async function About() {
  const response = await getPageData();
  const banner = response?.pagedata?.banner || {};
  const content = response?.page.pagedata?.content || "";
  const title = response?.page.pagedata.banner.header || "About";
  const subHeader = response?.page.pagedata.banner.subheader || "";
  console.log(response)
  return (
    <div>
      {/* Banner */}
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <div className="container">
            <h1>About Us</h1>
            <h6>
              Explore the confluence of luxury limousine and premium wine in
              California.
            </h6>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 wow fadeIn">
              <div className="col-12 wow fadeIn">
                <div className="section-title">
                  <h6>{title}</h6>
                  <h2>{subHeader}</h2>
                  <img
                    src="../assets/images/title-shape.png"
                    alt="Image"
                    className="title-shape"
                  />{" "}
                </div>
                {parse(content)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}