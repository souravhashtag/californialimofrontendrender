import { pageData } from "../../config/api";
import Link from "next/link";

async function getPageData() {
    return await pageData("dry-creek-wine-tours");
}

export async function generateMetadata() {
    const response = await getPageData();

    return {
        title: response?.seo?.title || "Affordable Dry Creek Valley Wine Tours | California Limo Wine Tours",
        description: response?.seo?.description || "California limo wine tour provides exclusive wine tour experiences Dry Creek Valley in luxury Sedan, suvs , Limo buses. Call on +1 877-359-3256 to book.",
        keywords: response?.seo?.keywords || "Dry Creek Valley wine tours , Limo service for wine tours , Dry Creek Valley group wine tours , Custom wine tour Dry Creek Valley , Dry Creek Valley wine testing tour , Wine tour transportation Dry Creek Valley , Dry Creek Valley AVA Listing",
        alternates: {
            canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/dry-creek-wine-tours",
        },
    };
}

export default async function dryCreekWineTours() {
    const response = await getPageData();
    const title = response?.page.page || "Title";
    const sub = response?.page.pagedata.subheader || "sub";
    const tours = response?.page.pagedata.gallery || "gallery";
    return (
        <div>
            <header className="page-header" data-stellar-background-ratio="0.8">
                <div className="container">
                    <h1>{title}</h1>
                    <h6>{sub} </h6>
                </div>
            </header>
            <section className="content-section no-btm-space" data-background="#f5f1ea">
                <div className="container">
                    <section className="content-section no-spacing">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                {tours.map((tour, index) => (
                                    <div className="col-lg-6 col-md-6 wow fadeIn" key={index}>
                                        <Link href={tour.url}>
                                            <div className="menu-pack-box">
                                                <figure>
                                                    <img src={process?.env?.NEXT_PUBLIC_IMG_FOLDER+tour.url} alt={tour.title} />
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