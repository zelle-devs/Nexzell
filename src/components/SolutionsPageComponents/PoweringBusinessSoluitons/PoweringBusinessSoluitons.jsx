import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import './PoweringBusinessSoluitons.css';

function PoweringBusinessSoluitons() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  ];

  return (
    <section className="sectionWrapperPoweringBusinessSoluitons">
      <div className="containerPoweringBusinessSoluitons">
        
        <div className="leftContentPoweringBusinessSoluitons">
          <h4 className="subtitlePoweringBusinessSoluitons animFadeUpPoweringBusinessSoluitons">
            A GLOBAL ECOSYSTEM
          </h4>
          
          <h2 className="headingPoweringBusinessSoluitons animDelay1PoweringBusinessSoluitons">
            Powering Businesses<br />
            Around the World
          </h2>
          
          <p className="descriptionPoweringBusinessSoluitons animDelay2PoweringBusinessSoluitons">
            From local brands to global enterprises, Nexzell helps 
            businesses in <strong>120+ countries</strong> build and grow their online 
            stores.
          </p>
          
          <div className="statsRowPoweringBusinessSoluitons animDelay3PoweringBusinessSoluitons">
            <div className="statBlockPoweringBusinessSoluitons">
              <h3 className="statNumPoweringBusinessSoluitons">120+</h3>
              <p className="statLabelPoweringBusinessSoluitons">Countries</p>
            </div>
            <div className="statBlockPoweringBusinessSoluitons">
              <h3 className="statNumPoweringBusinessSoluitons">12,000+</h3>
              <p className="statLabelPoweringBusinessSoluitons">Businesses</p>
            </div>
            <div className="statBlockPoweringBusinessSoluitons">
              <h3 className="statNumPoweringBusinessSoluitons">99.9%</h3>
              <p className="statLabelPoweringBusinessSoluitons">Uptime</p>
            </div>
          </div>
        </div>

        <div className="rightContentPoweringBusinessSoluitons animFadeInRightPoweringBusinessSoluitons">
          <div className="mapImageWrapperPoweringBusinessSoluitons">
           
            
            <div className="floatingCardPoweringBusinessSoluitons">
              <p className="cardTextPoweringBusinessSoluitons">
                Global Commerce<br />
                Real Opportunities.<br />
                Real Growth.
              </p>
              
              <div className="cardBottomRowPoweringBusinessSoluitons">
                <div className="avatarGroupPoweringBusinessSoluitons">
                  {avatars.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt="User" 
                      className="avatarPoweringBusinessSoluitons" 
                    />
                  ))}
                  <button className="addBtnPoweringBusinessSoluitons">
                    <Plus size={14} />
                  </button>
                </div>
                
                <button className="actionBtnPoweringBusinessSoluitons">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PoweringBusinessSoluitons;