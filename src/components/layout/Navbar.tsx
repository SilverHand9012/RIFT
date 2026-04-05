import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
    { label: "LinkedIn", link: "https://www.linkedin.com/company/gdg-reva" },
    { label: "X (Twitter)", link: "https://twitter.com/gdgoncampusreva" },
    { label: "Instagram", link: "https://www.instagram.com/gdgoncampusreva/" },
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
    ? "bg-transparent"
    : isInverted
      ? "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[2px]"
      : "bg-gradient-to-b from-white/60 to-transparent backdrop-blur-[2px]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[10000] overflow-visible transition-all duration-500 will-change-transform ${isHidden ? "translate-y-[-100%] opacity-0 pointer-events-none" : "translate-y-0 opacity-1"} ${!scrolled ? "border-b md:border-b-0 border-black/10" : ""} ${navBg}`}
    >
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialMenuItems}
        displaySocials
        displayItemNumbering
        menuButtonColor={isInverted ? '#ffffff' : '#111111'}
        openMenuButtonColor="#111111"
        changeMenuColorOnOpen
        colors={['#1A73E8', '#000000']}
        logoUrl={logoLight}
        accentColor="#1A73E8"
        onItemClick={handleMenuItemClick}
        onLogoClick={handleLogoClick}
      />
    </nav>
  );
};

export default Navbar;
