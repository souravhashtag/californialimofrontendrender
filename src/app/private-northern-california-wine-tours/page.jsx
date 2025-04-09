import { pageData } from "../../config/api"; 
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
  return await pageData("private-northern-california-wine-tours");
}

export async function generateMetadata() {
  const response = await getPageData(); 

  return {
    title: response?.seo?.title || "Private Northern California Wine Tours | California Limo Wine Tours",
    description: response?.seo?.description || "California limo wine tour provides exclusive wine tour experiences in Private Northern California Wine Tours . Call us on +1 877-359-3256 to book your trip.",
    keywords: response?.seo?.keywords || "default, keywords",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/private-northern-california-wine-tours",
    },
  };
}

export default function PrivateNorthern() {
    return (
      <div>
      <header className="page-header" data-stellar-background-ratio="0.8">
         <div className="container">
             <h1>NORTHERN CALIFORNIA’S WINE COUNTRY</h1>
         </div>
     </header>
     <section className="content-section">
   <div className="container">
     <div className="row justify-content-center">
       <div
         className="col-12 wow fadeIn" >
         <div className="section-title">
           <h2>800 WINERIES NESTLED - 28 AVAS
  
  
  
  
             <br />
           </h2>
           <h6>BEST-KNOWN "ESTATE" - FAMILY-OWNED "BOUTIQUE" WINERIES
           ROBUST WINE</h6>
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
             src="../assets/images/img-45.jpg"
             alt="Image"
             width="100%"
           />
         </figure>
       </div>
       <div className="col-lg-6 wow fadeIn" >
         <h5>
         
  California Limo Wine Tours invite you to accompany us on an unforgettable private wine tasting tour of one of the northernmost appellations of Napa Valley and partake in the age-worthy Cabernet Sauvignons and Cabernet Francs that Diamond Mountain wineries are famous for. The climate here is slightly warmer than the southern mountain vineyards and significantly cooler than the valley floor vineyards, producing full-bodied and firmly structured wines.
  Al Brounstein, a pioneer who saw the potential of the mountain and purchased 79 acres, contributed to the renewal of the Diamond Mountain District in 1968. His Diamond Creek Winery has four distinct vineyards grown from “First-Growth” Bordeaux cuttings, which produce highly-rated and highly coveted Cabernet Sauvignons.
         </h5>
         <br />
       </div>
  
     </div>
   </div>
  </section>
  
     </div>
    )
  }