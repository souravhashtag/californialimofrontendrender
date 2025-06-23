import HomeComponent from "@/components/Home";
import { pageData } from "../config/api"; 

async function getPageData() {
  return await pageData("home");
}

export async function generateMetadata() {
  const response = await getPageData(); 
  console.log("Response from getPageData:", response);

  return {
    title: response?.seo?.title || "Home",
    description: response?.seo?.description || "Default Description",
    keywords: response?.seo?.keywords || "default, keywords",
    alternates: {
      canonical: response?.seo?.canonical || "http://localhost:4000/",
    },
  };
}

export default async function Home() {
  const response = await getPageData(); 
  return (
    <>
      <HomeComponent page={response.page} />
    </>
  );
}
