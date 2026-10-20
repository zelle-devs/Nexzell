"use client";

import React, { useEffect, useRef, useState } from "react";
import "./ProductPageBottomLastCards.css";

/* ------------------------------------------------------------------
   PAYMENT LOGOS  -> add your logo paths in `src` (e.g. "/logos/stripe.svg")
   While `src` is null a placeholder box is shown in that space.
------------------------------------------------------------------- */
const paymentLogosProductPageBottomLastCards = [
    { name: "Stripe", src: '/stripepay.svg' },
    { name: "PayPal", src: '/paypalpay.svg' },
    { name: "Apple Pay", src: '/applepay.svg' },
    { name: "Google Pay", src: '/googlepay.svg' },
];

/* ------------------------------------------------------------------
   MARKETING ICONS -> add your SVG paths from SVG Repo in `src`
   Order: Google Ads, Facebook, Instagram, TikTok, Mail
------------------------------------------------------------------- */
const marketingIconsProductPageBottomLastCards = [
    { name: "Google Ads", src: '/googleadds.svg' },
    { name: "Facebook", src: '/facebookadds.svg' },
    { name: "Instagram", src: '/instagramadds.svg' },
    { name: "TikTok", src: '/tiktokadds.png' },
    { name: "Mail", src: '/mailadds.svg' },
];

/* Bar heights (in %) for the analytics chart */
const barHeightsProductPageBottomLastCards = [
    22, 34, 28, 48, 38, 58, 44, 70, 52, 82, 60, 92, 68, 100, 76, 88,
];

/* ------------------------------------------------------------------
   CUSTOMERS CARD -> list items + profile data
   Set `avatar` to your image path (e.g. "/sarah.jpg").
   While `avatar` is null, a gradient box with initials is shown.
------------------------------------------------------------------- */
const customerFeaturesProductPageBottomLastCards = [
    "Customer profiles",
    "Purchase history",
    "Segmentation",
    "Communication tools",
    "Customer insights",
];

const customerProfileProductPageBottomLastCards = {
    name: "Sarah Ahmed",
    email: "sarah@company.com",
    avatar: null,
    initials: "SA",
    totalOrders: 12,
    totalSpent: 1284,
    tag: "VIP Customer",
};

const ArrowIconProductPageBottomLastCards = () => (
    <svg
        className="arrowIconProductPageBottomLastCards"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const TrendIconProductPageBottomLastCards = () => (
    <svg
        width="9"
        height="9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <line x1="5" y1="19" x2="19" y2="5" />
        <polyline points="9 5 19 5 19 15" />
    </svg>
);

/* Filled green circle with dark check (feature list) */
const CheckFilledIconProductPageBottomLastCards = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
            d="M7.2 12.4l3.3 3.3 6.3-6.6"
            stroke="#04120c"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

/* Outlined circle with check (VIP tag) */
const CheckOutlineIconProductPageBottomLastCards = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M7.5 12.5l3 3 6-6.5" />
    </svg>
);

/* Count-up hook for the revenue number */
function useCountUpProductPageBottomLastCards(target, start, duration = 1800) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;
        let frame;
        let startTime;
        const tick = (now) => {
            if (!startTime) startTime = now;
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [start, target, duration]);

    return value;
}

function ProductPageBottomLastCards() {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const revenue = useCountUpProductPageBottomLastCards(24450, inView);
    const percent = useCountUpProductPageBottomLastCards(12, inView, 1400);

    /* Customers card counters */
    const customerOrders = useCountUpProductPageBottomLastCards(
        customerProfileProductPageBottomLastCards.totalOrders,
        inView,
        1600
    );
    const customerSpent = useCountUpProductPageBottomLastCards(
        customerProfileProductPageBottomLastCards.totalSpent,
        inView,
        2000
    );

    return (
        <section
            ref={sectionRef}
            className={`sectionProductPageBottomLastCards ${inView ? "inViewProductPageBottomLastCards" : ""
                }`}
        >

            <div className="containerProductPageBottomLastCards">
                <article className="cardProductPageBottomLastCards cardFourProductPageBottomLastCards">
                   <div className="badgeEverythingBusinessStarter" style={{width:'fit-content'}}>
                            <span className="badgeDotEverythingBusinessStarter"></span>
                            CUSTOMERS
                        </div>

                    <h3 className="customerTitleProductPageBottomLastCards">
                        Know Your Customers.
                        <br />
                        Build Better Relationships.
                    </h3>

                    <div className="customerBodyProductPageBottomLastCards">
                        {/* ---- Feature list ---- */}
                        <ul className="customerListProductPageBottomLastCards">
                            {customerFeaturesProductPageBottomLastCards.map((item, index) => (
                                <li
                                    key={item}
                                    className="customerListItemProductPageBottomLastCards"
                                    style={{ "--i": index }}
                                >
                                    <span className="customerCheckProductPageBottomLastCards">
                                        <CheckFilledIconProductPageBottomLastCards />
                                    </span>
                                    <span className="customerListTextProductPageBottomLastCards">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* ---- Profile card ---- */}
                        <div className="customerProfileProductPageBottomLastCards">
                            <div className="customerProfileHeadProductPageBottomLastCards">
                                <div className="customerAvatarProductPageBottomLastCards">
                                    {customerProfileProductPageBottomLastCards.avatar ? (
                                        <img
                                            src={customerProfileProductPageBottomLastCards.avatar}
                                            alt={customerProfileProductPageBottomLastCards.name}
                                        />
                                    ) : (
                                        <span className="customerAvatarFallbackProductPageBottomLastCards">
                                            {customerProfileProductPageBottomLastCards.initials}
                                        </span>
                                    )}
                                </div>

                                <div className="customerIdentityProductPageBottomLastCards">
                                    <span className="customerNameProductPageBottomLastCards">
                                        {customerProfileProductPageBottomLastCards.name}
                                    </span>
                                    <span className="customerEmailProductPageBottomLastCards">
                                        {customerProfileProductPageBottomLastCards.email}
                                    </span>
                                </div>
                            </div>

                            <div className="customerStatsProductPageBottomLastCards">
                                <div className="customerStatProductPageBottomLastCards">
                                    <span className="customerStatLabelProductPageBottomLastCards">
                                        Total Orders
                                    </span>
                                    <span className="customerStatValueProductPageBottomLastCards">
                                        {customerOrders}
                                    </span>
                                </div>

                                <div className="customerStatProductPageBottomLastCards customerStatRightProductPageBottomLastCards">
                                    <span className="customerStatLabelProductPageBottomLastCards">
                                        Total Spent
                                    </span>
                                    <span className="customerStatValueProductPageBottomLastCards">
                                        ${customerSpent.toLocaleString("en-US")}
                                    </span>
                                </div>
                            </div>

                            <div className="customerTagProductPageBottomLastCards">
                                <CheckOutlineIconProductPageBottomLastCards />
                                <span>{customerProfileProductPageBottomLastCards.tag}</span>
                            </div>
                        </div>
                    </div>
                </article>
                {/* ================= CARD 1 : PAYMENTS ================= */}
                <article className="cardProductPageBottomLastCards cardOneProductPageBottomLastCards">
                    <div className="badgeProductPageBottomLastCards">
                        <span className="badgeNumberProductPageBottomLastCards">01</span>
                        <span className="badgeLabelProductPageBottomLastCards">PAYMENTS</span>
                    </div>

                    <h3 className="titleProductPageBottomLastCards">
                        Flexible Payments.
                        <br />
                        Higher Conversions.
                    </h3>

                    <p className="descriptionProductPageBottomLastCards">
                        Offer multiple secure payment options to give your customers a
                        smooth checkout experience.
                    </p>

                    <div className="paymentRowProductPageBottomLastCards">
                        {paymentLogosProductPageBottomLastCards.map((logo, index) => (
                            <div
                                key={logo.name}
                                className="paymentLogoProductPageBottomLastCards"
                                style={{ "--i": index }}
                                title={logo.name}
                            >
                                {logo.src ? (
                                    <img src={logo.src} alt={logo.name} />
                                ) : (
                                    <span className="placeholderProductPageBottomLastCards">
                                        {logo.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <button type="button" className="buttonProductPageBottomLastCards">
                        <span>Explore Payment Features</span>
                        <ArrowIconProductPageBottomLastCards />
                    </button>
                </article>

                {/* ================= CARD 2 : MARKETING ================= */}
                <article className="cardProductPageBottomLastCards cardTwoProductPageBottomLastCards">
                    <div className="badgeProductPageBottomLastCards">
                        <span className="badgeNumberProductPageBottomLastCards">02</span>
                        <span className="badgeLabelProductPageBottomLastCards">MARKETING</span>
                    </div>

                    <h3 className="titleProductPageBottomLastCards">
                        Turn Traffic Into Growth.
                    </h3>

                    <p className="descriptionProductPageBottomLastCards">
                        Create promotions, discounts and marketing campaigns to attract new
                        customers and bring existing ones back.
                    </p>

                    <div className="iconTrayProductPageBottomLastCards">
                        {marketingIconsProductPageBottomLastCards.map((icon, index) => (
                            <div
                                key={icon.name}
                                className={`iconBoxProductPageBottomLastCards ${index === 0 ? "iconBoxActiveProductPageBottomLastCards" : ""
                                    }`}
                                style={{ "--i": index }}
                                title={icon.name}
                            >
                                {icon.src ? (
                                    <img src={icon.src} alt={icon.name} />
                                ) : (
                                    <span className="iconPlaceholderProductPageBottomLastCards" />
                                )}
                            </div>
                        ))}
                    </div>

                    <button type="button" className="buttonProductPageBottomLastCards">
                        <span>Explore Marketing Features</span>
                        <ArrowIconProductPageBottomLastCards />
                    </button>
                </article>

                {/* ================= CARD 3 : ANALYTICS ================= */}
                <article className="cardProductPageBottomLastCards cardThreeProductPageBottomLastCards">
                    <div className="badgeProductPageBottomLastCards">
                        <span className="badgeNumberProductPageBottomLastCards">03</span>
                        <span className="badgeLabelProductPageBottomLastCards">ANALYTICS</span>
                    </div>

                    <h3 className="titleProductPageBottomLastCards">
                        Data That Drives Decisions.
                    </h3>

                    <p className="descriptionProductPageBottomLastCards">
                        Get real-time insights into sales, customers, products and
                        performance to make smarter business decisions.
                    </p>

                    <div className="chartWrapProductPageBottomLastCards">
                        <div className="chartProductPageBottomLastCards" aria-hidden="true">
                            <div className="gridLinesProductPageBottomLastCards">
                                <span />
                                <span />
                                <span />
                            </div>
                            <div className="barsProductPageBottomLastCards">
                                {barHeightsProductPageBottomLastCards.map((height, index) => (
                                    <span
                                        key={index}
                                        className="barProductPageBottomLastCards"
                                        style={{
                                            "--h": `${height}%`,
                                            "--i": index,
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="scanLineProductPageBottomLastCards" />
                        </div>

                        <div className="revenueBoxProductPageBottomLastCards">
                            <span className="revenueLabelProductPageBottomLastCards">Revenue</span>
                            <span className="revenueValueProductPageBottomLastCards">
                                ${revenue.toLocaleString("en-US")}
                            </span>
                            <span className="revenueTrendProductPageBottomLastCards">
                                <TrendIconProductPageBottomLastCards />
                                {percent}%
                            </span>
                        </div>
                    </div>

                    <button type="button" className="buttonProductPageBottomLastCards">
                        <span>Explore Analytics Features</span>
                        <ArrowIconProductPageBottomLastCards />
                    </button>
                </article>

                {/* ================= CARD 4 : CUSTOMERS ================= */}

            </div>
        </section>
    );
}

export default ProductPageBottomLastCards;