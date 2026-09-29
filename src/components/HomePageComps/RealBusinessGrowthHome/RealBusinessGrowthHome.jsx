'use client'
import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './RealBusinessGrowthHome.css';

// Data component ke bahar (Performance optimization)
const testimonials = [
  {
    id: 1,
    quote: "Nexzell made it effortless for us to launch and scale our online store. The tools are powerful and easy to use.",
    name: "Sarah Ahmed",
    title: "Founder, GlowBeauty",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "We switched to Nexzell and saw a 3x increase in our sales within 6 months. The platform just works.",
    name: "James Carter",
    title: "CEO, TrendHub",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "From product management to global payments, everything we need is in one place. Highly recommended.",
    name: "Daniel Kim",
    title: "Owner, UrbanTech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];

function RealBusinessGrowthHome() {
  const scrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Responsive State
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

  /* ---------- Original Desktop Logic (Untouched) ---------- */
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    const track = scrollRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    if (!cards.length) return;

    const trackRect = track.getBoundingClientRect();
    const currentScroll = track.scrollLeft;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardLeft = card.getBoundingClientRect().left - trackRect.left + currentScroll;
      const distance = Math.abs(cardLeft - currentScroll);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
  };

  const goToSlide = (index) => {
    const track = scrollRef.current;
    if (!track) return;
    const card = track.children[index];
    if (!card) return;
    const trackRect = track.getBoundingClientRect();
    const cardLeft = card.getBoundingClientRect().left - trackRect.left + track.scrollLeft;
    track.scrollTo({ left: cardLeft, behavior: 'smooth' });
  };

  const handlePointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    const track = scrollRef.current;
    if (!track) return;

    e.preventDefault();
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollStartRef.current = track.scrollLeft;
    track.classList.add('isDraggingRealBusinessGrowthHome');

    try { track.setPointerCapture(e.pointerId); } catch (err) {}
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const track = scrollRef.current;
    if (!track) return;
    const deltaX = e.clientX - startXRef.current;
    track.scrollLeft = scrollStartRef.current - deltaX;
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const track = scrollRef.current;

    if (track) {
      track.classList.remove('isDraggingRealBusinessGrowthHome');
      try {
        if (track.hasPointerCapture && track.hasPointerCapture(e.pointerId)) {
          track.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}
    }
  };

  /* ---------- DRY Principle: Card UI Function ---------- */
  const renderCard = (testimonial) => (
    <div className="testimonialCardRealBusinessGrowthHome">
      <p className="quoteTextRealBusinessGrowthHome">"{testimonial.quote}"</p>

      <div className="quoteIconWrapperRealBusinessGrowthHome">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--nexzell-primary)" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21L16.41 14.904C16.634 14.343 16.75 13.737 16.75 13.111V3H24V13.111C24 16.035 23.003 18.775 21.282 21H14.017ZM0 21L2.394 14.904C2.617 14.343 2.733 13.737 2.733 13.111V3H9.983V13.111C9.983 16.035 8.986 18.775 7.265 21H0Z" />
        </svg>
      </div>

      <div className="userInfoRealBusinessGrowthHome">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="avatarRealBusinessGrowthHome"
          draggable={false}
        />
        <div className="userDetailsRealBusinessGrowthHome">
          <h5 className="userNameRealBusinessGrowthHome">{testimonial.name}</h5>
          <p className="userTitleRealBusinessGrowthHome">{testimonial.title}</p>
          <div className="starsRealBusinessGrowthHome">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="#FBBF24" color="#FBBF24" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="sectionWrapperRealBusinessGrowthHome">
      <div className="containerRealBusinessGrowthHome">

        <div className="leftColumnRealBusinessGrowthHome">
          <h2 className="headingRealBusinessGrowthHome">
            Real Businesses.<br />
            Real Growth.
          </h2>
          <p className="descriptionRealBusinessGrowthHome">
            Thousands of brands trust Nexzell to power their ecommerce 
            journey. Here's what some of them have to say.
          </p>
          
          {/* Arrow Buttons sirif Desktop par show honge */}
          {mounted && !isMobile && (
            <div className="navButtonsRealBusinessGrowthHome">
              <button onClick={() => scroll('left')} className="navBtnRealBusinessGrowthHome">
                <ArrowLeft size={18} />
              </button>
              <button onClick={() => scroll('right')} className="navBtnRealBusinessGrowthHome">
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div className="rightColumnRealBusinessGrowthHome">
          {mounted && (
            isMobile ? (
              /* ================= SLIDER FOR < 1200px ================= */
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  }
                }}
                className="mySwiperRealBusinessGrowthHome"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    {renderCard(testimonial)}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              /* ================= ORIGINAL DESKTOP VIEW >= 1200px ================= */
              <>
                <div
                  className="carouselTrackRealBusinessGrowthHome"
                  ref={scrollRef}
                  onScroll={handleScroll}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                >
                  {testimonials.map((testimonial) => (
                    <React.Fragment key={testimonial.id}>
                      {renderCard(testimonial)}
                    </React.Fragment>
                  ))}
                </div>

                <div className="dotsRealBusinessGrowthHome">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      type="button"
                      aria-label={`Go to testimonial ${index + 1}`}
                      onClick={() => goToSlide(index)}
                      className={
                        'dotRealBusinessGrowthHome' +
                        (activeIndex === index ? ' isActiveRealBusinessGrowthHome' : '')
                      }
                    />
                  ))}
                </div>
              </>
            )
          )}
        </div>

      </div>
    </section>
  );
}

export default RealBusinessGrowthHome;