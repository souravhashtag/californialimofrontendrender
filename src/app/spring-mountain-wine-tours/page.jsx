import { pageData } from "../../config/api"; 
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
  return await pageData("spring-mountain-wine-tours");
}

export async function generateMetadata() {
  const response = await getPageData(); 

  return {
    title: response?.seo?.title || "Spring Mountain wine tour | California limo wine tour",
    description: response?.seo?.description || "California limo wine tour provides Luxury wine tour experiences Spring Mountain wine tour . Call us on +1 877-359-3256 to book your trip.",
    keywords: response?.seo?.keywords || "",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/spring-mountain-wine-tours",
    },
  };
}

export default function SpringMountain(){
  return (
    <div>
    <header className="page-header" data-stellar-background-ratio="0.8">
       <div className="container">
           <h1>Spring Mountain Wine Tours
           </h1>
       </div>
   </header>
   <section className="content-section">
 <div className="container">
   <div className="row justify-content-center">
     <div
       className="col-12 wow fadeIn" >
       <div className="section-title">
         <h2>MOUNTAIN WINE
         </h2>
 
         <img
           src="../assets/images/title-shape.png"
           alt="Image"
           className="title-shape"
         />{" "}
       </div>
     </div>
     <div className="col-lg-6">
       <figure>
         <img
           src="../assets/images/spring.png"
           alt="Image"
           width="100%"
         />
       </figure>
     </div>
     <div className="col-lg-6 wow fadeIn" >
       <h5>
       
       Traveling through the beautiful and intimate hillside terrain of Spring Mountain is a private wine tasting tour our customers adore. Spring Mountain District is just a few minutes off highway 29, behind the town of Saint Helena. Small vineyards meander through this region. There are two-dozen family-owned and operated Napa wineries and 1,000 acres of vineyards. Visitors are often greeted by the owner of the winery, a family member, or even the winemaker. Visits must be arranged in advance.
       </h5>
       <br />
     </div>

   </div>
 </div>
</section>

   </div>
  )
}