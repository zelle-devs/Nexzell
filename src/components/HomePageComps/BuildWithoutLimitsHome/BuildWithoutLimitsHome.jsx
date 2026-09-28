import React from 'react';
import { ArrowRight } from 'lucide-react';
import './BuildWithoutLimitsHome.css';
import Link from 'next/link';
function BuildWithoutLimitsHome() {
  return (
    <section className="sectionWrapperBuildWithoutLimitsHome">
      <div className="containerBuildWithoutLimitsHome">
        
        <div className="leftContentBuildWithoutLimitsHome">
          <h2 className="headingBuildWithoutLimitsHome">
            Ready to Build<br />
            Without Limits?
          </h2>
          <p className="descriptionBuildWithoutLimitsHome">
            Join thousands of businesses growing with Nexzell.<br />
            Book a free demo and see how it can work for you.
          </p>
          <div className="btnGroupBuildWithoutLimitsHome">
            <Link href='/consultation'>
            
            <button className="btnPrimaryBuildWithoutLimitsHome">
              Book a Free Demo <ArrowRight size={18} className="btnIconBuildWithoutLimitsHome" />
            </button>
            </Link>
            <button className="btnSecondaryBuildWithoutLimitsHome">
              Talk to an Expert
            </button>
          </div>
        </div>

        <div className="rightContentBuildWithoutLimitsHome">
         
          <div className="imageGradientOverlayBuildWithoutLimitsHome"></div>
        </div>

      </div>
    </section>
  );
}

export default BuildWithoutLimitsHome;