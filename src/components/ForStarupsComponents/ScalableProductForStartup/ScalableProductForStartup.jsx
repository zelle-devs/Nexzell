'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ArrowRight, BarChart3 } from 'lucide-react';
import './ScalableProductForStartup.css';

function ScalableProductForStartup() {
  const features = [
    "Idea validation & market research",
    "MVP development & testing",
    "Scalable architecture & cloud setup",
    "Product launch & growth strategy"
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const floatingWidgetVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: [0, -10, 0], 
      transition: { 
        opacity: { duration: 0.5, delay: 0.6 },
        scale: { duration: 0.5, delay: 0.6, type: "spring" },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
      } 
    }
  };

  return (
    <section className="sectionWrapperScalableProductForStartup">
      <div className="containerScalableProductForStartup">
        
        {/* Left Content (Image & Widget) */}
        <div className="leftColScalableProductForStartup">
          <motion.div 
            className="imageWrapperScalableProductForStartup"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Dummy Image Placeholder */}
            <img 
              src="/ScalableProductForStartup.jpg" 
              alt="Scalable Dashboard Mockup" 
              className="mainImageScalableProductForStartup" 
            />
            
            {/* Floating Widget */}
            <motion.div 
              className="floatingWidgetScalableProductForStartup"
              variants={floatingWidgetVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="widgetTextScalableProductForStartup">
                Product<br />Growth
              </div>
              <BarChart3 size={28} className="widgetIconScalableProductForStartup" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content (Text) */}
        <motion.div 
          className="rightColScalableProductForStartup"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="badgeMainSliderForStartups animDelay1">
            <span className="badgeDotMainSliderForStartups"></span>
            FROM IDEA TO SUCCESS
          </div>
          
          <motion.h2 variants={itemVariants} className="headingScalableProductForStartup">
            Turn Your Idea<br />
            Into a <span className="textHighlightScalableProductForStartup">Scalable Product</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="descriptionScalableProductForStartup">
            We guide you through every stage — from validating your idea 
            to building a product that can scale globally.
          </motion.p>

          <motion.ul variants={containerVariants} className="featureListScalableProductForStartup">
            {features.map((feature, index) => (
              <motion.li key={index} variants={itemVariants} className="featureItemScalableProductForStartup">
                <CheckCircle2 
                  size={20} 
                  className="checkIconScalableProductForStartup" 
                  fill="var(--nexzell-primary, #00E699)" 
                  color="var(--nexzell-bg-base, #06080C)" 
                />
                <span className="featureTextScalableProductForStartup">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.button 
            variants={itemVariants}
            className="btnPrimaryScalableProductForStartup"
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Startup Journey <ArrowRight size={18} className="btnArrowScalableProductForStartup" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

export default ScalableProductForStartup;