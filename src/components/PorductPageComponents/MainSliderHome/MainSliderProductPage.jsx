'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './MainSliderProductPage.css';

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

function MainSliderProductPage() {
  // Counters initialize karna
  const businessesCount = useCounter(12000, 2000);
  const countriesCount = useCounter(120, 2000);
  const uptimeCount = useCounter(99.9, 2000, 1);

  return (
    <section className="sectionWrapperMainSliderProductPage">
      
      {/* Background Image right edge tak stretch karne ke liye */}
    
        <div className="bgGradientMainSliderProductPage"></div>
  

      <div className="containerMainSliderProductPage">
        <div className="contentMainSliderProductPage">
          
          <div className="badgeMainSliderProductPage animDelay1">
            <span className="badgeDotMainSliderProductPage"></span>
            ABOUT NEXZELL
          </div>

          <h1 className="headingMainSliderProductPage animDelay2">
            Everything You Need to
            <span className="textHighlightMainSliderProductPage"> Run Ecommerce</span>
          </h1>

          <p className="descriptionMainSliderProductPage animDelay3">
            Nexzell was built with a simple idea — to give businesses 
            everything they need to build, run and grow online, without 
            the complexity of multiple tools and systems.
          </p>

          <div className="btnGroupMainSliderProductPage animDelay4">
            <button className="btnPrimaryMainSliderProductPage">
            Book a Free Demo <ArrowRight size={18} className="btnIconMainSliderProductPage" />
            </button>
            <button className="btnSecondaryMainSliderProductPage">
              <PlayCircle size={20} className="playIconMainSliderProductPage" /> Explore Features
            </button>
          </div>

          <div className="statsListMainSliderProductPage animDelay5">
            <div className="statItemMainSliderProductPage">
              <h3 className="statNumberMainSliderProductPage">
                {Number(businessesCount).toLocaleString()}+
              </h3>
              <p className="statTextMainSliderProductPage">Businesses trust Nexzell</p>
            </div>
            
            <div className="statDividerMainSliderProductPage"></div>
            
            <div className="statItemMainSliderProductPage">
              <h3 className="statNumberMainSliderProductPage">{countriesCount}+</h3>
              <p className="statTextMainSliderProductPage">Countries</p>
            </div>
            
            <div className="statDividerMainSliderProductPage"></div>
            
            <div className="statItemMainSliderProductPage">
              <h3 className="statNumberMainSliderProductPage">{uptimeCount}%</h3>
              <p className="statTextMainSliderProductPage">Platform uptime</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MainSliderProductPage;