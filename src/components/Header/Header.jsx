'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header
        className={`headerWrapperNexzellHeaderMain ${
          isScrolled ? 'isScrolledNexzellHeaderMain' : ''
        }`}
      >
        <div className="containerNexzellHeaderMain">

          <div className="logoAreaNexzellHeaderMain">
            <Link href="/">
              <img
                src="./main_logo.png"
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
              <li className="navItemNexzellHeaderMain">
                <Link href="/product" className="navLinkNexzellHeaderMain">
                  Product <ChevronDown className="chevronIconNexzellHeaderMain" size={16} />
                </Link>
              </li>
              <li className="navItemNexzellHeaderMain">
                <Link href="/solutions" className="navLinkNexzellHeaderMain">
                  Solutions <ChevronDown className="chevronIconNexzellHeaderMain" size={16} />
                </Link>
              </li>
              <li className="navItemNexzellHeaderMain">
                <Link href="/pricing" className="navLinkNexzellHeaderMain">
                  Pricing
                </Link>
              </li>
              <li className="navItemNexzellHeaderMain">
                <Link href="/resources" className="navLinkNexzellHeaderMain">
                  Resources <ChevronDown className="chevronIconNexzellHeaderMain" size={16} />
                </Link>
              </li>
              <li className="navItemNexzellHeaderMain">
                <Link href="/about-us" className="navLinkNexzellHeaderMain">
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className="rightActionsNexzellHeaderMain">
            <button className="searchBtnNexzellHeaderMain" aria-label="Search">
              <Search size={20} />
            </button>

            <Link href="/login" className="loginBtnNexzellHeaderMain">
              Login
            </Link>

            <button className="ctaBtnNexzellHeaderMain">
              Book a Free Demo <ArrowRight className="arrowIconNexzellHeaderMain" size={16} />
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
            src="./main_logo.png"
            alt="Nexzell Logo"
            className="drawerLogoNexzellHeaderMain"
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
            <li className="drawerNavItemNexzellHeaderMain">
              <Link href="/product" onClick={closeDrawer}>
                Product <ChevronDown size={16} />
              </Link>
            </li>
            <li className="drawerNavItemNexzellHeaderMain">
              <Link href="/solutions" onClick={closeDrawer}>
                Solutions <ChevronDown size={16} />
              </Link>
            </li>
            <li className="drawerNavItemNexzellHeaderMain">
              <Link href="/pricing" onClick={closeDrawer}>
                Pricing
              </Link>
            </li>
            <li className="drawerNavItemNexzellHeaderMain">
              <Link href="/resources" onClick={closeDrawer}>
                Resources <ChevronDown size={16} />
              </Link>
            </li>
            <li className="drawerNavItemNexzellHeaderMain">
              <Link href="/about-us" onClick={closeDrawer}>
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="drawerFooterNexzellHeaderMain">
          <Link href="/login" className="drawerLoginBtnNexzellHeaderMain" onClick={closeDrawer}>
            Login
          </Link>
          <button className="drawerCtaBtnNexzellHeaderMain" onClick={closeDrawer}>
            Book a Free Demo <ArrowRight size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}

export default Header;