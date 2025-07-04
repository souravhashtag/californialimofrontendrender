export const dynamic = 'force-dynamic';
import { pageData } from "../../config/api";
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
    return await pageData("napa-valley-wine-tour");
}

export async function generateMetadata() {
    const response = await getPageData();
    return {
        title: response?.seo?.title || "About - My Website",
        description: response?.seo?.description || "Welcome to my Next.js website!",
        keywords: response?.seo?.keywords || "default, keywords",
        alternates: {
            canonical: response?.seo?.canonical || "http://localhost:4000/about-us",
        },
    };
}

export default async function Napavalley() {
    const response = await getPageData();
    console.log(response)
    // const content = response?.page.pagedata?.content || "";
    const title = response?.page.page || "About";
    const sub = response?.page.pagedata.subheader || "sub";
     const tours = response?.page.pagedata.gallery || "gallery";
    return (
        <div>
            <header className="page-header" data-stellar-background-ratio="0.8">
                <div className="container">
                    <h1>Our Services</h1>
                    <h6>
                        Services we offer
                    </h6>
                </div>
            </header>
            <section className="content-section no-btm-space" data-background="#f5f1ea">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 wow fadeIn">
                            <div className="section-title">
                                <h2>{title}</h2>
                                <h5>
                                    {sub}
                                </h5>
                                <img src="../assets/images/title-shape.png" alt="Image" className="title-shape" />
                            </div>
                        </div>
                    </div>
                    <section className="content-section no-spacing">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                {tours.map((tour, index) => (
                                    <div className="col-lg-6 col-md-6 wow fadeIn" key={index}>
                                        <Link href={tour.url}>
                                            <div className="menu-pack-box">
                                                <figure>
                                                    <img src={tour.url} alt={tour.title} />
                                                </figure>
                                                <div className="content">
                                                    <h5>{tour.head}</h5>
                                                    <ul>
                                                        <li>{tour.subhead}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}