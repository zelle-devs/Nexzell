"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe2, 
  CreditCard, 
  Store, 
  Plane, 
  ShieldCheck, 
  LayoutDashboard 
} from 'lucide-react';
import './EveryThingYouNeedGlobalCommerce.css';

const globalFeatures = [
  {
    id: 1,
    icon: <Globe2 size={32} strokeWidth={1.5} />,
    title: "Multi-Currency & Multi-Language",
    description: "Sell in local currencies and languages."
  },
  {
    id: 2,
    icon: <CreditCard size={32} strokeWidth={1.5} />,
    title: "Global Payments",
    description: "Integrate with trusted international providers."
  },
  {
    id: 3,
    icon: <Store size={32} strokeWidth={1.5} />,
    title: "Localized Storefronts",
    description: "Create country-specific stores with local domains."
  },
  {
    id: 4,
    icon: <Plane size={32} strokeWidth={1.5} />,
    title: "Global Shipping",
    description: "Manage rates, rules and fulfillment globally."
  },
  {
    id: 5,
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: "Tax & Compliance",
    description: "Handle regional taxes, duties and regulations."
  },
  {
    id: 6,
    icon: <LayoutDashboard size={32} strokeWidth={1.5} />,
    title: "Multi-Store Management",
    description: "Operate multiple brands and regions from one dashboard."
  }
];

export default function EveryThingYouNeedGlobalCommerce() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  return (
    <section className="sectionWrapperEveryThingYouNeedGlobalCommerce">
      <div className="containerEveryThingYouNeedGlobalCommerce">
        
        {/* --- Left Column: Text & CTA --- */}
        <motion.div 
          className="leftColEveryThingYouNeedGlobalCommerce"
          variants={leftContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="badgeMainSliderGlobalCommerce animDelay1">
            <span className="badgeDotMainSliderGlobalCommerce"></span>
           BUILT FOR INTERNATIONAL GROWTH
          </div>
          
          <h2 className="headingEveryThingYouNeedGlobalCommerce">
            Everything You Need for 
            <span className="highlightEveryThingYouNeedGlobalCommerce"> Global Commerce.</span>
          </h2>
          
          <p className="descEveryThingYouNeedGlobalCommerce">
            From localized storefronts to global payments, shipping, taxes and multi-currency support — Nexzell gives you a complete ecosystem to sell anywhere in the world.
          </p>
            <a href="/features">
          <button className="ctaButtonEveryThingYouNeedGlobalCommerce">
            Explore All Features <ArrowRight size={18} />
          </button>
          </a>
        </motion.div>

        {/* --- Right Column: Feature Cards Grid --- */}
        <motion.div 
          className="rightColEveryThingYouNeedGlobalCommerce"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {globalFeatures.map((feature) => (
            <motion.div 
              key={feature.id} 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="cardEveryThingYouNeedGlobalCommerce"
            >
              <div className="cardIconEveryThingYouNeedGlobalCommerce">
                {feature.icon}
              </div>
              <h3 className="cardTitleEveryThingYouNeedGlobalCommerce">
                {feature.title}
              </h3>
              <p className="cardDescEveryThingYouNeedGlobalCommerce">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}