import React from 'react';
import {  Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
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
          <div className="linkColNexzellMainFooter">
            <h4 className="colHeadingNexzellMainFooter">Product</h4>
            <ul className="linkListNexzellMainFooter">
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Features</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Integrations</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Pricing</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Changelog</a>
              </li>
            </ul>
          </div>

          <div className="linkColNexzellMainFooter">
            <h4 className="colHeadingNexzellMainFooter">Solutions</h4>
            <ul className="linkListNexzellMainFooter">
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">For Startups</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">For Growing Brands</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">For Enterprises</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Global Commerce</a>
              </li>
            </ul>
          </div>

          <div className="linkColNexzellMainFooter">
            <h4 className="colHeadingNexzellMainFooter">Resources</h4>
            <ul className="linkListNexzellMainFooter">
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Blog</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Guides</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Help Center</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">API Docs</a>
              </li>
            </ul>
          </div>

          <div className="linkColNexzellMainFooter">
            <h4 className="colHeadingNexzellMainFooter">Company</h4>
            <ul className="linkListNexzellMainFooter">
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">About Us</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Careers</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Contact</a>
              </li>
              <li className="linkItemNexzellMainFooter">
                <a href="#" className="linkNexzellMainFooter">Partner Program</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;