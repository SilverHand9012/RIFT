import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoLight from "@/assets/logo/2nd_main_3.png";
import gdgRevaLogo from "@/assets/logo/gdg-reva.svg";
import mobileGdgLogo from "@/assets/logo/mobile-gdg-logo.svg";
import naacLogo from "@/assets/logo/naac.svg";
import revaUniversitySvg from "@/assets/logo/reva-university.svg";
import StaggeredMenu, { StaggeredMenuItem } from "@/components/ui/StaggeredMenu";
import { Linkedin, Instagram } from "lucide-react";

const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Floating hero logo refs and state
  const heroLogoRef = useRef<HTMLImageElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);
  const scrollProgressRef = useRef(0);

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
  // Also drives the hero logo slide animation.
  useEffect(() => {
    let rafId: number;
    let lastScrolled = false;
    let lastDark = false;

    const tick = () => {
      const sy = window.scrollY;

      const nowScrolled = sy > 20;
      if (nowScrolled !== lastScrolled) {
        lastScrolled = nowScrolled;
        setScrolled(nowScrolled);
      }

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

      // Drive hero logo scroll animation (slide from right to left)
      // Animate over the first 350px of scroll
      if (heroLogoRef.current) {
        const progress = Math.min(sy / 350, 1);
        scrollProgressRef.current = progress;

        // Smooth easeInOutQuart for buttery slide
        const eased = progress < 0.5
          ? 8 * Math.pow(progress, 4)
          : 1 - Math.pow(-2 * progress + 2, 4) / 2;

        // Find the menu toggle button and the logo spacer to compute travel distance
        const toggle = document.querySelector('.sm-toggle') as HTMLElement;
        const spacer = document.querySelector('.sm-logo-spacer, .sm-logo') as HTMLElement;
        
        if (toggle && spacer) {
          const toggleRect = toggle.getBoundingClientRect();
          const spacerRect = spacer.getBoundingClientRect();
          const logoWidth = heroLogoRef.current.offsetWidth || (window.innerWidth < 768 ? 36 : 48);
          
          // Start position: to the left of the menu toggle
          const startX = toggleRect.left - logoWidth + 2;
          // End position: at the spacer slot (left side of navbar)
          const endX = spacerRect.left;
          
          // Target position from easing
          const targetX = startX + (endX - startX) * eased;

          // LERP for extra smoothness (damped follow)
          const prev = parseFloat(heroLogoRef.current.dataset.currentX || String(startX));
          const lerpFactor = 0.18;
          const currentX = prev + (targetX - prev) * lerpFactor;
          heroLogoRef.current.dataset.currentX = String(currentX);
          
          heroLogoRef.current.style.transform = `translateX(${currentX}px)`;
          const isMobile = window.innerWidth < 768;
          const currentHeight = isMobile ? 36 : 48;
          heroLogoRef.current.style.height = `${currentHeight}px`;
          heroLogoRef.current.style.marginTop = `-${currentHeight / 2}px`;
          heroLogoRef.current.style.opacity = '1';
        }
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
    window.dispatchEvent(new CustomEvent('close-expandables'));

    if (link.type === "route") {
      navigate(link.href);
      return;
    }

    if (!isHomePage) {
      navigate(`/${link.href}`);
      return;
    }

    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(link.href);
    }
    navigate(link.href, { replace: true });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('close-expandables'));
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/", { replace: true });
    } else {
      navigate("/");
    }
  };

  // Convert navLinks to the new StaggeredMenuItem format
  const menuItems: StaggeredMenuItem[] = navLinks.map((link) => ({
    label: link.label,
    ariaLabel: `Go to ${link.label}`,
    link:
      isHomePage && link.type === "hash"
        ? link.href
        : link.type === "hash"
          ? `/${link.href}`
          : link.href,
  }));

  const socialMenuItems = [
    { label: "LinkedIn", link: "https://www.linkedin.com/showcase/google-developer-groups/about/", icon: <Linkedin className="w-5 h-5" /> },
    { label: "X (Twitter)", link: "https://x.com/googledevgroups", icon: <XLogo className="w-5 h-5" /> },
    { label: "Instagram", link: "https://www.instagram.com/reva_rift?igsh=dXp6aGRwN3o4bDJs", icon: <Instagram className="w-5 h-5" /> },
  ];

  // Handle menu item clicks — find the original navLink and delegate to handleNavClick
  const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: StaggeredMenuItem) => {
    const navLink = navLinks.find((l) => l.label === item.label);
    if (navLink) {
      handleNavClick(e as any, navLink);
    }
  };

  const isInverted = isDark;

  const navBg = !scrolled
    ? isHomePage ? "bg-white border-b border-black" : "bg-transparent"
    : isInverted
      ? "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm"
      : "bg-white/5 backdrop-blur-sm";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[10000] overflow-visible transition-all duration-500 will-change-transform ${isHidden ? "translate-y-[-100%] opacity-0 pointer-events-none" : "translate-y-0 opacity-1"} ${navBg}`}
    >
      <div 
        className={`absolute top-0 left-0 right-0 h-16 z-[5] pointer-events-none flex items-center transition-all duration-300 ${!scrolled && isHomePage && !isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
      >
        <div className="container relative flex items-center justify-between mx-auto px-4 md:px-8 h-full">
          <div className="flex items-center gap-4 md:gap-6">
            <img src={naacLogo} alt="NAAC A+" className="h-6 md:h-9 w-auto object-contain" />
            <img src={revaUniversitySvg} alt="REVA University" className="h-6 md:h-9 w-auto object-contain" />
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <img 
              src={gdgRevaLogo} 
              alt="GDG REVA" 
              className="h-7 md:h-8 w-auto object-contain" 
            />
          </div>

          {/* Right Spacer for Menu Button alignment */}
          <div className="hidden md:block w-[44px]" />
        </div>
      </div>

      {/* Floating Hero Logo — desktop only, slides from right (near menu) to left on scroll */}
      {isHomePage && (
        <img
          ref={heroLogoRef}
          src={logoLight}
          alt="RIFT Logo"
          onClick={handleLogoClick}
          className="hero-floating-logo"
          draggable={false}
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateX(0)',
            height: '48px',
            width: 'auto',
            objectFit: 'contain' as const,
            cursor: 'pointer',
            zIndex: 50,
            opacity: 0, // hidden initially, shown by RAF once positioned
            willChange: 'transform, opacity',
            pointerEvents: 'auto',
          }}
        />
      )}

      {/* Mobile GDG Logo — sits near the menu icon, visible only on mobile */}
      <div className={`absolute top-0 right-[85px] h-16 flex items-center z-[15] md:hidden transition-all duration-300 ${!scrolled && isHomePage && !isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
        <img
          src={mobileGdgLogo}
          alt="GDG on Campus REVA"
          className="h-5 w-auto object-contain"
          draggable={false}
        />
      </div>

      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialMenuItems}
        displaySocials
        displayItemNumbering
        menuButtonColor={(isMenuOpen) ? '#111111' : (isInverted ? '#ffffff' : '#111111')}
        openMenuButtonColor="#111111"
        changeMenuColorOnOpen
        colors={['#1A73E8', '#000000']}
        logoUrl={logoLight}
        accentColor="#1A73E8"
        hideLogo={isHomePage}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
        onItemClick={handleMenuItemClick}
        onLogoClick={handleLogoClick}
      />
    </nav>
  );
};

export default Navbar;
