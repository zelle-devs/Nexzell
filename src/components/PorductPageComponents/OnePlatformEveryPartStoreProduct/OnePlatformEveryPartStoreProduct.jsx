import React from 'react';
import { 
  Store, 
  Package, 
  ListOrdered, 
  Users, 
  CreditCard, 
  Send, 
  BarChart2, 
  Shield 
} from 'lucide-react';
import './OnePlatformEveryPartStoreProduct.css';

function OnePlatformEveryPartStoreProduct() {
  const features = [
    {
      id: 1,
      icon: <Store size={24} className="cardIconOnePlatformEveryPartStoreProduct" />,
      title: "Storefront",
      desc: "Design and customize your online store."
    },
    {
      id: 2,
      icon: <Package size={24} className="cardIconOnePlatformEveryPartStoreProduct" fill="var(--nexzell-primary)" color="var(--nexzell-bg-base)" />,
      title: "Products",
      desc: "Manage your entire catalog.",
      isFilled: true
    },
    {
      id: 3,
      icon: <ListOrdered size={24} className="cardIconOnePlatformEveryPartStoreProduct" />,
      title: "Orders",
      desc: "Track from checkout to fulfillment."
    },
    {
      id: 4,
      icon: <Users size={24} className="cardIconOnePlatformEveryPartStoreProduct" />,
      title: "Customers",
      desc: "Build stronger relationships.",
      hasAnnotation: true
    },
    {
      id: 5,
      icon: <CreditCard size={24} className="cardIconOnePlatformEveryPartStoreProduct" />,
      title: "Payments",
      desc: "Connect and manage payment methods."
    },
    {
      id: 6,
      icon: <Send size={24} className="cardIconOnePlatformEveryPartStoreProduct" />,
      title: "Marketing",
      desc: "Create campaigns and drive sales."
    },
    {
      id: 7,
      icon: <BarChart2 size={24} className="cardIconOnePlatformEveryPartStoreProduct" />,
      title: "Analytics",
      desc: "Turn data into insights."
    },
    {
      id: 8,
      icon: <Shield size={24} className="cardIconOnePlatformEveryPartStoreProduct" />,
      title: "Operations",
      desc: "Keep everything running smoothly."
    }
  ];

  return (
    <section className="sectionWrapperOnePlatformEveryPartStoreProduct">
      <div className="containerOnePlatformEveryPartStoreProduct">
        
        <div className="headerOnePlatformEveryPartStoreProduct animFadeUpOnePlatformEveryPartStoreProduct">
          <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
           THE NEXZELL ECOSYSTEM
          </div>
          <h2 className="titleOnePlatformEveryPartStoreProduct">
            One Platform. <br/>Every Part of Your Store.
          </h2>
          <p className="descOnePlatformEveryPartStoreProduct">
            Running an ecommerce business involves hundreds of moving pieces. Nexzell connects the core parts of your 
            operation so you can manage your business from one place.
          </p>
        </div>

        <div className="gridOnePlatformEveryPartStoreProduct">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`cardOnePlatformEveryPartStoreProduct animDelay${index + 1}OnePlatformEveryPartStoreProduct`}
            >
              <div className={`iconBoxOnePlatformEveryPartStoreProduct ${feature.isFilled ? 'filledBoxOnePlatformEveryPartStoreProduct' : ''}`}>
                {feature.icon}
              </div>
              <div className="cardTextContentOnePlatformEveryPartStoreProduct">
                <h3 className="cardTitleOnePlatformEveryPartStoreProduct">{feature.title}</h3>
                <p className="cardDescOnePlatformEveryPartStoreProduct">{feature.desc}</p>
              </div>

              {feature.hasAnnotation && (
                <div className="annotationWrapperOnePlatformEveryPartStoreProduct">
                  <span className="annotationTextOnePlatformEveryPartStoreProduct">
                    Everything<br/>Connected
                  </span>
                  <svg className="annotationArrowOnePlatformEveryPartStoreProduct" width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5C25 10 35 25 30 45" stroke="var(--nexzell-primary)" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M25 40L30 45L35 38" stroke="var(--nexzell-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OnePlatformEveryPartStoreProduct;