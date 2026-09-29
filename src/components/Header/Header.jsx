'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Menu, X } from 'lucide-react';
import './Header.css';
import { usePageTransition } from '@/app/TransitionContext';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { navigate } = usePageTransition();

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

  const closeDrawer = () => setIsDrawerOpen(false);

  // One handler for every link: closes the drawer, then runs the transition
  const handleNav = (e, href, label) => {
    closeDrawer();
    // Hash links (#pricing) are in-page scrolls, so let the browser handle them
    if (href.startsWith('#')) return;
    e.preventDefault();
    navigate(href, label);
  };

  const navLinks = [
    { href: '/product', label: 'Product' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/resources', label: 'Resources' },
    { href: '/about-us', label: 'About' },
  ];

  return (
    <>
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
              {navLinks.map((link) => (
                <li key={link.label} className="navItemNexzellHeaderMain">
                  <Link
                    href={link.href}
                    className="navLinkNexzellHeaderMain"
                    onClick={(e) => handleNav(e, link.href, link.label)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rightActionsNexzellHeaderMain">
            <button className="searchBtnNexzellHeaderMain hideOnScrollNexzellHeaderMain" aria-label="Search">
              <Search size={20} />
            </button>

            <Link
              href="#login"
              className="loginBtnNexzellHeaderMain hideOnScrollNexzellHeaderMain"
              onClick={(e) => handleNav(e, '/login', 'Login')}
            >
              Login
            </Link>

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
            {navLinks.map((link) => (
              <li key={link.label} className="drawerNavItemNexzellHeaderMain">
                <Link
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href, link.label)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawerFooterNexzellHeaderMain">
          <Link
            href="#login"
            className="drawerLoginBtnNexzellHeaderMain"
            onClick={(e) => handleNav(e, '/login', 'Login')}
          >
            Login
          </Link>
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