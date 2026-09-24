"use client"

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './PricingSectionHome.css';

function PricingSectionHome() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      desc: "Perfect for small businesses",
      monthlyPrice: "29",
      yearlyPrice: "24",
      features: [
        "Up to 1,000 products",
        "Basic marketing tools",
        "Standard support"
      ],
      btnText: "Get Started",
      isPopular: false
    },
    {
      id: 2,
      name: "Business",
      desc: "Best for growing brands",
      monthlyPrice: "79",
      yearlyPrice: "64",
      features: [
        "Unlimited products",
        "Advanced marketing tools",
        "Detailed analytics",
        "Priority support"
      ],
      btnText: "Get Started",
      isPopular: true
    },
    {
      id: 3,
      name: "Enterprise",
      desc: "For large businesses",
      monthlyPrice: "199",
      yearlyPrice: "159",
      features: [
        "Custom solutions",
        "Advanced integrations",
        "Dedicated account manager",
        "24/7 support"
      ],
      btnText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="sectionWrapperPricingSectionHome">
      <div className="containerPricingSectionHome">
        
        <div className="headerPricingSectionHome animatedFadeUpPricingSectionHome">
          <h2 className="headingPricingSectionHome">
            Simple, Transparent Pricing
          </h2>
          <p className="descriptionPricingSectionHome">
            Choose a plan that fits your business. No hidden fees. No long-term contracts.
          </p>

          <div className="toggleWrapperPricingSectionHome">
            <div className="toggleContainerPricingSectionHome">
              <button 
                className={`toggleBtnPricingSectionHome ${!isYearly ? 'activeTogglePricingSectionHome' : ''}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button 
                className={`toggleBtnPricingSectionHome ${isYearly ? 'activeTogglePricingSectionHome' : ''}`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
            </div>
            <div className="saveBadgePricingSectionHome">Save 20%</div>
          </div>
        </div>

        <div className="gridPricingSectionHome animatedFadeUpDelayPricingSectionHome">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`cardPricingSectionHome ${plan.isPopular ? 'popularCardPricingSectionHome' : 'standardCardPricingSectionHome'}`}
            >
              <div className="cardHeaderPricingSectionHome">
                <div className="titleRowPricingSectionHome">
                  <h3 className="planNamePricingSectionHome">{plan.name}</h3>
                  {plan.isPopular && <span className="popularBadgePricingSectionHome">Most Popular</span>}
                </div>
                <p className="planDescPricingSectionHome">{plan.desc}</p>
                <div className="priceWrapperPricingSectionHome">
                  <span className="currencyPricingSectionHome">$</span>
                  <span className="pricePricingSectionHome">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="periodPricingSectionHome">/month</span>
                </div>
              </div>

              <div className="featuresListPricingSectionHome">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="featureItemPricingSectionHome">
                    <Check size={16} className="checkIconPricingSectionHome" />
                    <span className="featureTextPricingSectionHome">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`btnPricingSectionHome ${plan.isPopular ? 'btnPrimaryPricingSectionHome' : 'btnOutlinePricingSectionHome'}`}>
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PricingSectionHome;