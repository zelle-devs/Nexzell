import React from 'react';
import { ArrowRight, PlayCircle, Zap, Layers, ShieldCheck } from 'lucide-react';
import './MainSliderHome.css';

function MainSliderHome() {
  return (
    <section className="sectionWrapperMainSliderHome">
      <div className="containerMainSliderHome">
        
        <div className="contentMainSliderHome animatedFadeUpMainSliderHome">
          
          {/* Badge */}
          <div className="badgeMainSliderHome">
            <span className="badgeDotMainSliderHome"></span>
            ALL-IN-ONE ECOMMERCE PLATFORM
          </div>

          {/* Heading */}
          <h1 className="headingMainSliderHome">
            Sell Anything.<br />
            <span className="textHighlightMainSliderHome">Scale Everywhere.</span>
          </h1>

          {/* Description */}
          <p className="descriptionMainSliderHome">
            Nexzell gives you everything you need to build, manage and 
            grow your online store — products, orders, customers, 
            payments, marketing and analytics — all in one powerful 
            platform.
          </p>

          {/* Buttons */}
          <div className="btnGroupMainSliderHome">
            <button className="btnPrimaryMainSliderHome">
              Book a Free Demo <ArrowRight size={18} className="btnIconMainSliderHome" />
            </button>
            <button className="btnSecondaryMainSliderHome">
              <PlayCircle size={20} className="playIconMainSliderHome" /> Watch Video
            </button>
          </div>

          {/* Features List */}
          <div className="featuresListMainSliderHome">
            <div className="featureItemMainSliderHome">
              <Zap className="featureIconMainSliderHome" size={24} />
              <span className="featureTextMainSliderHome">No Coding<br/>Required</span>
            </div>
            <div className="featureItemMainSliderHome">
              <Layers className="featureIconMainSliderHome" size={24} />
              <span className="featureTextMainSliderHome">All-in-One<br/>Platform</span>
            </div>
            <div className="featureItemMainSliderHome">
              <ShieldCheck className="featureIconMainSliderHome" size={24} />
              <span className="featureTextMainSliderHome">Secure &<br/>Reliable</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MainSliderHome;