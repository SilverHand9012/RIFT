import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "General Information",
    questions: [
      { 
        q: "What is REVA RIFT 2026?", 
        a: "REVA RIFT 2026 is a global, multi-domain tech fest built to unite students, ideas, and disciplines. Instead of a traditional weekend hackathon, it is a 5-week structured innovation journey." 
      },
      { 
        q: "Who is organizing the event?", 
        a: "The event is presented by the Google Developer Group On Campus at REVA University." 
      },
      { 
        q: "Where is the event taking place?", 
        a: "The event will be held at REVA University in Bengaluru, India. Activities will take place on campus, including at the Swami Vivekananda Block." 
      },
      { 
        q: "Is this an online or offline event?", 
        a: "The event will run in a primarily offline format." 
      },
    ]
  },
  {
    category: "Eligibility & Participation",
    questions: [
      { 
        q: "Who can participate in REVA RIFT?", 
        a: "Participation is open to students across all disciplines." 
      },
      { 
        q: "Can students from other colleges apply?", 
        a: "Yes, inter-college participation is actively encouraged. There is also an international participation policy." 
      },
      { 
        q: "What is the required team size?", 
        a: "Teams must consist of 2 to 4 members." 
      },
    ]
  },
  {
    category: "Event Phases & Key Dates",
    questions: [
      { 
        q: "What is the overall timeline of the event?", 
        a: "The event unfolds over a dynamic five-week experience, strategically designed across three phases:\n\n• Phase-I (R-SUMMIT): March 9-11.\n• Phase-II (RISE): April 8-9.\n• Phase-III (REVOLT): April 10-11." 
      },
      { 
        q: "What happens during Phase-I (Pre-Summit)?", 
        a: "Phase-I focuses on framing the innovation agenda with a strategic panel discussion, NammaHack validation, and an Ideathon featuring an 8,000 prize pool." 
      },
    ]
  },
  {
    category: "Workshops & Hackathons",
    questions: [
      { 
        q: "What can I expect from the workshops in Phase-II?", 
        a: "Phase-II features 6 specialized, hands-on workshop sessions designed to bridge classroom theory and industry execution. Topics include Google Stitch, Google's GenAI, Google Wing, Game Design, and Flagship AI Models." 
      },
      { 
        q: "What is the 7X24 Ultimate Hack Sprint (Phase-III)?", 
        a: "This is the core of REVA RIFT, consisting of 7 parallel domain hackathons running as a continuous 24-hour build sprint." 
      },
      { 
        q: "What are the specific hackathon domains?", 
        a: "Participants can compete in specialized tracks including Ideathon, Gameathon, Premier Sprint, Hardware, Designathon, Social Impact, and Algorand." 
      },
    ]
  },
  {
    category: "Registration & Contact",
    questions: [
      { 
        q: "How do I register my team?", 
        a: "Registration is processed online via the official website. The process involves selecting your track and waiting for confirmation." 
      },
      { 
        q: "Is there a qualification process for the hackathons?", 
        a: "Yes, Grand Hackathon registrations operate separately and utilize an escalation-based qualification model with screening pathways where applicable." 
      },
      { 
        q: "How can I contact the organizers?", 
        a: (
          <>
            You can reach out through the following official channels:
            <br /><br />
            • Email: <a href="mailto:gdgoc.reva@gmail.com" className="text-[#0052FF] hover:underline">gdgoc.reva@gmail.com</a> or <a href="mailto:reva.rift@gmail.com" className="text-[#0052FF] hover:underline">reva.rift@gmail.com</a>
            <br />
            • Phone: <a href="tel:+919110616340" className="text-[#0052FF] hover:underline">+91 91106 16340</a>
            <br />
            • Website: <a href="https://reva-rift.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] hover:underline">https://reva-rift.vercel.app/</a>
            <br />
            • Instagram: <a href="https://www.instagram.com/reva.rift_fest/" target="_blank" rel="noopener noreferrer" className="text-[#0052FF] hover:underline">@reva.rift_fest</a>
          </>
        )
      },
    ]
  }
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20 md:pb-40">
        <div className="container max-w-6xl px-4 md:px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-10 md:mb-14"
          >
            <h1 style={{
              fontFamily: "'BL Melody SemiBold', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(28px, 6vw, 48px)',
              lineHeight: '100%',
              textAlign: 'center',
              width: '100%',
              maxWidth: '973px',
              minHeight: '73px',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap' as const
            }}>
              <span className="text-[#0052FF] mr-[0.25em]">Frequently</span> Asked Questions
            </h1>
            <p className="text-muted-foreground opacity-70" style={{
              fontFamily: "'BL Melody ExtraLight', sans-serif",
              fontWeight: 200,
              fontSize: 'clamp(18px, 4vw, 25px)',
              lineHeight: '100%',
              textAlign: 'center',
              width: '100%',
              maxWidth: '973px',
              minHeight: '30px',
              opacity: 1
            }}></p>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-12 md:space-y-16 mt-4 md:mt-6 px-4">
            {faqData.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 className="text-2xl md:text-4xl font-bold text-center text-black mb-4" style={{ fontFamily: "'BL Melody SemiBold', sans-serif" }}>
                  {section.category}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="mx-auto flex flex-col pt-0"
                  style={{
                    width: '100%',
                    maxWidth: '851px',
                    gap: '22px',
                    opacity: 1
                  }}
                >
                  {section.questions.map((item, qIdx) => (
                    <AccordionItem
                      key={qIdx}
                      value={`item-${sIdx}-${qIdx}`}
                      className="border-b-[1px] border-black px-0"
                      style={{ minHeight: '60px' }}
                    >
                      <AccordionTrigger className="hover:no-underline py-4 transition-all hover:text-[#0052FF] [&>svg]:bg-[#F1F1F1] [&>svg]:rounded-full [&>svg]:p-1.5 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:text-black [&>svg]:transition-transform">
                        <span style={{
                          fontFamily: "'BL Melody Regular', sans-serif",
                          fontWeight: 400,
                          fontSize: '16px',
                           lineHeight: '100%',
                           opacity: 1,
                          display: 'inline-block',
                          textAlign: 'left'
                        }}>
                          {item.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent
                        className="text-muted-foreground pb-6 px-1 leading-relaxed whitespace-pre-line"
                        style={{
                          fontFamily: "'BL Melody Book', sans-serif",
                          fontWeight: 400,
                          fontSize: "15px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
