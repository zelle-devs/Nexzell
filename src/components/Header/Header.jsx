'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';
import { usePageTransition } from '@/app/TransitionContext';
import { navLinks } from '@/app/navData';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDrawerSection, setOpenDrawerSection] = useState(null);
  const { navigate } = usePageTransition();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setOpenDrawerSection(null);
  };

  const toggleDrawerSection = (label) => {
    setOpenDrawerSection((prev) => (prev === label ? null : label));
  };

  const handleNav = (e, href, label) => {
    closeDrawer();
    
    // Focus blur karne se hover/focus state khatam ho jayegi aur dropdown hide ho jayega
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    if (href.startsWith('#')) return;
    e.preventDefault();
    navigate(href, label);
  };

  const isLinkActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Isey update kiya hai taake dropdown click hone par main item active na ho
  const isParentActive = (link) => {
    return isLinkActive(link.href);
  };

  return (
    <>
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute' }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter
            id="nexzell-glass-distortion"
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.04"
              numOctaves="2"
              seed="92"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="1.5" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <header
        className={`headerWrapperNexzellHeaderMain ${
          isScrolled ? 'isScrolledNexzellHeaderMain' : ''
        }`}
      >
        <div className="containerNexzellHeaderMain">
          <div className="logoAreaNexzellHeaderMain">
            <Link href="/" onClick={(e) => handleNav(e, '/', 'Home')}>
              <img
                src="/main_logo.png"
                alt="Nexzell Logo"
                className="logoImgNexzellHeaderMain"
              />
            </Link>
            <div className="brandDividerNexzellHeaderMain"></div>
            <div className="taglineTextNexzellHeaderMain">
              <span>Ecommerce</span>
              <span>Without Limits</span>
            </div>
          </div>

          <nav className="centerNavNexzellHeaderMain">
            <ul className="navListNexzellHeaderMain">
              {navLinks.map((link) => {
                const active = isParentActive(link);
                const hasChildren = Array.isArray(link.children) && link.children.length > 0;
                return (
                  <li
                    key={link.label}
                    className={`navItemNexzellHeaderMain ${
                      hasChildren ? 'hasDropdownNexzellHeaderMain' : ''
                    }`}
                  >
                    <Link
                      href={link.href}
                      className={`navLinkNexzellHeaderMain ${
                        active ? 'activeNavLinkNexzell' : ''
                      }`}
                      onClick={(e) => handleNav(e, link.href, link.label)}
                      aria-haspopup={hasChildren ? 'true' : undefined}
                    >
                      {link.label}
                      {hasChildren && (
                        <ChevronDown
                          size={14}
                          className="navChevronNexzellHeaderMain"
                        />
                      )}
                      <span className="navLinkIndicator"></span>
                    </Link>

                    {hasChildren && (
                      <div className="dropdownWrapNexzellHeaderMain">
                        <ul className="dropdownListNexzellHeaderMain" role="menu">
                          {link.children.map((child) => (
                            <li key={child.label} role="none">
                              <Link
                                href={child.href}
                                role="menuitem"
                                className={`dropdownOptionNexzellHeaderMain ${
                                  isLinkActive(child.href)
                                    ? 'activeDropdownOptionNexzellHeaderMain'
                                    : ''
                                }`}
                                onClick={(e) => handleNav(e, child.href, child.label)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="rightActionsNexzellHeaderMain">
            {/* <button className="searchBtnNexzellHeaderMain hideOnScrollNexzellHeaderMain" aria-label="Search">
              <Search size={20} />
            </button>

            <Link
              href="#login"
              className="loginBtnNexzellHeaderMain hideOnScrollNexzellHeaderMain"
              onClick={(e) => handleNav(e, '/login', 'Login')}
            >
              Login
            </Link> */}

            <button
              className="drawerCtaBtnNexzellHeaderMain"
              onClick={(e) => handleNav(e, '/consultation', 'Book a Free Demo')}
            >
              Book a Free Demo <ArrowRight size={16} />
            </button>
          </div>

          <button
            className="menuBtnNexzellHeaderMain"
            aria-label="Open menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div
        className={`drawerOverlayNexzellHeaderMain ${
          isDrawerOpen ? 'isOpenNexzellHeaderMain' : ''
        }`}
        onClick={closeDrawer}
      ></div>

      <aside
        className={`drawerPanelNexzellHeaderMain ${
          isDrawerOpen ? 'isOpenNexzellHeaderMain' : ''
        }`}
      >
        <div className="drawerHeaderNexzellHeaderMain">
          <img
            src="/main_logo.png"
            alt="Nexzell Logo"
            className="drawerLogoNexzellHeaderMain"
            onClick={(e) => handleNav(e, '/', 'Home')}
          />
          <button
            className="drawerCloseBtnNexzellHeaderMain"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="drawerNavNexzellHeaderMain">
          <ul className="drawerNavListNexzellHeaderMain">
            {navLinks.map((link) => {
              const active = isParentActive(link);
              const hasChildren = Array.isArray(link.children) && link.children.length > 0;
              const isSectionOpen = openDrawerSection === link.label;
              return (
                <li key={link.label} className="drawerNavItemNexzellHeaderMain">
                  <div className="drawerRowNexzellHeaderMain">
                    <Link
                      href={link.href}
                      className={active ? 'activeDrawerNavLinkNexzell' : ''}
                      onClick={(e) => handleNav(e, link.href, link.label)}
                    >
                      <span>{link.label}</span>
                      <span className="drawerActiveBadge"></span>
                    </Link>

                    {hasChildren && (
                      <button
                        type="button"
                        className={`drawerSubToggleNexzellHeaderMain ${
                          isSectionOpen ? 'isOpenNexzellHeaderMain' : ''
                        }`}
                        aria-label={`Toggle ${link.label} menu`}
                        aria-expanded={isSectionOpen}
                        onClick={() => toggleDrawerSection(link.label)}
                      >
                        <ChevronDown size={18} />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <ul
                      className={`drawerSubListNexzellHeaderMain ${
                        isSectionOpen ? 'isOpenNexzellHeaderMain' : ''
                      }`}
                    >
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className={`drawerSubLinkNexzellHeaderMain ${
                              isLinkActive(child.href)
                                ? 'activeDrawerSubLinkNexzellHeaderMain'
                                : ''
                            }`}
                            onClick={(e) => handleNav(e, child.href, child.label)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="drawerFooterNexzellHeaderMain">
          {/* <Link
            href="#login"
            className="drawerLoginBtnNexzellHeaderMain"
            onClick={(e) => handleNav(e, '/login', 'Login')}
          >
            Login
          </Link> */}
          <button
            className="drawerCtaBtnNexzellHeaderMain"
            onClick={(e) => handleNav(e, '/consultation', 'Book a Free Demo')}
          >
            Book a Free Demo <ArrowRight size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}

export default Header;