import { pageData } from "../../config/api";
import Link from "next/link";
import Image from "next/image";
import { Contact } from "@/components/Contact";
async function getPageData() {
  return await pageData("contact");
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

export default function ContactUs() {
  return (
    <div>
      <Contact />
    </div>
  )
}