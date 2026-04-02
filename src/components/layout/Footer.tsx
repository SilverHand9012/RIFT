import { Link } from "react-router-dom";
import revaUniversityLogo from "@/assets/logo/reva-university.png";
import instagramIcon from "@/assets/icons/instagram-blue.svg";
import linkedinIcon from "@/assets/icons/linkedin-blue.svg";
import xIcon from "@/assets/icons/x-blue.svg";
import footerGeometric from "@/assets/LOGO_TRANSPARENT/footer.png";

const Footer = () => {
  return (
    <footer id="contact" className="mt-10 bg-background text-foreground border-t border-foreground">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div
          className="h-56 border-b border-foreground md:border-r"
          style={{
            backgroundImage: `url(${footerGeometric})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="h-56 border-r border-b border-foreground px-6 md:px-7 py-6 md:py-7">
          <div className="space-y-0 text-sm text-foreground/80">
            <Link
              to="/faqs"
              className="flex items-center justify-between border-b border-foreground py-2 hover:text-primary transition-colors"
            >
              <span>FAQ</span>
              <span className="text-xs">↗</span>
            </Link>
            <Link
              to="/sponsorship"
              className="flex items-center justify-between border-b border-foreground py-2 hover:text-primary transition-colors"
            >
              <span>Sponsorship</span>
              <span className="text-xs">↗</span>
            </Link>
            {/* <Link
              to="/jury"
              className="flex items-center justify-between border-b border-foreground py-2 hover:text-primary transition-colors"
            >
              <span>Jury</span>
              <span className="text-xs">↗</span>
            </Link>
            <Link
              to="/team"
              className="flex items-center justify-between border-b border-foreground py-2 hover:text-primary transition-colors"
            >
              <span>Team</span>
              <span className="text-xs">↗</span>
            </Link> */}
            <a
              href="https://gdg.community.dev/gdg-on-campus-reva-university-bengaluru-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-b border-foreground py-2 hover:text-primary transition-colors"
            >
              <span>GDG on Campus REVA University</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        <div className="h-56 border-b border-foreground px-6 md:px-8 py-6 md:py-7 flex items-center justify-center">
          <div className="w-full max-w-[320px] space-y-4">
            <img
              src={revaUniversityLogo}
              alt="REVA University"
              className="h-14 w-auto object-contain"
            />
            <p className="text-xs text-foreground/75 leading-relaxed">
              Rukmini Knowledge Park, Yelahanka,
              <br />
              Kattiganahalli, Sathanur,
              <br />
              Bengaluru, Karnataka
              <br />
              560064
            </p>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 md:grid-cols-[25%_50%_25%] border-b border-foreground text-xs text-foreground/75">
        <div className="hidden md:flex border-r border-foreground py-3 items-center justify-center text-sm text-foreground/80">
          Contact
        </div>
        <div className="md:border-r border-foreground py-3">
          <div className="flex items-center justify-center gap-3 flex-col md:flex-row">
            <div className="flex items-center gap-4 order-1 md:order-2">
              <a
                href="https://www.linkedin.com/company/gdg-on-campus-reva-university-bengaluru-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="X"
              >
                <img src={xIcon} alt="X" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" className="h-5 w-5 object-contain" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:flex py-3 items-center justify-center text-sm text-foreground/80">
          Event Regulations
        </div>
      </div>

      {/* Bottom Row */}
      <div className="py-2.5 text-center text-xs text-foreground/65">@{new Date().getFullYear()} REVA Rift</div>
    </footer>
  );
};

export default Footer;
