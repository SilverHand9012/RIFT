import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import {
  ExpandableScreen,
  ExpandableScreenTrigger,
  ExpandableScreenContent,
} from "@/components/ui/expandable-screen";

import hackathonA1 from "@/assets/images/event-cards/hackathonA1.webp";
import hackathonB1 from "@/assets/images/event-cards/hackathonB1.webp";
import hackathonC1 from "@/assets/images/event-cards/hackathonC1.webp";

/* ── Event Data ─────────────────────────────────────────── */

const eventsData = [
  {
    id: 1,
    name: "AINEX – AI Tech Challenge",
    description: "Hack2skill",
    fullDescription:
      "What if technology blended into the environment instead of demanding attention through screens?\n\nThis track focuses on building ambient AI systems that interact naturally using voice, vision, and real-world sensors. The aim is to create seamless, hands-free experiences where machines understand and respond like humans do — in real time.\n\nParticipants will develop systems that see, listen, and react intelligently, enabling intuitive human-AI interaction without traditional UI.",
    phase: "Phase I",
    type: "Hackathons",
    date: "Mar 21 - Apr 11, 2026",
    time: "Ongoing",
    venue: "TBA",
    registrationLink: "https://vision.hack2skill.com/event/ainex-hack",
    image: hackathonA1,
    timeline: [
      { title: "Registration", timeString: "21 Mar 26, 10:57 AM – 05 Apr 26, 10:57 AM IST", dateRange: "21 Mar – 05 Apr" },
      { title: "Project Submission", timeString: "23 Mar 26, 10:57 AM – 05 Apr 26, 10:57 AM IST", dateRange: "23 Mar – 05 Apr" },
      { title: "Finale", timeString: "10 Apr 26, 09:00 AM – 11 Apr 26, 04:00 PM IST", dateRange: "10 Apr – 11 Apr" },
    ],
  },
  {
    id: 2,
    name: "KATHA Hackathon",
    description: "Hack2skill",
    fullDescription:
      "KATHA – The Story-Driven Hackathon. What if solving real-world problems felt like living a story?\n\nKATHA is a 24-hour immersive, story-driven hackathon where participants step into a narrative world and solve challenges as the story unfolds in real time. Participants experience challenges through specific characters like Ram (Education) or Village Officer Uncle (Agritech).",
    phase: "Phase I",
    type: "Hackathons",
    date: "Mar 23 - Apr 11, 2026",
    time: "24 Hours",
    venue: "TBA",
    registrationLink: "https://vision.hack2skill.com/event/katha-hack",
    image: hackathonB1,
    timeline: [
      { title: "Registration", timeString: "23 Mar 26, 10:57 AM – 06 Apr 26, 10:57 AM IST", dateRange: "23 Mar – 06 Apr" },
      { title: "Hack Day", timeString: "10 Apr 26, 09:00 AM – 11 Apr 26, 04:00 PM IST", dateRange: "10 Apr – 11 Apr" },
    ],
  },
  {
    id: 3,
    name: "HACK.ALGO",
    description: "Hack2skill",
    fullDescription:
      "Hack.Algo – REVA Edition is a 24-hour hybrid blockchain hackathon organized by Google Developer Group On Campus REVA University in collaboration with the Algorand Blockchain Club, hosted on Hack2Skill. Designed as a high-intensity innovation sprint, the hackathon brings together top student developers and Web3 builders from across India to create and deploy real-world decentralized applications on the Algorand TestNet.\n\nCentered around Future of Finance and Agentic Commerce, participants work in teams to build production-ready solutions—ranging from DeFi protocols and tokenized asset systems to autonomous, agent-driven transaction frameworks. The hackathon emphasizes end-to-end execution, requiring functional prototypes, smart contract deployment, and scalable system design.",
    phase: "Phase II",
    type: "Hackathons",
    date: "Mar 21 - Apr 11, 2026",
    time: "24 Hours",
    venue: "Hybrid",
    registrationLink: "https://vision.hack2skill.com/event/hack-algo",
    image: hackathonC1,
    timeline: [
      { title: "Registration", timeString: "21 Mar 26, 10:57 AM – 05 Apr 26, 10:57 AM IST", dateRange: "21 Mar – 05 Apr" },
      { title: "Team Formation", timeString: "21 Mar 26, 10:57 AM – 05 Apr 26, 10:57 AM IST", dateRange: "21 Mar – 05 Apr" },
      { title: "Project submission", timeString: "23 Mar 26, 10:57 AM – 05 Apr 26, 10:57 AM IST", dateRange: "23 Mar – 05 Apr" },
      { title: "Screening: Result Announcement", timeString: "06 Apr 26, 10:00 AM – 07 Apr 26, 10:00 AM IST", dateRange: "06 Apr – 07 Apr" },
      { title: "Finale", timeString: "10 Apr 26, 09:00 AM – 11 Apr 26, 04:00 PM IST", dateRange: "10 Apr – 11 Apr" },
    ],
  },
  {
    id: 4,
    name: "React Performance Tuning",
    description: "Short Description",
    fullDescription:
      "Join us for an exciting deep dive into the latest technologies. This event will cover everything from foundational concepts to advanced practical applications. Perfect for all skill levels wanting to get hands-on experience.",
    phase: "Phase I",
    type: "Workshops",
    date: "October 20, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "Main Auditorium",
    registrationLink: "#",
    image: hackathonA1,
    timeline: [
      { title: "Workshop Start", timeString: "20 Oct 26, 10:00 AM", dateRange: "20 Oct" },
      { title: "Practical Lab", timeString: "20 Oct 26, 12:00 PM", dateRange: "20 Oct" },
      { title: "Conclusion", timeString: "20 Oct 26, 04:00 PM", dateRange: "20 Oct" },
    ],
  },
  {
    id: 5,
    name: "Global Web3 Hackathon",
    description: "Short Description",
    fullDescription:
      "A 48-hour coding marathon where innovators and creators build bold prototypes, learn fast, and ship ideas that strengthen our digital future. Work with mentors, meet co-founders, and win amazing prizes.",
    phase: "Phase II",
    type: "Hackathons",
    date: "November 10-12, 2026",
    time: "48 Hours",
    venue: "Innovation Center",
    registrationLink: "#",
    image: hackathonB1,
    timeline: [
      { title: "Check-in", timeString: "10 Nov 26, 08:00 AM", dateRange: "10 Nov" },
      { title: "Opening", timeString: "10 Nov 26, 10:00 AM", dateRange: "10 Nov" },
      { title: "Finale", timeString: "12 Nov 26, 04:00 PM", dateRange: "12 Nov" },
    ],
  },
  {
    id: 6,
    name: "AI & Machine Learning",
    description: "Short Description",
    fullDescription:
      "An exclusive masterclass by industry experts on building at scale. Learn cutting edge technologies, understand architecture design patterns, and get ready for the ultimate developer experience.",
    phase: "Phase III",
    type: "Workshops",
    date: "December 5, 2026",
    time: "2:00 PM - 6:00 PM",
    venue: "Virtual Event",
    registrationLink: "#",
    image: hackathonC1,
    timeline: [
      { title: "Intro to ML", timeString: "05 Dec 26, 02:00 PM", dateRange: "05 Dec" },
      { title: "Deep Dive", timeString: "05 Dec 26, 04:00 PM", dateRange: "05 Dec" },
      { title: "End Session", timeString: "05 Dec 26, 06:00 PM", dateRange: "05 Dec" },
    ],
  },
];

const filters = ["All", "Workshops", "Hackathons", "Phase I", "Phase II", "Phase III"];

/* ── Phase badge color mapping ─────────────────────────── */

function getPhaseBadgeStyle(phase: string): string {
  switch (phase) {
    case "Phase I":
    case "Phase II":
    case "Phase III":
      return "bg-[#0052FF] text-white";
    default:
      return "bg-gray-600 text-white";
  }
}

/* ── Single Expandable Event Card ──────────────────────── */

function EventCard({ card }: { card: (typeof eventsData)[number] }) {
  return (
    <ExpandableScreen
      layoutId={`event-card-${card.id}`}
      triggerRadius="16px"
      contentRadius="0px"
      animationDuration={0.45}
    >
      {/* ── Collapsed Trigger (Card) ── */}
      <ExpandableScreenTrigger>
        <div
          className="group w-full rounded-2xl overflow-hidden cursor-pointer border border-white/[0.06] bg-[#111111] hover:border-white/[0.12]"
          style={{ transition: "border-color 0.4s ease" }}
        >
          {/* Card Image */}
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover group-hover:scale-105"
              style={{ transition: "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)" }}
            />
          </div>

          {/* Card Content */}
          <div className="px-5 py-4 space-y-1.5">
            {/* Title row with phase badge */}
            <div className="flex items-start justify-between gap-3">
              <h3
                className="text-[15px] font-semibold text-white leading-snug"
                style={{ fontFamily: "'BL Melody', sans-serif" }}
              >
                {card.name}
              </h3>
              <span
                className={`flex-shrink-0 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${getPhaseBadgeStyle(card.phase)}`}
              >
                {card.phase}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400">{card.description}</p>

            {/* View Details link */}
            <div className="flex items-center gap-1 pt-1 text-[#0052FF] text-sm font-medium group-hover:gap-2" style={{ transition: "gap 0.3s ease" }}>
              View Details
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </ExpandableScreenTrigger>

      {/* ── Expanded Content (Fullscreen) ── */}
      <ExpandableScreenContent className="bg-[#0B1120]" showCloseButton={true}>
        <ExpandedEventView card={card} />
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
}

/* ── Expanded Event Detail View ────────────────────────── */

function ExpandedEventView({ card }: { card: (typeof eventsData)[number] }) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0B1120]">
      {/* Hero Image — full width */}
      <div className="w-full aspect-[16/7] sm:aspect-[16/6] max-h-[45vh] overflow-hidden relative flex-shrink-0">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 pb-16 pt-8 max-w-4xl mx-auto w-full space-y-10">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-block bg-[#0052FF] text-white text-[11px] uppercase tracking-wider font-bold px-4 py-1.5 rounded-full">
            {card.phase}
          </span>
          <span className="inline-block text-white/70 text-[11px] uppercase tracking-wider font-medium px-4 py-1.5 rounded-full border border-white/10">
            {card.type}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-heading">
          {card.name}
        </h1>

        {/* Event Details Box */}
        <div className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/[0.03]">
          <div className="grid grid-cols-2 gap-y-6 gap-x-8">
            <div className="flex flex-col gap-1">
              <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Date</span>
              <span className="text-white font-medium text-base">{card.date}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Time</span>
              <span className="text-white font-medium text-base">{card.time}</span>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Venue</span>
              <span className="text-white font-medium text-base">{card.venue}</span>
            </div>
          </div>
        </div>

        {/* About the Event */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">
            About the Event
          </h2>
          <div className="space-y-5">
            {card.fullDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-white/60 text-sm md:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Timeline */}
        {card.timeline && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-heading">
              Timeline
            </h2>
            <div className="flex flex-col gap-4">
              {card.timeline.map((step, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 bg-white/[0.03] rounded-xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-l-[3px] border-l-[#0052FF]"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="text-white font-bold text-base font-heading">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-xs tracking-wide">
                      {step.timeString}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0052FF]/10 border border-[#0052FF]/20 px-3.5 py-1.5 rounded-lg self-start sm:self-auto">
                    <Calendar className="h-3.5 w-3.5 text-[#4D8AFF]" />
                    <span className="text-[11px] font-bold text-[#4D8AFF] font-mono whitespace-nowrap">
                      {step.dateRange}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Register CTA */}
        <div className="pt-6 border-t border-white/10">
          <a
            href={card.registrationLink}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#0052FF] text-white font-semibold text-base hover:bg-[#003FCC] active:scale-[0.98] shadow-[0_8px_25px_rgba(0,82,255,0.3)]"
            style={{ transition: "all 0.3s ease" }}
          >
            Register Now
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Main Section Component ────────────────────────────── */

interface EventCardsProps {
  hideExploreButton?: boolean;
}

const EventCards = ({ hideExploreButton = false }: EventCardsProps) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const allEvents = hideExploreButton ? eventsData : eventsData.slice(0, 3);

  const filteredEvents = allEvents.filter((evt) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Workshops") return evt.type === "Workshops";
    if (activeFilter === "Hackathons") return evt.type === "Hackathons";
    return evt.phase === activeFilter;
  });

  return (
    <section className="py-20 md:py-28 bg-black relative text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-3 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">Discover </span>
            <span className="text-[#0052FF]">Events</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our diverse range of workshops and hackathons
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium text-sm ${
                activeFilter === filter
                  ? "bg-[#0052FF] text-white"
                  : "bg-transparent text-gray-300 border border-white/15 hover:border-white/30"
              }`}
              style={{ transition: "all 0.3s ease" }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Card Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {filteredEvents.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <EventCard card={card} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">No events found for this filter.</p>
          </div>
        )}

        {/* Explore Button */}
        {!hideExploreButton && (
          <motion.div
            className="flex justify-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/events"
              className="btn-shine inline-flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm w-48 sm:w-60 px-8 py-2 sm:py-3 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary cursor-pointer relative"
            >
              Explore
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventCards;
