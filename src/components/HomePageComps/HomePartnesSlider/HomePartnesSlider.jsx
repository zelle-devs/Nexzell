import React from 'react';
import './HomePartnesSlider.css';

function HomePartnesSlider() {
  // Array of logos for the slider. You can replace the src with your actual SVGs or images.
  const logos = [
    { name: "Nike", text: "NIKE", img: '/logo1.png' },
    { name: "Samsung", text: "SAMSUNG",img: '/logo2.png'  },
    { name: "Zara", text: "ZARA",img: '/logo3.png'  },
    { name: "Apple", text: "APPLE",img: '/logo4.png'  },
    { name: "Lego", text: "LEGO",img: '/logo5.png' },
    // { name: "The North Face", text: "THE NORTH FACE",img: '/logo5.png'  },
    { name: "Coca-Cola", text: "COCA-COLA",img: '/logo7.png' },
    { name: "Sony", text: "SONY",img: '/logo8.png'  },
    { name: "Sony", text: "SONY",img: '/logo9.png'  },
    { name: "Sony", text: "SONY",img: '/logo10.png'  }
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
                  <img className='logoimagehomepartnerslider' src={logo.img}></img>
                  <div className="dividerHomePartnesSlider"></div>
                </div>
              ))}
            </div>

            {/* Second Set of Logos (Duplicate for seamless infinite loop) */}
            <div className="marqueeGroupHomePartnesSlider">
              {logos.map((logo, index) => (
                <div key={`set2-${index}`} className="logoItemHomePartnesSlider">
                  <img className='logoimagehomepartnerslider' src={logo.img}></img>
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