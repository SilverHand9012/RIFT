import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ImpactSection from "@/sections/ImpactSection";
import MarqueeSection from "@/sections/MarqueeSection";
// import PreScheduleShowcase from "@/sections/PreScheduleShowcase";
import EventCards from "@/sections/EventCards";

import ScheduleSection from "@/sections/ScheduleSection";
// import PartnersSection from "@/sections/PartnersSection";
import WhoShouldJoinSection from "@/sections/WhoShouldJoinSection";
import CTASection from "@/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <MarqueeSection />
      {/* <PreScheduleShowcase /> */}
      <div data-theme="dark"><EventCards /></div>

      <div data-theme="dark"><MarqueeSection invertColors /></div>
      <ScheduleSection />
      {/* <PartnersSection /> */}
      <MarqueeSection />
      <WhoShouldJoinSection />
      <div className="h-16 md:h-24" /> {/* Blank space requested */}
      {/*<CTASection />*/}
      <Footer />
    </div>
  );
};

export default Index;
