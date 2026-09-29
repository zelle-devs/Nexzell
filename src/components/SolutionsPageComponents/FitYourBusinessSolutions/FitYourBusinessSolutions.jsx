'use client'
import React, { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './FitYourBusinessSolutions.css';

// Data ko bahar rakha hai taake baar baar render na ho
const cards = [
  {
    id: 1,
    number: "01",
    title: "For Startups",
    desc: "Turn your idea into a successful online business.",
    features: [
      "Launch your store quickly",
      "Essential ecommerce tools",
      "Affordable and scalable",
      "Built for your first 1,000 customers"
    ],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    number: "02",
    title: "For Growing Brands",
    desc: "Scale your business with confidence.",
    features: [
      "Manage more products & orders",
      "Advanced marketing tools",
      "Data-driven insights",
      "Built for sustainable growth"
    ],
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    number: "03",
    title: "For Enterprises",
    desc: "Powerful infrastructure for complex needs.",
    features: [
      "Handle large catalogs & high volume",
      "Advanced integrations",
      "Multi-team collaboration",
      "Security, reliability & custom solutions"
    ],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    number: "04",
    title: "Global Commerce",
    desc: "Take your business beyond borders.",
    features: [
      "Multi-currency & multi-language",
      "Global payment methods",
      "International shipping support",
      "Manage all markets from one platform"
    ],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
  }
];

function FitYourBusinessSolutions() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // DRY Principle: Card render karne ka function (extraClass animation k liye)
  const renderCardContent = (card, extraClass = "") => (
    <div className={`cardFitYourBusinessSolutions ${extraClass}`}>
      <div className="cardTopFitYourBusinessSolutions">
        <div className="cardNumberFitYourBusinessSolutions">{card.number}</div>
        <h3 className="cardTitleFitYourBusinessSolutions">{card.title}</h3>
        <p className="cardDescFitYourBusinessSolutions">{card.desc}</p>

        <ul className="cardFeaturesFitYourBusinessSolutions">
          {card.features.map((feat, i) => (
            <li key={i} className="featureItemFitYourBusinessSolutions">
              <div className="checkIconWrapperFitYourBusinessSolutions">
                <Check size={12} strokeWidth={3} className="checkIconFitYourBusinessSolutions" />
              </div>
              <span className="featureTextFitYourBusinessSolutions">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="cardBottomFitYourBusinessSolutions">
        <div className="imageWrapperFitYourBusinessSolutions">
          <img src={card.img} alt={card.title} className="cardImageFitYourBusinessSolutions" />
          <div className="imageOverlayFitYourBusinessSolutions"></div>
          <button className="cardBtnFitYourBusinessSolutions">
            Learn More <ArrowRight size={16} className="btnIconFitYourBusinessSolutions" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="sectionWrapperFitYourBusinessSolutions">
      <div className="containerFitYourBusinessSolutions">

        <div className="headerFitYourBusinessSolutions animFadeUpFitYourBusinessSolutions">
          {/* Header classes fixed to match your CSS animations */}
           <div className="badgeEverythingBusinessStarter animDelay1">
            <span className="badgeDotEverythingBusinessStarter"></span>
            SOLUTIONS FOR EVERY BUSINESS
          </div>
          <h2 className="titleFitYourBusinessSolutions">Find the Right Fit for Your Business</h2>
          <p className="descFitYourBusinessSolutions">
            Tailored solutions for startups, growing brands, enterprises and global commerce.
          </p>
        </div>

        {/* Conditional Rendering: Desktop me Grid, Mobile me Slider */}
        {mounted && (
          isMobile ? (
            /* ================= SLIDER FOR < 1200px ================= */
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                // 640px se bari screen (Tablets) pe 2 cards
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // 900px pe 3 cards if needed
                900: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                }
              }}
              className="mySwiperFitYourBusinessSolutions"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id} className="swiperSlideFitYourBusiness">
                  {renderCardContent(card)}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            /* ================= GRID FOR >= 1200px (Untouched) ================= */
            <div className="gridFitYourBusinessSolutions">
              {cards.map((card, index) => (
                <React.Fragment key={card.id}>
                  {/* Grid layout mein wahi delay animation apply hogi */}
                  {renderCardContent(card, `animDelay${index + 1}FitYourBusinessSolutions`)}
                </React.Fragment>
              ))}
            </div>
          )
        )}

      </div>
    </section>
  );
}

export default FitYourBusinessSolutions;