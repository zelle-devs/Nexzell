import React from 'react';
import { Package, TrendingUp, ShieldCheck, Settings2, Headphones } from 'lucide-react';
import './MoreThenJustPlatformSolutions.css';

function MoreThenJustPlatformSolutions() {
  const features = [
    {
      id: 1,
      icon: <Package size={24} className="featureIconMoreThenJustPlatformSolutions" />,
      title: "All-in-One Platform",
      desc: "Products, orders, customers, payments and more."
    },
    {
      id: 2,
      icon: <TrendingUp size={24} className="featureIconMoreThenJustPlatformSolutions" />,
      title: "Built to Scale",
      desc: "From your first sale to global expansion."
    },
    {
      id: 3,
      icon: <ShieldCheck size={24} className="featureIconMoreThenJustPlatformSolutions" />,
      title: "Secure & Reliable",
      desc: "Your business and customer data are always protected."
    },
    {
      id: 4,
      icon: <Settings2 size={24} className="featureIconMoreThenJustPlatformSolutions" />,
      title: "Flexible & Customizable",
      desc: "Adapt to your unique business needs."
    },
    {
      id: 5,
      icon: <Headphones size={24} className="featureIconMoreThenJustPlatformSolutions" />,
      title: "Expert Support",
      desc: "A team that's with you at every stage."
    }
  ];

  return (
    <section className="sectionWrapperMoreThenJustPlatformSolutions">
      <div className="containerMoreThenJustPlatformSolutions">
        
        <div className="headerMoreThenJustPlatformSolutions animFadeUpMoreThenJustPlatformSolutions">
          <h4 className="subtitleMoreThenJustPlatformSolutions">WHY BUSINESSES CHOOSE NEXZELL</h4>
          <h2 className="titleMoreThenJustPlatformSolutions">More Than Just a Platform</h2>
          <p className="descMoreThenJustPlatformSolutions">
            Everything you need to build, run and grow your ecommerce business — in one place.
          </p>
        </div>

        <div className="gridMoreThenJustPlatformSolutions">
          {features.map((item, index) => (
            <div 
              key={item.id} 
              className={`featureItemMoreThenJustPlatformSolutions animDelay${index + 1}MoreThenJustPlatformSolutions`}
            >
              <div className="iconBoxMoreThenJustPlatformSolutions">
                {item.icon}
              </div>
              <h3 className="featureTitleMoreThenJustPlatformSolutions">{item.title}</h3>
              <p className="featureDescMoreThenJustPlatformSolutions">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MoreThenJustPlatformSolutions;