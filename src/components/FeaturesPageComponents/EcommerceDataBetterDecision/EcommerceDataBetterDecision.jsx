import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './EcommerceDataBetterDecision.css';

function EcommerceDataBetterDecision() {
  const features = [
    "Product variants & options",
    "Categories & collections",
    "Inventory management",
    "Pricing & discounts",
    "Media management"
  ];

  return (
    <section className="sectionWrapperEcommerceDataBetterDecision">
      <div className="containerEcommerceDataBetterDecision">
        
        <div className="leftContentEcommerceDataBetterDecision animFadeInLeftEcommerceDataBetterDecision">
          <div className="imageWrapperEcommerceDataBetterDecision">
            <img 
              src="/EcommerceDataBetterDecision2.png" 
              alt="Catalog Dashboard Mockup" 
              className="mainImageEcommerceDataBetterDecision" 
            />
            <div className="imageGlowEcommerceDataBetterDecision"></div>
          </div>
        </div>

        <div className="rightContentEcommerceDataBetterDecision animFadeUpEcommerceDataBetterDecision">
          <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
            PRODUCTS
          </div>
          
          <h2 className="headingEcommerceDataBetterDecision">
           Manage Product With  <br />
            Complete Flexibility.
          </h2>
          
          <p className="descriptionEcommerceDataBetterDecision">
            From simple products to complex variations-ocaly monage your entire cotolog with odvanced inventory tools.
          </p>

          {/* <ul className="featureListEcommerceDataBetterDecision">
            {features.map((feature, index) => (
              <li key={index} className={`featureItemEcommerceDataBetterDecision animDelay${index + 1}EcommerceDataBetterDecision`}>
                <CheckCircle2 
                  size={20} 
                  className="checkIconEcommerceDataBetterDecision" 
                  fill="var(--nexzell-primary, #00E699)" 
                  color="var(--nexzell-bg-base, #06080C)" 
                />
                <span className="featureTextEcommerceDataBetterDecision">{feature}</span>
              </li>
            ))}
          </ul> */}

          <button className="btnPrimaryEcommerceDataBetterDecision animDelay6EcommerceDataBetterDecision">
            Explore Product Management <ArrowRight size={18} className="btnIconEcommerceDataBetterDecision" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default EcommerceDataBetterDecision;