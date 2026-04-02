import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DIVISIONS_DATA = [
  {
    name: "Artificial Intelligence",
    domain: "Machine Learning",
    events: [
      { time: "CORE FOCUS", title: "Intelligent Systems", description: "Focus on intelligent systems, generative AI, automation, and real-world AI applications." },
    ]
  },
  {
    name: "Cloud Computing",
    domain: "Infrastructure",
    events: [
      { time: "CORE FOCUS", title: "Scalable Systems", description: "Build scalable systems using modern cloud platforms, distributed systems, and backend infrastructure." },
    ]
  },
  {
    name: "Cybersecurity",
    domain: "Digital Trust",
    events: [
      { time: "CORE FOCUS", title: "Digital Security", description: "Design secure applications, threat detection systems, and privacy-focused digital solutions." },
    ]
  },
  {
    name: "Robotics",
    domain: "Autonomous Systems",
    events: [
      { time: "CORE FOCUS", title: "Embedded Innovation", description: "Develop intelligent robotic systems, autonomous navigation solutions, and embedded innovations." },
    ]
  },
  {
    name: "FinTech",
    domain: "Digital Economy",
    events: [
      { time: "CORE FOCUS", title: "Financial Tech", description: "Create financial technologies that improve digital payments, financial inclusion, and secure transactions." },
    ]
  },
  {
    name: "Sustainability",
    domain: "Climate Technology",
    events: [
      { time: "CORE FOCUS", title: "Climate Solutions", description: "Build solutions addressing environmental challenges, climate monitoring, and sustainable infrastructure." },
    ]
  },
  {
    name: "HealthTech",
    domain: "Bio Innovation",
    events: [
      { time: "CORE FOCUS", title: "Healthcare Delivery", description: "Design technologies that improve healthcare delivery, diagnostics, and medical accessibility." },
    ]
  },
  {
    name: "Game Development",
    domain: "Interactive Systems",
    events: [
      { time: "CORE FOCUS", title: "Immersive Tech", description: "Create immersive digital experiences, games, and interactive simulations using modern game engines." },
    ]
  },
  {
    name: "Data Science",
    domain: "Intelligent Systems",
    events: [
      { time: "CORE FOCUS", title: "Predictive Analytics", description: "Leverage data analytics, machine learning models, and predictive systems to solve real-world problems." },
    ]
  }
];

const EventItem = ({ time, title, description }: { time: string; title: string; description: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="py-4 md:py-6 border-b border-black last:border-0 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-16 flex-1">
          <div className="shrink-0 w-full md:w-[162px] text-[#9CA3AF]">
            <span style={{ 
              fontFamily: "'BL Melody', sans-serif",
              fontWeight: 400,
              lineHeight: '100%',
              display: 'block',
              whiteSpace: 'nowrap'
            }} className="text-lg md:text-2xl">
              {time}
            </span>
          </div>
          <div className="flex flex-col flex-1">
            <h4 style={{ 
              fontFamily: "'BL Melody', sans-serif",
              fontWeight: 600,
              lineHeight: '100%',
            }} className="text-gray-900 text-lg md:text-2xl mb-1 md:mb-0">
              {title}
            </h4>
            <p style={{ 
              fontFamily: "'BL Melody', sans-serif",
              fontWeight: 400,
              lineHeight: '100%',
            }} className="text-gray-500 text-lg md:text-2xl">
              Description
            </p>
          </div>
        </div>
        <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D1E1FF] flex items-center justify-center transition-all duration-300`}>
          <ChevronDown 
            size={20} 
            className={`text-[#0052FF] transition-all duration-300 ${isOpen ? "rotate-180" : ""}`} 
          />
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 md:pl-[226px] pr-4 md:pr-8">
              <p className="text-sm md:text-base text-gray-500 leading-relaxed italic">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DivisionSection = ({ name, domain, events }: typeof DIVISIONS_DATA[0]) => (
  <div className="space-y-4 md:space-y-6">
    <div className="relative pb-2">
      <h2 className="flex flex-wrap items-center text-2xl md:text-4xl" style={{ 
        fontFamily: "'BL Melody Medium', sans-serif",
        fontWeight: 500,
        lineHeight: '120%',
      }}>
        <span>{name}</span>
        <span className="mx-2 hidden sm:inline">|</span>
        <span className="text-[#0052FF] sm:ml-0">{domain}</span>
      </h2>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0052FF]" />
    </div>
    <div className="space-y-0">
      {events.map((event, idx) => (
        <EventItem key={idx} {...event} />
      ))}
    </div>
  </div>
);

export default function Divisions() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      <main className="pt-20 md:pt-32 pb-20 md:pb-40">
        <div className="container max-w-6xl px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-24 flex flex-col items-center">
            <h1 className="mx-auto flex flex-wrap items-center justify-center text-center mb-4 text-3xl md:text-5xl" style={{ 
              fontFamily: "'BL Melody SemiBold', sans-serif",
              fontWeight: 600,
              lineHeight: '120%',
              maxWidth: '800px'
            }}>
              <span>The</span>
              <span className="text-[#0052FF] ml-[0.25em]">Divisions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-900 font-medium mb-8 md:mb-12 max-w-2xl">
              Nine specialized technology domains powering the REVA RIFT innovation sprint.
            </p>
          </div>

          {/* Divisions List */}
          <div className="space-y-12 md:space-y-24">
            {DIVISIONS_DATA.map((division, idx) => (
              <DivisionSection key={idx} {...division} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
