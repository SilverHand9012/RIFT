import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle } from "lucide-react";
import { ensureGsapPluginsRegistered, prefersReducedMotion } from "@/lib/gsap";

const phases = [
  {
    day: "PHASE 1",
    title: "R-Summit",
    date: "March 9 to 11",
    description: "Opening ceremony with workshops and networking opportunities. Get to know fellow participants, form teams, and start ideating on your projects.",
    highlights: ["Registration & Check-in", "Opening Keynote", "Team Formation", "Technical Workshops"],
    isDone: true,
  },
  {
    day: "PHASE 2",
    title: "Rise",
    date: "April 8 to 9",
    description: "Main hackathon days! Work on your projects, attend workshops, and get mentorship from industry experts. This is where the magic happens.",
    highlights: ["24/7 Hacking", "Mentor Sessions", "Tech Talks", "Mini Challenges"],
  },
  {
    day: "PHASE 3",
    title: "Revolt",
    date: "April 8 to 11",
    description: "Present your projects to judges and celebrate achievements with the community. Network with sponsors and win exciting prizes.",
    highlights: ["Final Presentations", "Judging", "Awards Ceremony", "Networking"],
  },
];

const ScheduleSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ensureGsapPluginsRegistered();
    if (!sectionRef.current) return;

    if (prefersReducedMotion()) {
      if (fillLineRef.current) fillLineRef.current.style.height = "100%";
      return;
    }

    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector("[data-schedule-heading]");
      const phasesEls = sectionRef.current?.querySelectorAll("[data-schedule-phase]");

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: { trigger: heading, start: "top 85%", once: true },
          },
        );
      }

      if (fillLineRef.current) {
        gsap.fromTo(
          fillLineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          },
        );
      }

      if (phasesEls?.length) {
        phasesEls.forEach((el, index) => {
          const xOffset = index % 2 === 0 ? -50 : 50;
          gsap.fromTo(
            el,
            { opacity: 0, x: xOffset, y: 30, willChange: "transform, opacity" },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              clearProps: "transform,opacity,willChange",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="schedule" className="py-32 border-b border-border" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-24" data-schedule-heading>
          <h2 className="section-title mb-6">
            Event <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Four days of intensive collaboration, learning, and innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center line - background */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-border hidden lg:block" />
          {/* Center line - fill on scroll */}
          <div
            ref={fillLineRef}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-primary hidden lg:block"
            style={{ height: "0%" }}
          />

          <div className="flex flex-col gap-24">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="relative flex flex-col lg:flex-row items-start gap-12"
                data-schedule-phase
              >
                {/* Left content */}
                <div className={`lg:w-1/2 ${i % 2 === 1 ? "lg:order-2 lg:pl-16" : "lg:pr-16 lg:text-right"}`}>
                  <div className={`inline-block border-2 border-primary rounded-full px-4 py-1.5 text-xs font-semibold text-primary mb-4`}>
                    {phase.day}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-5 leading-snug text-foreground max-w-md">
                    <span className="inline-flex items-center gap-2.5">
                      {phase.title}
                      {phase.isDone && (
                        <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0" strokeWidth={2.5} />
                      )}
                    </span>
                  </h3>
                  <p className="text-sm md:text-base font-semibold text-primary mb-4">{phase.date}</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">{phase.description}</p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    {phase.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] md:text-xs px-3 py-1.5 bg-secondary rounded-full text-foreground font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 timeline-dot z-10" />

                {/* Spacer for opposite side */}
                <div className={`hidden lg:block lg:w-1/2 ${i % 2 === 1 ? "lg:order-1" : ""}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
