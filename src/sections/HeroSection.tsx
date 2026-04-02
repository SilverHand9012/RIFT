import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ExpandableScreen, ExpandableScreenTrigger, ExpandableScreenContent } from "@/components/ui/expandable-screen";
import Workshops from "@/pages/Workshops";
import Events from "@/pages/Events";
import naacLogo from "@/assets/logo/naac.svg";
import revaUniversitySvg from "@/assets/logo/reva-university.svg";
import revaRiftSvg from "@/assets/logo/reva-rift.svg";
import logoUniversity from "@/assets/logo/reva-university.svg";
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
  const { scrollY } = useScroll();
  const yTop = useTransform(scrollY, [0, 1000], [0, 150]);
  const yBottom = useTransform(scrollY, [0, 1000], [0, -150]);

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative h-screen min-h-[900px] border-b border-border overflow-hidden bg-white">
      {/* Background Decor */}
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

      <div className="relative z-10 container h-full px-4 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Navbar-aligned logo (knot logo) - Purely visual, technically in Hero */}
        <div className="absolute top-0 left-0 right-0 h-16 z-[60] pointer-events-none flex items-center">
          <div className="container max-w-7xl mx-auto flex items-center px-4">
            {/* Invisible spacer to match navbar's blue logo wordmark width */}
            <img src={logoFull} alt="" className="h-9 md:h-12 opacity-0 invisible object-contain" />
            {/* Adjusted gap on mobile, keeping 2px on desktop */}
            <div className="w-3 md:w-[2px]" />
            <img src={logo2ndMain} alt="" className="h-8 md:h-9" />
          </div>
        </div>

        {/* BLOCK 1: University & RIFT Logos */}
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-4 pt-12">
          <motion.div
             className="flex items-center justify-center gap-6 md:gap-10"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={naacLogo} alt="NAAC A+" className="h-8 md:h-12 w-auto object-contain" />
            <div className="h-8 md:h-10 w-[1.5px] invisible" />
            <img src={revaUniversitySvg} alt="REVA University" className="h-8 md:h-12 w-auto object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <img 
              src={revaRiftSvg} 
              alt="REVA RIFT" 
              className="w-[234px] h-[25px] sm:w-[341px] sm:h-[36px] object-contain" 
            />
          </motion.div>
        </div>

        {/* BLOCK 2: Heading & Subtitle */}
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-8 px-4 z-20">
          <motion.h1
            className="hero-title text-center text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl max-w-5xl mx-auto"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={titleWordVariants} className="inline-block mr-3">Build</motion.span>
            <motion.span variants={titleWordVariants} className="inline-block text-primary italic mr-3">India's</motion.span>
            <br />
            <motion.span variants={titleWordVariants} className="inline-block mr-3">Tech</motion.span>
            <motion.span variants={titleWordVariants} className="inline-block">Sovereignty</motion.span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-muted-foreground font-medium max-w-3xl leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Meet in Bangalore to build bold prototypes, learn fast, and ship ideas that strengthen
            India's digital future.
          </motion.p>
        </div>

        {/* BLOCK 3: CTA Buttons */}
        <div className="flex-1 w-full flex flex-col items-center justify-start pt-4 z-20">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <ExpandableScreen layoutId="workshops-screen" triggerRadius="99px" contentRadius="0px" animationDuration={0.4}>
              <ExpandableScreenTrigger className="w-full sm:w-auto">
                <button
                  className="btn-shine inline-flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm w-48 sm:w-60 px-8 py-2 sm:py-3 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary relative"
                >
                  Explore Workshops
                </button>
              </ExpandableScreenTrigger>
              <ExpandableScreenContent className="bg-background !p-0">
                 <div className="w-full min-h-screen bg-background text-foreground h-full overflow-y-auto">
                   <Workshops embedded />
                 </div>
              </ExpandableScreenContent>
            </ExpandableScreen>

            <ExpandableScreen layoutId="events-screen" triggerRadius="99px" contentRadius="0px" animationDuration={0.4}>
              <ExpandableScreenTrigger className="w-full sm:w-auto">
                <button
                  className="btn-shine inline-flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm w-48 sm:w-60 px-8 py-2 sm:py-3 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary relative"
                >
                  Explore Hackathons
                </button>
              </ExpandableScreenTrigger>
              <ExpandableScreenContent className="bg-background !p-0">
                <div className="w-full min-h-screen bg-background text-foreground h-full overflow-y-auto">
                   <Events embedded />
                </div>
              </ExpandableScreenContent>
            </ExpandableScreen>
          </motion.div>
        </div>

        {/* BLOCK 4: Organisers & Partners */}
        <div className="flex-1 w-full flex flex-col items-center justify-start gap-8 sm:gap-12 pt-0 pb-16">
          <motion.div
            className="flex flex-col items-center gap-2 -mt-16 sm:-mt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Organised by:</p>
            <img 
              src={gdgRevaLogo} 
              alt="GDG REVA" 
              className="w-[200px] h-[25px] sm:w-[325px] sm:h-[40px] object-contain" 
            />
          </motion.div>

          <motion.div
            className="w-full max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
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
          </motion.div>
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
