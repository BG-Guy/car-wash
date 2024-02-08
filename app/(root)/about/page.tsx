import Container from "@/components/container";
import { AboutSection } from "./components/about-section";
import { HeroSection } from "./components/hero-section";

const AboutPage = async () => {
  return (
    <div className="app-min-h flex flex-col ">
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default AboutPage;
