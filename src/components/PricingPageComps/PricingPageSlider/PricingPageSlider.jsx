'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './PricingPageSlider.css';

// Number counter animation ke liye custom hook
const useCounter = (end, duration = 2000, decimals = 0) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0; 
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

function PricingPageSlider() {
  // Counters initialize karna
  const businessesCount = useCounter(12000, 2000);
  const countriesCount = useCounter(120, 2000);
  const uptimeCount = useCounter(99.9, 2000, 1);

  return (
    <section className="sectionWrapperPricingPageSlider">
      
      {/* Background Image right edge tak stretch karne ke liye */}
       
      
        <div className="bgGradientPricingPageSlider"></div>
    

      <div className="containerPricingPageSlider">
        <div className="contentPricingPageSlider">
          
          <div className="badgePricingPageSlider animDelay1">
            <span className="badgeDotPricingPageSlider"></span>
            SOLUTIONS
          </div>

          <h1 className="headingPricingPageSlider animDelay2">
           Built For Every Stage of Your
            <span className="textHighlightPricingPageSlider">  Ecommerce </span>
             Journey
          </h1>

          <p className="descriptionPricingPageSlider animDelay3">
            No matter where you are in your journey, Nexzell gives you the right tool to launch, Manage and grow from your first product of global expansion
          </p>

          <div className="btnGroupPricingPageSlider animDelay4">
            <button className="btnPrimaryPricingPageSlider">
              Find Your Solution <ArrowRight size={18} className="btnIconPricingPageSlider" />
            </button>
          </div>

         

        </div>
      </div>
    </section>
  );
}

export default PricingPageSlider;