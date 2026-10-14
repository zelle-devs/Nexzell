'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './OnePlatformEveryCategoryHome.css';

function OnePlatformEveryCategoryHome() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Start the image animation when the section scrolls into view (runs once)
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      id: 1,
      title: "Furniture",
      desc: "Furniture, decor & essentials",
      imgSrc: "/NexzellHomeMainCategoryGrid4.png",
      link: "/categories/furniture-home"
    },
    {
      id: 2,
      title: "Fashion",
      desc: "Apparel, shoes & accessories",
      imgSrc: "/NexzellHomeMainCategoryGrid2.png",
      link: "/categories/fashion-apparel"
    },
    {
      id: 3,
      title: "Electronics",
      desc: "Phones, gadgets & more",
      imgSrc: "/NexzellHomeMainCategoryGrid1.png",
      link: "/categories/electronics-gadgets"
    },
    {
      id: 4,
      title: "Beauty",
      desc: "Skincare, makeup & more",
      imgSrc: "/NexzellHomeMainCategoryGrid5.png",
      link: "/categories/beauty-personal-care"
    },
    {
      id: 5,
      title: "Sports",
      desc: "Gear up for performance",
      imgSrc: "/NexzellHomeMainCategoryGrid33.png",
      link: "/categories/sports-outdoors"
    },
    {
      id: 6,
      title: "Toys & Kids",
      desc: "Fun for every age",
      imgSrc: "/NexzellHomeMainCategoryGrid6.png",
      link: "/categories/toys-kids"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`sectionWrapperOnePlatformEveryCategoryHome ${
        isVisible ? 'isVisibleOnePlatformEveryCategoryHome' : ''
      }`}
    >
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
          <a href="/categories">
            <button className="btnOutlineOnePlatformEveryCategoryHome">
              Explore All Categories{' '}
              <ArrowRight size={16} className="btnIconOnePlatformEveryCategoryHome" />
            </button>
          </a>
        </div>

        <div className="gridOnePlatformEveryCategoryHome">
          {categories.map((cat, index) => (
            <a
              key={cat.id}
              href={cat.link}
              className="cardOnePlatformEveryCategoryHome"
            >
              <div className="cardImageWrapperOnePlatformEveryCategoryHome">
                <div
                  className="cardImageMotionOnePlatformEveryCategoryHome"
                  style={{ '--img-index': index }}
                >
                  <div
                    className="cardImagePlaceholderOnePlatformEveryCategoryHome"
                    style={{ backgroundImage: `url(${cat.imgSrc})` }}
                  ></div>
                </div>
                <div className="cardGradientOverlayOnePlatformEveryCategoryHome"></div>
              </div>
              <div className="cardTextOnePlatformEveryCategoryHome">
                <h3 className="cardTitleOnePlatformEveryCategoryHome">{cat.title}</h3>
                <p className="cardDescOnePlatformEveryCategoryHome">{cat.desc}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OnePlatformEveryCategoryHome;