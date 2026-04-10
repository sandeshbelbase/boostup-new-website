import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Service";
import HowItWorks from "./components/HowItWorks";
import FeaturesSection from "./components/Features";
import WorkDone from "./components/WorkDone";
import Reviews from "./components/Reviews";
import ServiceAreas from "./components/ServiceAreas";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <ServicesSection/>
    <HowItWorks/>
    <div id="about-us">
      <FeaturesSection/>
      <WorkDone/>
    </div>
    <Reviews/>
    <div id="service-areas">
      <ServiceAreas/>
    </div>
    <FAQ/>
    <div id="contact-us">
      <CTA/>
    </div>
   </div>
  );
}
