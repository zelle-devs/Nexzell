import React from 'react';
import { Currency, Languages, MapPin, CreditCard } from 'lucide-react';
import './GlobalFromDayOne.css';

function GlobalFromDayOne() {
  return (
    <section className="sectionWrapperGlobalFromDayOne">
      <div className="containerGlobalFromDayOne">
        
        <div className="leftColumnGlobalFromDayOne">
          <div className="imageWrapperGlobalFromDayOne">
            <img 
              src="/EcommerceSimpler.png" 
              alt="Global Earth Network" 
              className="globeImageGlobalFromDayOne" 
            />
            
            <div className="floatingCardGlobalFromDayOne">
              <h4 className="cardTitleGlobalFromDayOne">Global Reach</h4>
              <p className="cardDescGlobalFromDayOne">
                Sell to customers worldwide with multi-currency, multi-language 
                and local payment options.
              </p>
              <div className="flagsRowGlobalFromDayOne">
                <img src="https://flagcdn.com/w40/us.png" alt="USA" className="flagIconGlobalFromDayOne" />
                <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="flagIconGlobalFromDayOne" />
                <img src="https://flagcdn.com/w40/eu.png" alt="EU" className="flagIconGlobalFromDayOne" />
                <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="flagIconGlobalFromDayOne" />
                <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="flagIconGlobalFromDayOne" />
              </div>
            </div>
          </div>
        </div>

        <div className="rightColumnGlobalFromDayOne">
          
          <div className="badgeGlobalFromDayOne">
            <span className="badgeDotGlobalFromDayOne"></span>
            GLOBAL COMMERCE
          </div>

          <h2 className="headingGlobalFromDayOne">
            Go Global<br />
            From Day One.
          </h2>

          <p className="descriptionGlobalFromDayOne">
            Whether you're selling locally or internationally, Nexzell gives 
            you the tools to reach more customers, more markets and 
            more opportunities — without boundaries.
          </p>

          <div className="featuresGridGlobalFromDayOne">
            
            <div className="featureItemGlobalFromDayOne">
              <div className="featureIconBoxGlobalFromDayOne">
                <Currency size={20} className="featureIconGlobalFromDayOne" />
              </div>
              <div className="featureTextContentGlobalFromDayOne">
                <h5 className="featureTitleGlobalFromDayOne">Multi-Currency Support</h5>
                <p className="featureDescGlobalFromDayOne">Sell in local currencies.</p>
              </div>
            </div>

            <div className="featureItemGlobalFromDayOne">
              <div className="featureIconBoxGlobalFromDayOne">
                <Languages size={20} className="featureIconGlobalFromDayOne" />
              </div>
              <div className="featureTextContentGlobalFromDayOne">
                <h5 className="featureTitleGlobalFromDayOne">Multi-Language</h5>
                <p className="featureDescGlobalFromDayOne">Localized shopping experience.</p>
              </div>
            </div>

            <div className="featureItemGlobalFromDayOne">
              <div className="featureIconBoxGlobalFromDayOne">
                <MapPin size={20} className="featureIconGlobalFromDayOne" />
              </div>
              <div className="featureTextContentGlobalFromDayOne">
                <h5 className="featureTitleGlobalFromDayOne">Global Shipping Tools</h5>
                <p className="featureDescGlobalFromDayOne">Integrations with top carriers.</p>
              </div>
            </div>

            <div className="featureItemGlobalFromDayOne">
              <div className="featureIconBoxGlobalFromDayOne">
                <CreditCard size={20} className="featureIconGlobalFromDayOne" />
              </div>
              <div className="featureTextContentGlobalFromDayOne">
                <h5 className="featureTitleGlobalFromDayOne">Local Payment Methods</h5>
                <p className="featureDescGlobalFromDayOne">Support for regional gateways.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default GlobalFromDayOne;