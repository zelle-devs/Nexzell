import React from 'react';
import { 
  MessageSquare, 
  Users, 
  ShieldCheck, 
  Headset, 
  Handshake, 
  Calendar, 
  BookOpen, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import './MainSliderContactUs.css';

function MainSliderContactUs() {
  const cards = [
    {
      id: 1,
      icon: <Users size={24} className="cardIconMainSliderContactUs" />,
      title: "Talk to Sales",
      desc: "Want to see Nexzell in action or discuss the right solution for your business?",
      btnIcon: <Calendar size={16} />,
      btnText: "Book a Free Demo"
    },
    {
      id: 2,
      icon: <Headset size={24} className="cardIconMainSliderContactUs" />,
      title: "Get Support",
      desc: "Already using Nexzell? Find answers in our Help Center or contact our support team.",
      btnIcon: <BookOpen size={16} />,
      btnText: "Visit Help Center"
    },
    {
      id: 3,
      icon: <Handshake size={24} className="cardIconMainSliderContactUs" />,
      title: "Partnerships",
      desc: "Interested in integrating, partnering, or growing together with Nexzell?",
      btnIcon: <Briefcase size={16} />,
      btnText: "Explore Partner Program"
    }
  ];

  return (
    <section className="sectionWrapperMainSliderContactUs">
      <div className="bgOverlayMainSliderContactUs"></div>
      
      <div className="containerMainSliderContactUs">
        
        {/* Top Content */}
        <div className="topContentMainSliderContactUs animFadeUpMainSliderContactUs">
          <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
           CONTACT US
          </div>
          
          <h1 className="headingMainSliderContactUs">
            Let's Talk <br className="hideOnMobileMainSliderContactUs" />
            <span className="textHighlightMainSliderContactUs">Commerce.</span>
          </h1>
          
          <p className="descriptionMainSliderContactUs">
            Whether you're launching a new store, scaling an existing 
            business, exploring integrations, or simply want to see what 
            Nexzell can do — we'd love to hear from you.
          </p>

          <div className="trustIndicatorsMainSliderContactUs animDelay1MainSliderContactUs">
            <div className="trustItemMainSliderContactUs">
              <MessageSquare size={24} className="trustIconMainSliderContactUs" />
              <div className="trustTextWrapperMainSliderContactUs">
                <h4 className="trustTitleMainSliderContactUs">Fast Response</h4>
                <p className="trustDescMainSliderContactUs">Within 24 hours</p>
              </div>
            </div>
            
            <div className="trustItemMainSliderContactUs">
              <Users size={24} className="trustIconMainSliderContactUs" />
              <div className="trustTextWrapperMainSliderContactUs">
                <h4 className="trustTitleMainSliderContactUs">Real People</h4>
                <p className="trustDescMainSliderContactUs">Talk to experts</p>
              </div>
            </div>
            
            <div className="trustItemMainSliderContactUs">
              <ShieldCheck size={24} className="trustIconMainSliderContactUs" />
              <div className="trustTextWrapperMainSliderContactUs">
                <h4 className="trustTitleMainSliderContactUs">Helpful Support</h4>
                <p className="trustDescMainSliderContactUs">At every stage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="cardsGridMainSliderContactUs">
          {cards.map((card, index) => (
            <div 
              key={card.id} 
              className={`contactCardMainSliderContactUs animDelay${index + 2}MainSliderContactUs`}
            >
              <div className="cardHeaderMainSliderContactUs">
                <div className="iconBoxMainSliderContactUs">
                  {card.icon}
                </div>
                <h3 className="cardTitleMainSliderContactUs">{card.title}</h3>
              </div>
              
              <p className="cardDescMainSliderContactUs">{card.desc}</p>
              
              <button className="cardBtnMainSliderContactUs">
                <div className="cardBtnLeftMainSliderContactUs">
                  {card.btnIcon}
                  <span>{card.btnText}</span>
                </div>
                <ArrowRight size={16} className="btnArrowMainSliderContactUs" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MainSliderContactUs;