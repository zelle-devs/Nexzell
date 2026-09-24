'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './MainSliderAbout.css';

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

function MainSliderAbout() {
  // Counters initialize karna
  const businessesCount = useCounter(12000, 2000);
  const countriesCount = useCounter(120, 2000);
  const uptimeCount = useCounter(99.9, 2000, 1);

  return (
    <section className="sectionWrapperMainSliderAbout">
      
      {/* Background Image right edge tak stretch karne ke liye */}
      <div className="bgImageWrapperMainSliderAbout">
        {/* <img 
          src="/AboutSliderMainImage2.jpg" 
          alt="Nexzell Office Setup" 
          className="bgImageMainSliderAbout" 
        /> */}
        <div className="bgGradientMainSliderAbout"></div>
      </div>

      <div className="containerMainSliderAbout">
        <div className="contentMainSliderAbout">
          
          <div className="badgeMainSliderAbout animDelay1">
            <span className="badgeDotMainSliderAbout"></span>
            ABOUT NEXZELL
          </div>

          <h1 className="headingMainSliderAbout animDelay2">
            Ecommerce 
            Shouldn't Be 
            <span className="textHighlightMainSliderAbout"> Complicated.</span>
          </h1>

          <p className="descriptionMainSliderAbout animDelay3">
            Nexzell was built with a simple idea — to give businesses 
            everything they need to build, run and grow online, without 
            the complexity of multiple tools and systems.
          </p>

          <div className="btnGroupMainSliderAbout animDelay4">
            <button className="btnPrimaryMainSliderAbout">
              See What We Do <ArrowRight size={18} className="btnIconMainSliderAbout" />
            </button>
            <button className="btnSecondaryMainSliderAbout">
              <PlayCircle size={20} className="playIconMainSliderAbout" /> Watch Our Story
            </button>
          </div>

          <div className="statsListMainSliderAbout animDelay5">
            <div className="statItemMainSliderAbout">
              <h3 className="statNumberMainSliderAbout">
                {Number(businessesCount).toLocaleString()}+
              </h3>
              <p className="statTextMainSliderAbout">Businesses trust Nexzell</p>
            </div>
            
            <div className="statDividerMainSliderAbout"></div>
            
            <div className="statItemMainSliderAbout">
              <h3 className="statNumberMainSliderAbout">{countriesCount}+</h3>
              <p className="statTextMainSliderAbout">Countries</p>
            </div>
            
            <div className="statDividerMainSliderAbout"></div>
            
            <div className="statItemMainSliderAbout">
              <h3 className="statNumberMainSliderAbout">{uptimeCount}%</h3>
              <p className="statTextMainSliderAbout">Platform uptime</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MainSliderAbout;