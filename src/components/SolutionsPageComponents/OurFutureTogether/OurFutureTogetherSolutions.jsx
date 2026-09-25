import React from 'react';
import { ArrowRight } from 'lucide-react';
import './OurFutureTogetherSolutions.css';

function OurFutureTogetherSolutions() {
  return (
    <section className="sectionWrapperOurFutureTogetherSolutions">
      <div className="containerOurFutureTogetherSolutions">
        <div className="cardOurFutureTogetherSolutions animFadeUpOurFutureTogetherSolutions">
          
          <div className="leftContentOurFutureTogetherSolutions">
            <h2 className="headingOurFutureTogetherSolutions">
              Your Business. Our Platform.<br />
              A Stronger Future Together.
            </h2>
            <p className="descriptionOurFutureTogetherSolutions">
              Join thousands of businesses growing with Nexzell.
            </p>
          </div>

          <div className="rightContentOurFutureTogetherSolutions">
            <button className="btnPrimaryOurFutureTogetherSolutions">
              Book a Free Demo <ArrowRight size={18} className="btnIconOurFutureTogetherSolutions" />
            </button>
            <p className="subtextOurFutureTogetherSolutions">
              or <a href="#" className="linkOurFutureTogetherSolutions">Talk to an Expert</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurFutureTogetherSolutions;