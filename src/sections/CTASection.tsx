import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ExpandableScreen,
  ExpandableScreenTrigger,
  ExpandableScreenContent,
} from "@/components/ui/expandable-screen";

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
          <ExpandableScreen variant="fullscreen" contentRadius="0px">
            <ExpandableScreenTrigger>
              <div
                className="btn-shine inline-flex items-center gap-2 bg-primary text-primary-foreground px-12 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                Register Now
              </div>
            </ExpandableScreenTrigger>
            <ExpandableScreenContent>
              <div className="w-full min-h-full bg-background flex flex-col items-center justify-center p-8">
                <h1 className="text-4xl font-bold mb-4">Join RIFT 2026</h1>
                <p className="text-xl text-muted-foreground mb-8 text-center max-w-xl">
                  Register now to secure your spot at Bangalore's premier tech event.
                </p>
                {/* Embedded Signup Form would go here */}
                <div className="w-full max-w-md p-8 rounded-2xl border border-border bg-card">
                   <p className="text-center italic">Registration Form Integration...</p>
                </div>
              </div>
            </ExpandableScreenContent>
          </ExpandableScreen>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
