import { pageData } from "../../config/api";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

async function getPageData() {
    return await pageData("sonoma-valley-wine-tours");
}

export async function generateMetadata() {
    const response = await getPageData();

    return {
        title: response?.seo?.title || "Sonoma valley - wine paradise | California limo wine tours",
        description: response?.seo?.description || "Explore a comfortable & luxurious limo for SONOMA VALLEY – WINE PARADISE with your friends & family. Book our luxury limo to fit any group size.",
        keywords: response?.seo?.keywords || "default, keywords",
        alternates: {
            canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/sonoma-valley-wine-tours",
        },
    };
}

export default async function sonomaValleyWineTours() {
    const response = await getPageData();
    console.log(response)
    // const content = response?.page.pagedata?.content || "";
    const title = response?.page.page || "Title";
    const title2 = response?.page.pagedata.header || "Title2";
    const subtitle = response?.page.pagedata.subheader || "subtitle";
      const content = response?.page.pagedata?.content || "";
    return (
        <div>
            <header className="page-header" data-stellar-background-ratio="0.8">
                <div className="container">
                    <h1>{title}
                    </h1>
                </div>
            </header>

            <section className="content-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div
                            className="col-12 wow fadeIn"
                            style={{ visibility: "visible", animationName: "fadeIn" }}
                        >
                            <div className="section-title">
                                <h2>
                                    {title2}
                                    <br />
                                </h2>
                                <h6>
                                    {subtitle}
                                </h6>
                                <img
                                    src="../assets/images/title-shape.png"
                                    alt="Image"
                                    className="title-shape"
                                />{" "}
                            </div>
                            {/* end section-title */}
                        </div>
                        {parse(content)}
                        {/* end col-12 */}
                        {/* end col-6 */}
                        {/* end col-6 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
        </div>
    );
}