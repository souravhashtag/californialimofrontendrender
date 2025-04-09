import { pageData } from "../../config/api"; 
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
  return await pageData("howell-mountain-wine-tours");
}

export async function generateMetadata() {
  const response = await getPageData(); 

  return {
    title: response?.seo?.title || "Howell Mountain Wine Tours | California Limo Wine Tours",
    description: response?.seo?.description || "California limo wine tour provides exclusive wine tour experiences Howell Mountain in luxury Sedan, suvs , Limo buses. Call us on +1 877-359-3256 to book.",
    keywords: response?.seo?.keywords || "Howell Mountain wine tours , Limo service for wine tours , Howell Mountain group wine tours , Custom wine tour Howell Mountain , Howell Mountain wine testing tour , Wine tour transportation Howell Mountain",
    alternates: {
      canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/howell-mountain-wine-tours",
    },
  };
}

export default function HowellMountain() {
    return (
      <div>
      <header className="page-header" data-stellar-background-ratio="0.8">
         <div className="container">
             <h1>Howell Mountain Wine Tours
  
             </h1>
         </div>
     </header>
     <section className="content-section">
   <div className="container">
     <div className="row justify-content-center">
       <div
         className="col-12 wow fadeIn" >
         <div className="section-title">
           <h2>
           HOWELL MOUNTAIN – NAPA VALLEY
  
             <br />
           </h2>
           <h6>AMERICAN VITICULTURAL AREA (AVA)<br />
  BRONZE METAL AT THE PARIS WORLD COMPETITION</h6>
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
             src="../assets/images/img-32.jpg"
             alt="Image"
             width="100%"
           />
         </figure>
       </div>
       <div className="col-lg-6 wow fadeIn" >
         <h5>
         Along the steep hillsides and high elevation vineyards of Howell Mountain, you will experience intensely flavorful wines (distinctive from the valley floor) during your private wine tasting tour with California Limo Wine Tours. Situated above the fog, the vineyards are bathed in sunlight and provide spectacular views of the valley below.
         Howell Mountain holds the distinction of the first American Viticultural Area (AVA) in greater Napa Valley and is known for producing intense wines from small grape clusters. While once known for robust Zinfandels, Howell Mountain has been transformed over several decades by growers seeking dark, rich flavors for Merlot and, of course, big Cabernets. These wines are known for big tannins, velvety texture, and often a unique hint of white pepper.
         </h5>
         <br />
       </div>
  
     </div>
   </div>
     </section>
  
     </div>
    )
  }