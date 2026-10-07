'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { usePageTransition } from '@/app/TransitionContext';

const footerLinkGroups = [
  {
    id: 'product',
    heading: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Pricing', href: '/pricing' }, 
    ],
  },
  {
    id: 'solutions',
    heading: 'Solutions',
    links: [
      { label: 'For Startups', href: '/solutions' },
      { label: 'For Growing Brands', href: '/solutions' },
      { label: 'For Enterprises', href: '/solutions' },
      { label: 'Global Commerce', href: '/solutions' },
    ],
  },
  {
    id: 'resources',
    heading: 'Resources',
    links: [
      { label: 'Blogs', href: '/blogs' },
      { label: 'Case Studies', href: '/case-studies' },  
    ],
  },
  {
    id: 'company',
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' }, 
      { label: 'Contact', href: '/contact-us' }, 
    ],
  },
];

function Footer() {
  const [openSections, setOpenSections] = useState({});
  const { navigate } = usePageTransition();

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Same logic as Header: '#' links behave normally, real routes run the page transition
  const handleNav = (e, href, label) => {
    if (href.startsWith('#')) return;
    e.preventDefault();
    navigate(href, label);
  };

  return (
    <footer className="footerWrapperNexzellMainFooter">
      <div className="containerNexzellMainFooter">
        <div className="brandColNexzellMainFooter">
          <Link href="/" onClick={(e) => handleNav(e, '/', 'Home')}>
            <img
              src="/main_logo.png"
              alt="Nexzell"
              className="logoNexzellMainFooter"
            />
          </Link>
          <p className="taglineNexzellMainFooter">Ecommerce Without Limits</p>
          <div className="socialsNexzellMainFooter">
            <a href="#" className="socialLinkNexzellMainFooter" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter" aria-label="Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter" aria-label="YouTube">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div className="linksColGroupNexzellMainFooter">
          {footerLinkGroups.map((group) => (
            <div className="linkColNexzellMainFooter" key={group.id}>
              <button
                type="button"
                className={`colHeadingNexzellMainFooter ${
                  openSections[group.id] ? 'isOpenNexzellMainFooter' : ''
                }`}
                onClick={() => toggleSection(group.id)}
              >
                {group.heading}
                <ChevronDown
                  size={16}
                  className="colHeadingIconNexzellMainFooter"
                />
              </button>

              <ul
                className={`linkListNexzellMainFooter ${
                  openSections[group.id] ? 'isOpenNexzellMainFooter' : ''
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
          ))}
        </div>
      </div>

      <div className="bottomBarNexzellMainFooter">
        <p className="copyrightNexzellMainFooter">
          © {new Date().getFullYear()} Nexzell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;