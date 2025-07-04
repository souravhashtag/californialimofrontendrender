export const dynamic = 'force-dynamic';
import { pageData } from "../../config/api";
import parse from "html-react-parser";

async function getPageData() {
    return await pageData("alexander-valley-wine-tours");
}

export async function generateMetadata() {
    const response = await getPageData();

    return {
        title: response?.seo?.title || "Alexander valley wine tour | California Limo Wine Tours",
        description: response?.seo?.description || "Explore Alexander Valley wines with California Limo Wine Tours in our luxury limos and car service. Book us to enjoy your wine tour now.",
        keywords: response?.seo?.keywords || "Alexander valley wine tours , Limo service for wine tours , Alexander valley group wine tours , Custom wine tour Alexander valley, Alexander valley wine testing tour , Wine tour transportation Alexander valley, Alexander valley",
        alternates: {
            canonical: response?.seo?.canonical || "https://www.californialimowinetours.com/alexander-valley-wine-tours",
        },
    };
}

export default async function Napavalley() {
    const response = await getPageData();
    // const content = response?.page.pagedata?.content || "";
    const title = response?.page.page || "Title";
    const header = response?.page.pagedata.header || "Header";
    const content = response?.page.pagedata?.content || "";
    return (
        <div>
            <header className="page-header" data-stellar-background-ratio="0.8">
                <div className="container">
                    <h1>{title}</h1>
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
                                    {header}
                                    <br />
                                </h2>
                                <img
                                    src="../assets/images/title-shape.png"
                                    alt="Image"
                                    className="title-shape"
                                />{" "}
                            </div>
                            {/* end section-title */}
                        </div>
                        {/* end col-12 */}
                        {/* end col-8 */}
                        {parse(content)}
                    </div>
                </div>
            </section>
        </div>
    );
}