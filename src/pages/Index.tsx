import MarqueeBanner from "@/components/MarqueeBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import WaitlistSection from "@/components/WaitlistSection";
import AboutSection from "@/components/AboutSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";
import RocketClick from "@/components/RocketClick";
import Particles from "@/components/Particles";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles />
      <RocketClick />
      <MarqueeBanner />
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <WaitlistSection />
      <MarqueeBanner />
      <AboutSection />
      <TokenomicsSection />
      <MarqueeBanner />
      <RoadmapSection />
      <Footer />
    </div>
  );
};

export default Index;
