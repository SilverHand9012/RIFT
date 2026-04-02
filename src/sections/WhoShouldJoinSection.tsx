import { motion, useInView } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { createScrollReveal } from "@/lib/gsap";

const roles = [
  "Developers & Engineers",
  "Product Builders",
  "Data & ML Specialists",
  "Students & Researchers",
  "Security Engineers",
  "Designers & UX Experts",
  "Infrastructure Experts",
  "Open Source Contributors",
];

const WhoShouldJoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!marqueeRef.current) return;
    return createScrollReveal([marqueeRef.current], { y: 12, duration: 0.6, stagger: 0 });
  }, []);

  const renderRoles = () =>
    roles.map((role, i) => (
      <span
        key={i}
        className="mx-8 font-bold text-xl md:text-2xl lg:text-3xl text-foreground whitespace-nowrap"
      >
        {role}
        <span className="mx-8 text-primary">•</span>
      </span>
    ));

  return (
    <section className="pt-32 pb-0" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title mb-6">
            Who Should <span className="text-primary">Join?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We welcome diverse perspectives and expertise to tackle India's innovation challenges.
          </p>
        </motion.div>
      </div>

      {/* Roles marquee - row 1 */}
      <div ref={marqueeRef} className="marquee-shell border-y border-foreground/30 overflow-hidden">
        <div className="marquee-content">
          <div className="py-8 md:py-10">
            <div className="flex animate-marquee">
              <div className="flex items-center shrink-0">{renderRoles()}</div>
              <div className="flex items-center shrink-0">{renderRoles()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldJoinSection;
