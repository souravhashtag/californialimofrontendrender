import { pageData, ListBlog } from "@/config/api"; // adjust if needed
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

// Metadata generator for SEO
export async function generateMetadata() {
  const response = await pageData("blog");

  return {
    title: response?.seo?.title || "",
    description: response?.seo?.description || "",
    keywords: response?.seo?.keywords || "",
    alternates: {
      canonical: response?.seo?.canonical || "",
    },
  };
}

// Server Component
export default async function Blog() {
  const pageresponse = await ListBlog();
  // const response = await pageData("blog");

  return (
    <div>
      <section className="blog">
        <header className="page-header" data-stellar-background-ratio="0.8">
          <div className="container">
            <h1>Blog</h1>
          </div>
        </header>
        <div className="content-section container">
          <div className="row">
            {pageresponse?.map((post, index) => (
              <div key={index} className="col-sm-4 blog-list">
                <img
                  src={post.bannerurl}
                  alt={post.title}
                  title={post.title}
                  className="img-responsive"
                />
                <div className="blog-list-content">
                  <span>{dayjs(post.blogdate).format("D, MMMM, YYYY")}</span>
                  <div className="title rainbow">
                    <Link href={`/blog/${post.blogurl}`}>
                      {post.title}
                    </Link>
                  </div>
                  <div className="blog-footer">
                    <b> by Steak House</b>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
