import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Service";
import FeaturesSection from "./components/Features";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <ServicesSection/>
    <FeaturesSection/>
    <h1 className="text-primary">Hello</h1>
    </div>
  );
}
