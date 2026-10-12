"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Database, BarChart3, Settings, Link2, ShieldCheck } from 'lucide-react';
import './GrowingBrandsGoFurther.css'; // Adjust import path as needed

const features = [
  {
    icon: <ShoppingCart size={28} strokeWidth={1.5} />,
    title: "Multi-Channel Selling",
    description: "Sell across web, marketplaces and social channels."
  },
  {
    icon: <Database size={28} strokeWidth={1.5} />,
    title: "Advanced Inventory Control",
    description: "Manage complex catalogs and stock across locations."
  },
  {
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    title: "Data-Driven Growth",
    description: "Get real-time insights to make smarter decisions."
  },
  {
    icon: <Settings size={28} strokeWidth={1.5} />,
    title: "Custom Workflows & Automation",
    description: "Streamline operations as you scale."
  },
  {
    icon: <Link2 size={28} strokeWidth={1.5} />,
    title: "Integrations That Grow",
    description: "Connect with your favorite tools and systems."
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Enterprise-Grade Security",
    description: "Keep your brand and customers protected."
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each feature item animation
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function GrowingBrandsGoFurther() {
  return (
    <section className="sectionWrapperGrowingBrandsGoFurther">
      <div className="containerGrowingBrandsGoFurther">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="headerGrowingBrandsGoFurther"
        >
          <div className="badgeMainSliderForGrowingBrands animDelay1">
            <span className="badgeDotMainSliderForGrowingBrands"></span>
            BUILT FOR SCALE
          </div>
          <h2 className="headingGrowingBrandsGoFurther">
            Everything Growing Brands Need 
            to <span className="highlightTextGrowingBrandsGoFurther">Go Further.</span>
          </h2>
          <p className="descGrowingBrandsGoFurther">
            As your brand grows, your needs become more complex. Nexzell gives you the advanced
            features, integrations, and performance to stay ahead — without switching platforms.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="featuresGridGrowingBrandsGoFurther"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="featureItemGrowingBrandsGoFurther">
              <div className="iconCircleGrowingBrandsGoFurther">
                {feature.icon}
              </div>
              <h3 className="featureTitleGrowingBrandsGoFurther">{feature.title}</h3>
              <p className="featureDescGrowingBrandsGoFurther">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}