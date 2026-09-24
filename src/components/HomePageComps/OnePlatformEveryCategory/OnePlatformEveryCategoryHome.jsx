import React from 'react';
import { ArrowRight } from 'lucide-react';
import './OnePlatformEveryCategoryHome.css';

function OnePlatformEveryCategoryHome() {
  const categories = [
    {
      id: 1,
      title: "Electronics",
      desc: "Phones, gadgets & more",
      imgSrc: "/electronics-cat.png" 
    },
    {
      id: 2,
      title: "Fashion",
      desc: "Apparel, shoes & accessories",
      imgSrc: "/fashion-cat.png"
    },
    {
      id: 3,
      title: "Home & Living",
      desc: "Furniture, decor & essentials",
      imgSrc: "/home-cat.png"
    },
    {
      id: 4,
      title: "Beauty",
      desc: "Skincare, makeup & more",
      imgSrc: "/beauty-cat.png"
    },
    {
      id: 5,
      title: "Sports",
      desc: "Gear up for performance",
      imgSrc: "/sports-cat.png"
    },
    // {
    //   id: 6,
    //   title: "Toys & Kids",
    //   desc: "Fun for every age",
    //   imgSrc: "/toys-cat.png"
    // }
  ];

  return (
    <section className="sectionWrapperOnePlatformEveryCategoryHome">
      <div className="containerOnePlatformEveryCategoryHome">
        
        <div className="leftContentOnePlatformEveryCategoryHome">
          <h2 className="headingOnePlatformEveryCategoryHome">
            One Platform.<br />
            Every Category.
          </h2>
          <p className="descriptionOnePlatformEveryCategoryHome">
            From fashion to electronics, home decor to health & beauty, 
            Nexzell is built to support every type of business.
          </p>
          <button className="btnOutlineOnePlatformEveryCategoryHome">
            Explore All Categories <ArrowRight size={16} className="btnIconOnePlatformEveryCategoryHome" />
          </button>
        </div>

        <div className="gridOnePlatformEveryCategoryHome">
          {categories.map((cat) => (
            <div key={cat.id} className="cardOnePlatformEveryCategoryHome">
              <div className="cardImageWrapperOnePlatformEveryCategoryHome">
                <div 
                  className="cardImagePlaceholderOnePlatformEveryCategoryHome"
                  style={{ backgroundImage: `url(${cat.imgSrc})` }}
                ></div>
                <div className="cardGradientOverlayOnePlatformEveryCategoryHome"></div>
              </div>
              <div className="cardTextOnePlatformEveryCategoryHome">
                <h3 className="cardTitleOnePlatformEveryCategoryHome">{cat.title}</h3>
                <p className="cardDescOnePlatformEveryCategoryHome">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OnePlatformEveryCategoryHome;