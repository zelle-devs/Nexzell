import React from 'react';
import { ArrowRight, PlayCircle, Zap, Layers, ShieldCheck } from 'lucide-react';
import './MainSliderIntegrations.css';
import Link from 'next/link';
function MainSliderIntegrations() {
  return (
    <section className="sectionWrapperMainSliderIntegrations">
      <div className="containerMainSliderIntegrations">
        
        <div className="contentMainSliderIntegrations animatedFadeUpMainSliderIntegrations">
          
          {/* Badge */}
          <div className="badgeMainSliderIntegrations">
            <span className="badgeDotMainSliderIntegrations"></span>
            ALL-IN-ONE ECOMMERCE PLATFORM
          </div>

          {/* Heading */}
          <h1 className="headingMainSliderIntegrations">
            Sell Anything.<br />
            <span className="textHighlightMainSliderIntegrations">Scale Everywhere.</span>
          </h1>

          {/* Description */}
          <p className="descriptionMainSliderIntegrations">
            Nexzell gives you everything you need to build, manage and 
            grow your online store — products, orders, customers, 
            payments, marketing and analytics — all in one powerful 
            platform.
          </p>

          {/* Buttons */}
          <div className="btnGroupMainSliderIntegrations">
           <Link href='/consultation'>
            <button className="btnPrimaryMainSliderIntegrations">
              Book a Free Demo <ArrowRight size={18} className="btnIconMainSliderIntegrations" />
            </button>
           </Link>
           
            <button className="btnSecondaryMainSliderIntegrations">
              <PlayCircle size={20} className="playIconMainSliderIntegrations" /> Watch Video
            </button>
          </div>

          {/* Features List */}
          <div className="featuresListMainSliderIntegrations">
            <div className="featureItemMainSliderIntegrations">
              <Zap className="featureIconMainSliderIntegrations" size={24} />
              <span className="featureTextMainSliderIntegrations">No Coding<br/>Required</span>
            </div>
            <div className="featureItemMainSliderIntegrations">
              <Layers className="featureIconMainSliderIntegrations" size={24} />
              <span className="featureTextMainSliderIntegrations">All-in-One<br/>Platform</span>
            </div>
            <div className="featureItemMainSliderIntegrations">
              <ShieldCheck className="featureIconMainSliderIntegrations" size={24} />
              <span className="featureTextMainSliderIntegrations">Secure &<br/>Reliable</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MainSliderIntegrations;