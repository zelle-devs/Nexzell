import React from 'react';
import { 
  Store, 
  Box, 
  Package, 
  FileText, 
  Users, 
  CreditCard, 
  Megaphone, 
  BarChart2, 
  Settings, 
  Share2, 
  ArrowRight 
} from 'lucide-react';
import './AllInOneFeaturesPlatform.css';

function AllInOneFeaturesPlatform() {
  const features = [
    { id: 1, icon: <Store size={22} />, title: "Storefront", desc: "Build your brand" },
    { id: 2, icon: <Box size={22} />, title: "Products", desc: "Manage your catalog" },
    { id: 3, icon: <Package size={22} />, title: "Inventory", desc: "Track stock easily" },
    { id: 4, icon: <FileText size={22} />, title: "Orders", desc: "From click to delivery" },
    { id: 5, icon: <Users size={22} />, title: "Customers", desc: "Build relationships" },
    { id: 6, icon: <CreditCard size={22} />, title: "Payments", desc: "Secure & flexible" },
    { id: 7, icon: <Megaphone size={22} />, title: "Marketing", desc: "Drive more sales" },
    { id: 8, icon: <BarChart2 size={22} />, title: "Analytics", desc: "Turn data into growth" },
    { id: 9, icon: <Settings size={22} />, title: "Automation", desc: "Save time, work smarter" },
    { id: 10, icon: <Share2 size={22} />, title: "Integrations", desc: "Connect your tools" }
  ];

  return (
    <section className="sectionWrapperAllInOneFeaturesPlatform">
      <div className="containerAllInOneFeaturesPlatform">
        
        {/* Header Section */}
        <div className="headerAllInOneFeaturesPlatform animFadeUpAllInOneFeaturesPlatform">
          <div className="badgeMainSliderFeatures animDelay1">
            <span className="badgeDotMainSliderFeatures"></span>
            THE COMPLETE FEATURE SET
          </div>
          
          <h2 className="headingAllInOneFeaturesPlatform">
            Everything You Need.<br />
            <span className="textHighlightAllInOneFeaturesPlatform">All in One Platform.</span>
          </h2>
          
          <p className="descriptionAllInOneFeaturesPlatform">
            From storefront to fulfillment, marketing to analytics — Nexzell gives you a complete 
            ecommerce ecosystem with powerful features built for businesses of all sizes.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="gridAllInOneFeaturesPlatform">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`cardAllInOneFeaturesPlatform animDelay${index + 1}AllInOneFeaturesPlatform`}
            >
              <div className="cardIconBoxAllInOneFeaturesPlatform">
                {feature.icon}
              </div>
              
              <div className="cardTextWrapperAllInOneFeaturesPlatform">
                <h4 className="cardTitleAllInOneFeaturesPlatform">{feature.title}</h4>
                <p className="cardDescAllInOneFeaturesPlatform">{feature.desc}</p>
              </div>

              <ArrowRight size={14} className="cardArrowIconAllInOneFeaturesPlatform" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AllInOneFeaturesPlatform;