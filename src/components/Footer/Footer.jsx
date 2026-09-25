'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const footerLinkGroups = [
  {
    id: 'product',
    heading: 'Product',
    links: ['Features', 'Integrations', 'Pricing', 'Changelog'],
  },
  {
    id: 'solutions',
    heading: 'Solutions',
    links: ['For Startups', 'For Growing Brands', 'For Enterprises', 'Global Commerce'],
  },
  {
    id: 'resources',
    heading: 'Resources',
    links: ['Blog', 'Guides', 'Help Center', 'API Docs'],
  },
  {
    id: 'company',
    heading: 'Company',
    links: ['About Us', 'Careers', 'Contact', 'Partner Program'],
  },
];

function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <footer className="footerWrapperNexzellMainFooter">
      <div className="containerNexzellMainFooter">
        <div className="brandColNexzellMainFooter">
          <img
            src="./main_logo.png"
            alt="Nexzell"
            className="logoNexzellMainFooter"
          />
          <p className="taglineNexzellMainFooter">Ecommerce Without Limits</p>
          <div className="socialsNexzellMainFooter">
            <a href="#" className="socialLinkNexzellMainFooter">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="socialLinkNexzellMainFooter">
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
                  <li className="linkItemNexzellMainFooter" key={link}>
                    <a
                      href={link === 'Contact' ? '/contact-us' : '#'}
                      className="linkNexzellMainFooter"
                    >
                      {link}
                    </a>
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