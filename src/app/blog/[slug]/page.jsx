import { BlogDetails,ListBlog } from "../../../config/api";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

async function getPageData() {
  //return await pageData("blog");
}
export async function generateStaticParams() {
  const blogs = await ListBlog();
  return blogs.map((blog) => ({
    slug: blog.blogurl,
  }));
}
export async function generateMetadata() {
  const response = await getPageData();

  return {
    title: response?.seo?.title || "",
    description: response?.seo?.description || "",
    keywords: response?.seo?.keywords || "",
    alternates: {
      canonical: response?.seo?.canonical || "",
    },
  };
}

export default async function BlogDetailsPage({ params }) {
  const slug = params?.slug ?? "";
  const pageresponse = await BlogDetails(slug);
  console.log(pageresponse);
  return (
    <div>
      <section className="blog-details">
        <header className="page-header" data-stellar-background-ratio="0.8">
          <div className="container">
            <h1>{pageresponse[0]?.title}</h1>
          </div>
        </header>
        <div className="content-section container">
          <div className="row">
            <div className="col-sm-12">
              <img
                src={pageresponse[0].banner}
                alt={pageresponse[0].title}
                className="img-responsive"
              />
              <div className="blog-details-content">
                <span>
                  {dayjs(pageresponse[0].blogdate).format("D, MMMM, YYYY")}
                </span>
                <h1>{pageresponse[0]?.title}</h1>
                <div className="blog-footer">
                  <b>by Steak House</b>
                </div>
                <div
  className="html-content"
  dangerouslySetInnerHTML={{ __html: pageresponse[0].content.trim() }}
/> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
