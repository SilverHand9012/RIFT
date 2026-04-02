import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import eventImage from "@/assets/images/others/event-image.webp";

export default function PreSummit() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pb-40">
        {/* Event Image Section */}
        <section className="w-full h-[60vh] relative overflow-hidden flex items-center justify-center pt-16">
          <img 
            src={eventImage} 
            alt="REVA RIFT Event" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        </section>

        <div className="container max-w-7xl px-4 -mt-10 relative z-10 flex flex-col items-center">
          {/* Main Title */}
          <h1 className="mb-24 text-center" style={{ 
            fontFamily: "'Monument Extended', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(32px, 6vw, 56px)',
            lineHeight: '100%',
            letterSpacing: '0.05em'
          }}>
            Pre <span className="text-[#0052FF]">Summit</span>
          </h1>

          {/* Centered Content Blocks */}
          <div className="w-full space-y-16 mt-16">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Strategic Kickoff & Innovation Dialogue</h3>
              <p className="text-white/60 text-sm md:text-base font-normal leading-relaxed mx-auto max-w-none">
                The Pre-Summit marks the strategic beginning of REVA RIFT 2026, bringing together students, mentors, and technology leaders to define the direction of the innovation journey ahead. Through expert dialogues and discussions, participants explore emerging technological trends and real-world challenges across areas such as artificial intelligence, cloud systems, cybersecurity, sustainability, and digital infrastructure. This phase helps participants understand the broader landscape of modern technology and identify meaningful problem spaces that will shape the upcoming hackathons.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Setting the Foundation for Innovation</h3>
              <p className="text-white/60 text-sm md:text-base font-normal leading-relaxed mx-auto max-w-none">
                More than just an opening event, the Pre-Summit establishes the foundation for the structured REVA RIFT experience. It encourages early-stage ideation, collaborative thinking, and strategic alignment before participants move into the hands-on workshop series and domain-focused hackathons. By providing context, inspiration, and direction, the Pre-Summit ensures that teams begin their innovation journey with well-defined ideas and a clear understanding of how to transform concepts into impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
