'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Home, 
  Box, 
  MonitorSmartphone, 
  PenTool, 
  Cloud, 
  Sparkles, 
  Headphones 
} from 'lucide-react';
import './LaunchAndGrowStartups.css';

function LaunchAndGrowStartups() {
  const services = [
    {
      id: 1,
      icon: <Box size={24} className="cardIconLaunchAndGrowStartups" />,
      title: "MVP Development",
      desc: "Launch your idea quickly with a scalable MVP."
    },
    {
      id: 2,
      icon: <MonitorSmartphone size={24} className="cardIconLaunchAndGrowStartups" />,
      title: "Web & Mobile Apps",
      desc: "Modern, high-performance applications."
    },
    {
      id: 3,
      icon: <PenTool size={24} className="cardIconLaunchAndGrowStartups" />,
      title: "Product Design",
      desc: "User-centered design that engages and converts."
    },
    {
      id: 4,
      icon: <Cloud size={24} className="cardIconLaunchAndGrowStartups" />,
      title: "Cloud & DevOps",
      desc: "Scalable infrastructure for future growth."
    },
    {
      id: 5,
      icon: <Sparkles size={24} className="cardIconLaunchAndGrowStartups" />,
      title: "AI & Automation",
      desc: "Integrate intelligent features into your product."
    },
    {
      id: 6,
      icon: <Headphones size={24} className="cardIconLaunchAndGrowStartups" />,
      title: "Ongoing Support",
      desc: "Continuous support to help you scale."
    }
  ];

  // Framer Motion Variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="sectionWrapperLaunchAndGrowStartups">
      <div className="containerLaunchAndGrowStartups">
        
        {/* Left Content */}
        <motion.div 
          className="leftContentLaunchAndGrowStartups"
          variants={leftContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
           <div className="badgeMainSliderForStartups animDelay1">
            <span className="badgeDotMainSliderForStartups"></span>
          OUR SERVICES
          </div>
          
          <h2 className="headingLaunchAndGrowStartups">
            Everything You Need
            to <span className="textHighlightLaunchAndGrowStartups">Launch and Grow</span>
          </h2>
          
          <p className="descriptionLaunchAndGrowStartups">
            From strategy and design to development and scaling, 
            we provide complete technology solutions tailored 
            for startups.
          </p>
          <a href="/contact">
          <motion.button 
            className="btnPrimaryLaunchAndGrowStartups"
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Grow With This <ArrowRight size={18} className="btnArrowLaunchAndGrowStartups" />
          </motion.button>
          </a>
        </motion.div>

        {/* Right Content (Grid) */}
        <motion.div 
          className="rightGridLaunchAndGrowStartups"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="serviceCardLaunchAndGrowStartups"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                backgroundColor: "rgba(14, 18, 24, 0.8)",
                borderColor: "rgba(0, 230, 153, 0.3)"
              }}
            >
              <div className="cardIconBoxLaunchAndGrowStartups">
                {service.icon}
              </div>
              <h3 className="cardTitleLaunchAndGrowStartups">{service.title}</h3>
              <p className="cardDescLaunchAndGrowStartups">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default LaunchAndGrowStartups;