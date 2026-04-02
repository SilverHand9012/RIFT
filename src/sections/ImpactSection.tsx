import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { number: "7", label: "Hackathons", description: "AI, IoT, and Web3 innovation" },
  { number: "20+", label: "Mentors", description: "Industry Experts & Mentors" },
  { number: "6", label: "Workshops", description: "Curated Technical Workshops" },
  { number: "3000+", label: "Participants", description: "Projected Participants" },
];

const Counter = ({ value }: { value: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      animate(count, numericValue, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a smooth deceleration (easeOutExpo)
      });
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tracks" className="py-24 border-b border-border" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-5">Event at a Glance</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Build prototypes that strengthen India's technological sovereignty with real impact and
            expert support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-background border-2 border-border hover:border-primary rounded-none p-8 text-left card-hover group transition-all"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300 origin-left">
                <Counter value={stat.number} />
              </div>
              <div className="font-bold text-xl text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
