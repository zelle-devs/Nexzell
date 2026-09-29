'use client'

import React, { useState, useEffect } from 'react';
import { BookOpen, PlaySquare, FileText, LayoutTemplate, Calculator, ArrowRight } from 'lucide-react';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './ExploreResourceCategory.css';

// Data component ke bahar define karna best practice hai
const categories = [
    {
        id: 1,
        icon: <BookOpen size={22} className="cardIconExploreResourceCategory" />,
        title: "Documentation",
        desc: "Step-by-step guides, product docs and technical references to help you get started.",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 2,
        icon: <PlaySquare size={22} className="cardIconExploreResourceCategory" />,
        title: "Video Tutorials",
        desc: "Watch easy-to-follow tutorials and learn at your own pace.",
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 3,
        icon: <FileText size={22} className="cardIconExploreResourceCategory" />,
        title: "Blog Articles",
        desc: "Industry insights, best practices and expert tips for your growth.",
        img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 4,
        icon: <LayoutTemplate size={22} className="cardIconExploreResourceCategory" />,
        title: "Templates",
        desc: "Ready-to-use templates to save time and boost productivity.",
        img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 5,
        icon: <Calculator size={22} className="cardIconExploreResourceCategory" />,
        title: "Tools & Calculators",
        desc: "Useful tools and calculators to plan, measure and grow smarter.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop"
    }
];

function ExploreResourceCategory() {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1200);
        };

        // Initial check
        checkScreenSize();

        // Listen for resize events
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Card Content function taake code repeat na ho (DRY principle)
    const renderCardContent = (category) => (
        <div className="cardExploreResourceCategory">
            <div className="cardTopExploreResourceCategory">
                <div className="iconBoxExploreResourceCategory">
                    {category.icon}
                </div>
                <h3 className="cardTitleExploreResourceCategory">{category.title}</h3>
                <p className="cardDescExploreResourceCategory">{category.desc}</p>

                <button className="cardBtnExploreResourceCategory">
                    View Resources <ArrowRight size={14} className="btnArrowExploreResourceCategory" />
                </button>
            </div>

            <div className="cardBottomExploreResourceCategory">
                <img
                    src={category.img}
                    alt={category.title}
                    className="cardImageExploreResourceCategory"
                />
            </div>
        </div>
    );

    return (
        <section className="sectionWrapperExploreResourceCategory">
            <div className="containerExploreResourceCategory">

                {/* Header - Isko bhi maine fix kar diya hai pichli mistake ke mutabiq */}
                <div className="headerExploreResourceCategory animFadeUpExploreResourceCategory">
                    <div className="badgeMainSliderResources animDelay1">
                        <span className="badgeDotMainSliderResources"></span>
                        RESOURCES CATEGORY
                    </div>
                    <h2 className="headingExploreResourceCategory">
                        Explore Resources by <span className="textHighlightExploreResourceCategory">Category</span>
                    </h2>
                    <p className="descriptionExploreResourceCategory">
                        Find what you need — from helpful guides and tutorials to templates and industry insights.
                    </p>
                </div>

                {/* Conditional Rendering: Desktop me Grid, Mobile me Slider */}
                {mounted && (
                    isMobile ? (
                        // ================= SLIDER FOR < 1200px =================
                        <Swiper
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                // 600px se bari screen (Tablets) pe 2 cards
                                600: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                // 900px se bari screen pe 3 cards
                                900: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                }
                            }}
                            className="mySwiperExploreResourceCategory"
                        >
                            {categories.map((category) => (
                                <SwiperSlide key={category.id} className="swiperSlideExploreResource">
                                    {renderCardContent(category)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        // ================= GRID FOR >= 1200px (TOUCH BHI NAHI KIYA) =================
                        <div className="gridExploreResourceCategory">
                            {categories.map((category, index) => (
                                <div
                                    key={category.id}
                                    className={`animDelay${index + 1}ExploreResourceCategory`}
                                >
                                    {renderCardContent(category)}
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>
        </section>
    );
}

export default ExploreResourceCategory;