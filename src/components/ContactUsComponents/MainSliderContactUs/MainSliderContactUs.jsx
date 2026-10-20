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
  ArrowRight,
  Mail, // Naya icon add kiya
  Send  // Naya icon add kiya
} from 'lucide-react';
import './MainSliderContactUs.css';
import Link from 'next/link';
function MainSliderContactUs() {
 const cards = [
    {
      id: 1,
      icon: <Users size={24} className="cardIconMainSliderContactUs" />,
      title: "Talk to Sales",
      desc: "Want to see Nexzell in action or discuss the right solution for your business?",
      btnIcon: <Calendar size={16} />,
      btnText: "Book a Free Demo",
      href: "/consultation" // <-- Add your specific link here
    },
    {
      id: 3, // Agar aapne Partner card delete kar diya hai, toh id 3 rakhein
      icon: <Mail size={24} className="cardIconMainSliderContactUs" />,
      title: "Email Us",
      desc: "Have a general inquiry or need detailed information? Send us a direct email and our team will get back to you.",
      btnIcon: <Send size={16} />,
      btnText: "Send an Email",
      href: "mailto:support@nexzell.com" // Yahan apni asli email address likhein
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
              
              {/* Replace the button wrapper with the Link component */}
              <Link href={card.href} className="cardBtnMainSliderContactUs">
                <div className="cardBtnLeftMainSliderContactUs">
                  {card.btnIcon}
                  <span>{card.btnText}</span>
                </div>
                <ArrowRight size={16} className="btnArrowMainSliderContactUs" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MainSliderContactUs;