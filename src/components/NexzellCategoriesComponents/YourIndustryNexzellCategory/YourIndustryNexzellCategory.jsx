import React from 'react';
import { ArrowRight } from 'lucide-react';
import './YourIndustryNexzellCategory.css';
import Link from 'next/link';
function YourIndustryNexzellCategory() {
  return (
    <section className="sectionWrapperYourIndustryNexzellCategory">
      <div className="containerYourIndustryNexzellCategory">
        <div className="leftContentYourIndustryNexzellCategory animFadeUpYourIndustryNexzellCategory">
          <div className="badgeYourIndustryNexzellCategory">
            <span className="badgeDotYourIndustryNexzellCategory"></span>
           READY TO GROW?
          </div>
          
          <h2 className="headingYourIndustryNexzellCategory">
           Ready to grow in your  <span className="textHighlightYourIndustryNexzellCategory">industry ?</span>
          </h2>
          
          <p className="descriptionYourIndustryNexzellCategory">
           Get expert guidance and see how Nexzell can help you streamline operations reach new customers and scale faster
          </p>
          
          <div className="btnGroupYourIndustryNexzellCategory">
            <Link href='/contact'>
            <button className="btnPrimaryYourIndustryNexzellCategory">
             See Nexzell In Action<ArrowRight size={18} className="btnIconYourIndustryNexzellCategory" />
            </button>
            </Link>
           
          </div>
        </div>

        {/* <div className="rightContentYourIndustryNexzellCategory animFadeUpDelayYourIndustryNexzellCategory">
          <div className="taglineRightYourIndustryNexzellCategory">
            Build.<br />
            Run.<br />
            Grow.
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default YourIndustryNexzellCategory;