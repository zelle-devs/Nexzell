import React from 'react';
import { Send, BarChart2, Building2, ArrowRight } from 'lucide-react';
import './BuiltBusinessSizesHome.css';

function BuiltBusinessSizesHome() {
  const cards = [
    {
      id: 1,
      icon: <Send size={36} className="cardIconBuiltBusinessSizesHome" />,
      title: "Startups",
      desc: "Launch quickly and affordably."
    },
    {
      id: 2,
      icon: <BarChart2 size={36} className="cardIconBuiltBusinessSizesHome" />,
      title: "Growing Brands",
      desc: "Get the tools to scale."
    },
    {
      id: 3,
      icon: <Building2 size={36} className="cardIconBuiltBusinessSizesHome" />,
      title: "Enterprises",
      desc: "Advanced features and integrations."
    }
  ];

  return (
    <section className="sectionWrapperBuiltBusinessSizesHome">
      <div className="containerBuiltBusinessSizesHome">
        
        <div className="leftContentBuiltBusinessSizesHome">
          <h2 className="headingBuiltBusinessSizesHome">
            Built for Businesses<br />of All Sizes
          </h2>
          <p className="descriptionBuiltBusinessSizesHome">
            Whether you're a startup, a growing brand or an established enterprise, 
            Nexzell scales with you. Start small, add more as you grow.
          </p>
          <button className="btnOutlineBuiltBusinessSizesHome">
            See How It Works <ArrowRight size={16} className="btnIconBuiltBusinessSizesHome" />
          </button>
        </div>

        <div className="rightContentBuiltBusinessSizesHome">
          {cards.map((card) => (
            <div key={card.id} className="cardBuiltBusinessSizesHome">
              <div className="cardIconWrapperBuiltBusinessSizesHome">
                {card.icon}
              </div>
              <h4 className="cardTitleBuiltBusinessSizesHome">{card.title}</h4>
              <p className="cardDescBuiltBusinessSizesHome">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BuiltBusinessSizesHome;