import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Info } from "lucide-react";
import {
  ExpandableScreen,
  ExpandableScreenTrigger,
  ExpandableScreenContent,
} from "@/components/ui/expandable-screen";
import { eventsData } from "@/data/events";

const filters = ["All", "Workshops", "Hackathons", "Phase I", "Phase II", "Phase III"];

/* ── Helper functions ─────────────────────────── */

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


function EventCard({ card }: { card: (typeof eventsData)[number] }) {
  return (
    <ExpandableScreen
      variant="window"
      triggerRadius="16px"
      contentRadius="24px"
      animationDuration={0.4}
    >
      <ExpandableScreenTrigger className="h-full w-full flex flex-col">
        <div
          className="group w-full h-full flex flex-col rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#060C1A] hover:border-white/20 transition-all duration-300"
        >
          <div className="aspect-video overflow-hidden relative shrink-0">
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="px-6 py-6 md:px-8 md:py-8 flex flex-col grow space-y-5">
            <div className="flex items-start justify-between gap-3">
              <h3
                className="text-xl md:text-2xl font-bold text-white leading-tight"
                style={{ fontFamily: "'BL Melody', sans-serif" }}
              >
                {card.name}
              </h3>
              <span
                className={`inline-flex items-center justify-center text-center flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${getPhaseBadgeStyle(card.phase)}`}
              >
                {card.phase}
              </span>
            </div>
            
            <div className="space-y-4 flex-1 flex flex-col justify-end">
              <p className="text-sm text-gray-400 font-medium">{card.description}</p>
              <div className="flex items-center gap-1.5 text-[#3077FF] text-[11px] font-semibold group-hover:text-white transition-colors">
                View Details
                <Info className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </ExpandableScreenTrigger>

      <ExpandableScreenContent className="!bg-[#0B1221]">
        <ExpandedEventView card={card} />
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
}

/* ── Expanded Event Detail View ────────────────────────── */

function ExpandedEventView({ card }: { card: (typeof eventsData)[number] }) {
  return (
    <div className="flex flex-col w-full min-h-full bg-[#0B1221] text-white">
      {/* Header Image with consistent aspect ratio */}
      <div className="w-full aspect-video overflow-hidden relative flex-shrink-0 group bg-black/40">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-[#0B1221]/40 opacity-90" />
      </div>

      {/* Main Content Area */}
      <div className="px-6 md:px-12 pb-24 mt-4 relative z-10 space-y-6">
        {/* Badge Row */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center text-center px-4 py-1.5 rounded-full bg-[#0052FF] text-[11px] font-bold uppercase tracking-widest text-white">
            {card.phase}
          </span>
          <span className="inline-flex items-center justify-center text-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-white/70">
            {card.type}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-heading font-semibold leading-tight text-white">
          {card.name}
        </h1>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Date</span>
              <p className="text-xs font-medium">{card.date}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Venue</span>
              <p className="text-xs font-medium">{card.venue}</p>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Time</span>
            <p className="text-xs font-medium">{card.time}</p>
          </div>
        </div>

        {/* About Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-semibold">About the Event</h2>
          <div className="space-y-3 text-white/60 leading-relaxed text-sm">
            {card.fullDescription.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        {card.timeline && (
          <div className="space-y-5">
            <h2 className="text-xl font-heading font-semibold text-white">Timeline</h2>
            <div className="space-y-3">
              {card.timeline.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 border-l-[3px] border-l-[#0052FF] gap-2">
                  <div>
                    <h3 className="text-sm font-heading font-semibold text-white">{item.title}</h3>
                    <p className="text-[10px] text-white/40 mt-0.5">{item.timeString}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#0052FF]/10 border border-[#0052FF]/20">
                    <Calendar className="w-3 h-3 text-[#5089FF]" />
                    <span className="text-[10px] font-bold text-[#5089FF] font-mono whitespace-nowrap">{item.dateRange}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom CTA */}
      <div className="sticky bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0B1221] to-transparent pointer-events-none z-[50]">
        <div className="max-w-fit ml-auto pointer-events-auto">
          <a
            href={card.registrationLink}
            target="_blank"
            rel="noreferrer"
            className="btn-shine inline-flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm px-8 py-2 sm:py-3 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary relative z-[100] cursor-pointer"
          >
            Register
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
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && filters.includes(category)) {
      setActiveFilter(category);
    }
  }, [searchParams]);

  const allEvents = hideExploreButton ? eventsData : eventsData.slice(0, 3);

  const filteredEvents = allEvents.filter((evt) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Workshops") return evt.type === "Workshops";
    if (activeFilter === "Hackathons") return evt.type === "Hackathons";
    return evt.phase === activeFilter;
  });

  return (
    <section className="py-14 md:py-32 bg-black relative text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10 flex flex-col items-center">
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
          className="flex flex-wrap items-center justify-center gap-2.5 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`btn-shine relative inline-flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm px-6 py-2 border-2 transition-all duration-300 ${
                activeFilter === filter
                  ? "border-[#0052FF] bg-[#0052FF] text-white hover:bg-white hover:text-[#0052FF] hover:border-white"
                  : "border-white/20 bg-transparent text-white hover:border-white hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Card Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {filteredEvents.map((card, idx) => (
              <motion.div
                key={card.id}
                className="flex h-full w-full"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="flex-1 w-full flex flex-col">
                  <EventCard card={card} />
                </div>
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
            <Link
              to="/events"
              className="btn-shine inline-flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm w-48 sm:w-60 px-8 py-2 sm:py-3 border-2 border-primary bg-primary text-primary-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:border-primary relative"
            >
              Explore
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventCards;
