'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './MainSliderResources.css';

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

function MainSliderResources() {
  // Counters initialize karna
  const businessesCount = useCounter(12000, 2000);
  const countriesCount = useCounter(120, 2000);
  const uptimeCount = useCounter(99.9, 2000, 1);

  return (
    <section className="sectionWrapperMainSliderResources">
      
      {/* Background Image right edge tak stretch karne ke liye */}
       
      
        <div className="bgGradientMainSliderResources"></div>
    

      <div className="containerMainSliderResources">
        <div className="contentMainSliderResources">
          
          <div className="badgeMainSliderResources animDelay1">
            <span className="badgeDotMainSliderResources"></span>
            RESOURCES
          </div>

          <h1 className="headingMainSliderResources animDelay2">
           Insights, Guide & Tools To Help You 
            <span className="textHighlightMainSliderResources">  Grow </span>
          </h1>

          <p className="descriptionMainSliderResources animDelay3">
           Explore our latest blogs, resources, guides and tools designed to help you build, scale and stay ahead in the digital world. 
          </p>

          <div className="btnGroupMainSliderResources animDelay4">
            <button className="btnPrimaryMainSliderResources">
             Explore Resources <ArrowRight size={18} className="btnIconMainSliderResources" />
            </button>
          </div>

          {/* <div className="statsListMainSliderResources animDelay5">
            <div className="statItemMainSliderResources">
              <h3 className="statNumberMainSliderResources">
                {Number(businessesCount).toLocaleString()}+
              </h3>
              <p className="statTextMainSliderResources">Businesses trust Nexzell</p>
            </div>
            
            <div className="statDividerMainSliderResources"></div>
            
            <div className="statItemMainSliderResources">
              <h3 className="statNumberMainSliderResources">{countriesCount}+</h3>
              <p className="statTextMainSliderResources">Countries</p>
            </div>
            
            <div className="statDividerMainSliderResources"></div>
            
            <div className="statItemMainSliderResources">
              <h3 className="statNumberMainSliderResources">{uptimeCount}%</h3>
              <p className="statTextMainSliderResources">Platform uptime</p>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default MainSliderResources;