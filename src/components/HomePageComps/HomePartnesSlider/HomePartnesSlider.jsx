import React from 'react';
import './HomePartnesSlider.css';

function HomePartnesSlider() {
  // Array of logos for the slider. You can replace the src with your actual SVGs or images.
  const logos = [
    { name: "Nike", text: "NIKE" },
    { name: "Samsung", text: "SAMSUNG" },
    { name: "Zara", text: "ZARA" },
    { name: "Apple", text: "APPLE" },
    { name: "Lego", text: "LEGO" },
    { name: "The North Face", text: "THE NORTH FACE" },
    { name: "Coca-Cola", text: "COCA-COLA" },
    { name: "Sony", text: "SONY" }
  ];

  return (
    <section className="sectionWrapperHomePartnesSlider">
      <div className="containerHomePartnesSlider">
        
        {/* Static Left Text */}
        <div className="leftTextHomePartnesSlider">
          <p>TRUSTED BY AMBITIOUS BRANDS</p>
          <br/>
          <p>WORLDWIDE</p>
        </div>

        {/* Scrolling Center Marquee */}
        <div className="marqueeWindowHomePartnesSlider">
          <div className="marqueeTrackHomePartnesSlider">
            
            {/* First Set of Logos */}
            <div className="marqueeGroupHomePartnesSlider">
              {logos.map((logo, index) => (
                <div key={`set1-${index}`} className="logoItemHomePartnesSlider">
                  <span className="placeholderLogoHomePartnesSlider">{logo.text}</span>
                  <div className="dividerHomePartnesSlider"></div>
                </div>
              ))}
            </div>

            {/* Second Set of Logos (Duplicate for seamless infinite loop) */}
            <div className="marqueeGroupHomePartnesSlider">
              {logos.map((logo, index) => (
                <div key={`set2-${index}`} className="logoItemHomePartnesSlider">
                  <span className="placeholderLogoHomePartnesSlider">{logo.text}</span>
                  <div className="dividerHomePartnesSlider"></div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Static Right Text */}
        <div className="rightTextHomePartnesSlider">
          <p>AND THOUSANDS MORE</p>
        </div>

      </div>
    </section>
  );
}

export default HomePartnesSlider;