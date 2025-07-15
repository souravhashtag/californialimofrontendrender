export const dynamic = 'force-dynamic';
import { pageData } from "../../config/api";
import Link from "next/link";
import Image from "next/image";
import { FaqComponent } from "../../components/FaqComponent";

async function getPageData() {
  return await pageData("faq");
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

export default function Faq() {
  return (
    <div>
      <FaqComponent />
    </div>
  );
}