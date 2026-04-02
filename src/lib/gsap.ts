import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

export function ensureGsapPluginsRegistered() {
  if (pluginsRegistered) return;
  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

type RevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
};

/**
 * Scroll-based "fade up" reveal for a list of elements.
 * Uses ScrollTrigger, and no-ops when reduced-motion is enabled.
 */
export function createScrollReveal(
  elements: Element[] | NodeListOf<Element>,
  opts: RevealOptions = {},
) {
  ensureGsapPluginsRegistered();
  if (prefersReducedMotion()) return () => {};

  const {
    y = 18,
    duration = 0.65,
    stagger = 0.08,
    start = "top 85%",
  } = opts;

  const targets = Array.from(elements);
  if (!targets.length) return () => {};

  gsap.set(targets, { opacity: 0, y, willChange: "transform, opacity" });

  const tween = gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    ease: "power2.out",
    clearProps: "willChange",
    scrollTrigger: {
      trigger: targets[0],
      start,
      once: true,
    },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}

