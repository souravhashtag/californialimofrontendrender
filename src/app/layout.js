import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
import './styles/App.css';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "",
//   description: "",
// };
export async function generateMetadata() {
  try {
    
    return {
      title: "Page",
      description:"Default Description",
      keywords: "default, keywords",
      alternates: {
        canonical: "http://localhost:4000/",
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Fallback Title",
      description: "Fallback Description",
      keywords: "default, keywords",
      alternates: {
        canonical: "http://localhost:4000/",
      },
    };
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <GoogleAnalytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
