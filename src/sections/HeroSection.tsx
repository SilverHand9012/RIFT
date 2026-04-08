import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import naacLogo from "@/assets/logo/naac.svg";
import revaUniversitySvg from "@/assets/logo/reva-university.svg";
import revaRiftSvg from "@/assets/logo/reva-rift.svg";
import logoFull from "@/assets/logo/2nd_main_3.png";
import logo2ndMain from "@/assets/logo/reva-logo-black.svg";
import gdgRevaLogo from "@/assets/logo/gdg-reva.svg";
import partnerSampleLogo from "@/assets/images/partners/sample.svg";

// Partner Logos for Hero Marquee
import partnerLogo1 from "@/assets/images/partners/IMG_9220.JPG.webp";
import partnerLogo2 from "@/assets/images/partners/idk01.webp";
import partnerLogo3 from "@/assets/images/partners/kraft.webp";
import partnerLogo4 from "@/assets/images/partners/logo.webp";
import partnerLogo5 from "@/assets/images/partners/oscode.webp";
import partnerLogo6 from "@/assets/images/partners/abc.webp";

import vectorTop from "@/assets/elements/vector-top.svg";
import vectorBottom from "@/assets/elements/vector-bottom.svg";
import MarqueeSection, { MarqueeItem } from "./MarqueeSection";

const heroMarqueeItems: MarqueeItem[] = [
  { type: "icon", src: logoFull },
  { type: "text", label: "REVA RIFT 2026" },
  { type: "icon", src: partnerLogo1 },
  { type: "text", label: "REVA RIFT 2026" },
  { type: "icon", src: partnerLogo2 },
  { type: "text", label: "REVA RIFT 2026" },
  { type: "icon", src: partnerLogo3 },
  { type: "text", label: "REVA RIFT 2026" },
  { type: "icon", src: partnerLogo4 },
  { type: "text", label: "REVA RIFT 2026" },
  { type: "icon", src: partnerLogo5 },
  { type: "text", label: "REVA RIFT 2026" },
  { type: "icon", src: partnerLogo6 },
  { type: "text", label: "REVA RIFT 2026" },
];

const partners = [
  { id: 1, name: "Partner 1", logo: partnerSampleLogo },
  { id: 2, name: "Partner 2", logo: partnerSampleLogo },
  { id: 3, name: "Partner 3", logo: partnerSampleLogo },
  { id: 4, name: "Partner 4", logo: partnerSampleLogo },
  { id: 5, name: "Partner 5", logo: partnerSampleLogo },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of this section (0 = top of section visible, 1 = section scrolled out)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // from when section top hits viewport top → section bottom hits viewport top
  });

  // Blue vectors: independent parallax drift
  const yTop = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[900px] border-b border-border overflow-hidden bg-white"
    >
      {/* Background Decor — own parallax, not affected by content fade */}
      <motion.img 
        src={vectorTop} 
        alt="" 
        style={{ y: yTop }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="hidden md:block absolute top-0 right-0 w-[35vw] max-w-[600px] object-contain pointer-events-none z-0" 
      />
      <motion.img 
        src={vectorBottom} 
        alt="" 
        style={{ y: yBottom }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="hidden md:block absolute bottom-0 left-0 w-[35vw] max-w-[600px] object-contain pointer-events-none z-0" 
      />

      {/* Main hero content — No longer scroll-driven, static positioning */}
      <div
        className="relative z-10 container h-full px-4 max-w-7xl mx-auto flex flex-col items-center"
      >
        
        {/* BLOCK 1: University & RIFT Logos */}
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-12 pt-32 sm:pt-48">
          <div className="flex items-center justify-center">
            <img 
              src={revaRiftSvg} 
              alt="REVA RIFT" 
              className="w-[280px] h-[30px] sm:w-[480px] sm:h-[50px] object-contain" 
            />
          </div>
        </div>

        {/* BLOCK 2: Heading & Subtitle */}
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 z-20 mt-6 sm:mt-8">
          <h1
            className="hero-title text-center text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl max-w-5xl mx-auto"
          >
            <span className="inline-block mr-3">Build</span>
            <span className="inline-block text-primary italic mr-3">India's</span>
            <br />
            <span className="inline-block mr-3">Tech</span>
            <span className="inline-block">Sovereignty</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-medium max-w-3xl leading-relaxed text-center">
            Meet in Bangalore to build bold prototypes, learn fast, and ship ideas that strengthen
            India's digital future.
          </p>
        </div>

        {/* BLOCK 3: Partners */}
        <div className="flex-1 w-full flex flex-col items-center justify-start gap-8 sm:gap-12 pt-8 sm:pt-12 mt-0">
          <div className="flex flex-col items-center gap-1 mb-0">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-muted-foreground/80">
              in association with
            </p>
            <p className="text-base sm:text-xl font-bold uppercase tracking-[0.1em] text-black text-center">
              School of Computer Science and Engineering
            </p>
          </div>
        </div>

        {/* BLOCK 4: CTA Buttons - ANIMATION KEPT AS REQUESTED */}
        <div className="flex-1 w-full flex flex-col items-center justify-start pt-0 pb-16 z-20 -mt-4 sm:-mt-6">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/workshops"
              className="btn-shine inline-flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm w-48 sm:w-60 px-8 py-2 sm:py-3 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary relative"
            >
              Explore Workshops
            </Link>

            <Link
              to="/events"
              className="btn-shine inline-flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm w-48 sm:w-60 px-8 py-2 sm:py-3 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary relative"
            >
              Explore Hackathons
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Marquee pinned to the absolute bottom of the Hero page */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <MarqueeSection items={heroMarqueeItems} />
      </div>
    </section>
  );
};

export default HeroSection;

