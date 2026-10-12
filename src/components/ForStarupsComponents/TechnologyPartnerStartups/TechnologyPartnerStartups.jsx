'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Layers, Users } from 'lucide-react';
import './TechnologyPartnerStartups.css';

function TechnologyPartnerStartups() {
  const cards = [
    {
      id: 1,
      icon: <Lightbulb size={32} className="cardIconTechnologyPartnerStartups" />,
      title: "Product-Focused Approach",
      desc: "We build solutions that solve real problems and deliver measurable results."
    },
    {
      id: 2,
      icon: <Rocket size={32} className="cardIconTechnologyPartnerStartups" />,
      title: "Faster Time to Market",
      desc: "From MVP to full product, we help you launch quickly and iterate faster."
    },
    {
      id: 3,
      icon: <Layers size={32} className="cardIconTechnologyPartnerStartups" />,
      title: "Cost-Effective Solutions",
      desc: "Get maximum value with optimized technology and scalable architecture."
    },
    {
      id: 4,
      icon: <Users size={32} className="cardIconTechnologyPartnerStartups" />,
      title: "Dedicated Startup Team",
      desc: "Work with experts who understand the startup mindset and growth goals."
    }
  ];

  // Framer Motion Variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section className="sectionWrapperTechnologyPartnerStartups">
      <div className="containerTechnologyPartnerStartups">
        
        {/* Header Section */}
        <motion.div 
          className="headerTechnologyPartnerStartups"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
           <div className="badgeMainSliderForStartups animDelay1">
            <span className="badgeDotMainSliderForStartups"></span>
            WHO CHOOSE US
          </div>
          
          <h2 className="headingTechnologyPartnerStartups">
            A Trusted Technology Partner <br />
            <span className="textHighlightTechnologyPartnerStartups">for Startups</span>
          </h2>
          
          <p className="descriptionTechnologyPartnerStartups">
            We understand the unique challenges startups face — limited resources, 
            fast timelines, and the need to validate ideas quickly. Our team provides end-to-end 
            support to turn your vision into a scalable digital product.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="gridTechnologyPartnerStartups"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card) => (
            <motion.div 
              key={card.id} 
              className="cardTechnologyPartnerStartups"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                backgroundColor: "rgba(14, 18, 24, 0.7)", 
                borderColor: "#334155",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
              }}
            >
              <div className="cardIconBoxTechnologyPartnerStartups">
                {card.icon}
              </div>
              <h3 className="cardTitleTechnologyPartnerStartups">{card.title}</h3>
              <p className="cardDescTechnologyPartnerStartups">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default TechnologyPartnerStartups;