'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ChevronRight, ChevronDown } from 'lucide-react';
import './SimpleProcessRealResultsStartups.css';

function SimpleProcessRealResultsStartups() {
  const steps = [
    {
      id: 1,
      num: "01",
      title: "Discover & Plan",
      desc: "Understand your idea, market and goals."
    },
    {
      id: 2,
      num: "02",
      title: "Design & Develop",
      desc: "Create and build your MVP with modern technology."
    },
    {
      id: 3,
      num: "03",
      title: "Test & Launch",
      desc: "Validate, refine and launch your product."
    },
    {
      id: 4,
      num: "04",
      title: "Scale & Grow",
      desc: "Add new features and scale your business globally."
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
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 70, damping: 15 } 
    }
  };

  // Horizontal Line (For Desktop)
  const horizontalLineVariants = {
    hidden: { width: "0%", opacity: 0 },
    visible: { 
      width: "100%", 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 } 
    }
  };

  const horizontalArrowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, delay: 0.8 } 
    }
  };

  // Vertical Line (For Mobile & Tablet)
  const verticalLineVariants = {
    hidden: { height: "0%", opacity: 0 },
    visible: { 
      height: "100%", 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 } 
    }
  };

  const verticalArrowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, delay: 0.8 } 
    }
  };

  return (
    <section className="sectionWrapperSimpleProcessRealResultsStartups">
      <div className="containerSimpleProcessRealResultsStartups">
        
        {/* Header Section */}
        <motion.div 
          className="headerSimpleProcessRealResultsStartups"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="badgeMainSliderForStartups animDelay1">
            <span className="badgeDotMainSliderForStartups"></span>
            OUR PROCESS
          </div>
          
          <h2 className="headingSimpleProcessRealResultsStartups">
            A Simple Process, Real Results
          </h2>
          
          <p className="descriptionSimpleProcessRealResultsStartups">
            We follow a structured and agile approach to ensure your startup idea becomes a successful product.
          </p>
        </motion.div>

        {/* Process Timeline Grid */}
        <motion.div 
          className="processGridSimpleProcessRealResultsStartups"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="stepItemSimpleProcessRealResultsStartups"
              variants={stepVariants}
            >
              {/* Top/Left Section (Circle + Lines) */}
              <div className="stepVisualsSimpleProcessRealResultsStartups">
                
                <div className="stepNumberBoxSimpleProcessRealResultsStartups">
                  {step.num}
                </div>

                {/* Desktop: Horizontal Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="horizontalLineWrapperSimpleProcessRealResultsStartups">
                    <motion.div 
                      className="dashedLineHorizontalSimpleProcessRealResultsStartups"
                      variants={horizontalLineVariants}
                    />
                    <motion.div 
                      className="arrowHeadHorizontalSimpleProcessRealResultsStartups"
                      variants={horizontalArrowVariants}
                    >
                      <ChevronRight size={16} color="var(--nexzell-primary, #00E699)" strokeWidth={3} />
                    </motion.div>
                  </div>
                )}

                {/* Mobile/Tablet: Vertical Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="verticalLineWrapperSimpleProcessRealResultsStartups">
                    <motion.div 
                      className="dashedLineVerticalSimpleProcessRealResultsStartups"
                      variants={verticalLineVariants}
                    />
                    <motion.div 
                      className="arrowHeadVerticalSimpleProcessRealResultsStartups"
                      variants={verticalArrowVariants}
                    >
                      <ChevronDown size={16} color="var(--nexzell-primary, #00E699)" strokeWidth={3} />
                    </motion.div>
                  </div>
                )}

              </div>

              {/* Text Content */}
              <div className="stepContentSimpleProcessRealResultsStartups">
                <h3 className="stepTitleSimpleProcessRealResultsStartups">{step.title}</h3>
                <p className="stepDescSimpleProcessRealResultsStartups">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default SimpleProcessRealResultsStartups;