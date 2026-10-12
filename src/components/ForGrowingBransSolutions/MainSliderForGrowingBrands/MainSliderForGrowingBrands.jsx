'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, CircleFadingArrowUp, PlayCircle, Rocket, RocketIcon, Users } from 'lucide-react';
import './MainSliderForGrowingBrands.css';

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

function MainSliderForGrowingBrands() {
  // Counters initialize karna
  const businessesCount = useCounter(50, 2000);
  const countriesCount = useCounter(3, 2000);
  const uptimeCount = useCounter(95, 2000, 1);

  return (
    <section className="sectionWrapperMainSliderForGrowingBrands">

      {/* Background Image right edge tak stretch karne ke liye */}

      <div className="bgGradientMainSliderForGrowingBrands"></div>


      <div className="containerMainSliderForGrowingBrands">
        <div className="contentMainSliderForGrowingBrands">

          <div className="badgeMainSliderForGrowingBrands animDelay1">
            <span className="badgeDotMainSliderForGrowingBrands"></span>
            FOR GROWING BRANDS
          </div>

          <h1 className="headingMainSliderForGrowingBrands animDelay2">
            Scale Your Brand  <br />
            <span className="textHighlightMainSliderForGrowingBrands"> Without Limit</span>
          </h1>

          <p className="descriptionMainSliderForGrowingBrands animDelay3">

            Nexzell gives growing brands the tools, flexibility, and performance they need to scale operations, Increase sales, and deliver exceptional customer experiences - all in one powerful platform.
          </p>

          {/* <div className="btnGroupMainSliderForGrowingBrands animDelay4">
            <button className="btnPrimaryMainSliderForGrowingBrands">
              See What We Do <ArrowRight size={18} className="btnIconMainSliderForGrowingBrands" />
            </button>
            <button className="btnSecondaryMainSliderForGrowingBrands">
              <PlayCircle size={20} className="playIconMainSliderForGrowingBrands" /> Watch Our Story
            </button>
          </div> */}

          <div className="statsListMainSliderForGrowingBrands animDelay5">

            <div className='DivRowMainSliderIconsMainSliderForGrowingBrands'>
              <div>
                <RocketIcon className='iconMobileClassMainSliderForGrowingBrands' size={34} color='var(--nexzell-primary)' />
              </div>
              <div className="statItemMainSliderForGrowingBrands">
                <h3 className="statNumberMainSliderForGrowingBrands">
                  {Number(businessesCount).toLocaleString()}+
                </h3>
                <p className="statTextMainSliderForGrowingBrands">Start Up Projects</p>
              </div>
            </div>


            <div className="statDividerMainSliderForGrowingBrands"></div>

            <div className='DivRowMainSliderIconsMainSliderForGrowingBrands'>
              <div>
                <Users className='iconMobileClassMainSliderForGrowingBrands' size={34} color='var(--nexzell-primary)' />
              </div>
              <div className="statItemMainSliderForGrowingBrands">
                <h3 className="statNumberMainSliderForGrowingBrands">{uptimeCount}%</h3>
                <p className="statTextMainSliderForGrowingBrands">Client Retention</p>
              </div>
            </div>



            <div className="statDividerMainSliderForGrowingBrands"></div>

            <div className='DivRowMainSliderIconsMainSliderForGrowingBrands'>
              <div>
                <CircleFadingArrowUp className='iconMobileClassMainSliderForGrowingBrands' size={34} color='var(--nexzell-primary)' />
              </div>
              <div className="statItemMainSliderForGrowingBrands">
                <h3 className="statNumberMainSliderForGrowingBrands">{countriesCount}x</h3>
                <p className="statTextMainSliderForGrowingBrands">Faster Times to Market</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default MainSliderForGrowingBrands;