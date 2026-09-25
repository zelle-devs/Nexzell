import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './YourProductYourWay.css';

function YourProductYourWay() {
  const features = [
    "Beautiful, responsive themes",
    "Advanced product discovery",
    "Search & filtering",
    "Promotions & discounts",
    "Mobile-friendly experience"
  ];

  return (
    <section className="sectionWrapperYourProductYourWay">
      <div className="containerYourProductYourWay">
        
        <div className="leftContentYourProductYourWay animFadeUpYourProductYourWay">
          <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
           STOREFRONT
          </div>
          
          <h2 className="headingYourProductYourWay">
            Your Store, Your Brand,
            Your Way.
          </h2>
          
          <p className="descriptionYourProductYourWay">
            Create a stunning, high-converting storefront that 
            reflects your brand. Nexzell gives you the flexibility to 
            design, customize and optimize every part of your 
            shopping experience.
          </p>

          <ul className="featureListYourProductYourWay">
            {features.map((feature, index) => (
              <li key={index} className={`featureItemYourProductYourWay animDelay${index + 1}YourProductYourWay`}>
                <CheckCircle2 
                  size={20} 
                  className="checkIconYourProductYourWay" 
                  fill="var(--nexzell-primary)" 
                  color="var(--nexzell-bg-base)" 
                />
                <span className="featureTextYourProductYourWay">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="btnPrimaryYourProductYourWay animDelay6YourProductYourWay">
            Explore Storefront Features <ArrowRight size={18} className="btnIconYourProductYourWay" />
          </button>
        </div>

        <div className="rightContentYourProductYourWay animFadeInRightYourProductYourWay">
          <div className="imageWrapperYourProductYourWay">
            <img 
              src="/YourBrandYourWayProduct.png" 
              alt="Storefront Mockup" 
              className="mainImageYourProductYourWay" 
            />
            <div className="imageGlowYourProductYourWay"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default YourProductYourWay;