'use client'

import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './StartupsThatsTrustUS.css';

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

function StartupsThatsTrustUS() {
  const scrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  // Responsive States
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkScreenSize = () => {
      const width = window.innerWidth;

      setIsMobile(width < 649);
      setIsTablet(width >= 648 && width <= 1204);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  /* ---------- Original Desktop Logic ---------- */

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
      const cardLeft =
        card.getBoundingClientRect().left - trackRect.left + currentScroll;

      const distance = Math.abs(cardLeft - currentScroll);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((prev) =>
      prev === closestIndex ? prev : closestIndex
    );
  };

  const goToSlide = (index) => {
    const track = scrollRef.current;
    if (!track) return;

    const card = track.children[index];
    if (!card) return;

    const trackRect = track.getBoundingClientRect();

    const cardLeft =
      card.getBoundingClientRect().left - trackRect.left + track.scrollLeft;

    track.scrollTo({
      left: cardLeft,
      behavior: 'smooth'
    });
  };

  const handlePointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;

    const track = scrollRef.current;
    if (!track) return;

    e.preventDefault();

    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollStartRef.current = track.scrollLeft;

    track.classList.add('isDraggingStartupsThatsTrustUS');

    try {
      track.setPointerCapture(e.pointerId);
    } catch (err) {}
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
      track.classList.remove('isDraggingStartupsThatsTrustUS');

      try {
        if (
          track.hasPointerCapture &&
          track.hasPointerCapture(e.pointerId)
        ) {
          track.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}
    }
  };

  /* ---------- Card UI ---------- */

 const renderCard = (testimonial, cardStyle = {}) => (
   <div className="testimonialCardStartupsThatsTrustUS" style={cardStyle}>
      <p className="quoteTextStartupsThatsTrustUS">
        "{testimonial.quote}"
      </p>

      <div className="quoteIconWrapperStartupsThatsTrustUS">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="var(--nexzell-primary)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 21L16.41 14.904C16.634 14.343 16.75 13.737 16.75 13.111V3H24V13.111C24 16.035 23.003 18.775 21.282 21H14.017ZM0 21L2.394 14.904C2.617 14.343 2.733 13.737 2.733 13.111V3H9.983V13.111C9.983 16.035 8.986 18.775 7.265 21H0Z" />
        </svg>
      </div>

      <div className="userInfoStartupsThatsTrustUS">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="avatarStartupsThatsTrustUS"
          draggable={false}
        />

        <div className="userDetailsStartupsThatsTrustUS">
          <h5 className="userNameStartupsThatsTrustUS">
            {testimonial.name}
          </h5>

          <p className="userTitleStartupsThatsTrustUS">
            {testimonial.title}
          </p>

          <div className="starsStartupsThatsTrustUS">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill="#FBBF24"
                color="#FBBF24"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="sectionWrapperStartupsThatsTrustUS">
      <div className="containerStartupsThatsTrustUS">

        <div className="leftColumnStartupsThatsTrustUS">
          <h2 className="headingStartupsThatsTrustUS">
            Startups That<br />
            Trust Us.
          </h2>

          <p className="descriptionStartupsThatsTrustUS">
            We've helped early-stage startups turn bold ideas into successful digital product
          </p>

          {mounted && !isMobile && !isTablet && (
            <div className="navButtonsStartupsThatsTrustUS">
              <button
                onClick={() => scroll('left')}
                className="navBtnStartupsThatsTrustUS"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={() => scroll('right')}
                className="navBtnStartupsThatsTrustUS"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div className="rightColumnStartupsThatsTrustUS">
          {mounted && (
            (isMobile || isTablet) ? (
             <Swiper
  key={isTablet ? 'tablet' : 'mobile'}
  modules={[Pagination]}
  pagination={{ clickable: true }}
  spaceBetween={isTablet ? 24 : 16}
  slidesPerView={isTablet ? 2 : 1}
  className="mySwiperStartupsThatsTrustUS"
>
  {testimonials.map((testimonial) => (
    <SwiperSlide key={testimonial.id} style={{ height: 'auto' }}>
      {renderCard(testimonial, { width: '100%', minWidth: 0, height: '100%' })}
    </SwiperSlide>
  ))}
</Swiper>
            ) : (
              <>
                <div
                  className="carouselTrackStartupsThatsTrustUS"
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

                <div className="dotsStartupsThatsTrustUS">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      type="button"
                      aria-label={`Go to testimonial ${index + 1}`}
                      onClick={() => goToSlide(index)}
                      className={
                        'dotStartupsThatsTrustUS' +
                        (activeIndex === index
                          ? ' isActiveStartupsThatsTrustUS'
                          : '')
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

export default StartupsThatsTrustUS;