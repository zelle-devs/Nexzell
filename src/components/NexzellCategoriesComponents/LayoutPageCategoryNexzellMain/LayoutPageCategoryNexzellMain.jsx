"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  animate,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight, Check, ChevronLeft, ChevronRight, Play, Quote, Star, Minus, Plus,
  Tag, Users, TrendingUp, BarChart3, UserCheck, Sofa, BedDouble, Briefcase, Trees,
  Lamp, Shirt, Glasses, Dumbbell, Baby, Smartphone, Laptop, Headphones, Camera,
  Home, Gamepad2, Droplets, Palette, Scissors, Flower2, Sparkles, Brush,
  Footprints, Backpack, Watch, Tent, Puzzle, GraduationCap, Bike,
} from "lucide-react";
import "./LayoutPageCategoryNexzellMain.css";

/* ---------- icon lookup (data file stores icon names as strings) ---------- */
const iconMapLayoutPageCategoryNexzellMain = {
  Tag, Users, TrendingUp, BarChart3, UserCheck, Sofa, BedDouble, Briefcase, Trees,
  Lamp, Shirt, Glasses, Dumbbell, Baby, Smartphone, Laptop, Headphones, Camera,
  Home, Gamepad2, Droplets, Palette, Scissors, Flower2, Sparkles, Brush,
  Footprints, Backpack, Watch, Tent, Puzzle, GraduationCap, Bike,
};
const IconLayoutPageCategoryNexzellMain = ({ name, size = 20 }) => {
  const Cmp = iconMapLayoutPageCategoryNexzellMain[name] || Sparkles;
  return <Cmp size={size} strokeWidth={1.8} />;
};

/* ---------- framer-motion variants ---------- */
const EASE = [0.22, 1, 0.36, 1];
const staggerLayoutPageCategoryNexzellMain = (gap = 0.1, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren: delay } },
});
const fadeUpLayoutPageCategoryNexzellMain = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};
const slideLeftLayoutPageCategoryNexzellMain = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};
const slideRightLayoutPageCategoryNexzellMain = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};
const popLayoutPageCategoryNexzellMain = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring", stiffness: 140, damping: 16 },
  },
};
const viewOnceLayoutPageCategoryNexzellMain = { once: true, margin: "-80px" };

/* ---------- animated number (custom count-up) ---------- */
function CountUpLayoutPageCategoryNexzellMain({ value, prefix = "", suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* ---------- section badge ---------- */
const BadgeLayoutPageCategoryNexzellMain = ({ children }) => (
  <span className="badgeLayoutPageCategoryNexzellMain">
    <span className="badgeDotLayoutPageCategoryNexzellMain" />
    {children}
  </span>
);

const StarsLayoutPageCategoryNexzellMain = ({ count = 5 }) => (
  <span className="starsLayoutPageCategoryNexzellMain" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
    ))}
  </span>
);

/* ======================================================================
   HERO
====================================================================== */
function HeroLayoutPageCategoryNexzellMain({ data, badge }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.18]);

  return (
    <section ref={ref} className="heroSectionLayoutPageCategoryNexzellMain">
      <motion.div className="heroBgLayoutPageCategoryNexzellMain" style={{ y: imgY, scale: imgScale }}>
        <img src={data.image} alt="" className="heroBgImgLayoutPageCategoryNexzellMain" />
      </motion.div>
      <div className="heroOverlayLayoutPageCategoryNexzellMain" />

      <div className="containerLayoutPageCategoryNexzellMain heroInnerLayoutPageCategoryNexzellMain">
        <motion.div
          className="heroContentLayoutPageCategoryNexzellMain"
          variants={staggerLayoutPageCategoryNexzellMain(0.13, 0.1)}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpLayoutPageCategoryNexzellMain}>
            <BadgeLayoutPageCategoryNexzellMain>{badge}</BadgeLayoutPageCategoryNexzellMain>
          </motion.div>

          <motion.h1 variants={fadeUpLayoutPageCategoryNexzellMain} className="heroTitleLayoutPageCategoryNexzellMain">
            {data.title}{" "}
            <span className="accentTextLayoutPageCategoryNexzellMain">{data.highlight}</span>
          </motion.h1>

          <motion.p variants={fadeUpLayoutPageCategoryNexzellMain} className="heroDescLayoutPageCategoryNexzellMain">
            {data.description}
          </motion.p>

          <motion.div variants={fadeUpLayoutPageCategoryNexzellMain} className="btnRowLayoutPageCategoryNexzellMain">
            <Link href={data.primaryCta.href} className="btnPrimaryLayoutPageCategoryNexzellMain">
              {data.primaryCta.label}
              <ArrowRight size={16} className="btnArrowLayoutPageCategoryNexzellMain" />
            </Link>
            <Link href={data.secondaryCta.href} className="btnGhostLayoutPageCategoryNexzellMain">
              {/* <Play size={12} fill="currentColor" /> */}
              {data.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.div variants={staggerLayoutPageCategoryNexzellMain(0.12)} className="statsRowLayoutPageCategoryNexzellMain">
            {data.stats.map((s) => (
              <motion.div key={s.label} variants={popLayoutPageCategoryNexzellMain} className="statItemLayoutPageCategoryNexzellMain">
                <span className="statIconLayoutPageCategoryNexzellMain">
                  <IconLayoutPageCategoryNexzellMain name={s.icon} size={30} />
                </span>
                <span>
                  <strong className="statValueLayoutPageCategoryNexzellMain">
                    <CountUpLayoutPageCategoryNexzellMain value={s.value} suffix={s.suffix} />
                  </strong>
                  <small className="statLabelLayoutPageCategoryNexzellMain">{s.label}</small>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* floating revenue card */}
        <motion.div
          className="floatWrapRevenueLayoutPageCategoryNexzellMain"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
        >
          <motion.div
            className="revenueCardLayoutPageCategoryNexzellMain"
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div>
              <span className="revenueLabelLayoutPageCategoryNexzellMain">Total Revenue</span>
              <strong className="revenueValueLayoutPageCategoryNexzellMain">
                <CountUpLayoutPageCategoryNexzellMain value={data.revenue.value} prefix={data.revenue.prefix} duration={2.2} />
              </strong>
              <span className="revenueGrowthLayoutPageCategoryNexzellMain">▲ {data.revenue.growth}</span>
            </div>
            <div className="revenueBarsLayoutPageCategoryNexzellMain" aria-hidden="true">
              {[40, 62, 50, 85, 100].map((h, i) => (
                <motion.i
                  key={i}
                  className="revenueBarLayoutPageCategoryNexzellMain"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: h / 100 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.7, ease: EASE }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* top categories panel */}
        <motion.aside
          className="catPanelLayoutPageCategoryNexzellMain"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
        >
          <h3 className="catPanelTitleLayoutPageCategoryNexzellMain">Top Categories</h3>
          <motion.ul
            className="catListLayoutPageCategoryNexzellMain"
            variants={staggerLayoutPageCategoryNexzellMain(0.09, 0.9)}
            initial="hidden"
            animate="visible"
          >
            {data.topCategories.map((cat) => (
              <motion.li
                key={cat.label}
                variants={slideRightLayoutPageCategoryNexzellMain}
                whileHover={{ x: 6 }}
                className="catItemLayoutPageCategoryNexzellMain"
              >
                <span className="catIconLayoutPageCategoryNexzellMain">
                  <IconLayoutPageCategoryNexzellMain name={cat.icon} size={20} />
                </span>
                {cat.label}
              </motion.li>
            ))}
          </motion.ul>
        </motion.aside>
      </div>
    </section>
  );
}

/* ======================================================================
   BUILT FOR  (image + interactive product card)
====================================================================== */
function BuiltForLayoutPageCategoryNexzellMain({ data }) {
  const p = data.product;
  const [color, setColor] = useState(0);
  const [option, setOption] = useState(0);
  const [qty, setQty] = useState(1);
  const [thumb, setThumb] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section className="sectionLayoutPageCategoryNexzellMain">
      <div className="containerLayoutPageCategoryNexzellMain builtGridLayoutPageCategoryNexzellMain">
        <motion.div
          className="builtMediaLayoutPageCategoryNexzellMain"
          variants={slideLeftLayoutPageCategoryNexzellMain}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnceLayoutPageCategoryNexzellMain}
        >
          <img src={data.image} alt="" className="builtImgLayoutPageCategoryNexzellMain" />

          <motion.div
            className="productCardLayoutPageCategoryNexzellMain"
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewOnceLayoutPageCategoryNexzellMain}
            transition={{ delay: 0.4, type: "spring", stiffness: 110, damping: 15 }}
          >
            <h4 className="productNameLayoutPageCategoryNexzellMain">{p.name}</h4>
            <p className="productPriceLayoutPageCategoryNexzellMain">{p.price}</p>
            <StarsLayoutPageCategoryNexzellMain count={p.rating} />

            <span className="optLabelLayoutPageCategoryNexzellMain">Color</span>
            <div className="colorRowLayoutPageCategoryNexzellMain">
              {p.colors.map((c, i) => (
                <motion.button
                  key={c}
                  type="button"
                  aria-label={`Color ${i + 1}`}
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => setColor(i)}
                  className={`colorDotLayoutPageCategoryNexzellMain ${color === i ? "colorDotActiveLayoutPageCategoryNexzellMain" : ""}`}
                  style={{ background: c }}
                />
              ))}
            </div>

            <span className="optLabelLayoutPageCategoryNexzellMain">{p.optionLabel}</span>
            <div className="optRowLayoutPageCategoryNexzellMain">
              {p.options.map((o, i) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setOption(i)}
                  className={`optBtnLayoutPageCategoryNexzellMain ${option === i ? "optBtnActiveLayoutPageCategoryNexzellMain" : ""}`}
                >
                  {o}
                </button>
              ))}
            </div>

            <div className="qtyRowLayoutPageCategoryNexzellMain">
              <button type="button" aria-label="Decrease" className="qtyBtnLayoutPageCategoryNexzellMain" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                <Minus size={12} />
              </button>
              <span className="qtyValueLayoutPageCategoryNexzellMain">{qty}</span>
              <button type="button" aria-label="Increase" className="qtyBtnLayoutPageCategoryNexzellMain" onClick={() => setQty((q) => q + 1)}>
                <Plus size={12} />
              </button>
            </div>

            <motion.button
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={handleAdd}
              className={`addBtnLayoutPageCategoryNexzellMain ${added ? "addBtnDoneLayoutPageCategoryNexzellMain" : ""}`}
            >
              {added ? (<><Check size={15} /> Added to Cart</>) : "Add to Cart"}
            </motion.button>
          </motion.div>

          <div className="thumbRowLayoutPageCategoryNexzellMain">
            {p.thumbs.map((t, i) => (
              <motion.button
                key={t}
                type="button"
                whileHover={{ y: -4 }}
                onClick={() => setThumb(i)}
                className={`thumbLayoutPageCategoryNexzellMain ${thumb === i ? "thumbActiveLayoutPageCategoryNexzellMain" : ""}`}
              >
                <img src={t} alt="" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="builtContentLayoutPageCategoryNexzellMain"
          variants={staggerLayoutPageCategoryNexzellMain(0.12, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnceLayoutPageCategoryNexzellMain}
        >
          <motion.div variants={fadeUpLayoutPageCategoryNexzellMain}>
            <BadgeLayoutPageCategoryNexzellMain>{data.badge}</BadgeLayoutPageCategoryNexzellMain>
          </motion.div>
          <motion.h2 variants={fadeUpLayoutPageCategoryNexzellMain} className="sectionTitleLayoutPageCategoryNexzellMain">
            {data.title} <span className="accentTextLayoutPageCategoryNexzellMain">{data.highlight}</span>
          </motion.h2>
          <motion.p variants={fadeUpLayoutPageCategoryNexzellMain} className="sectionDescLayoutPageCategoryNexzellMain">
            {data.description}
          </motion.p>
          <ChecklistLayoutPageCategoryNexzellMain items={data.checklist} />
          <motion.div variants={fadeUpLayoutPageCategoryNexzellMain}>
            <Link href={data.cta.href} className="btnPrimaryLayoutPageCategoryNexzellMain">
              {data.cta.label}
              <ArrowRight size={16} className="btnArrowLayoutPageCategoryNexzellMain" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ChecklistLayoutPageCategoryNexzellMain({ items }) {
  return (
    <motion.ul variants={staggerLayoutPageCategoryNexzellMain(0.1)} className="checkListLayoutPageCategoryNexzellMain">
      {items.map((item) => (
        <motion.li key={item} variants={slideRightLayoutPageCategoryNexzellMain} className="checkItemLayoutPageCategoryNexzellMain">
          <span className="checkIconLayoutPageCategoryNexzellMain"><Check size={13} strokeWidth={3} /></span>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

/* ======================================================================
   FEATURE CARDS (3 x 2 grid, arrows move the active highlight)
====================================================================== */
const mapPinsLayoutPageCategoryNexzellMain = [
  { left: "22%", top: "42%" },
  { left: "63%", top: "70%" },
  { left: "76%", top: "30%" },
];
const chartBarsLayoutPageCategoryNexzellMain = [18, 30, 24, 46, 38, 58, 30, 44, 62, 52, 78, 92];

function FeatureMediaLayoutPageCategoryNexzellMain({ card }) {
  if (card.type === "map") {
    return (
      <div className="mapBoxLayoutPageCategoryNexzellMain">
        {mapPinsLayoutPageCategoryNexzellMain.map((pin, i) => (
          <span key={i} className="mapPinLayoutPageCategoryNexzellMain" style={{ left: pin.left, top: pin.top, animationDelay: `${i * 0.6}s` }}>
            <span className="mapPingLayoutPageCategoryNexzellMain" style={{ animationDelay: `${i * 0.6}s` }} />
          </span>
        ))}
      </div>
    );
  }
  if (card.type === "chart") {
    return (
      <div className="chartBoxLayoutPageCategoryNexzellMain">
        {chartBarsLayoutPageCategoryNexzellMain.map((h, i) => (
          <motion.i
            key={i}
            className="chartBarLayoutPageCategoryNexzellMain"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.7, ease: EASE }}
            style={{ height: `${h}%`, originY: 1 }}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="featMediaLayoutPageCategoryNexzellMain">
      <img src={card.image} alt="" className="featImgLayoutPageCategoryNexzellMain" />
      {card.type === "promo" && (
        <motion.div
          className="promoBadgeLayoutPageCategoryNexzellMain"
          animate={{ rotate: [-2, 2, -2], scale: [1, 1.04, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <small className="promoSmallLayoutPageCategoryNexzellMain">{card.promo.small}</small>
          <strong className="promoBigLayoutPageCategoryNexzellMain">{card.promo.big}</strong>
          <small className="promoSmallLayoutPageCategoryNexzellMain">{card.promo.tail}</small>
        </motion.div>
      )}
    </div>
  );
}

function FeaturesLayoutPageCategoryNexzellMain({ data }) {
  const [active, setActive] = useState(0);
  const total = data.cards.length;
  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section className="sectionLayoutPageCategoryNexzellMain featSectionLayoutPageCategoryNexzellMain">
      <div className="containerLayoutPageCategoryNexzellMain">
        <motion.div
          className="featHeadLayoutPageCategoryNexzellMain"
          variants={staggerLayoutPageCategoryNexzellMain(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnceLayoutPageCategoryNexzellMain}
        >
          <motion.div variants={fadeUpLayoutPageCategoryNexzellMain}>
            <BadgeLayoutPageCategoryNexzellMain>{data.badge}</BadgeLayoutPageCategoryNexzellMain>
          </motion.div>
          <motion.h2 variants={fadeUpLayoutPageCategoryNexzellMain} className="featTitleLayoutPageCategoryNexzellMain">
            {data.title}
          </motion.h2>
          <motion.div variants={fadeUpLayoutPageCategoryNexzellMain} className="featArrowsLayoutPageCategoryNexzellMain">
            <button type="button" aria-label="Previous feature" onClick={prev} className="arrowBtnLayoutPageCategoryNexzellMain">
              <ChevronLeft size={18} />
            </button>
            <button type="button" aria-label="Next feature" onClick={next} className="arrowBtnLayoutPageCategoryNexzellMain">
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="featGridLayoutPageCategoryNexzellMain"
          variants={staggerLayoutPageCategoryNexzellMain(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnceLayoutPageCategoryNexzellMain}
        >
          {data.cards.map((card, i) => (
            <motion.article
              key={card.id}
              variants={popLayoutPageCategoryNexzellMain}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setActive(i)}
              className={`featCardLayoutPageCategoryNexzellMain ${active === i ? "featCardActiveLayoutPageCategoryNexzellMain" : ""}`}
            >
              <FeatureMediaLayoutPageCategoryNexzellMain card={card} />
              <div className="featBodyLayoutPageCategoryNexzellMain">
                <h3 className="featNameLayoutPageCategoryNexzellMain">{card.title}</h3>
                <p className="featDescLayoutPageCategoryNexzellMain">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ======================================================================
   ADVANTAGE
====================================================================== */
function AdvantageLayoutPageCategoryNexzellMain({ data }) {
  const reduce = useReducedMotion();
  return (
    <section className="sectionLayoutPageCategoryNexzellMain">
      <div className="containerLayoutPageCategoryNexzellMain advGridLayoutPageCategoryNexzellMain">
        <motion.div
          className="advMediaLayoutPageCategoryNexzellMain"
          variants={slideLeftLayoutPageCategoryNexzellMain}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnceLayoutPageCategoryNexzellMain}
        >
          <img src={data.image} alt="" className="builtImgLayoutPageCategoryNexzellMain" />
          <div className="advStatsLayoutPageCategoryNexzellMain">
            {data.stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="advStatLayoutPageCategoryNexzellMain"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.7, ease: EASE }}
              >
                <motion.div
                  className="advStatInnerLayoutPageCategoryNexzellMain"
                  animate={reduce ? {} : { y: [0, i % 2 ? 8 : -8, 0] }}
                  transition={{ duration: 4.5 + i, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div>
                    <strong className="advStatValueLayoutPageCategoryNexzellMain">
                      <CountUpLayoutPageCategoryNexzellMain value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </strong>
                    <span className="advStatLabelLayoutPageCategoryNexzellMain">{s.label}</span>
                  </div>
                  <span className="advStatIconLayoutPageCategoryNexzellMain">
                    <IconLayoutPageCategoryNexzellMain name={s.icon} size={34} />
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="advContentLayoutPageCategoryNexzellMain"
          variants={staggerLayoutPageCategoryNexzellMain(0.12, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnceLayoutPageCategoryNexzellMain}
        >
          <motion.div variants={fadeUpLayoutPageCategoryNexzellMain}>
            <BadgeLayoutPageCategoryNexzellMain>{data.badge}</BadgeLayoutPageCategoryNexzellMain>
          </motion.div>
          <motion.h2 variants={fadeUpLayoutPageCategoryNexzellMain} className="sectionTitleLayoutPageCategoryNexzellMain">
            {data.title}
          </motion.h2>
          <motion.p variants={fadeUpLayoutPageCategoryNexzellMain} className="sectionDescLayoutPageCategoryNexzellMain">
            {data.description}
          </motion.p>
          <ChecklistLayoutPageCategoryNexzellMain items={data.checklist} />
          <motion.div variants={fadeUpLayoutPageCategoryNexzellMain}>
            <Link href={data.cta.href} className="btnPrimaryLayoutPageCategoryNexzellMain">
              {data.cta.label}
              <ArrowRight size={16} className="btnArrowLayoutPageCategoryNexzellMain" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ======================================================================
   TESTIMONIALS
====================================================================== */
function TestimonialsLayoutPageCategoryNexzellMain({ data }) {
  return (
    <section className="sectionLayoutPageCategoryNexzellMain">
      <div className="containerLayoutPageCategoryNexzellMain">
        <motion.div
          className="trustHeadLayoutPageCategoryNexzellMain"
          variants={staggerLayoutPageCategoryNexzellMain(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnceLayoutPageCategoryNexzellMain}
        >
          <motion.div variants={fadeUpLayoutPageCategoryNexzellMain}>
            <BadgeLayoutPageCategoryNexzellMain>{data.badge}</BadgeLayoutPageCategoryNexzellMain>
          </motion.div>
          <motion.h2 variants={fadeUpLayoutPageCategoryNexzellMain} className="trustTitleLayoutPageCategoryNexzellMain">
            {data.title}
          </motion.h2>
          <motion.p variants={fadeUpLayoutPageCategoryNexzellMain} className="trustSubLayoutPageCategoryNexzellMain">
            {data.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="trustGridLayoutPageCategoryNexzellMain"
          variants={staggerLayoutPageCategoryNexzellMain(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnceLayoutPageCategoryNexzellMain}
        >
          {data.items.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUpLayoutPageCategoryNexzellMain}
              whileHover={{ y: -8 }}
              className="testiCardLayoutPageCategoryNexzellMain"
            >
              <Quote size={22} className="quoteIconLayoutPageCategoryNexzellMain" fill="currentColor" strokeWidth={0} />
              <blockquote className="testiTextLayoutPageCategoryNexzellMain">{t.quote}</blockquote>
              <figcaption className="testiUserLayoutPageCategoryNexzellMain">
                <img src={t.avatar} alt={t.name} className="avatarLayoutPageCategoryNexzellMain" />
                <span>
                  <strong className="userNameLayoutPageCategoryNexzellMain">{t.name}</strong>
                  <small className="userRoleLayoutPageCategoryNexzellMain">{t.role}</small>
                  <StarsLayoutPageCategoryNexzellMain />
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ======================================================================
   CTA
====================================================================== */
function CtaLayoutPageCategoryNexzellMain({ data }) {
  return (
    <section className="ctaSectionLayoutPageCategoryNexzellMain">
      <motion.div
        className="ctaBgLayoutPageCategoryNexzellMain"
        initial={{ opacity: 0, scale: 1.12 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <img src={data.image} alt="" />
      </motion.div>
      <div className="ctaFadeLayoutPageCategoryNexzellMain" />
      <motion.div
        className="containerLayoutPageCategoryNexzellMain ctaContentLayoutPageCategoryNexzellMain"
        variants={staggerLayoutPageCategoryNexzellMain(0.13)}
        initial="hidden"
        whileInView="visible"
        viewport={viewOnceLayoutPageCategoryNexzellMain}
      >
        <motion.h2 variants={fadeUpLayoutPageCategoryNexzellMain} className="ctaTitleLayoutPageCategoryNexzellMain">
          {data.title} <span className="accentTextLayoutPageCategoryNexzellMain">{data.highlight}</span>
        </motion.h2>
        <motion.p variants={fadeUpLayoutPageCategoryNexzellMain} className="ctaDescLayoutPageCategoryNexzellMain">
          {data.description}
        </motion.p>
        <motion.div variants={fadeUpLayoutPageCategoryNexzellMain} className="btnRowLayoutPageCategoryNexzellMain">
          <Link href={data.primary.href} className="btnPrimaryLayoutPageCategoryNexzellMain">
            {data.primary.label}
            <ArrowRight size={16} className="btnArrowLayoutPageCategoryNexzellMain" />
          </Link>
          <Link href={data.secondary.href} className="btnGhostLayoutPageCategoryNexzellMain">
            {data.secondary.label}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ======================================================================
   MAIN LAYOUT  –  receives ONE industry object from the data file
====================================================================== */
export default function LayoutPageCategoryNexzellMain({ data }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  if (!data) return null;

  return (
    <motion.main
      key={data.slug}
      className="wrapperLayoutPageCategoryNexzellMain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="progressBarLayoutPageCategoryNexzellMain" style={{ scaleX: progress }} />

      <HeroLayoutPageCategoryNexzellMain data={data.hero} badge={data.badge} />
      <BuiltForLayoutPageCategoryNexzellMain data={data.builtFor} />
      <FeaturesLayoutPageCategoryNexzellMain data={data.features} />
      <AdvantageLayoutPageCategoryNexzellMain data={data.advantage} />
      <TestimonialsLayoutPageCategoryNexzellMain data={data.testimonials} />
      <CtaLayoutPageCategoryNexzellMain data={data.cta} />
    </motion.main>
  );
}