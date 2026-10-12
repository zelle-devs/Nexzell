"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './GlobalForEnterpriseBrandsMarque.css'; // Suffix-consistent style link

// Public/assets path list for logo 1 to logo 9
const logosList = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png"
];

export default function GlobalForEnterpriseBrandsMarque() {
  // Doubling the array so there is absolutely no break/gap in the infinite loop marquee scroll
  const marqueeLogos = [...logosList, ...logosList, ...logosList];

  return (
    <section className="sectionWrapperGlobalForEnterpriseBrandsMarque">
      <div className="containerGlobalForEnterpriseBrandsMarque">
        
        {/* --- Top Header Info --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="headerGlobalForEnterpriseBrandsMarque"
        >
          <div className="badgeMainSliderGlobalForEnterprise animDelay1">
            <span className="badgeDotMainSliderGlobalForEnterprise"></span>
         TRUSTED BY GLOBAL ENTERPRISE
          </div>
          <h2 className="headingGlobalForEnterpriseBrandsMarque">
            Powering Leading Brands <span style={{color:'var(--nexzell-primary)'}}>Worldwide.</span> 
          </h2>
          <p className="descriptionGlobalForEnterpriseBrandsMarque">
            From established retailers to emerging global enterprises, businesses trust Nexzell to power their ecommerce growth.
          </p>
        </motion.div>

        {/* --- Auto-scrolling infinite Marque wrapper with fade masks --- */}
        <div className="marqueeWrapperGlobalForEnterpriseBrandsMarque">
          <div className="marqueeFadeOverlayLeftGlobalForEnterpriseBrandsMarque"></div>
          
          <motion.div 
            className="marqueeTrackGlobalForEnterpriseBrandsMarque"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 35, // Adjust speed here
              repeat: Infinity
            }}
          >
            {marqueeLogos.map((logoPath, idx) => (
              <div key={idx} className="marqueeItemGlobalForEnterpriseBrandsMarque">
                <img 
                  src={logoPath} 
                  alt={`Partner Brand Logo ${idx + 1}`} 
                  className="brandLogoImageGlobalForEnterpriseBrandsMarque"
                  onError={(e) => {
                    // Fail-safe fallbacks if assets are missing
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </motion.div>

          <div className="marqueeFadeOverlayRightGlobalForEnterpriseBrandsMarque"></div>
        </div>

      </div>
    </section>
  );
}