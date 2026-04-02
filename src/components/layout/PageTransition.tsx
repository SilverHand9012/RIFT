import { motion } from "framer-motion";
import { ReactNode } from "react";
import revaRiftWhite from "@/assets/logo/reva-rift-white.svg";
import vectorBottomWhite from "@/assets/elements/vector-bottom-white.svg";
import vectorTopWhite from "@/assets/elements/vector-top-white.svg";

interface PageTransitionProps {
  children: ReactNode;
}

const TransitionBackground = () => (
  <div className="absolute inset-0 w-full h-full bg-[#0055FF] pointer-events-none select-none overflow-hidden">
    {/* Vector Decorations positioned absolutely */}
    <img 
      src={vectorTopWhite} 
      alt="" 
      className="absolute top-[-5%] right-[-5%] w-[60%] sm:w-[40%] md:w-[35%] lg:w-[25%] max-w-[500px]" 
    />
    <img 
      src={vectorBottomWhite} 
      alt="" 
      className="absolute bottom-[-10%] left-[-15%] w-[80%] sm:w-[50%] md:w-[35%] lg:w-[25%] max-w-[550px]" 
    />

    {/* Center Center Area for the Logo */}
    <div className="absolute inset-0 flex items-center justify-center">
      <img 
        src={revaRiftWhite} 
        alt="REVA RIFT" 
        className="h-[40px] sm:h-[55px] md:h-[80px] lg:h-[100px] w-auto" 
      />
    </div>

    {/* Bottom Tagline anchored securely */}
    <div className="absolute bottom-[8%] md:bottom-[12%] inset-x-0 w-full flex justify-center">
      <p className="text-white font-outfit text-lg sm:text-2xl md:text-3xl font-medium tracking-wide">
        Where Ordinary Breaks.
      </p>
    </div>
  </div>
);

/**
 * Premium branded curtain-wipe page transition.
 *
 * Exit: Blue branded curtain rises from bottom → covers screen with purely vector REVA RIFT background.
 * Enter: Curtain shrinks from top → reveals new page content.
 */
const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.35, delay: 0.45, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.2, ease: "easeIn" },
        }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>

      {/* Layer 1 — Dark base curtain */}
      <motion.div
        className="fixed inset-0 z-[9997] bg-black pointer-events-none"
        initial={{ clipPath: "inset(0 0 0 0)" }}
        animate={{
          clipPath: "inset(100% 0 0 0)",
          transition: {
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.15,
          },
        }}
        exit={{
          clipPath: "inset(0 0 0 0)",
          transition: {
            duration: 0.45,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      />

      {/* Layer 2 — Brand-image curtain using infinite-resolution vectors */}
      <motion.div
        className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden"
        initial={{ clipPath: "inset(0 0 0 0)" }}
        animate={{
          clipPath: "inset(100% 0 0 0)",
          transition: {
            duration: 0.55,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.06,
          },
        }}
        exit={{
          clipPath: "inset(0 0 0 0)",
          transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.05,
          },
        }}
      >
        <TransitionBackground />
      </motion.div>
    </>
  );
};

export default PageTransition;
