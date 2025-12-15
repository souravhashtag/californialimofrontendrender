import { pageData } from "../../config/api";
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
  return await pageData("book-now");
}

export async function generateMetadata() {
  const response = await getPageData();

  return {
    title: response?.seo?.title || "Spring Mountain wine tour | California limo wine tour",
    description: response?.seo?.description || "California limo wine tour provides Luxury wine tour experiences Spring Mountain wine tour . Call us on +1 877-359-3256 to book your trip.",
    keywords: response?.seo?.keywords || "",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/book-now",
    },
  };
}

export default function Reservation() {
  return (
    <div>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>Reservation</h1>
        </div>
      </header>
      <div className="content-section ">
        <iframe name="frame" id="frame" style={{ overflow: "hidden", height: "1200px" }} tabIndex="0" scrolling="yes" width="100%" height="100%" frameBorder="0" data-src="https://scweb-e.groundtools.com/US.CA.ECK/WebConnect/DefaultV2/Booking" className="lazyloaded" src="https://scweb-e.groundtools.com/US.CA.ECK/WebConnect/DefaultV2/Booking"></iframe>
      </div>
    </div>
  )
}