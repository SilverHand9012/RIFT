import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import logoLight from "@/assets/logo/2nd_main_3.png";
import logoDark from "@/assets/logo/2nd_main_white.png";
import StaggeredMenu, { StaggeredMenuItem } from "@/components/ui/StaggeredMenu";

const navLinks = [
  { label: "About", href: "#about", type: "hash" },
  { label: "Events", href: "/events", type: "route" },
  { label: "Schedule", href: "#schedule", type: "hash" },
  { label: "Contact", href: "#contact", type: "hash" },
];

const NAV_HEIGHT = 64; // px — matches h-16

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Single RAF loop: poll window.scrollY (Lenis updates it) to detect
  // both "scrolled past 20px" and "navbar is over a dark section".
  useEffect(() => {
    let rafId: number;
    let lastScrolled = false;
    let lastDark = false;

    const tick = () => {
      const sy = window.scrollY;

      // --- Scrolled state ---
      const nowScrolled = sy > 20;
      if (nowScrolled !== lastScrolled) {
        lastScrolled = nowScrolled;
        setScrolled(nowScrolled);
      }

      // --- Dark section detection — always active since navbar is always transparent ---
      const darkSections = document.querySelectorAll<HTMLElement>("[data-theme='dark']");
      let overlapping = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < NAV_HEIGHT && rect.bottom > 0) {
          overlapping = true;
        }
      });

      if (overlapping !== lastDark) {
        lastDark = overlapping;
        setIsDark(overlapping);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isHomePage]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLElement>,
    link: (typeof navLinks)[0]
  ) => {
    event.preventDefault();

    if (link.type === "route") {
      navigate(link.href);
      return;
    }

    if (!isHomePage) {
      setTimeout(() => {
        navigate("/");
        setTimeout(() => {
          navigate(`/${link.href}`, { replace: true });
        }, 400);
      }, 100);
      return;
    }

    const targetId = link.href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", link.href);
      }, 150);
    }
  };

  const staggeredMenuItems: StaggeredMenuItem[] = navLinks.map((link) => ({
    label: link.label,
    href:
      isHomePage && link.type === "hash"
        ? link.href
        : link.type === "hash"
        ? `/${link.href}`
        : link.href,
    type: link.type,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      handleNavClick(e as any, link),
  }));

  // Navbar is always transparent — colors invert when over a dark section
  const isInverted = isDark;

  // Completely transparent at top; gradient scrim activates after scrolling.
  // Scrim adapts to light/dark section the navbar is currently over.
  const navBg = !scrolled
    ? "bg-transparent border-b border-transparent"
    : isInverted
    ? "bg-gradient-to-b from-black/40 to-transparent border-b border-transparent backdrop-blur-[2px]"
    : "bg-gradient-to-b from-white/60 to-transparent border-b border-transparent backdrop-blur-[2px]";

  const linkClass = `nav-link text-sm font-semibold py-1 transition-colors duration-300 ${
    isInverted ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform ${navBg}`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 relative z-[1001]"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <div className="relative h-11 md:h-14">
            <img
              src={logoLight}
              alt="REVA RIFT"
              className="h-full w-auto transition-opacity duration-500"
              style={{ opacity: isInverted ? 0 : 1 }}
            />
            <img
              src={logoDark}
              alt="REVA RIFT"
              className="absolute top-0 left-0 h-full w-auto transition-opacity duration-500"
              style={{ opacity: isInverted ? 1 : 0 }}
            />
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center">
          {/* Desktop links — hidden when scrolled */}
          <div
            className={`hidden md:flex items-center gap-10 transition-all duration-300 ${
              scrolled
                ? "opacity-0 w-0 overflow-hidden pointer-events-none"
                : "opacity-100 mr-4"
            }`}
          >
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link key={link.label} to={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={(event) => handleNavClick(event, link)}
                  className={linkClass}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Hamburger — always visible on mobile, appears on desktop when scrolled */}
          <div
            className={`transition-all duration-300 ${
              !scrolled
                ? "md:opacity-0 md:w-0 md:overflow-hidden md:pointer-events-none"
                : "opacity-100"
            }`}
          >
            <StaggeredMenu
              items={staggeredMenuItems}
              inverted={isInverted}
              secondaryLinks={[
                { label: "FAQ", href: "/faqs" },
                { label: "Sponsorship", href: "mailto:gdgoncampus@reva.edu.in", external: true },
                { label: "GDG on Campus REVA University", href: "https://gdg.community.dev/gdg-on-campus-reva-university-bengaluru-india/", external: true },
              ]}
              socials={[
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/gdg-reva", label: "LinkedIn" },
                { icon: <Twitter size={18} />, href: "https://twitter.com/gdgoncampusreva", label: "X (Twitter)" },
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/gdgoncampusreva/", label: "Instagram" },
              ]}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
