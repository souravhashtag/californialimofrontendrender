import { BlogDetails,ListBlog } from "../../../config/api";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import he from "he";

async function getPageData() {
  //return await pageData("blog");
}
export async function generateStaticParams({ params }) {
  const blogs = await ListBlog();
  return blogs.map((blog) => ({
    slug: blog.blogurl,
  }));
}
export async function generateMetadata({ params }) {
  const slug = params?.slug ?? "";
  const pageresponse = await BlogDetails(slug);
  // console.log(pageresponse);return false

  return {
    title: he.decode(pageresponse?.metatitle || ""),
    description: he.decode(pageresponse?.metadescription || ""),
    keywords: he.decode(pageresponse?.metakeyword || ""),
    alternates: {
      canonical: pageresponse?.canonical || "",
    },
  };
}

export default async function BlogDetailsPage({ params }) {
  const slug = params?.slug ?? "";
  const pageresponse = await BlogDetails(slug);
  // console.log(pageresponse);
  return (
    <div>
      <section className="blog-details">
        <header className="page-header" data-stellar-background-ratio="0.8">
          <div className="container">
            <h1>{pageresponse?.title}</h1>
          </div>
        </header>
        <div className="content-section container">
          <div className="row">
            <div className="col-sm-12">
              {/* <img
                src={pageresponse.banner}
                alt={pageresponse.title}
                className="img-responsive"
              /> */}
              <img
                src={pageresponse.bannerurl}
                alt={pageresponse.title}
                title={pageresponse.title}
                className="img-responsive"
              />
              <div className="blog-details-content">
                <span>
                  {dayjs(pageresponse.blogdate).format("D, MMMM, YYYY")}
                </span>
                <h1>{pageresponse?.title}</h1>
                <div className="blog-footer">
                  <b>by Steak House</b>
                </div>
                <div
  className="html-content"
  dangerouslySetInnerHTML={{ __html: pageresponse.content.trim() }}
/> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
