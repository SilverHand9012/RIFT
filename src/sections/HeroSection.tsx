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
import vectorTop from "@/assets/elements/vector-top.svg";
import vectorBottom from "@/assets/elements/vector-bottom.svg";
import MarqueeSection from "./MarqueeSection";

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
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-4 pt-12">
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <img src={naacLogo} alt="NAAC A+" className="h-8 md:h-12 w-auto object-contain" />
            <div className="h-8 md:h-10 w-[1.5px] invisible" />
            <img src={revaUniversitySvg} alt="REVA University" className="h-8 md:h-12 w-auto object-contain" />
          </div>

          <div className="flex items-center justify-center">
            <img 
              src={revaRiftSvg} 
              alt="REVA RIFT" 
              className="w-[234px] h-[25px] sm:w-[341px] sm:h-[36px] object-contain" 
            />
          </div>
        </div>

        {/* BLOCK 2: Heading & Subtitle */}
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-8 px-4 z-20">
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

        {/* BLOCK 3: CTA Buttons - ANIMATION KEPT AS REQUESTED */}
        <div className="flex-1 w-full flex flex-col items-center justify-start pt-4 z-20">
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

        {/* BLOCK 4: Organisers & Partners */}
        <div className="flex-1 w-full flex flex-col items-center justify-start gap-8 sm:gap-12 pt-0 pb-16">
          <div className="flex flex-col items-center gap-2 -mt-16 sm:-mt-32">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Organised by:</p>
            <img 
              src={gdgRevaLogo} 
              alt="GDG REVA" 
              className="w-[200px] h-[25px] sm:w-[325px] sm:h-[40px] object-contain" 
            />
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground/80 mt-1">
              in association with School of CSE
            </p>
          </div>

          <div className="w-full max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground text-center mb-6">Community Partners:</p>
            <div className="flex flex-nowrap items-center justify-center gap-6 sm:gap-10 w-full px-2">
              {partners.map((partner, index) => (
                <img 
                  key={partner.id} 
                  src={partner.logo} 
                  alt={partner.name} 
                  className={`w-[100px] h-[40px] rounded-[2px] opacity-100 grayscale-0 sm:h-8 md:h-10 sm:w-auto sm:opacity-40 sm:grayscale object-contain hover:opacity-100 hover:grayscale-0 transition-all duration-300 ${
                    index === 0 || index === partners.length - 1 ? "hidden sm:block" : "block"
                  }`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee pinned to the absolute bottom of the Hero page */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <MarqueeSection />
      </div>
    </section>
  );
};

export default HeroSection;

