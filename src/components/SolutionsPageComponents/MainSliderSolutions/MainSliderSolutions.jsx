'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './MainSliderSolutions.css';

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

function MainSliderSolutions() {
  // Counters initialize karna
  const businessesCount = useCounter(12000, 2000);
  const countriesCount = useCounter(120, 2000);
  const uptimeCount = useCounter(99.9, 2000, 1);

  return (
    <section className="sectionWrapperMainSliderSolutions">
      
      {/* Background Image right edge tak stretch karne ke liye */}
       
      
        <div className="bgGradientMainSliderSolutions"></div>
    

      <div className="containerMainSliderSolutions">
        <div className="contentMainSliderSolutions">
          
          <div className="badgeMainSliderSolutions animDelay1">
            <span className="badgeDotMainSliderSolutions"></span>
            SOLUTIONS
          </div>

          <h1 className="headingMainSliderSolutions animDelay2">
           Built For Every Stage of Your
            <span className="textHighlightMainSliderSolutions">  Ecommerce </span>
             Journey
          </h1>

          <p className="descriptionMainSliderSolutions animDelay3">
            No matter where you are in your journey, Nexzell gives you the right tool to launch, Manage and grow from your first product of global expansion
          </p>

          <div className="btnGroupMainSliderSolutions animDelay4">
            <button className="btnPrimaryMainSliderSolutions">
              Find Your Solution <ArrowRight size={18} className="btnIconMainSliderSolutions" />
            </button>
          </div>

          {/* <div className="statsListMainSliderSolutions animDelay5">
            <div className="statItemMainSliderSolutions">
              <h3 className="statNumberMainSliderSolutions">
                {Number(businessesCount).toLocaleString()}+
              </h3>
              <p className="statTextMainSliderSolutions">Businesses trust Nexzell</p>
            </div>
            
            <div className="statDividerMainSliderSolutions"></div>
            
            <div className="statItemMainSliderSolutions">
              <h3 className="statNumberMainSliderSolutions">{countriesCount}+</h3>
              <p className="statTextMainSliderSolutions">Countries</p>
            </div>
            
            <div className="statDividerMainSliderSolutions"></div>
            
            <div className="statItemMainSliderSolutions">
              <h3 className="statNumberMainSliderSolutions">{uptimeCount}%</h3>
              <p className="statTextMainSliderSolutions">Platform uptime</p>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default MainSliderSolutions;