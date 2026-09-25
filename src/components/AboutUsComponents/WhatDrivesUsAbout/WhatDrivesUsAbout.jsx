import React from 'react';
import { Zap, Users, Leaf, ShieldCheck } from 'lucide-react';
import './WhatDrivesUsAbout.css';

function WhatDrivesUsAbout() {
  const values = [
    {
      id: 1,
      icon: <Zap size={35} className="cardIconWhatDrivesUsAbout" />,
      title: "Keep It Simple",
      desc: "Powerful technology doesn't have to be complicated."
    },
    {
      id: 2,
      icon: <Users size={35} className="cardIconWhatDrivesUsAbout" />,
      title: "Think Customer First",
      desc: "Our customers' success shapes everything we do."
    },
    {
      id: 3,
      icon: <Leaf size={35} className="cardIconWhatDrivesUsAbout" />,
      title: "Build for the Future",
      desc: "We design with long-term growth and scalability in mind."
    },
    {
      id: 4,
      icon: <ShieldCheck size={35} className="cardIconWhatDrivesUsAbout" />,
      title: "Do What's Right",
      desc: "We act with integrity and build trust through transparency."
    }
  ];

  return (
    <section className="sectionWrapperWhatDrivesUsAbout">
      <div className="containerWhatDrivesUsAbout">
        
        <div className="leftContentWhatDrivesUsAbout animFadeUpWhatDrivesUsAbout">
          <div className="badgeWhatDrivesUsAbout">
            <span className="badgeDotWhatDrivesUsAbout"></span>
            OUR VALUES
          </div>
          
          <h2 className="headingWhatDrivesUsAbout">
            What Drives Us.
          </h2>
          
          <p className="descriptionWhatDrivesUsAbout">
            Our values guide how we build, work and support 
            the businesses that trust us every day.
          </p>
        </div>

        <div className="rightContentWhatDrivesUsAbout">
          {values.map((item, index) => (
            <div 
              key={item.id} 
              className={`cardWhatDrivesUsAbout animDelay${index + 1}WhatDrivesUsAbout`}
            >
              <div className="cardIconWrapperWhatDrivesUsAbout">
                {item.icon}
              </div>
              <h4 className="cardTitleWhatDrivesUsAbout">{item.title}</h4>
              <p className="cardDescWhatDrivesUsAbout">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatDrivesUsAbout;