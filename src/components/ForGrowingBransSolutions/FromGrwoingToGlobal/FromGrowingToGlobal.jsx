"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './FromGrowingToGlobal.css';

const globalCards = [
  {
    id: 1,
    title: "Expand Product Catalogs Easily",
    description: "Manage thousands of SKUs with ease.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Enter New Markets",
    description: "Multi-currency, multi-language and local payment support.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Scale Your Marketing",
    description: "Built-in tools and integrations to boost your reach.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "Optimize Operations",
    description: "Automate fulfillment, inventory and order management.",
    imageUrl: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2065&auto=format&fit=crop",
    link: "#"
  }
];

export default function FromGrowingToGlobal() {
  // Motion settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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

  return (
    <section className="sectionWrapperFromGrowingToGlobal">
      <div className="containerFromGrowingToGlobal">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="headerFromGrowingToGlobal"
        >
          <div className="badgeMainSliderForGrowingBrands animDelay1">
            <span className="badgeDotMainSliderForGrowingBrands"></span>
           PLATFORM THAT EVOLVE WITH YOU 
          </div>
          <h2 className="headingFromGrowingToGlobal">
            From Growing to <span style={{color:'var(--nexzell-primary)'}}>Global.</span> 
          </h2>
          <p className="descriptionFromGrowingToGlobal">
            Whether you’re expanding into new markets, adding more products, or scaling your operations, 
            Nexzell gives you the tools to grow without technical limitations.
          </p>
        </motion.div>

        {/* --- Multi-Column Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="gridFromGrowingToGlobal"
        >
          {globalCards.map((card) => (
            <motion.div 
              key={card.id} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="cardFromGrowingToGlobal"
            >
              {/* Media Thumbnail */}
              <div className="imageContainerFromGrowingToGlobal">
                <img 
                  src={card.imageUrl} 
                  alt={card.title} 
                  className="cardImageFromGrowingToGlobal"
                />
                <div className="imageOverlayFromGrowingToGlobal">
                  <div className="overlayBubbleButtonFromGrowingToGlobal">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="cardContentFromGrowingToGlobal">
                <div className="contentWrapperFromGrowingToGlobal">
                  <h3 className="cardTitleFromGrowingToGlobal">{card.title}</h3>
                  <p className="cardTextFromGrowingToGlobal">{card.description}</p>
                </div>

                {/* Bottom Action Button */}
                <a href={card.link} className="actionLinkFromGrowingToGlobal" aria-label={`Read more about ${card.title}`}>
                  <ArrowRight size={14} className="actionIconFromGrowingToGlobal" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}