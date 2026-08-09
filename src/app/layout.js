import Footer from "./components/Footer";
import Header from "./components/Header";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingPhone from "./components/FloatingPhone";
import "./globals.css";

export const metadata = {
  title: "Home | Boostup Cleaning Service",
  description: "Boostup Cleaning Service provides professional, reliable, and thorough cleaning services in Dubbo and surrounding areas. Book your house, commercial, or bond cleaning today.",
  keywords: ["cleaning service", "cleaners Dubbo", "house cleaning", "bond cleaning", "commercial cleaning", "Boostup Cleaning Service"],
  openGraph: {
    title: "Boostup Cleaning Service | Professional Cleaners in Dubbo",
    description: "Top-rated professional cleaning services in Dubbo and surrounding NSW. Book today for a spotless home or office.",
    url: "https://boostupcleaningservices.au",
    siteName: "Boostup Cleaning Service",
    locale: "en_AU",
    type: "website",
  },
  icons: {
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning>
        <div>
          <Header/>
        {children}
          <Footer/>
          <FloatingWhatsApp/>
          <FloatingPhone/>
        </div>
      </body>
    </html>
  );
}
