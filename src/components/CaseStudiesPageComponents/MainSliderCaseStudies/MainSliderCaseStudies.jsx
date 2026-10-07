'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './MainSliderCaseStudies.css';

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

function MainSliderCaseStudies() {
  // Counters initialize karna
  const businessesCount = useCounter(500, 2000);
  const countriesCount = useCounter(12, 500);
  const uptimeCount = useCounter(99.9, 2000, 1);

  return (
    <section className="sectionWrapperMainSliderCaseStudies">
      
      {/* Background Image right edge tak stretch karne ke liye */}
      
        <div className="bgGradientMainSliderCaseStudies"></div>
     

      <div className="containerMainSliderCaseStudies">
        <div className="contentMainSliderCaseStudies">
          
          <div className="badgeMainSliderCaseStudies animDelay1">
            <span className="badgeDotMainSliderCaseStudies"></span>
            CASE STUDIES NEXZELL
          </div>

          <h1 className="headingMainSliderCaseStudies animDelay2">
            Real Business <br/>
            <span className="textHighlightMainSliderCaseStudies"> Measurable Results</span>
          </h1>

          <p className="descriptionMainSliderCaseStudies animDelay3">
           Discover how we've helped brand like yours grow through the custom web developments, and digital marketing solutions, Real Project, Real Impact
          </p>

          {/* <div className="btnGroupMainSliderCaseStudies animDelay4">
            <button className="btnPrimaryMainSliderCaseStudies">
              See What We Do <ArrowRight size={18} className="btnIconMainSliderCaseStudies" />
            </button>
            <button className="btnSecondaryMainSliderCaseStudies">
              <PlayCircle size={20} className="playIconMainSliderCaseStudies" /> Watch Our Story
            </button>
          </div> */}

          <div className="statsListMainSliderCaseStudies animDelay5">
            <div className="statItemMainSliderCaseStudies">
              <h3 className="statNumberMainSliderCaseStudies">
                {Number(businessesCount).toLocaleString()}+
              </h3>
              <p className="statTextMainSliderCaseStudies">Businesses trust Nexzell</p>
            </div>
            
            <div className="statDividerMainSliderCaseStudies"></div>
            
            <div className="statItemMainSliderCaseStudies">
              <h3 className="statNumberMainSliderCaseStudies">{countriesCount}+</h3>
              <p className="statTextMainSliderCaseStudies">Countries</p>
            </div>
            
            <div className="statDividerMainSliderCaseStudies"></div>
            
            <div className="statItemMainSliderCaseStudies">
              <h3 className="statNumberMainSliderCaseStudies">{uptimeCount}%</h3>
              <p className="statTextMainSliderCaseStudies">Platform uptime</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MainSliderCaseStudies;