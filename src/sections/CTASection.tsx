import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-16 pb-32 bg-foreground text-background dark-section-lines" ref={ref}>
      <div className="container text-center flex flex-col items-center gap-10">
        <motion.h2
          className="section-title section-title-cta max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ready to Build <span className="text-primary">India's</span><br />
          Digital Future?
        </motion.h2>
        <motion.p
          className="max-w-2xl text-background/70 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join us at REVA University for four days of innovation, collaboration, and impact. 
          Registration is now open.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/signup"
            className="btn-shine inline-flex items-center gap-2 bg-primary text-primary-foreground px-12 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Register Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
