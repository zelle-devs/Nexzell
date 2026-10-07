import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CaseStudyOwnSuccessStory.css';
import Link from 'next/link';
function CaseStudyOwnSuccessStory() {
  return (
    <section className="sectionWrapperCaseStudyOwnSuccessStory">
      <div className="containerCaseStudyOwnSuccessStory">
        <div className="leftContentCaseStudyOwnSuccessStory animFadeUpCaseStudyOwnSuccessStory">
          <div className="badgeCaseStudyOwnSuccessStory">
            <span className="badgeDotCaseStudyOwnSuccessStory"></span>
            LETS BUILD YOUR SUCCESS
          </div>
          
          <h2 className="headingCaseStudyOwnSuccessStory">
           Ready to Create Your Own Success Story
          </h2>
          
          <p className="descriptionCaseStudyOwnSuccessStory">
           Lets discuss your projects and see how we can help you grow with the custom web solutions and digital marketing 
          </p>
          
          <div className="btnGroupCaseStudyOwnSuccessStory">
            <Link href='/consultation'>
            <button className="btnPrimaryCaseStudyOwnSuccessStory">
              Book a Free Demo <ArrowRight size={18} className="btnIconCaseStudyOwnSuccessStory" />
            </button>
            </Link>
            
            <button className="btnSecondaryCaseStudyOwnSuccessStory">
              Contact Us
            </button>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default CaseStudyOwnSuccessStory;