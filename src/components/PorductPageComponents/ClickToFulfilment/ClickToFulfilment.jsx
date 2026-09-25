import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './ClickToFulfilment.css';

function ClickToFulfilment() {
  const features = [
    "Order status management",
    "Customer information",
    "Payment status",
    "Fulfillment tracking",
    "Returns & cancellations"
  ];

  return (
    <section className="sectionWrapperClickToFulfilment">
      <div className="containerClickToFulfilment">
        
        <div className="leftContentClickToFulfilment animFadeUpClickToFulfilment">
          <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
           ORDERS
          </div>
          
          <h2 className="headingClickToFulfilment">
            From Click to Fulfillment.
          </h2>
          
          <p className="descriptionClickToFulfilment">
            Every order matters. Nexzell gives you a centralized 
            view of orders so you can track, manage and fulfill them 
            efficiently.
          </p>

          <ul className="featureListClickToFulfilment">
            {features.map((feature, index) => (
              <li key={index} className={`featureItemClickToFulfilment animDelay${index + 1}ClickToFulfilment`}>
                <CheckCircle2 
                  size={20} 
                  className="checkIconClickToFulfilment" 
                  fill="var(--nexzell-primary, #00E699)" 
                  color="var(--nexzell-bg-base, #06080C)" 
                />
                <span className="featureTextClickToFulfilment">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="btnPrimaryClickToFulfilment animDelay6ClickToFulfilment">
            Explore Order Management <ArrowRight size={18} className="btnIconClickToFulfilment" />
          </button>
        </div>

        <div className="rightContentClickToFulfilment animFadeInRightClickToFulfilment">
          <div className="imageWrapperClickToFulfilment">
            <img 
              src="/ClickToFulfilment.png" 
              alt="Order Management Dashboard" 
              className="mainImageClickToFulfilment" 
            />
            <div className="imageGlowClickToFulfilment"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ClickToFulfilment;