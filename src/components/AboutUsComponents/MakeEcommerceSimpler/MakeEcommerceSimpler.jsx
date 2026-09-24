import React from 'react';
import { Sparkles, Users, Timer, Hexagon, Plus } from 'lucide-react';
import './MakeEcommerceSimpler.css';

function MakeEcommerceSimpler() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  ];

  return (
    <section className="sectionWrapperMakeEcommerceSimpler">
      <div className="containerMakeEcommerceSimpler">
        
        <div className="leftColMakeEcommerceSimpler animFadeInLeftMakeEcommerceSimpler">
          <div className="imageWrapperMakeEcommerceSimpler">
            <img 
              src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop" 
              alt="Global Network" 
              className="mainImageMakeEcommerceSimpler"
            />
            
            <div className="overlayCardMakeEcommerceSimpler">
              <div className="cardHeaderMakeEcommerceSimpler">
                <div className="cardIconBoxMakeEcommerceSimpler">
                  <Sparkles size={16} className="cardIconMakeEcommerceSimpler" />
                </div>
                <p className="cardTextMakeEcommerceSimpler">
                  Powering businesses<br />in 120+ countries
                </p>
              </div>
              
              <div className="avatarRowMakeEcommerceSimpler">
                {avatars.map((img, index) => (
                  <img 
                    key={index} 
                    src={img} 
                    alt="User" 
                    className="avatarImageMakeEcommerceSimpler" 
                  />
                ))}
                <button className="addBtnMakeEcommerceSimpler">
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="rightColMakeEcommerceSimpler">
          <div className="badgeMakeEcommerceSimpler animDelay1MakeEcommerceSimpler">
            <span className="badgeDotMakeEcommerceSimpler"></span>
            OUR MISSION
          </div>

          <h2 className="headingMakeEcommerceSimpler animDelay2MakeEcommerceSimpler">
            Make Ecommerce Simpler.<br />
            <span className="textHighlightMakeEcommerceSimpler">For Everyone.</span>
          </h2>

          <p className="descriptionMakeEcommerceSimpler animDelay3MakeEcommerceSimpler">
            We believe powerful ecommerce technology should be accessible 
            to every business — from ambitious startups to global enterprises. 
            Our mission is to remove complexity, so businesses can focus on 
            what truly matters: their customers and their growth.
          </p>

          <div className="featuresRowMakeEcommerceSimpler animDelay4MakeEcommerceSimpler">
            
            <div className="featureItemMakeEcommerceSimpler">
              <div className="featureIconWrapperMakeEcommerceSimpler">
                <Users size={20} className="featureIconMakeEcommerceSimpler" />
              </div>
              <h4 className="featureTitleMakeEcommerceSimpler">More Opportunities</h4>
              <p className="featureDescMakeEcommerceSimpler">Make commerce accessible to businesses of all sizes.</p>
            </div>

            <div className="featureItemMakeEcommerceSimpler">
              <div className="featureIconWrapperMakeEcommerceSimpler">
                <Timer size={20} className="featureIconMakeEcommerceSimpler" />
              </div>
              <h4 className="featureTitleMakeEcommerceSimpler">More Innovation</h4>
              <p className="featureDescMakeEcommerceSimpler">Continuously evolve to meet the changing needs of commerce.</p>
            </div>

            <div className="featureItemMakeEcommerceSimpler">
              <div className="featureIconWrapperMakeEcommerceSimpler">
                <Hexagon size={20} className="featureIconMakeEcommerceSimpler" />
              </div>
              <h4 className="featureTitleMakeEcommerceSimpler">A More Connected World</h4>
              <p className="featureDescMakeEcommerceSimpler">Help businesses reach customers everywhere.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default MakeEcommerceSimpler;