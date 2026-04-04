import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import gridMenuIcon from '@/assets/elements/grid-menu-icon.png';

import './StaggeredMenu.css';

export interface StaggeredMenuItem {
  label: string;
  href: string;
  type: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface StaggeredMenuSecondaryLink {
  label: string;
  href: string;
  external?: boolean;
}

interface StaggeredMenuProps {
  items: StaggeredMenuItem[];
  logo?: React.ReactNode;
  socials?: { icon: React.ReactNode; href: string; label: string }[];
  secondaryLinks?: StaggeredMenuSecondaryLink[];
  onClose?: () => void;
  className?: string;
  inverted?: boolean;
}

const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  items = [],
  logo = "Menu",
  socials = [],
  secondaryLinks = [],
  onClose,
  className = "",
  inverted = false,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);

  // Automatically close the menu when the location/path/hash changes
  useEffect(() => {
    if (isOpen) {
      closeMenu();
    }
  }, [location.pathname, location.hash]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const openMenu = () => {
    setIsOpen(true);

    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel) return;

    const panelItems = panel.querySelectorAll('.sm-panel-item');
    const socialLinks = panel.querySelectorAll('.sm-socials-link');

    // Reset items to hidden state before animating in
    gsap.set(panelItems, { x: 40, opacity: 0 });
    gsap.set(socialLinks, { y: 20, opacity: 0 });

    // Show backdrop
    backdrop?.classList.add('is-visible');

    // Slide panel in from the right
    gsap.to(panel, {
      x: 0,
      duration: 0.4,
      ease: 'power3.out',
      onComplete: () => {
        busyRef.current = false;
      }
    });

    // Stagger in menu items from the right
    gsap.to(panelItems, {
      x: 0,
      opacity: 1,
      duration: 0.35,
      stagger: 0.04,
      ease: 'power3.out',
      delay: 0.1
    });

    gsap.to(socialLinks, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.03,
      ease: 'power2.out',
      delay: 0.3
    });
  };

  const closeMenu = () => {
    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel) return;

    const panelItems = panel.querySelectorAll('.sm-panel-item');

    gsap.to(panelItems, {
      x: 40,
      opacity: 0,
      duration: 0.2,
      stagger: 0.02,
      ease: 'power2.in'
    });

    // Hide backdrop
    backdrop?.classList.remove('is-visible');

    // Slide panel out to the right
    gsap.to(panel, {
      x: '100%',
      duration: 0.35,
      ease: 'power3.in',
      delay: 0.1,
      onComplete: () => {
        setIsOpen(false);
        busyRef.current = false;
        onClose?.();
      }
    });
  };

  const toggleMenu = () => {
    if (busyRef.current) return;
    busyRef.current = true;

    if (!isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: StaggeredMenuItem) => {
    // Dispatch the click event (e.g. to close expandables)
    if (item.onClick) {
      item.onClick(e);
    }
    
    // We DON'T call closeMenu() here manually anymore.
    // The useEffect above will catch the location/hash change 
    // triggered by the <Link> component and close the menu gracefully.
  };

  return (
    <div className={`staggered-menu-container ${className}`}>
      <button 
        className={`sm-toggle ${isOpen ? 'is-active' : ''} ${inverted ? 'is-inverted' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="sm-toggle-icon-grid">
          <img src={gridMenuIcon} alt="" className="sm-grid-icon-img h-11 w-11 md:h-12 md:w-12 object-contain" style={{ imageRendering: "auto" }} />
        </span>
      </button>

      {/* Backdrop overlay — click to close */}
      <div className="sm-backdrop" ref={backdropRef} onClick={toggleMenu} />

      {/* Side panel — always in DOM, hidden via translateX(100%) */}
      <div className="staggered-menu-panel" ref={panelRef}>
        <div className="sm-panel-content">
          <nav className="sm-panel-nav">
            <ul className="sm-panel-list" data-numbering>
              {items.map((item, index) => (
                <li key={index} className="sm-panel-item">
                  <Link 
                    to={item.href} 
                    className="sm-panel-link" 
                    onClick={(e) => handleItemClick(e, item)}
                  >
                    <span className="sm-panel-itemLabel">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom block — secondary links + socials pinned together */}
          {(secondaryLinks.length > 0 || socials.length > 0) && (
            <div className="sm-panel-bottom">
              {secondaryLinks.length > 0 && (
                <div className="sm-secondary-links">
                  {secondaryLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="sm-secondary-link"
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      onClick={() => !link.external && closeMenu()}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="sm-secondary-arrow" />
                    </a>
                  ))}
                </div>
              )}

              {socials.length > 0 && (
                <div className="sm-panel-footer">
                  <ul className="sm-socials-list">
                    {socials.map((social, index) => (
                      <li key={index} className="sm-socials-item">
                        <a href={social.href} className="sm-socials-link" aria-label={social.label} target="_blank" rel="noreferrer">
                          {social.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaggeredMenu;
