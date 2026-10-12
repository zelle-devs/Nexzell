'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './WorldWideOppGlobalCommerce.css';

export default function WorldWideOppGlobalCommerce() {
 const useCountUp = (end, active, decimals = 0, duration = 1800, delay = 0) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    let startTime;
    const timer = setTimeout(() => {
      const tick = (now) => {
        if (!startTime) startTime = now;
        const p = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(end * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [active, end, duration, delay]);

  return value.toFixed(decimals);
};

const FlagSVG = ({ code }) => (
  <span className="flagWrapWorldWideOppGlobalCommerce">
    <svg viewBox="0 0 40 40" aria-hidden="true">
      {code === 'CA' && (
        <>
          <rect width="40" height="40" fill="#fff" />
          <rect width="9.5" height="40" fill="#E8353E" />
          <rect x="30.5" width="9.5" height="40" fill="#E8353E" />
          <polygon
            fill="#E8353E"
            points="20,8 23,15 28,13 26,21 30,22 24,27 25,32 21,31 21,36 19,36 19,31 15,32 16,27 10,22 14,21 12,13 17,15"
          />
        </>
      )}

      {code === 'AU' && (
        <>
          <rect width="40" height="40" fill="#1B2F7B" />
          <rect width="20" height="20" fill="#1B2F7B" />
          <path d="M0,0 L20,20 M20,0 L0,20" stroke="#fff" strokeWidth="3.2" />
          <path d="M0,0 L20,20 M20,0 L0,20" stroke="#D22F3E" strokeWidth="1.4" />
          <path d="M10,0 V20 M0,10 H20" stroke="#fff" strokeWidth="5" />
          <path d="M10,0 V20 M0,10 H20" stroke="#D22F3E" strokeWidth="3" />
          {[[10, 32], [29, 7], [35, 17], [29, 29], [23, 18]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="#fff" />
          ))}
        </>
      )}

      {code === 'EU' && (
        <>
          <rect width="40" height="40" fill="#1B2F7B" />
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            return (
              <circle
                key={i}
                cx={20 + 11 * Math.cos(a)}
                cy={20 + 11 * Math.sin(a)}
                r="1.5"
                fill="#FFD83D"
              />
            );
          })}
        </>
      )}

      {code === 'AE' && (
        <>
          <rect width="40" height="40" fill="#fff" />
          <rect width="40" height="13.4" fill="#00732F" />
          <rect y="26.6" width="40" height="13.4" fill="#000" />
          <rect width="10" height="40" fill="#E8232F" />
        </>
      )}

      {code === 'SG' && (
        <>
          <rect width="40" height="20" fill="#E8353E" />
          <rect y="20" width="40" height="20" fill="#fff" />
          <circle cx="12" cy="10" r="6.5" fill="#fff" />
          <circle cx="14.5" cy="10" r="6" fill="#E8353E" />
          {[[25, 5.8], [29, 8.7], [27.5, 13.4], [22.5, 13.4], [21, 8.7]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.2" fill="#fff" />
          ))}
        </>
      )}
    </svg>
  </span>
);
 
const marketCards = [
  { region: 'North America', value: 4.2, growth: 38, flag: 'CA', posClass: 'cardPosNAWorldWideOppGlobalCommerce' },
  { region: 'Europe',        value: 3.1, growth: 24, flag: 'AU', posClass: 'cardPosEUWorldWideOppGlobalCommerce' },
  { region: 'Middle East',   value: 2.8, growth: 28, flag: 'AE', posClass: 'cardPosMEWorldWideOppGlobalCommerce' },
  { region: 'Asia Pacific',  value: 1.9, growth: 18, flag: 'SG', posClass: 'cardPosAPWorldWideOppGlobalCommerce' },
];

const cardsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const MarketCard = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const delay = 500 + index * 200;
  const value = useCountUp(item.value, inView, 1, 1800, delay);
  const growth = useCountUp(item.growth, inView, 0, 1800, delay);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className={`cardPosWrapWorldWideOppGlobalCommerce ${item.posClass}`}
    >
      <div
        className="cardFloatWorldWideOppGlobalCommerce"
        style={{ animationDelay: `${index * 0.7}s`, animationDuration: `${6 + index * 0.6}s` }}
      >
        <div className="glassCardWorldWideOppGlobalCommerce">
          <FlagSVG code={item.flag} />
          <div className="cardTextWorldWideOppGlobalCommerce">
            <p className="cardRegionWorldWideOppGlobalCommerce">{item.region}</p>
            <h4 className="cardValueWorldWideOppGlobalCommerce">${value}M</h4>
            <span className="cardGrowthWorldWideOppGlobalCommerce">
              <ArrowUp size={12} strokeWidth={3} /> {growth}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const statsList = [
    { value: "3.5x", label: "Average Revenue\nGrowth" },
    { value: "60%", label: "Lower Operational\nCosts" },
    { value: "120+", label: "New Markets" }
  ];

  return (
    <section className="sectionWrapperWorldWideOppGlobalCommerce">
      {/* Background Image Layer (Set in CSS) */}
      <div className="bgLayerWorldWideOppGlobalCommerce"></div>
      
      <div className="containerWorldWideOppGlobalCommerce">
        
        {/* --- Left Column: Content & Stats --- */}
        <motion.div 
          className="leftColWorldWideOppGlobalCommerce"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="badgeMainSliderGlobalCommerce animDelay1" style={{width:'fit-content'}}>
            <span className="badgeDotMainSliderGlobalCommerce" ></span>
          REACH NEW MARKETS
          </div>
          
          <motion.h2 variants={itemFadeUp} className="headingWorldWideOppGlobalCommerce">
            One Platform. <br />
            Worldwide Opportunities.
          </motion.h2>
          
          <motion.p variants={itemFadeUp} className="descWorldWideOppGlobalCommerce">
            Expand your brand to 120+ countries with localized pricing, currencies, languages and shipping options. Nexzell helps you enter new markets faster and with confidence.
          </motion.p>

          <motion.div variants={containerVariants} className="statsRowWorldWideOppGlobalCommerce">
            {statsList.map((stat, idx) => (
              <motion.div key={idx} variants={itemFadeUp} className="statItemWorldWideOppGlobalCommerce">
                <div className="statValueWorldWideOppGlobalCommerce">{stat.value}</div>
                <div className="statLabelWorldWideOppGlobalCommerce">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

         <motion.div
          className="rightColWorldWideOppGlobalCommerce"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Liquid glass distortion filter (hidden) */}
          <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
            <filter id="liquidGlassWorldWide" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="3" result="noise" />
              <feGaussianBlur in="noise" stdDeviation="3" result="softNoise" />
              <feDisplacementMap in="SourceGraphic" in2="softNoise" scale="45" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>

          {marketCards.map((item, i) => (
            <MarketCard key={item.region} item={item} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}