import React from 'react';
import { ArrowRight } from 'lucide-react';
import './SimplerFutureCommerceAbout.css';

function SimplerFutureCommerceAbout() {
  return (
    <section className="sectionWrapperSimplerFutureCommerceAbout">
      <div className="containerSimplerFutureCommerceAbout">
        <div className="leftContentSimplerFutureCommerceAbout animFadeUpSimplerFutureCommerceAbout">
          <div className="badgeSimplerFutureCommerceAbout">
            <span className="badgeDotSimplerFutureCommerceAbout"></span>
            READY TO BUILD WHAT'S NEXT?
          </div>
          
          <h2 className="headingSimplerFutureCommerceAbout">
            Let's Create a Simpler Future for <span className="textHighlightSimplerFutureCommerceAbout">Commerce.</span>
          </h2>
          
          <p className="descriptionSimplerFutureCommerceAbout">
            Join thousands of businesses growing with Nexzell.
          </p>
          
          <div className="btnGroupSimplerFutureCommerceAbout">
            <button className="btnPrimarySimplerFutureCommerceAbout">
              Book a Free Demo <ArrowRight size={18} className="btnIconSimplerFutureCommerceAbout" />
            </button>
            <button className="btnSecondarySimplerFutureCommerceAbout">
              Contact Us
            </button>
          </div>
        </div>

        <div className="rightContentSimplerFutureCommerceAbout animFadeUpDelaySimplerFutureCommerceAbout">
          <div className="taglineRightSimplerFutureCommerceAbout">
            Build.<br />
            Run.<br />
            Grow.
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimplerFutureCommerceAbout;