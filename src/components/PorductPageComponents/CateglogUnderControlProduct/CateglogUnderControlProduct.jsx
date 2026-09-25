import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './CateglogUnderControlProduct.css';

function CateglogUnderControlProduct() {
  const features = [
    "Product variants & options",
    "Categories & collections",
    "Inventory management",
    "Pricing & discounts",
    "Media management"
  ];

  return (
    <section className="sectionWrapperCateglogUnderControlProduct">
      <div className="containerCateglogUnderControlProduct">
        
        <div className="leftContentCateglogUnderControlProduct animFadeInLeftCateglogUnderControlProduct">
          <div className="imageWrapperCateglogUnderControlProduct">
            <img 
              src="/CateglogUnderControlProduct.png" 
              alt="Catalog Dashboard Mockup" 
              className="mainImageCateglogUnderControlProduct" 
            />
            <div className="imageGlowCateglogUnderControlProduct"></div>
          </div>
        </div>

        <div className="rightContentCateglogUnderControlProduct animFadeUpCateglogUnderControlProduct">
          <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
            PRODUCTS
          </div>
          
          <h2 className="headingCateglogUnderControlProduct">
            Your Entire Catalog.<br />
            Under Control.
          </h2>
          
          <p className="descriptionCateglogUnderControlProduct">
            Whether you have 20 products or 20,000, Nexzell gives 
            you the tools to organize and manage your catalog 
            efficiently.
          </p>

          <ul className="featureListCateglogUnderControlProduct">
            {features.map((feature, index) => (
              <li key={index} className={`featureItemCateglogUnderControlProduct animDelay${index + 1}CateglogUnderControlProduct`}>
                <CheckCircle2 
                  size={20} 
                  className="checkIconCateglogUnderControlProduct" 
                  fill="var(--nexzell-primary, #00E699)" 
                  color="var(--nexzell-bg-base, #06080C)" 
                />
                <span className="featureTextCateglogUnderControlProduct">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="btnPrimaryCateglogUnderControlProduct animDelay6CateglogUnderControlProduct">
            Explore Product Management <ArrowRight size={18} className="btnIconCateglogUnderControlProduct" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default CateglogUnderControlProduct;