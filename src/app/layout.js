import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "BoostUp Cleaning Service",
  description: "Cleaning Service with professional touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header/>
        {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
