'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowUp } from 'lucide-react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { usePageTransition } from '@/app/TransitionContext';
import { footerLinkGroups } from '@/app/navData'; // shared with Header

function Footer() {
  const [openSectionId, setOpenSectionId] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef(null);
  const { navigate } = usePageTransition();

  // Plays the entrance animation once, when the footer scrolls into view
  useEffect(() => {
    const node = footerRef.current;
    if (!node) return;

    // Fallback for very old browsers without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // AFTER
  const toggleSection = (id) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  // Same logic as Header: '#' links behave normally, real routes run the page transition
  const handleNav = (e, href, label) => {
    if (href.startsWith('#')) return;
    e.preventDefault();
    navigate(href, label);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className={`footerWrapperNexzellMainFooter ${isInView ? 'isInViewNexzellMainFooter' : ''
        }`}
    >
      {/* ---------- Decorative background layers (non-interactive) ---------- */}
      <div className="bgLayersNexzellMainFooter" aria-hidden="true">
        <div className="glowNexzellMainFooter" />

        <div className="bgImageWrapNexzellMainFooter">
          <img
            src="/main_logoFav.png"
            alt=""
            className="bgImageNexzellMainFooter"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </div>

        <div className="gridNexzellMainFooter" />
        <div className="overlayNexzellMainFooter" />
        <span className="topLineNexzellMainFooter" />
      </div>

      {/* ---------- Main content ---------- */}
      <div className="containerNexzellMainFooter">
        <div
          className="brandColNexzellMainFooter revealNexzellMainFooter"
          style={{ '--delay': '0.1s' }}
        >
          <div className='MainFooterLogoMainDivNexzellMain'>
            <Link href="/" onClick={(e) => handleNav(e, '/', 'Home')}>
              <img
                src="/main_logo.png"
                alt="Nexzell"
                className="logoNexzellMainFooter"
              />
            </Link>
            <p className="taglineNexzellMainFooter">Ecommerce Without Limits</p>
          </div>

          <div className="socialsNexzellMainFooter">
            <a href="#" className="socialLinkNexzellMainFooter" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            {/* <a href="#" className="socialLinkNexzellMainFooter" aria-label="Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter" aria-label="YouTube">
              <FaYoutube size={18} />
            </a> */}
          </div>
        </div>

        <div className="linksColGroupNexzellMainFooter">
          {footerLinkGroups.map((group, index) => {
            const isOpen = openSectionId === group.id;

            return (
              <div
                className="linkColNexzellMainFooter revealNexzellMainFooter"
                key={group.id}
                style={{ '--delay': `${0.2 + index * 0.1}s` }}
              >
                <button
                  type="button"
                  className={`colHeadingNexzellMainFooter ${isOpen ? 'isOpenNexzellMainFooter' : ''
                    }`}
                  onClick={() => toggleSection(group.id)}
                  aria-expanded={isOpen}
                >
                  {group.heading}
                  <ChevronDown
                    size={16}
                    className="colHeadingIconNexzellMainFooter"
                  />
                </button>

                <ul
                  className={`linkListNexzellMainFooter ${isOpen ? 'isOpenNexzellMainFooter' : ''
                    }`}
                >
                  {group.links.map((link) => (
                    <li className="linkItemNexzellMainFooter" key={link.label}>
                      <Link
                        href={link.href}
                        className="linkNexzellMainFooter"
                        onClick={(e) => handleNav(e, link.href, link.label)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="bottomBarNexzellMainFooter">
        <div className="bottomInnerNexzellMainFooter">
          <p className="copyrightNexzellMainFooter">
            © {new Date().getFullYear()} Nexzell. All rights reserved.
          </p>
          <button
            type="button"
            className="backToTopNexzellMainFooter"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;