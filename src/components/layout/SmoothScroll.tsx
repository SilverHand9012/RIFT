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
    // Detect touch device for lighter scrolling
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    // Initialize Lenis with optimized settings for mobile/desktop
    const lenis = new Lenis({
      duration: isTouch ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: isTouch ? 1.5 : 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Watch for expandable state changes to stop/start Lenis
    const handleExpandableChange = (e: any) => {
      const { isExpanded } = e.detail;
      if (isExpanded) {
        lenis.stop();
      } else {
        // Only restart if the body is not also hidden by some other means
        if (document.body.style.overflow !== "hidden") {
          lenis.start();
        }
      }
    };

    window.addEventListener('expandable-state-change', handleExpandableChange);

    // Stop Lenis when body scroll is locked (as a fallback)
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
      window.removeEventListener('expandable-state-change', handleExpandableChange);
      observer.disconnect();
      lenis.destroy();
      (window as any).lenis = null;
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
        // Same-page hash click — scroll immediately after the current frame
        // to ensure any scroll-lock releases from the caller are processed.
        requestAnimationFrame(() => {
          lenisRef.current?.scrollTo(hash);
        });
      }
    } else {
      // If no hash, scroll to top.
      const isSamePage = lastPathname.current === pathname;
      if (isSamePage) {
        // Smoothly scroll back if we are on the same page (e.g. clearing hash via logo)
        lenisRef.current.scrollTo(0, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        // Jump to top immediately if it's a new page
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }
    
    lastPathname.current = pathname;
  }, [pathname, hash]);

  return <>{children}</>;
};

export default SmoothScroll;
