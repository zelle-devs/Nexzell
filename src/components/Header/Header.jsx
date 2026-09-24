'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import './Header.css';  

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => { 
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`headerWrapperNexzellHeaderMain ${
        isScrolled ? 'isScrolledNexzellHeaderMain' : ''
      }`}
    >
      <div className="containerNexzellHeaderMain">

        <div className="logoAreaNexzellHeaderMain"> 
          {/* Logo par bhi home page ka link add kar diya hai */}
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
          
          {/* Login ko Next.js Link mein convert kar diya hai */}
          <Link href="/login" className="loginBtnNexzellHeaderMain">
            Login
          </Link>
          
          <button className="ctaBtnNexzellHeaderMain">
            Book a Free Demo <ArrowRight className="arrowIconNexzellHeaderMain" size={16} />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;