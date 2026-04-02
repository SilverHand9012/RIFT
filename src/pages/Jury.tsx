import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * 💡 HOW TO ADD NEW JURY MEMBERS:
 * 
 * 1. Ensure the member's image is in `src/assets/images/jury/` (resolution: 1920x2000).
 * 2. Import the image at the top of this file:
 *    `import memberNameImg from "@/assets/images/jury/member-name.png";`
 * 3. Add a new object to the `juryMembers` array below:
 *    {
 *      name: "Full Name",
 *      role: "Designation",
 *      image: memberNameImg, // or null if image is not yet available
 *      linkedin: "https://linkedin.com/in/...",
 *    },
 */

// Import images here when they are available in src/assets/images/jury/
// Example: import sarahImg from "@/assets/images/jury/sarah.png";
import sample01 from "@/assets/images/jury/sample01.png"
import linkedinIcon from "@/assets/icons/linkedin.svg"

const juryMembers = [
  {
    name: "Name",
    role: "Designation",
    image: sample01,
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
];

const Jury = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20 md:pb-40">
        <div className="w-full flex flex-col items-center px-4 md:px-0">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-14 flex flex-col items-center">
            <h1 className="mx-auto flex items-center justify-center" style={{
              fontFamily: "'BL Melody SemiBold', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(32px, 6vw, 48px)',
              lineHeight: '100%',
              textAlign: 'center',
              minHeight: '58px',
              opacity: 1
            }}>
              The <span className="text-[#0052FF] ml-[0.25em]">Jury</span>
            </h1>
            <p className="mx-auto text-muted-foreground opacity-70" style={{
              fontFamily: "'BL Melody Book', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(18px, 4vw, 24px)',
              lineHeight: '100%',
              textAlign: 'center',
              minHeight: '29px',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            </p>
          </div>

          {/* Jury Members Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full"
            style={{
              maxWidth: '1450px',
              gap: '40px',
              opacity: 1
            }}
          >
            {juryMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col group w-full"
                style={{ maxWidth: '350px' }}
              >
                {/* Image Slot - 350x350 Frame */}
                <div
                  className="bg-[#E5E5E5] mb-6 overflow-hidden relative w-full aspect-square"
                  style={{
                    maxWidth: '350px',
                    opacity: 1
                  }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 italic">
                      {/* Placeholder for minimalist aesthetic */}
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="w-full" style={{ maxWidth: '350px' }}>
                  <div className="pb-1 border-b-[1px] border-black mb-2 flex justify-between items-center">
                    <h3 style={{
                      fontFamily: "'BL Melody Medium', sans-serif",
                      fontWeight: 500,
                      fontSize: '32px',
                      lineHeight: '100%',
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      height: '38px',
                      opacity: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start'
                    }} className="transition-colors group-hover:text-[#0052FF]">
                      {member.name}
                    </h3>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <img 
                        src={linkedinIcon} 
                        alt="LinkedIn" 
                        className="h-[22px] w-auto" 
                        style={{ filter: "brightness(0) saturate(100%) invert(21%) sepia(100%) saturate(7413%) hue-rotate(227deg) brightness(101%) contrast(107%)" }}
                      />
                    </a>
                  </div>

                  <p style={{
                    fontFamily: "'BL Melody Book', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '100%',
                    verticalAlign: 'middle',
                    width: '100%',
                    maxWidth: '350px',
                    minHeight: '17px',
                    opacity: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }} className="text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jury;
