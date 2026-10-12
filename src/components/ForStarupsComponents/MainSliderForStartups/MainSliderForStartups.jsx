'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, CircleFadingArrowUp, PlayCircle, Rocket, RocketIcon, Users } from 'lucide-react';
import './MainSliderForStartups.css';

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

function MainSliderForStartups() {
  // Counters initialize karna
  const businessesCount = useCounter(50, 2000);
  const countriesCount = useCounter(3, 2000);
  const uptimeCount = useCounter(95, 2000, 1);

  return (
    <section className="sectionWrapperMainSliderForStartups">

      {/* Background Image right edge tak stretch karne ke liye */}

      <div className="bgGradientMainSliderForStartups"></div>


      <div className="containerMainSliderForStartups">
        <div className="contentMainSliderForStartups">

          <div className="badgeMainSliderForStartups animDelay1">
            <span className="badgeDotMainSliderForStartups"></span>
            FOR STARTUPS
          </div>

          <h1 className="headingMainSliderForStartups animDelay2">
            Build You Startup  <br /> From
            <span className="textHighlightMainSliderForStartups"> Idea to Impact</span>
          </h1>

          <p className="descriptionMainSliderForStartups animDelay3">
            Discover how we've helped brand like yours grow through the custom web developments, and digital marketing solutions, Real Project, Real Impact
          </p>

          {/* <div className="btnGroupMainSliderForStartups animDelay4">
            <button className="btnPrimaryMainSliderForStartups">
              See What We Do <ArrowRight size={18} className="btnIconMainSliderForStartups" />
            </button>
            <button className="btnSecondaryMainSliderForStartups">
              <PlayCircle size={20} className="playIconMainSliderForStartups" /> Watch Our Story
            </button>
          </div> */}

          <div className="statsListMainSliderForStartups animDelay5">

            <div className='DivRowMainSliderIconsMainSliderForStartups'>
            <div>
                <RocketIcon  className='iconMobileClassMainSliderForStartups' size={34} color='var(--nexzell-primary)' />
            </div>
            <div className="statItemMainSliderForStartups">
              <h3 className="statNumberMainSliderForStartups">
                {Number(businessesCount).toLocaleString()}+
              </h3>
              <p className="statTextMainSliderForStartups">Start Up Projects</p>
            </div>
            </div>


            <div className="statDividerMainSliderForStartups"></div>

            <div className='DivRowMainSliderIconsMainSliderForStartups'>
            <div>
                <Users  className='iconMobileClassMainSliderForStartups' size={34} color='var(--nexzell-primary)'  />
            </div>
            <div className="statItemMainSliderForStartups">
              <h3 className="statNumberMainSliderForStartups">{uptimeCount}%</h3>
              <p className="statTextMainSliderForStartups">Client Retention</p>
            </div>
            </div>
            


            <div className="statDividerMainSliderForStartups"></div>

            <div className='DivRowMainSliderIconsMainSliderForStartups'>
            <div>
                <CircleFadingArrowUp className='iconMobileClassMainSliderForStartups' size={34} color='var(--nexzell-primary)'  />
            </div>
            <div className="statItemMainSliderForStartups">
              <h3 className="statNumberMainSliderForStartups">{countriesCount}x</h3>
              <p className="statTextMainSliderForStartups">Faster Times to Market</p>
            </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default MainSliderForStartups;