"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight, Quote, Star } from 'lucide-react';
import './RealNumbersSuccessGlobalForEnterprise.css';

// Animated Counter Helper Component
const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        const currentCount = from + progress * (to - from);
        setCount(currentCount);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default function RealNumbersSuccessGlobalForEnterprise() {
  const stats = [
    { value: 3.5, suffix: "x", decimals: 1, label: "Average Revenue Growth" },
    { value: 60, suffix: "%", decimals: 0, label: "Operational Cost Reduction" },
    { value: 40, suffix: "%", decimals: 0, label: "Faster Time to Market" },
    { value: 99.99, suffix: "%", decimals: 2, label: "Platform Uptime" }
  ];

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="sectionWrapperRealNumbersSuccessGlobal">
      {/* Right Side Background Image that bleeds to the edge */}
      <div className="bgImageWrapperRealNumbersSuccessGlobal">
        <img 
          src="/RealNumbersSuccessGlobalForEnterprise.png" 
          alt="Enterprise Building" 
          className="bgImageRealNumbersSuccessGlobal"
        />
        <div className="bgImageGradientRealNumbersSuccessGlobal"></div>
      </div>

      <div className="containerRealNumbersSuccessGlobal">
        
        {/* --- Left Column: Content & Stats --- */}
        <div className="leftColRealNumbersSuccessGlobal">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header */}
            <motion.div variants={itemFadeUp} className="badgeRealNumbersSuccessGlobal">
              <span className="badgeDotRealNumbersSuccessGlobal"></span>
              REAL BUSINESS IMPACT
            </motion.div>
            
            <motion.h2 variants={itemFadeUp} className="headingRealNumbersSuccessGlobal">
              Enterprise Success <br />
              in <span style={{color:'var(--nexzell-primary)'}}> Real Numbers.</span>
            </motion.h2>
            
            <motion.p variants={itemFadeUp} className="descRealNumbersSuccessGlobal">
              Our enterprise clients achieve measurable growth with a platform built for performance.
            </motion.p>

            {/* Stats Grid */}
            <motion.div variants={containerVariants} className="statsGridRealNumbersSuccessGlobal">
              {stats.map((stat, idx) => (
                <motion.div key={idx} variants={itemFadeUp} className="statItemRealNumbersSuccessGlobal">
                  <div className="statValueRealNumbersSuccessGlobal">
                    <AnimatedCounter 
                      from={0} 
                      to={stat.value} 
                      suffix={stat.suffix} 
                      decimals={stat.decimals} 
                    />
                  </div>
                  <div className="statLabelRealNumbersSuccessGlobal">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <a href="/case-studies">
            <motion.button variants={itemFadeUp} className="ctaButtonRealNumbersSuccessGlobal">
              View Case Studies <ArrowRight size={18} />
            </motion.button>
            </a>
          </motion.div>
        </div>

        {/* --- Right Column: Testimonial Glass Card --- */}
        <div className="rightColRealNumbersSuccessGlobal">
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="glassCardRealNumbersSuccessGlobal"
          >
            <Quote className="quoteIconRealNumbersSuccessGlobal" size={36} strokeWidth={0} fill="currentColor" />
            
            <p className="testimonialTextRealNumbersSuccessGlobal">
              "Nexzell gave us the scalability, flexibility and control we needed to manage our multiple brands across different regions. The platform just works, and the team has been an incredible partner in our growth journey."
            </p>
            
            <div className="userProfileRealNumbersSuccessGlobal">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop" 
                alt="Daniel Kim" 
                className="userAvatarRealNumbersSuccessGlobal"
              />
              <div className="userInfoRealNumbersSuccessGlobal">
                <h4 className="userNameRealNumbersSuccessGlobal">Daniel Kim</h4>
                <p className="userTitleRealNumbersSuccessGlobal">Chief Operations Officer</p>
                <div className="starsRealNumbersSuccessGlobal">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFC107" stroke="none" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}