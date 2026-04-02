import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ImpactSection from "@/sections/ImpactSection";
import MarqueeSection from "@/sections/MarqueeSection";
import EventCards from "@/sections/EventCards";

import ScheduleSection from "@/sections/ScheduleSection";
import WhoShouldJoinSection from "@/sections/WhoShouldJoinSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <MarqueeSection />
      <div data-theme="dark"><EventCards /></div>

      <div data-theme="dark"><MarqueeSection invertColors /></div>
      <ScheduleSection />

      <MarqueeSection />
      <WhoShouldJoinSection />
      <div className="h-16 md:h-24" /> {/* Blank space requested */}

      <Footer />
    </div>
  );
};

export default Index;
