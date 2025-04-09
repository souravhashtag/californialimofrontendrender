import { pageData } from "../../../config/api";
import FleetCom from "@/components/FleetCom";

// This replaces useParams() in server components
export async function generateStaticParams() {
  const pageresponse = await pageData("home");
  return pageresponse.map((fleet) => ({
    slug: fleet?.page?.pagedata?.ourvehicles?.vehicleslug,
  }));
}

export default async function Fleet({ params }) {
  const slug = params?.slug || "sedan";
  
  const pageresponse = await pageData("home");
  
  return (
    <div>
      <FleetCom pageresponse={pageresponse} />
    </div>
  );
}

// Generate metadata from the page data
export async function generateMetadata({ params }) {
  const slug = params?.slug || "sedan";
  const response = await pageData(slug);
  
  return {
    title: response?.seo?.title || "",
    description: response?.seo?.description || "",
    keywords: response?.seo?.keywords || "",
    alternates: {
      canonical: response?.seo?.canonical || "",
    },
  };
}