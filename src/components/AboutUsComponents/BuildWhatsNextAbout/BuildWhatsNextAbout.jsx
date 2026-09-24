import React from 'react';
import { ArrowRight } from 'lucide-react';
import './BuildWhatsNextAbout.css';

function BuildWhatsNextAbout() {
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
      title: "12,000+ Businesses",
      desc: "Reached a new milestone of 12,000+ active businesses."
    },
    {
      id: 5,
      year: "2026",
      title: "A Bigger Future",
      desc: "Continuing to innovate for a more connected commerce world.",
      isElevated: true
    }
  ];

  return (
    <section className="sectionWrapperBuildWhatsNextAbout">
      <div className="containerBuildWhatsNextAbout">
        
        <div className="leftColBuildWhatsNextAbout animFadeUpBuildWhatsNextAbout">
          <div className="badgeBuildWhatsNextAbout">
            <span className="badgeDotBuildWhatsNextAbout"></span>
            OUR STORY
          </div>
          
          <h2 className="headingBuildWhatsNextAbout">
            Built for What's Next.
          </h2>
          
          <p className="descriptionBuildWhatsNextAbout">
            Nexzell started with a simple observation: great businesses 
            were being held back by fragmented tools, complex systems 
            and unnecessary limitations.
          </p>
          
          <p className="descriptionBuildWhatsNextAbout">
            We set out to build a better way — an all-in-one ecommerce 
            platform that's powerful, flexible and built for the future.
          </p>
          
          <button className="btnOutlineBuildWhatsNextAbout">
            Our Journey <ArrowRight size={16} className="btnIconBuildWhatsNextAbout" />
          </button>
        </div>

        <div className="rightColBuildWhatsNextAbout">
          <div className="timelineContainerBuildWhatsNextAbout">
            <div className="timelineLineBuildWhatsNextAbout"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={item.id} 
                className={`timelineItemBuildWhatsNextAbout animDelay${index + 1}BuildWhatsNextAbout`}
              >
                <span className={`topYearBuildWhatsNextAbout ${item.isElevated ? 'elevatedYearBuildWhatsNextAbout' : ''}`}>
                  {item.year}
                </span>
                
                <div className="timelineDotBuildWhatsNextAbout"></div>
                
                <div className="timelineContentBuildWhatsNextAbout">
                  <span className="bottomYearBuildWhatsNextAbout">{item.year}</span>
                  <h4 className="timelineTitleBuildWhatsNextAbout">{item.title}</h4>
                  <p className="timelineDescBuildWhatsNextAbout">{item.desc}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default BuildWhatsNextAbout;