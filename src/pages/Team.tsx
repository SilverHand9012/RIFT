import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./static/Team.css";
import bottomTriangle from "@/assets/images/team/bottom-triangle.svg";
import topTriangle from "@/assets/images/team/top-triangle.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import xIcon from "@/assets/icons/x.svg";
import gdgTeam from "@/assets/images/team/gdg-team.webp";
import MarqueeSection from "@/sections/MarqueeSection";

// members images
import Shivnesh from "@/assets/images/team/shivnesh.png";
import Udith from "@/assets/images/team/udith.png";
import Someshwar from "@/assets/images/team/someshwar.png";
import Simran from "@/assets/images/team/simran.png";
import Sudhanshu from "@/assets/images/team/sudhanshu.png";
import Devanshi from "@/assets/images/team/devanshi.png";
import Tanmay from "@/assets/images/team/tanmay.png";
import Dhanush from "@/assets/images/team/dhanush.png";
import Vyshnavi from "@/assets/images/team/vyshnavi.png"

/*
 * ============================================================
 *  TEAM PAGE REWRITE
 *  Includes "About us" intro + 3-Column Profile Layout
 * ============================================================
 */

// ... (interface remains same)
interface TeamMember {
  name: string;
  designation: string;
  photo: string;
  linkedin: string;
  twitter: string;
}

const TEAM_MEMBERS: (TeamMember | null)[] = [
  { name: "SHIVANESH", designation: "Finance & Sponsorship", photo: Shivnesh, linkedin: "#", twitter: "#" },
  { name: "UDITH", designation: "Technical Team", photo: Udith, linkedin: "#", twitter: "#" },
  { name: "SOMESHWAR", designation: "Design Team", photo: Someshwar, linkedin: "#", twitter: "#" },
  { name: "SIMRAN", designation: "Technical Team", photo: Simran, linkedin: "#", twitter: "#" },
  { name: "SUDHANSHU", designation: "Support Team", photo: Sudhanshu, linkedin: "#", twitter: "#" },
  { name: "DEVANSHI", designation: "Executive Team", photo: Devanshi, linkedin: "#", twitter: "#" },
  { name: "TANMAY", designation: "Technical Team", photo: Tanmay, linkedin: "#", twitter: "#" },
  { name: "DHANUSH", designation: "Hackathon Production Lead", photo: Dhanush, linkedin: "#", twitter: "#" },
  { name: "VYSHNAVI REDDY", designation: "Secretary", photo: Vyshnavi, linkedin: "#", twitter: "#" },
];

function ProfileCard({ member }: { member: TeamMember | null }) {
  return (
    <div className="profile-card">
      <div className="blue-box">
        {member && (
          <div className="social-icons">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img className="social-icon" src={linkedinIcon} alt="LinkedIn" draggable={false} />
            </a>
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
              <img className="social-icon" src={xIcon} alt="X" draggable={false} />
            </a>
          </div>
        )}
        <img className="triangle-left" src={bottomTriangle} alt="" aria-hidden="true" draggable={false} />
        {member && member.photo && (
          <img className="profile-photo" src={member.photo} alt={member.name} draggable={false} />
        )}
        <img className="triangle-right" src={topTriangle} alt="" aria-hidden="true" draggable={false} />
      </div>
      {member && (
        <div className="profile-info">
          <p className={`profile-name ${member.name.length > 12 ? "profile-name--long" : ""}`}>
            {member.name}
          </p>
          <p className="profile-designation">{member.designation}</p>
        </div>
      )}
    </div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        {/* ── About Us Section (Black) ── */}
        <section className="bg-black text-white pt-0 pb-32">
          {/* Hero Image / Header area - Full width, attached to top and sides */}
          <div className="relative w-full h-[250px] md:h-[450px] mb-12 flex items-center justify-center overflow-hidden">
            <img
              src={gdgTeam}
              alt="GDG Team"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            {/* Solid fade-to-black at the bottom to hide the image edge */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black"></div>
          </div>

          <div className="container max-w-7xl px-4 flex flex-col items-center">
            <h2 className="mx-auto flex items-center justify-center text-center" style={{
              fontFamily: "'Monument Extended', sans-serif",
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0.05em',
              marginBottom: '64px'
            }}>
              About us
            </h2>

            {/* Centered Content Blocks without boxes */}
            <div className="w-full max-w-none space-y-16 mt-16">
              <div className="text-center">
                <p className="text-white/60 text-sm md:text-base font-normal leading-relaxed mx-auto max-w-none">
                  REVA RIFT 2026 is a global, multi-domain technology festival hosted at REVA University, Bengaluru. It brings together students, innovators, and emerging technologies into a unified ecosystem of learning, collaboration, and innovation. Unlike traditional tech fests that operate as short standalone events, REVA RIFT is designed as a structured five-week innovation journey where ideas evolve through dialogue, learning, experimentation, and competition.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Mission & Vision</h3>
                <p className="text-white/60 text-sm md:text-base font-normal leading-relaxed mx-auto max-w-none">
                  REVA RIFT aims to redefine how student innovation events are structured. Its vision is to create a sustainable ecosystem where learning, collaboration, and problem-solving progress together. Through a carefully designed progression—from strategic discussions and workshops to domain-focused hackathons—participants gain the opportunity to transform ideas into real, working solutions that address contemporary technological and societal challenges.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Empowering Innovators</h3>
                <p className="text-white/60 text-sm md:text-base font-normal leading-relaxed mx-auto max-w-none">
                  The event provides participants with a high-performance environment built around mentorship, hands-on learning, and applied problem solving. Expert-led workshops introduce emerging technologies such as generative AI, cloud infrastructure, game development, autonomous systems, and large-scale AI models. These sessions help participants develop practical skills before entering competitive hackathon phases where they build and prototype real solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-8">
                <div className="text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Community Driven</h4>
                  <p className="text-white/60 text-sm font-normal leading-relaxed mx-auto max-w-none">
                    REVA RIFT thrives on collaboration across student communities, developer groups, and innovation networks. By fostering knowledge sharing, peer learning, and cross-disciplinary collaboration, the event builds a strong community of builders, thinkers, and innovators who work together to explore new technological possibilities.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Strategic Partnerships</h4>
                  <p className="text-white/60 text-sm font-normal leading-relaxed mx-auto max-w-none">
                    Through collaboration with industry experts, mentors, and technology leaders, REVA RIFT connects academic innovation with real-world impact. Industry-aligned problem statements, mentorship ecosystems, and structured evaluation frameworks help participants develop solutions that address meaningful challenges and contribute to the broader future of technology and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MarqueeSection />

        {/* ── The Team Grid Section ── */}
        <section className="bg-white pt-24 pb-40">
          <div className="container flex flex-col items-center">
            {/* Header Section */}
            <div className="text-center mb-44 md:mb-60 flex flex-col items-center">
              <h1 className="mx-auto flex items-center justify-center font-bold" style={{
                fontFamily: "'BL Melody SemiBold', sans-serif",
                fontSize: '48px',
                lineHeight: '100%',
                textAlign: 'center',
              }}>
                The <span className="text-[#0052FF] ml-[0.25em]">Team</span>
              </h1>
              <p className="mx-auto mt-4 text-black font-normal" style={{
                fontFamily: "'BL Melody Book', sans-serif",
                fontSize: '24px',
                lineHeight: '100%',
                textAlign: 'center',
              }}>
                Meet the team
              </p>
            </div>

            {/* 3×3 Team Grid */}
            <div className="team-grid">
              {TEAM_MEMBERS.map((member, index) => (
                <ProfileCard key={member?.name ?? `placeholder-${index}`} member={member} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
