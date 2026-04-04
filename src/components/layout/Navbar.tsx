import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import logoLight from "@/assets/logo/2nd_main_3.png";
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

  const [isHidden, setIsHidden] = useState(false);

  // Listen for event card expansion state to hide the navbar
  useEffect(() => {
    const handleExpandableChange = (event: any) => {
      setIsHidden(event.detail.isExpanded);
    };
    window.addEventListener('expandable-state-change', handleExpandableChange);
    return () => {
      window.removeEventListener('expandable-state-change', handleExpandableChange);
    };
  }, []);

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
    // Close any expanded cards first
    window.dispatchEvent(new CustomEvent('close-expandables'));

    if (link.type === "route") {
      // For standard routes, prevent default and use navigate
      event.preventDefault();
      navigate(link.href);
      return;
    }

    if (link.type === "hash") {
      event.preventDefault();
      
      const targetHash = link.href; // e.g. "#about"
      
      if (!isHomePage) {
        // If on another page, navigate to home + hash
        navigate(`/${targetHash}`);
      } else {
        // If already on home page, update hash (SmoothScroll will handle the anchor)
        navigate(targetHash);
      }
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
    onClick: () => {
      // Just ensure expandables close when an item is selected
      window.dispatchEvent(new CustomEvent('close-expandables'));
    },
  }));

  // Navbar is always transparent — colors invert when over a dark section
  const isInverted = isDark;

  // Completely transparent at top; gradient scrim activates after scrolling.
  // Scrim adapts to light/dark section the navbar is currently over.
  const navBg = !scrolled
    ? "bg-transparent"
    : isInverted
    ? "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[2px]"
    : "bg-gradient-to-b from-white/60 to-transparent backdrop-blur-[2px]";

  const linkClass = `nav-link text-sm font-semibold py-1 transition-colors duration-300 ${
    isInverted ? "text-white/90 hover:text-white" : "text-foreground hover:text-foreground/80"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 will-change-transform ${isHidden ? "translate-y-[-100%] opacity-0 pointer-events-none" : "translate-y-0 opacity-1"} ${!scrolled ? "border-b md:border-b-0 border-black/10" : ""} ${navBg}`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 relative z-[1001]"
          onClick={(e) => {
            window.dispatchEvent(new CustomEvent('close-expandables'));
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            src={logoLight}
            alt="REVA RIFT"
            className="h-11 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center">
          {/* Desktop links — always visible on md+ */}
          <div className="hidden md:flex items-center gap-10 transition-all duration-300 opacity-100 mr-4">
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

          {/* Hamburger — only visible on mobile (below md) */}
          <div className="block md:hidden">
            <StaggeredMenu
              items={staggeredMenuItems}
              inverted={isInverted}
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
