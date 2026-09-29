import React from 'react';
import { ArrowRight, FileText, LayoutGrid, BookOpen, HelpCircle } from 'lucide-react';
import './ToolsResourcesFingertips.css';

function ToolsResourcesFingertips() {
  const resourceCards = [
    {
      id: 1,
      icon: <FileText size={20} className="miniCardIconToolsResourcesFingertips" />,
      title: "Project Templates",
      desc: "Kickstart your next project"
    },
    {
      id: 2,
      icon: <LayoutGrid size={20} className="miniCardIconToolsResourcesFingertips" />,
      title: "Free Tools",
      desc: "Useful calculators & converters"
    },
    {
      id: 3,
      icon: <BookOpen size={20} className="miniCardIconToolsResourcesFingertips" />,
      title: "Guides & Ebooks",
      desc: "Download & learn on the go"
    },
    // {
    //   id: 4,
    //   icon: <HelpCircle size={20} className="miniCardIconToolsResourcesFingertips" />,
    //   title: "Help Center",
    //   desc: "Get answers quickly"
    // }
  ];

  return (
    <section className="sectionWrapperToolsResourcesFingertips">
      <div className="containerToolsResourcesFingertips">
        
        <div className="mainCardToolsResourcesFingertips animFadeUpToolsResourcesFingertips">
          
          <div className="leftContentToolsResourcesFingertips">
            <div className="badgeMainSliderResources animDelay1">
            <span className="badgeDotMainSliderResources"></span>
            QUICK ACCESS
          </div>
            
            <h2 className="headingToolsResourcesFingertips">
              Tools & Resources<br />
              at Your <span className="textHighlightToolsResourcesFingertips">Fingertips</span>
            </h2>
            
            <p className="descriptionToolsResourcesFingertips">
              Get instant access to our most popular tools, templates 
              and helpful resources to make your work easier.
            </p>
            
            <button className="btnPrimaryToolsResourcesFingertips">
              Visit Resource Hub <ArrowRight size={16} className="btnIconToolsResourcesFingertips" />
            </button>
          </div>

          <div className="rightContentToolsResourcesFingertips">
            {resourceCards.map((card, index) => (
              <div 
                key={card.id} 
                className={`miniCardToolsResourcesFingertips animDelay${index + 1}ToolsResourcesFingertips`}
              >
                <div className="iconBoxToolsResourcesFingertips">
                  {card.icon}
                </div>
                <div className="miniCardTextWrapperToolsResourcesFingertips">
                  <h4 className="miniCardTitleToolsResourcesFingertips">{card.title}</h4>
                  <p className="miniCardDescToolsResourcesFingertips">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ToolsResourcesFingertips;