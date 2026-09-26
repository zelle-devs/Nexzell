'use client'
import React, { useState, useEffect } from 'react';
import { 
  Package, 
  ShieldCheck, 
  Users, 
  Megaphone, 
  CreditCard, 
  BarChart3, 
  ArrowRight 
} from 'lucide-react';
import './EverythingBusinessStarter.css';
import ProductSelectionCheck from '../ProductSelectionCheck/ProductSelectionCheck';

function EverythingBusinessStarter() {
  // 1. Create a state to store the current window width
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1201
  );

  // 2. Add an event listener to update the state whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      id: 1,
      icon: <Package size={22} className="featureIconEverythingBusinessStarter" />,
      title: "Product Management",
      desc: "Easily manage unlimited products, variants and stock."
    },
    {
      id: 2,
      icon: <ShieldCheck size={22} className="featureIconEverythingBusinessStarter" />,
      title: "Order Management",
      desc: "Streamline orders, fulfillment and tracking."
    },
    {
      id: 3,
      icon: <Users size={22} className="featureIconEverythingBusinessStarter" />,
      title: "Customer Management",
      desc: "Build lasting customer relationships and loyalty."
    },
    {
      id: 4,
      icon: <Megaphone size={22} className="featureIconEverythingBusinessStarter" />,
      title: "Marketing Tools",
      desc: "Run promotions, discounts and email campaigns."
    },
    {
      id: 5,
      icon: <CreditCard size={22} className="featureIconEverythingBusinessStarter" />,
      title: "Multiple Payment Options",
      desc: "Support global and local payment methods."
    },
    {
      id: 6,
      icon: <BarChart3 size={22} className="featureIconEverythingBusinessStarter" />,
      title: "Analytics & Reports",
      desc: "Make data-driven decisions with real-time insights."
    }
  ];

  return (
    <section className="sectionWrapperEverythingBusinessStarter">
      <div className="containerEverythingBusinessStarter">
        
        <div className="leftContentEverythingBusinessStarter animatedFadeUpEverythingBusinessStarter">
          
          <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
            POWERFUL FEATURES
          </div>

          <h2 className="headingEverythingBusinessStarter">
            Everything You Need to<br />
            Run Your Business, Smarter
          </h2>

          <p className="descriptionEverythingBusinessStarter">
            Nexzell comes with all the essential tools and advanced features to 
            help you launch, manage and grow — without technical complexity.
          </p>

          <div className="featuresGridEverythingBusinessStarter">
            {features.map((feature) => (
              <div key={feature.id} className="featureItemEverythingBusinessStarter">
                <div className="iconWrapperEverythingBusinessStarter">
                  {feature.icon}
                </div>
                <div className="featureTextEverythingBusinessStarter">
                  <h4 className="featureTitleEverythingBusinessStarter">{feature.title}</h4>
                  <p className="featureDescEverythingBusinessStarter">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btnOutlineEverythingBusinessStarter">
            View All Features <ArrowRight size={16} className="btnIconEverythingBusinessStarter" />
          </button>

        </div>

        <div className="rightContentEverythingBusinessStarter animatedFadeInRightEverythingBusinessStarter">
          
          {/* Condition: Show Image between 300px and 1200px */}
          {windowWidth >= 300 && windowWidth <= 1200 && (
            <img 
              src="/EverythingBusinessStarter.jpg" 
              alt="Nexzell Dashboard Features" 
              className="showcaseImageEverythingBusinessStarter" 
            />
          )}

          {/* Condition: Show Component greater than 1200px */}
          {windowWidth > 1200 && (
            <ProductSelectionCheck />
          )}

        </div>

      </div>
    </section>
  );
}

export default EverythingBusinessStarter;