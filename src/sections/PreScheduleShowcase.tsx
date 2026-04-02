import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

// Image imports
import presummit1 from "@/assets/images/pre-schedule-showcase/presummit-1.webp";
import presummit2 from "@/assets/images/pre-schedule-showcase/presummit-2.webp";
import presummit3 from "@/assets/images/pre-schedule-showcase/presummit-3.webp";
import workshop1 from "@/assets/images/pre-schedule-showcase/workshop-1.webp";
import workshop2 from "@/assets/images/pre-schedule-showcase/workshop-2.webp";
import workshop3 from "@/assets/images/pre-schedule-showcase/workshop-3.webp";
import divisions1 from "@/assets/images/pre-schedule-showcase/divisions-1.webp";
import divisions2 from "@/assets/images/pre-schedule-showcase/divisions-2.webp";
import divisions3 from "@/assets/images/pre-schedule-showcase/divisions-3.webp";

type ShowcaseCard = {
  title: string;
  accentWord: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  reverseOnDesktop?: boolean;
  accentFirst?: boolean;
  images: string[];
};

const showcaseCards: ShowcaseCard[] = [
  {
    title: "Pre Summit",
    accentWord: "Summit",
    subtitle: "A focused warm-up for participants before the main event.",
    description:
      "Get an early edge with orientation sessions, challenge briefs, and expert-led prep talks. This phase helps teams align quickly before the core hackathon starts.",
    ctaLabel: "Know More",
    images: [presummit1, presummit2, presummit3],
  },
  {
    title: "shops",
    accentWord: "Work",
    subtitle: "Hands-on sessions for practical skills and fast execution.",
    description:
      "Learn directly from mentors and industry leaders across AI, product design, cloud, cybersecurity, and pitching. Each session is tailored to help teams ship better solutions.",
    ctaLabel: "Know More",
    reverseOnDesktop: true,
    accentFirst: true,
    images: [workshop1, workshop2, workshop3],
  },
  {
    title: "The Divisions",
    accentWord: "Divisions",
    subtitle: "7 domain tracks designed for high-impact innovation.",
    description:
      "Compete in focused categories that mirror real-world problems. Teams can build in domains such as health, education, sustainability, fintech, mobility, and future tech.",
    ctaLabel: "Know More",
    images: [divisions1, divisions2, divisions3],
  },
];

const SLIDE_INTERVAL_MS = 2000;

const PreScheduleShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlides, setActiveSlides] = useState<number[]>(showcaseCards.map(() => 0));
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  useEffect(() => {
    // Preload all images to prevent flickering and server pings during transitions
    showcaseCards.forEach((card) => {
      card.images.forEach((imagePath) => {
        const img = new Image();
        img.src = imagePath;
      });
    });

    const interval = setInterval(() => {
      setActiveSlides((prev) => prev.map((count) => count + 1));
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-foreground text-background border-b border-foreground/20 dark-section-lines" ref={sectionRef}>
      <div className="container max-w-5xl relative z-10">
        {showcaseCards.map((card, i) => {
          const totalIndex = activeSlides[i];
          const N = card.images.length;
          const currentSlide = totalIndex % N;
          const isReversed = Boolean(card.reverseOnDesktop);
          const [firstWord] = card.title.split(" ");

          return (
            <motion.article
              key={card.title}
              className={`flex flex-col ${isReversed ? "md:grid md:grid-cols-[1.12fr_0.92fr]" : "md:grid md:grid-cols-[0.92fr_1.12fr]"} gap-8 md:gap-9 md:items-center ${i > 0 ? "pt-20 md:pt-28" : ""} ${i < showcaseCards.length - 1 ? "pb-20 md:pb-28 border-b border-white/20" : ""}`}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.16 }}
            >
              {/* Title and subtitle - always first on mobile */}
              <div className={`${isReversed ? "md:order-1" : "md:order-2"} space-y-3`}>
                <h3 className="text-3xl md:text-4xl text-center md:text-left leading-tight">
                  {card.accentFirst ? (
                    <><span className="text-primary">{card.accentWord}</span>{firstWord}</>
                  ) : (
                    <>{firstWord} <span className="text-primary">{card.accentWord}</span></>
                  )}
                </h3>
                <p className="text-background/70 text-center md:text-left text-[15px] md:text-base leading-relaxed">
                  {card.subtitle}
                </p>

                {/* Description and CTA - hidden on mobile, shown on desktop */}
                <div className="hidden md:block space-y-4 pt-2">
                  <p className="text-sm font-normal leading-relaxed text-white/70">
                    {card.description}
                  </p>
                  {card.accentWord === "Work" ? (
                    <Link
                      to="/workshops"
                      className="btn-shine inline-flex items-center rounded-full text-xs font-semibold px-5 py-1.5 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
                    >
                      {card.ctaLabel}
                    </Link>
                  ) : card.accentWord === "Divisions" ? (
                    <Link
                      to="/divisions"
                      className="btn-shine inline-flex items-center rounded-full text-xs font-semibold px-5 py-1.5 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
                    >
                      {card.ctaLabel}
                    </Link>
                  ) : card.accentWord === "Summit" ? (
                    <Link
                      to="/presummit"
                      className="btn-shine inline-flex items-center rounded-full text-xs font-semibold px-5 py-1.5 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
                    >
                      {card.ctaLabel}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="btn-shine inline-flex items-center rounded-full text-xs font-semibold px-5 py-1.5 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
                    >
                      {card.ctaLabel}
                    </button>
                  )}
                </div>
              </div>

              {/* Image slider - second on mobile, alternating position on desktop */}
              <div className={`${isReversed ? "md:order-2" : "md:order-1"} space-y-4`}>
                <div className="relative h-[240px] md:h-[260px] rounded-sm bg-gradient-to-br from-[#2f3138] to-[#26282f] border border-white/10 flex items-center justify-center overflow-hidden">
                  {card.images.map((img, imgIndex) => {
                    // Wrap-around logic for infinite one-way slide
                    // wrappedDiff is in [-1, N-2] range (for N=3 it's [-1, 0, 1])
                    const diff = imgIndex - totalIndex;
                    const wrappedDiff = ((diff % N) + N + Math.floor(N / 2)) % N - Math.floor(N / 2);
                    const virtualPos = totalIndex + wrappedDiff;

                    return (
                      <motion.img
                        key={`${card.title}-${imgIndex}-${virtualPos}`}
                        src={img}
                        alt={`${card.title} visual ${imgIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover will-change-transform"
                        initial={false}
                        animate={{ 
                          x: `${wrappedDiff * 100}%`
                        }}
                        transition={{ 
                          duration: 0.4, 
                          ease: [0.2, 0, 0, 1]
                        }}
                        style={{ 
                          pointerEvents: wrappedDiff === 0 ? 'auto' : 'none'
                        }}
                        draggable={false}
                      />
                    );
                  })}
                </div>

                <div className="flex items-center justify-center gap-2">
                  {card.images.map((_, dotIndex) => (
                    <button
                      key={`${card.title}-${dotIndex}`}
                      type="button"
                      className={`h-1.5 rounded-full transition-all ${
                        dotIndex === currentSlide ? "w-5 bg-white" : "w-1.5 bg-white/45"
                      }`}
                      onClick={() =>
                        setActiveSlides((prev) => prev.map((count, slideIndex) => {
                          if (slideIndex !== i) return count;
                          const currentMod = count % N;
                          const moveForward = (dotIndex - currentMod + N) % N;
                          return count + moveForward;
                        }))
                      }
                      aria-label={`Show ${card.title} slide ${dotIndex + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Description and CTA - shown only on mobile (after image) */}
              <div className="md:hidden space-y-4 pt-1">
                <p className="text-sm font-normal leading-relaxed text-white/70">
                  {card.description}
                </p>
                <div className="text-center">
                  {card.accentWord === "Work" ? (
                    <Link
                      to="/workshops"
                      className="btn-shine inline-flex items-center rounded-full text-xs font-semibold px-5 py-1.5 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
                    >
                      {card.ctaLabel}
                    </Link>
                  ) : card.accentWord === "Divisions" ? (
                    <Link
                      to="/divisions"
                      className="btn-shine inline-flex items-center rounded-full text-xs font-semibold px-5 py-1.5 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
                    >
                      {card.ctaLabel}
                    </Link>
                  ) : card.accentWord === "Summit" ? (
                    <Link
                      to="/presummit"
                      className="btn-shine inline-flex items-center rounded-full text-xs font-semibold px-5 py-1.5 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
                    >
                      {card.ctaLabel}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="btn-shine inline-flex items-center rounded-full text-xs font-semibold px-5 py-1.5 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary"
                    >
                      {card.ctaLabel}
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default PreScheduleShowcase;
