import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './OrderFullFilmentFeatures.css';

function OrderFullFilmentFeatures() {
  const features = [
    "Order tracking and status updates",
    "Multi-location inventory",
    "Shipping and delivery management",
    "Returns and refunds"
  ];

  return (
    <section className="sectionWrapperOrderFullFilmentFeatures">
      <div className="containerOrderFullFilmentFeatures">
        
        {/* Left Content */}
        <div className="leftContentOrderFullFilmentFeatures animFadeUpOrderFullFilmentFeatures">
          <div className="badgeMainSliderFeatures animDelay1">
            <span className="badgeDotMainSliderFeatures"></span>
           ORDERS
          </div>
          
          <h2 className="headingOrderFullFilmentFeatures">
            Orders & Fulfillment<br />
            Made Simple.
          </h2>
          
          <p className="descriptionOrderFullFilmentFeatures">
            Manage orders from checkout to delivery with 
            real-time updates, automation and multi-location 
            fulfillment.
          </p>

          <ul className="featureListOrderFullFilmentFeatures">
            {features.map((feature, index) => (
              <li key={index} className={`featureItemOrderFullFilmentFeatures animDelay${index + 1}OrderFullFilmentFeatures`}>
                <CheckCircle2 
                  size={20} 
                  className="checkIconOrderFullFilmentFeatures" 
                  fill="var(--nexzell-primary, #00E699)" 
                  color="var(--nexzell-bg-base, #06080C)" 
                />
                <span className="featureTextOrderFullFilmentFeatures">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="btnPrimaryOrderFullFilmentFeatures animDelay6OrderFullFilmentFeatures">
            Explore Order Features <ArrowRight size={18} className="btnIconOrderFullFilmentFeatures" />
          </button>
        </div>

        {/* Right Content (Image Placeholder) */}
        <div className="rightContentOrderFullFilmentFeatures animFadeInRightOrderFullFilmentFeatures">
          <div className="imageWrapperOrderFullFilmentFeatures">
            {/* Replace this src with your actual order tracking UI image */}
            <img 
              src="/OrderFullFilmentFeatures.png" 
              alt="Order Tracking Dashboard" 
              className="mainImageOrderFullFilmentFeatures" 
            />
            <div className="imageGlowOrderFullFilmentFeatures"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OrderFullFilmentFeatures;