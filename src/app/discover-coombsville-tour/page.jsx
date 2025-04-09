import { pageData } from "../../config/api"; 
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
  return await pageData("discover-coombsville-tour");
}

export async function generateMetadata() {
  const response = await getPageData(); 

  return {
    title: response?.seo?.title || "Coombsville  Wine Tours | California Limo Wine Tours",
    description: response?.seo?.description || "California limo wine tour provides Coombsville  Wine Tour experiences  in lowest price. Call us on +1 877-359-3256 to book your trip.",
    keywords: response?.seo?.keywords || "default, keywords",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/discover-coombsville-tour",
    },
  };
}

export default function DiscoverCoombsville(){
  return (
    <div>
    <header className="page-header" data-stellar-background-ratio="0.8">
       <div className="container">
           <h1>Discover Coombsville Tour</h1>
       </div>
   </header>
   <section className="content-section">
 <div className="container">
   <div className="row justify-content-center">
     <div
       className="col-12 wow fadeIn" >
       <div className="section-title">
         <h2>COOMBSVILLE

         </h2>
           <h6>NAPA VALLEY’S AMERICAN VITICULTURAL AREA (AVA)
           </h6> 
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
           src="../assets/images/img-30.jpg"
           alt="Image"
           width="100%"
         />
       </figure>
     </div>
     <div className="col-lg-6 wow fadeIn" >
       <h5>
       
       Coombsville wineries have been producing grapes for other well-known labels for years, so it’s likely you’ve sampled the distinctive flavors produced by the rich volcanic soil that sets Coombsville apart. But to get the full experience of Coombsville wines—wines that are grown in unique conditions, produced in small batches, and consistently produced with great depth and structure—a visit to one of the wineries in Coombsville will prove to be a worthwhile addition to your trip to the Napa Valley.
The wineries are the attractions in Coombsville. Each family-owned Napa winery offers an intimate visiting experience with a personal touch. And because all visits are by appointment only, you get the benefit of a longer tasting experience and the pleasure of interacting with the winemakers and winegrowers.
       </h5>
       <br />
     </div>

   </div>
 </div>
</section>

   </div>
  )
}