'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUp, CircleFadingArrowUp, PlayCircle, Rocket, RocketIcon, Users } from 'lucide-react';
import './MainSliderGlobalForEnterprise.css';

// Number counter animation ke liye custom hook
const useCounter = (end, duration = 2000, decimals = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // 16ms is roughly 60fps
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return Number(count).toFixed(decimals);
};

const FlagSVG = ({ code }) => {
  const stripes = Array.from({ length: 13 }, (_, i) => i);
  return (
    <span className="flagWrapMainSliderGlobalForEnterprise">
      <svg viewBox="0 0 60 40" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {code === 'US' && (
          <>
            <rect width="60" height="40" fill="#fff" />
            {stripes.filter(i => i % 2 === 0).map(i => (
              <rect key={i} y={i * (40 / 13)} width="60" height={40 / 13} fill="#D22F3E" />
            ))}
            <rect width="26" height={7 * (40 / 13)} fill="#2B3A7E" />
            {[4, 10, 16, 22].map(x => [3, 8, 13, 18].map(y => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1" fill="#fff" />
            )))}
          </>
        )}
        {code === 'CA' && (
          <>
            <rect width="60" height="40" fill="#fff" />
            <rect width="15" height="40" fill="#E8353E" />
            <rect x="45" width="15" height="40" fill="#E8353E" />
            <polygon
              fill="#E8353E"
              points="30,8 33,15 38,13 36,21 40,22 34,27 35,32 31,31 31,36 29,36 29,31 25,32 26,27 20,22 24,21 22,13 27,15"
            />
          </>
        )}
        {code === 'UK' && (
          <>
            <rect width="60" height="40" fill="#1B2F7B" />
            <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
            <path d="M0,0 L60,40 M60,0 L0,40" stroke="#D22F3E" strokeWidth="3" />
            <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
            <path d="M30,0 V40 M0,20 H60" stroke="#D22F3E" strokeWidth="7" />
          </>
        )}
        {code === 'AE' && (
          <>
            <rect width="60" height="40" fill="#fff" />
            <rect width="60" height="13.4" fill="#00732F" />
            <rect y="26.6" width="60" height="13.4" fill="#000" />
            <rect width="16" height="40" fill="#E8232F" />
          </>
        )}
        {code === 'AU' && (
          <>
            <rect width="60" height="40" fill="#1B2F7B" />
            <rect width="30" height="20" fill="#1B2F7B" />
            <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" strokeWidth="4" />
            <path d="M15,0 V20 M0,10 H30" stroke="#fff" strokeWidth="6" />
            <path d="M15,0 V20 M0,10 H30" stroke="#D22F3E" strokeWidth="3.5" />
            {[[15, 32], [42, 8], [50, 18], [42, 30], [34, 19]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2.2" fill="#fff" />
            ))}
          </>
        )}
      </svg>
    </span>
  );
};

// ---------- Cards data ----------
const revenueBars = [32, 46, 58, 78, 100]; // bar heights in %
const activeMarkets = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'UK', name: 'United Kingdom' },
  { code: 'AE', name: 'UAE' },
  { code: 'AU', name: 'Australia' },
];

function MainSliderGlobalForEnterprise() {
  // Counters initialize karna
  const businessesCount = useCounter(1000, 2000);
  const countriesCount = useCounter('Global', 2000);
  const uptimeCount = useCounter(99, 2000, 1);
  const revenueCount = useCounter(12.8, 2200, 1);
  const growthCount = useCounter(28, 2200, 0);
  return (
    <section className="sectionWrapperMainSliderGlobalForEnterprise">

      {/* Background Image right edge tak stretch karne ke liye */}

      <div className="bgGradientMainSliderGlobalForEnterprise"></div>


      <div className="containerMainSliderGlobalForEnterprise">
        <div className="contentMainSliderGlobalForEnterprise">

          <div className="badgeMainSliderGlobalForEnterprise animDelay1">
            <span className="badgeDotMainSliderGlobalForEnterprise"></span>
            FOR ENTERPRISE
          </div>

          <h1 className="headingMainSliderGlobalForEnterprise animDelay2">
            Enterprise Commerce <br /> Built  For
            <span className="textHighlightMainSliderGlobalForEnterprise"> What's Next</span>
          </h1>

          <p className="descriptionMainSliderGlobalForEnterprise animDelay3">
            Power your global operations with a secure, scalable and high-performance ecommerce platform. Designed for complex businesses, multiple brands and international markets.
          </p>

          <div className="btnGroupMainSliderGlobalForEnterprise animDelay4">

            <a href="/consultation"><button className="btnPrimaryMainSliderGlobalForEnterprise">
              Book a Free Demo <ArrowRight size={18} className="btnIconMainSliderGlobalForEnterprise" />
            </button></a>
            <a href="/contact">
              <button className="btnSecondaryMainSliderGlobalForEnterprise">
                Talk to Our Expert
              </button></a>
          </div>

          <div className="statsListMainSliderGlobalForEnterprise animDelay5">

            <div className='DivRowMainSliderIconsMainSliderGlobalForEnterprise'>
              <div>
                <RocketIcon className='iconMobileClassMainSliderGlobalForEnterprise' size={34} color='var(--nexzell-primary)' />
              </div>
              <div className="statItemMainSliderGlobalForEnterprise">
                <h3 className="statNumberMainSliderGlobalForEnterprise">
                  {Number(businessesCount).toLocaleString()}+
                </h3>
                <p className="statTextMainSliderGlobalForEnterprise">Business Enterprise</p>
              </div>
            </div>


            <div className="statDividerMainSliderGlobalForEnterprise"></div>

            <div className='DivRowMainSliderIconsMainSliderGlobalForEnterprise'>
              <div>
                <Users className='iconMobileClassMainSliderGlobalForEnterprise' size={34} color='var(--nexzell-primary)' />
              </div>
              <div className="statItemMainSliderGlobalForEnterprise">
                <h3 className="statNumberMainSliderGlobalForEnterprise">{uptimeCount}%</h3>
                <p className="statTextMainSliderGlobalForEnterprise">Platform Uptime</p>
              </div>
            </div>



            <div className="statDividerMainSliderGlobalForEnterprise"></div>

            <div className='DivRowMainSliderIconsMainSliderGlobalForEnterprise'>
              <div>
                <CircleFadingArrowUp className='iconMobileClassMainSliderGlobalForEnterprise' size={34} color='var(--nexzell-primary)' />
              </div>
              <div className="statItemMainSliderGlobalForEnterprise">
                <h3 className="statNumberMainSliderGlobalForEnterprise">Global</h3>
                <p className="statTextMainSliderGlobalForEnterprise">Multi Currency & Region </p>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="cardsLayerMainSliderGlobalForEnterprise">
       <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <filter id="liquidGlassMainSlider" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="3" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="3" result="softNoise" />
            <feDisplacementMap in="SourceGraphic" in2="softNoise" scale="45" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        {/* Card 1: Global Revenue */}
        <div className="glassCardMainSliderGlobalForEnterprise revenueCardMainSliderGlobalForEnterprise">
          <p className="cardLabelMainSliderGlobalForEnterprise">Global Revenue</p>
          <div className="revenueRowMainSliderGlobalForEnterprise">
            <div>
              <h4 className="revenueValueMainSliderGlobalForEnterprise">${revenueCount}M</h4>
              <span className="revenueGrowthMainSliderGlobalForEnterprise">
                <ArrowUp size={12} strokeWidth={3} /> {growthCount}%
              </span>
            </div>
            <div className="barsMainSliderGlobalForEnterprise">
              {revenueBars.map((h, i) => (
                <span
                  key={i}
                  className="barMainSliderGlobalForEnterprise"
                  style={{ height: `${h}%`, animationDelay: `${1.0 + i * 0.12}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Active Markets */}
        <div className="glassCardMainSliderGlobalForEnterprise marketsCardMainSliderGlobalForEnterprise">
          <p className="cardTitleMainSliderGlobalForEnterprise">Active Markets</p>
          <ul className="marketListMainSliderGlobalForEnterprise">
            {activeMarkets.map((m, i) => (
              <li
                key={m.code}
                className="marketItemMainSliderGlobalForEnterprise"
                style={{ animationDelay: `${1.0 + i * 0.12}s` }}
              >
                <FlagSVG code={m.code} />
                <span>{m.name}</span>
              </li>
            ))}
          </ul>
          <a href="/contact" className="marketMoreMainSliderGlobalForEnterprise">
            <ArrowRight size={12} /> More
          </a>
        </div>

      </div>
    </section>
  );
}

export default MainSliderGlobalForEnterprise;