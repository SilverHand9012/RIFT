import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Stop Lenis when body scroll is locked
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === "hidden") {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ["style"] 
    });

    // Cleanup
    return () => {
      observer.disconnect();
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  const lastPathname = useRef(pathname);

  // Handle route changes and hash scrolling
  useEffect(() => {
    if (!lenisRef.current) return;

    if (hash) {
      // If we are coming from a different page, wait for the transition curtain to clear
      // and for the home components to mount their layout properly.
      const isCrossPageNav = lastPathname.current !== pathname;
      
      if (isCrossPageNav) {
        setTimeout(() => {
          lenisRef.current?.scrollTo(hash, {
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }, 800); // 800ms delay allows PageTransition and mounting to finish
      } else {
        // Same-page hash click — scroll immediately
        lenisRef.current.scrollTo(hash);
      }
    } else {
      // If no hash, just jump to top (controlled)
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    
    lastPathname.current = pathname;
  }, [pathname, hash]);

  return <>{children}</>;
};

export default SmoothScroll;
