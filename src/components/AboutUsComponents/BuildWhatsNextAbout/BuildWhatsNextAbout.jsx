"use client"

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './BuildWhatsNextAbout.css';

const timeline = [
  {
    id: 1,
    year: "2020",
    title: "The Beginning",
    desc: "Nexzell was founded with a bold vision."
  },
  {
    id: 2,
    year: "2021",
    title: "First Customers",
    desc: "Launched our platform and onboarded early businesses."
  },
  {
    id: 3,
    year: "2023",
    title: "Global Expansion",
    desc: "Expanded to 50+ countries."
  },
  {
    id: 4,
    year: "2024",
    title: "500+ Businesses",
    desc: "Reached a new milestone of 500+ active businesses."
  },
  {
    id: 5,
    year: "2026",
    title: "A Bigger Future",
    desc: "Continuing to innovate for a more connected commerce world.",
    isFuture: true
  }
];

function BuildWhatsNextAbout() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Start the reveal and line-drawing animation when the section scrolls into view
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`sectionWrapperBuildWhatsNextAbout ${isVisible ? 'isVisibleBuildWhatsNextAbout' : ''}`}
    >
      {/* Background: light rays, glow and fading grid */}
      <div className="bgLayerBuildWhatsNextAbout" aria-hidden="true">
        <span className="gridBgBuildWhatsNextAbout"></span>
        <span className="raysBuildWhatsNextAbout"></span>
        <span className="glowBuildWhatsNextAbout"></span>
      </div>

      <div className="containerBuildWhatsNextAbout">

        {/* Header */}
        <div className="headerBuildWhatsNextAbout">
          <div className="leftColBuildWhatsNextAbout revealBuildWhatsNextAbout" style={{ '--delay': '0s' }}>
            <div className="badgeMakeEcommerceSimpler animDelay1MakeEcommerceSimpler">
            <span className="badgeDotMakeEcommerceSimpler"></span>
            OUR STORY
          </div>

            <h2 className="headingBuildWhatsNextAbout">
              Built for What's Next
            </h2>
          </div>

          <div className="rightColBuildWhatsNextAbout revealBuildWhatsNextAbout" style={{ '--delay': '0.12s' }}>
            <p className="descriptionBuildWhatsNextAbout">
              Nexzell started with a simple observation: great businesses
              were being held back by fragmented tools, complex systems
              and unnecessary limitations.
            </p>

            <p className="descriptionBuildWhatsNextAbout">
              We set out to build a better way — an all-in-one ecommerce
              platform that's powerful, flexible and built for the future.
            </p>

            {/* <button className="btnOutlineBuildWhatsNextAbout">
              Our Journey <ArrowRight size={16} className="btnIconBuildWhatsNextAbout" />
            </button> */}
          </div>
        </div>

        {/* Timeline */}
        <ol className="timelineContainerBuildWhatsNextAbout">
          {timeline.map((item, index) => (
            <li
              key={item.id}
              className={`timelineItemBuildWhatsNextAbout ${item.isFuture ? 'timelineItemFutureBuildWhatsNextAbout' : ''}`}
              style={{ '--i': index }}
            >
              <span className="yearBuildWhatsNextAbout">{item.year}</span>

              <div className="nodeWrapBuildWhatsNextAbout">
                <span className="timelineDotBuildWhatsNextAbout"></span>

                {item.isFuture ? (
                  <span className="segmentBuildWhatsNextAbout segmentFutureBuildWhatsNextAbout"></span>
                ) : (
                  <span className="segmentBuildWhatsNextAbout">
                    <span className="segmentFillBuildWhatsNextAbout"></span>
                  </span>
                )}
              </div>

              <div className="timelineCardBuildWhatsNextAbout">
                {item.isFuture && (
                  <span className="cardTagBuildWhatsNextAbout">What's next</span>
                )}
                <h4 className="timelineTitleBuildWhatsNextAbout">{item.title}</h4>
                <p className="timelineDescBuildWhatsNextAbout">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}

export default BuildWhatsNextAbout;