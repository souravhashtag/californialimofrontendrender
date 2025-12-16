import { pageData } from "../../config/api";
import Link from "next/link";
import Image from "next/image";
import Gallery from "@/components/Gallery";
async function getPageData() {
  return await pageData("gallery");
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

export default async function GalleryPage() {
  const pageresponse = await pageData("home");
  return (
    <div>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>Our Gallery</h1>
          <h6> View our gallery to see photos from some of our previous wine tour adventures. We create memories that last a lifetime with our wine customized tasting experiences. </h6>
        </div>
      </header>
      <Gallery galleryData={pageresponse?.page?.pagedata?.photogallary || pageresponse?.pagedata?.photogallary} />
    </div>
  )
}