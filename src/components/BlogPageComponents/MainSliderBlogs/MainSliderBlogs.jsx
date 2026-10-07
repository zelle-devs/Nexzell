'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './MainSliderBlogs.css';

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

function MainSliderBlogs() {
  // Counters initialize karna
  const businessesCount = useCounter(500, 2000);
  const countriesCount = useCounter(12, 500);
  const uptimeCount = useCounter(99.9, 2000, 1);

  return (
    <section className="sectionWrapperMainSliderBlogs">
      
      {/* Background Image right edge tak stretch karne ke liye */}
      
        <div className="bgGradientMainSliderBlogs"></div>
     

      <div className="containerMainSliderBlogs">
        <div className="contentMainSliderBlogs">
          
          <div className="badgeMainSliderBlogs animDelay1">
            <span className="badgeDotMainSliderBlogs"></span>
            BLOGS NEXZELL
          </div>

          <h1 className="headingMainSliderBlogs animDelay2">
            Insights Ideas & <br/>
            Updates From
            <span className="textHighlightMainSliderBlogs"> Nexzell</span>
          </h1>

          <p className="descriptionMainSliderBlogs animDelay3">
           Explore the latest trends, expert insights, and practical tips to help you to build grow, and stay ahead in the digital world.
          </p>

          {/* <div className="btnGroupMainSliderBlogs animDelay4">
            <button className="btnPrimaryMainSliderBlogs">
              See What We Do <ArrowRight size={18} className="btnIconMainSliderBlogs" />
            </button>
            <button className="btnSecondaryMainSliderBlogs">
              <PlayCircle size={20} className="playIconMainSliderBlogs" /> Watch Our Story
            </button>
          </div> */}

          <div className="statsListMainSliderBlogs animDelay5">
            <div className="statItemMainSliderBlogs">
              <h3 className="statNumberMainSliderBlogs">
                {Number(businessesCount).toLocaleString()}+
              </h3>
              <p className="statTextMainSliderBlogs">Businesses trust Nexzell</p>
            </div>
            
            <div className="statDividerMainSliderBlogs"></div>
            
            <div className="statItemMainSliderBlogs">
              <h3 className="statNumberMainSliderBlogs">{countriesCount}+</h3>
              <p className="statTextMainSliderBlogs">Countries</p>
            </div>
            
            <div className="statDividerMainSliderBlogs"></div>
            
            <div className="statItemMainSliderBlogs">
              <h3 className="statNumberMainSliderBlogs">{uptimeCount}%</h3>
              <p className="statTextMainSliderBlogs">Platform uptime</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MainSliderBlogs;