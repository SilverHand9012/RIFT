import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import revaUniversityImage from "@/assets/images/others/reva-university.webp";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 border-b border-border" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-5">About</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Meet in Bangalore to build bold prototypes, learn fast, and ship ideas that
            strengthen India's digital future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto items-center px-4 md:px-8">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <motion.div
              className="h-full"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <motion.img
                src={revaUniversityImage}
                alt="REVA University"
                className="w-full h-[260px] md:h-[320px] object-cover rounded-md border border-border/60"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 relative -top-2 md:-top-4">What You Will Experience</h4>
              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                <li>Industry-aligned real-world problem statements</li>
                <li>Hands-on workshops on emerging technologies</li>
                <li>24-hour domain-focused hackathons</li>
                <li>Mentorship from industry experts</li>
              </ul>
            </div>
            <div className="mt-10 md:mt-14 flex justify-center lg:justify-start">
              <motion.a
                href="#schedule"
                className="btn-shine inline-flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm w-48 sm:w-60 px-8 py-2 sm:py-3 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary cursor-pointer relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Know More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
