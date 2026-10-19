'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './MainSliderFeatures.css';

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

function MainSliderFeatures() {
  // Counters initialize karna
  const businessesCount = useCounter(500, 2000);
  const countriesCount = useCounter(12, 500);
  const uptimeCount = useCounter(99.9, 2000, 1);

  return (
    <section className="sectionWrapperMainSliderFeatures">
      
      {/* Background Image right edge tak stretch karne ke liye */}
      
        <div className="bgGradientMainSliderFeatures"></div>
     

      <div className="containerMainSliderFeatures">
        <div className="contentMainSliderFeatures">
          
          <div className="badgeMainSliderFeatures animDelay1">
            <span className="badgeDotMainSliderFeatures"></span>
            OUR FEATURES
          </div>

          <h1 className="headingMainSliderFeatures animDelay2">
            Powerful Features 
            For 
            <span className="textHighlightMainSliderFeatures"> Modern  Commerce</span>
          </h1>

          <p className="descriptionMainSliderFeatures animDelay3">
            Everything you need to build, manage and grow your ecommerce business-all in one powerful platform. Explore Nextel's features designed to simplify operations and accelerate your growth.
          </p>

          <div className="btnGroupMainSliderFeatures animDelay4">
           
           <a href="/consultation"> <button className="btnPrimaryMainSliderFeatures">
             Book a Freee Demo <ArrowRight size={18} className="btnIconMainSliderFeatures" />
            </button></a>
            {/* <button className="btnSecondaryMainSliderFeatures">
              Explore All Features
            </button> */}
          </div>

          {/* <div className="statsListMainSliderFeatures animDelay5">
            <div className="statItemMainSliderFeatures">
              <h3 className="statNumberMainSliderFeatures">
                {Number(businessesCount).toLocaleString()}+
              </h3>
              <p className="statTextMainSliderFeatures">Businesses trust Nexzell</p>
            </div>
            
            <div className="statDividerMainSliderFeatures"></div>
            
            <div className="statItemMainSliderFeatures">
              <h3 className="statNumberMainSliderFeatures">{countriesCount}+</h3>
              <p className="statTextMainSliderFeatures">Countries</p>
            </div>
            
            <div className="statDividerMainSliderFeatures"></div>
            
            <div className="statItemMainSliderFeatures">
              <h3 className="statNumberMainSliderFeatures">{uptimeCount}%</h3>
              <p className="statTextMainSliderFeatures">Platform uptime</p>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default MainSliderFeatures;