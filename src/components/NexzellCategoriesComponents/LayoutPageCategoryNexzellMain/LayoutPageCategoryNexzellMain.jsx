"use client";
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { geoEquirectangular, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldLand from "world-atlas/land-110m.json";
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
  <span className="badgeEverythingBusinessStarter">
    <span className="badgeDotEverythingBusinessStarter" />
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
   MERGED PANEL (tablet + mobile only): revenue + top categories in ONE card
====================================================================== */
const mergedBarsLayoutPageCategoryNexzellMain = [40, 62, 50, 85, 100];

function MergedPanelLayoutPageCategoryNexzellMain({ data, variant = "tablet" }) {
  const reduce = useReducedMotion();
  const cats = data.topCategories;
  const [active, setActive] = useState(0);

  // highlight cycles through the categories automatically
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % cats.length), 2200);
    return () => clearInterval(id);
  }, [reduce, cats.length]);

  const variantClass =
    variant === "tablet"
      ? "mergedTabletLayoutPageCategoryNexzellMain"
      : "mergedMobileLayoutPageCategoryNexzellMain";

  return (
    <motion.section
      className={`mergedLayoutPageCategoryNexzellMain ${variantClass}`}
      variants={staggerLayoutPageCategoryNexzellMain(0.12, 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      aria-label="Revenue and top categories"
    >
      <span className="mergedGlowLayoutPageCategoryNexzellMain" aria-hidden="true" />

      {/* ---- revenue row ---- */}
      <motion.div variants={fadeUpLayoutPageCategoryNexzellMain} className="mergedTopLayoutPageCategoryNexzellMain">
        <div className="mergedRevInfoLayoutPageCategoryNexzellMain">
          <span className="revenueLabelLayoutPageCategoryNexzellMain">Total Revenue</span>
          <strong className="mergedValueLayoutPageCategoryNexzellMain">
            <CountUpLayoutPageCategoryNexzellMain
              value={data.revenue.value}
              prefix={data.revenue.prefix}
              duration={2.2}
            />
          </strong>
          <span className="mergedGrowthLayoutPageCategoryNexzellMain">▲ {data.revenue.growth}</span>
        </div>

        <div className="mergedBarsLayoutPageCategoryNexzellMain" aria-hidden="true">
          {mergedBarsLayoutPageCategoryNexzellMain.map((h, i) => (
            <motion.i
              key={i}
              className="revenueBarLayoutPageCategoryNexzellMain"
              variants={{
                hidden: { scaleY: 0 },
                visible: {
                  scaleY: h / 100,
                  transition: { delay: 0.5 + i * 0.1, duration: 0.7, ease: EASE },
                },
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* ---- animated divider ---- */}
      <motion.div
        className="mergedDividerLayoutPageCategoryNexzellMain"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease: EASE } },
        }}
      />

      {/* ---- categories ---- */}
      <motion.div variants={fadeUpLayoutPageCategoryNexzellMain} className="mergedCatHeadLayoutPageCategoryNexzellMain">
        <h3 className="mergedCatTitleLayoutPageCategoryNexzellMain">Top Categories</h3>
        <span className="mergedCatCountLayoutPageCategoryNexzellMain">{cats.length} trending</span>
      </motion.div>

      <motion.ul
        className="mergedCatListLayoutPageCategoryNexzellMain"
        variants={staggerLayoutPageCategoryNexzellMain(0.08, 0.1)}
      >
        {cats.map((cat, i) => (
          <motion.li
            key={cat.label}
            variants={popLayoutPageCategoryNexzellMain}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`mergedCatItemLayoutPageCategoryNexzellMain ${
              active === i ? "mergedCatItemActiveLayoutPageCategoryNexzellMain" : ""
            }`}
          >
            <span className="mergedCatIconLayoutPageCategoryNexzellMain">
              <IconLayoutPageCategoryNexzellMain name={cat.icon} size={variant === "tablet" ? 20 : 16} />
            </span>
            <span className="mergedCatLabelLayoutPageCategoryNexzellMain">{cat.label}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
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
        <MergedPanelLayoutPageCategoryNexzellMain data={data} variant="tablet" />
        <MergedPanelLayoutPageCategoryNexzellMain data={data} variant="mobile" />
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

/* ---------- shared: measure a box ---------- */
function useBoxSizeLayoutPageCategoryNexzellMain(ref) {
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return size;
}

/* ---------- MAP (dot-matrix world + blinking pins) ---------- */
const landGeoLayoutPageCategoryNexzellMain = feature(worldLand, worldLand.objects.land);
const MAP_CENTER_LAT = 12;
const MAP_STEP = 5;

function MapMediaLayoutPageCategoryNexzellMain({ pins = [] }) {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const { w, h } = useBoxSizeLayoutPageCategoryNexzellMain(boxRef);

  const projection = useMemo(() => {
    if (!w || !h) return null;
    const k = w / (2 * Math.PI);
    return geoEquirectangular()
      .scale(k)
      .translate([w / 2, h / 2 + k * ((MAP_CENTER_LAT * Math.PI) / 180)]);
  }, [w, h]);

  const points = useMemo(() => {
    if (!projection) return [];
    return pins.map((p) => {
      const [x, y] = projection([p.lon, p.lat]);
      return { ...p, x, y };
    });
  }, [projection, pins]);

  useEffect(() => {
    if (!projection) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    // 1) rasterize land into an offscreen mask
    const off = document.createElement("canvas");
    off.width = w;
    off.height = h;
    const octx = off.getContext("2d", { willReadFrequently: true });
    octx.fillStyle = "#000";
    octx.beginPath();
    geoPath(projection, octx)(landGeoLayoutPageCategoryNexzellMain);
    octx.fill();
    const mask = octx.getImageData(0, 0, w, h).data;

    // 2) draw one dot per grid cell that sits on land
    const color =
      getComputedStyle(canvas).getPropertyValue("--nexzell-primary").trim() || "#00e5a0";
    ctx.fillStyle = color;

    for (let y = MAP_STEP / 2; y < h; y += MAP_STEP) {
      for (let x = MAP_STEP / 2; x < w; x += MAP_STEP) {
        const a = mask[((y | 0) * w + (x | 0)) * 4 + 3];
        if (a < 100) continue;

        // dots near a pin glow brighter
        let boost = 0;
        for (const p of points) {
          const d = Math.hypot(x - p.x, y - (p.y - 10));
          boost = Math.max(boost, 1 - d / 70);
        }
        boost = Math.max(0, boost);

        ctx.globalAlpha = 0.28 + 0.62 * boost;
        ctx.beginPath();
        ctx.arc(x, y, 1 + 0.55 * boost, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }, [projection, points, w, h]);

  return (
    <div ref={boxRef} className="mapBoxLayoutPageCategoryNexzellMain" role="img" aria-label="World map of selling regions">
      <canvas ref={canvasRef} className="mapCanvasLayoutPageCategoryNexzellMain" aria-hidden="true" />
      {points.map((p, i) => (
        <span
          key={p.name}
          className="mapPinLayoutPageCategoryNexzellMain"
          style={{
            left: p.x,
            top: p.y,
            animationDelay: `${0.2 + i * 0.18}s`,
            "--pin-delay": `${i * 0.45}s`,
          }}
        >
          <span className="mapRingLayoutPageCategoryNexzellMain" />
          <span className="mapGroundLayoutPageCategoryNexzellMain" />
          <svg className="mapPinIconLayoutPageCategoryNexzellMain" viewBox="0 0 24 30" aria-hidden="true">
            <path
              d="M12 29.5C12 29.5 2 19 2 12a10 10 0 0 1 20 0c0 7-10 17.5-10 17.5Z"
              fill="currentColor"
            />
            <circle cx="12" cy="12" r="4.2" style={{ fill: "var(--nexzell-text-white)" }} />
          </svg>
          <span
            className={`mapLabelLayoutPageCategoryNexzellMain ${
              p.x > w * 0.66 ? "mapLabelLeftLayoutPageCategoryNexzellMain" : ""
            }`}
          >
            {p.name}
          </span>
        </span>
      ))}
    </div>
  );
}

/* ---------- CHART (smooth area curve + dots) ---------- */
const CHART_PAD = { l: 14, r: 14, t: 44, b: 24 };

function monotonePathLayoutPageCategoryNexzellMain(pts) {
  const n = pts.length;
  if (n < 2) return "";
  const dx = [], s = [], m = [];
  for (let i = 0; i < n - 1; i++) {
    dx[i] = pts[i + 1].x - pts[i].x;
    s[i] = (pts[i + 1].y - pts[i].y) / dx[i];
  }
  m[0] = s[0];
  m[n - 1] = s[n - 2];
  for (let i = 1; i < n - 1; i++) {
    m[i] = s[i - 1] * s[i] <= 0 ? 0 : (s[i - 1] + s[i]) / 2;
  }
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === 0) {
      m[i] = 0;
      m[i + 1] = 0;
    } else {
      const a = m[i] / s[i];
      const b = m[i + 1] / s[i];
      const hh = a * a + b * b;
      if (hh > 9) {
        const t = 3 / Math.sqrt(hh);
        m[i] = t * a * s[i];
        m[i + 1] = t * b * s[i];
      }
    }
  }
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < n - 1; i++) {
    const c1x = pts[i].x + dx[i] / 3;
    const c1y = pts[i].y + (m[i] * dx[i]) / 3;
    const c2x = pts[i + 1].x - dx[i] / 3;
    const c2y = pts[i + 1].y - (m[i + 1] * dx[i]) / 3;
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${pts[i + 1].x},${pts[i + 1].y}`;
  }
  return d;
}

function ChartMediaLayoutPageCategoryNexzellMain({ chart }) {
  const boxRef = useRef(null);
  const { w, h } = useBoxSizeLayoutPageCategoryNexzellMain(boxRef);
  const uid = useId().replace(/:/g, "");
  const [hover, setHover] = useState(null);

  const geo = useMemo(() => {
    if (!w || !h || !chart || !chart.values || chart.values.length < 2) return null;
    const { values } = chart;
    const n = values.length;
    const lo = Math.min(...values);
    const hi = Math.max(...values);
    const span = hi - lo || 1;
    const yMin = lo - span * 0.3;
    const yMax = hi + span * 0.1;
    const innerW = w - CHART_PAD.l - CHART_PAD.r;
    const innerH = h - CHART_PAD.t - CHART_PAD.b;
    const step = innerW / (n - 1);
    const baseY = h - CHART_PAD.b;
    const pts = values.map((v, i) => ({
      x: CHART_PAD.l + i * step,
      y: CHART_PAD.t + (1 - (v - yMin) / (yMax - yMin)) * innerH,
    }));
    const line = monotonePathLayoutPageCategoryNexzellMain(pts);
    const area = `${line} L${pts[n - 1].x},${baseY} L${pts[0].x},${baseY} Z`;
    const grid = [0, 1 / 3, 2 / 3, 1].map((f) => CHART_PAD.t + innerH * f);
    return { n, pts, line, area, baseY, step, grid };
  }, [w, h, chart]);

  const handleMove = (e) => {
    if (!geo) return;
    const r = e.currentTarget.getBoundingClientRect();
    const i = Math.round((e.clientX - r.left - CHART_PAD.l) / geo.step);
    setHover(Math.max(0, Math.min(geo.n - 1, i)));
  };

  let head = null;
  if (geo) {
    const { values, labels = [], prefix = "", suffix = "", title = "" } = chart;
    const active = hover ?? geo.n - 1;
    const prev = values[geo.n - 2];
    const pct = prev ? Math.round(((values[geo.n - 1] - prev) / prev) * 100) : 0;
    head = (
      <>
        <div className="chartHeadLayoutPageCategoryNexzellMain">
          <span className="chartHeadLabelLayoutPageCategoryNexzellMain">
            {title}
            {labels[active] ? ` · ${labels[active]}` : ""}
          </span>
          <strong className="chartHeadValueLayoutPageCategoryNexzellMain">
            {prefix}
            {values[active]}
            {suffix}
          </strong>
        </div>
        <span className="chartTrendLayoutPageCategoryNexzellMain">
          {pct >= 0 ? "▲" : "▼"} {Math.abs(pct)}%
        </span>
      </>
    );
  }

  return (
    <div
      ref={boxRef}
      className="chartBoxLayoutPageCategoryNexzellMain"
      onPointerMove={handleMove}
      onPointerDown={handleMove}
      onPointerLeave={() => setHover(null)}
    >
      {geo && (
        <>
          {head}
          <svg className="chartSvgLayoutPageCategoryNexzellMain" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
            <defs>
              <linearGradient id={`lineGrad${uid}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" style={{ stopColor: "var(--lp-grad-start)" }} />
                <stop offset="100%" style={{ stopColor: "var(--lp-grad-end)" }} />
              </linearGradient>
              <linearGradient id={`areaGrad${uid}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" style={{ stopColor: "var(--lp-primary)", stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: "var(--lp-primary)", stopOpacity: 0 }} />
              </linearGradient>
            </defs>

            {geo.grid.map((y, i) => (
              <line key={i} x1={CHART_PAD.l} x2={w - CHART_PAD.r} y1={y} y2={y} className="chartGridLayoutPageCategoryNexzellMain" />
            ))}

            <motion.path
              d={geo.area}
              style={{ fill: `url(#areaGrad${uid})` }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            />

            <motion.path
              d={geo.line}
              className="chartLineLayoutPageCategoryNexzellMain"
              style={{ stroke: `url(#lineGrad${uid})` }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: EASE }}
            />

            {hover !== null && (
              <line
                x1={geo.pts[hover].x}
                x2={geo.pts[hover].x}
                y1={CHART_PAD.t - 8}
                y2={geo.baseY}
                className="chartGuideLayoutPageCategoryNexzellMain"
              />
            )}

            {geo.pts.map((p, i) => {
              const isLast = i === geo.n - 1;
              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i / (geo.n - 1)) * 1.3, type: "spring", stiffness: 260, damping: 16 }}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                >
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={4}
                    className={`chartDotLayoutPageCategoryNexzellMain ${
                      isLast ? "chartDotLastLayoutPageCategoryNexzellMain" : ""
                    } ${hover === i ? "chartDotActiveLayoutPageCategoryNexzellMain" : ""}`}
                  />
                </motion.g>
              );
            })}

            <circle
              cx={geo.pts[geo.n - 1].x}
              cy={geo.pts[geo.n - 1].y}
              r={4}
              className="chartPulseLayoutPageCategoryNexzellMain"
            />

            {(chart.labels || []).map((label, i) => (
              <text
                key={i}
                x={geo.pts[i].x}
                y={h - 8}
                textAnchor="middle"
                className="chartAxisTextLayoutPageCategoryNexzellMain"
              >
                {label}
              </text>
            ))}
          </svg>
        </>
      )}
    </div>
  );
}

function FeatureMediaLayoutPageCategoryNexzellMain({ card }) {
  if (card.type === "map") {
    return <MapMediaLayoutPageCategoryNexzellMain pins={card.pins} />;
  }
  if (card.type === "chart") {
    return <ChartMediaLayoutPageCategoryNexzellMain chart={card.chart} />;
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