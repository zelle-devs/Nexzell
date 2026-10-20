import React from 'react';
import { ArrowRight, MonitorSmartphone, ListFilter, Zap, Search } from 'lucide-react';
import './CaseStudiesWhyItWorked.css';

function CaseStudiesWhyItWorked() {
  const features = [
    {
      icon: <MonitorSmartphone size={20} className="featureIconCaseStudiesWhyItWorked" />,
      title: "Modern & Responsive Design",
      desc: "Looks great on every device."
    },
    {
      icon: <ListFilter size={20} className="featureIconCaseStudiesWhyItWorked" />,
      title: "Product Display & Filtering",
      desc: "Easy browsing, higher conversions."
    },
    {
      icon: <Zap size={20} className="featureIconCaseStudiesWhyItWorked" />,
      title: "Performance Optimization",
      desc: "Fast loading, smooth experience."
    },
    {
      icon: <Search size={20} className="featureIconCaseStudiesWhyItWorked" />,
      title: "SEO Strategy",
      desc: "Better rankings, more organic traffic."
    }
  ];

  return (
    <section className="sectionWrapperCaseStudiesWhyItWorked">
      <div className="containerCaseStudiesWhyItWorked">
        
        <div className="mainCardCaseStudiesWhyItWorked animFadeUpCaseStudiesWhyItWorked">
          
          {/* Left Column: Text & CTA */}
          <div className="leftColCaseStudiesWhyItWorked">
             {/* <div className="badgeMainSliderCaseStudies animDelay1">
                                <span className="badgeDotMainSliderCaseStudies"></span>
                                THE SOLUTION
                            </div> */}
            
            <h2 className="headingCaseStudiesWhyItWorked animDelay2CaseStudiesWhyItWorked">
              Why It Worked
            </h2>
            
            <p className="descriptionCaseStudiesWhyItWorked animDelay3CaseStudiesWhyItWorked">
              We combined modern design, powerful eCommerce 
              features and SEO best practices to create a fast, 
              user-friendly platform that drove real business growth 
              for Furniture Mecca.
            </p>
            
            {/* <button className="btnPrimaryCaseStudiesWhyItWorked animDelay4CaseStudiesWhyItWorked">
              Explore More Case Studies <ArrowRight size={18} className="btnIconCaseStudiesWhyItWorked" />
            </button> */}
          </div>

          {/* Middle Column: Features List */}
          <div className="midColCaseStudiesWhyItWorked">
            <div className="featuresListCaseStudiesWhyItWorked">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`featureItemCaseStudiesWhyItWorked animDelay${index + 2}CaseStudiesWhyItWorked`}
                >
                  <div className="featureIconBoxCaseStudiesWhyItWorked">
                    {feature.icon}
                  </div>
                  <div className="featureTextWrapperCaseStudiesWhyItWorked">
                    <h4 className="featureTitleCaseStudiesWhyItWorked">{feature.title}</h4>
                    <p className="featureDescCaseStudiesWhyItWorked">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="rightColCaseStudiesWhyItWorked animFadeInRightCaseStudiesWhyItWorked">
            {/* Replace this src with your specific image */}
            <img 
              src="/CaseStudiesWhyItWorked.jpg" 
              alt="Interior furniture lighting" 
              className="cardImageCaseStudiesWhyItWorked" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default CaseStudiesWhyItWorked;