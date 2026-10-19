"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import './FAQForGlobalEnterprise.css'; // Adjust the import path to your CSS file
const faqs = [
  {
    question: "Is Nexzell suitable for large enterprises?", /*[cite: 1] */
    answer: "Yes, Nexzell is highly scalable and specifically built to support the operations, security, and complex needs of large enterprises."
  },
  {
    question: "Can it handle multiple brands and regions?", /*[cite: 1] */
    answer: "Yes, Nexzell supports multi-brand management, localization, multi-currency, and international shipping integrations, making it easy to scale globally."
  },
  {
    question: "Do you support custom integrations?", /*[cite: 1] */
    answer: "Absolutely. We offer custom and seamless integrations with a wide variety of enterprise tools, CRMs, and specialized systems to ensure a smooth workflow."
  },
  {
    question: "How secure is the platform?", /*[cite: 1] */
    answer: "Our platform is built on a robust, modern infrastructure with enterprise-grade security protocols designed to protect your data, transactions, and customer information."
  },
  {
    question: "What kind of support do you provide?", /*[cite: 1] */
    answer: "We offer dedicated, priority support and account management to ensure enterprises have the technical assistance they need at all times."
  }
];

export default function FAQForGlobalEnterprise() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="sectionWrapperFAQForGlobalEnterprise">
      <div className="containerFAQForGlobalEnterprise">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="headerFAQForGlobalEnterprise"
        >
           <div className="badgeMainSliderGlobalForEnterprise animDelay1">
            <span className="badgeDotMainSliderGlobalForEnterprise"></span>
         FAQ's
          </div>
          <h2 className="headingFAQForGlobalEnterprise">
            Got Questions? We've <br/>Got <span className="highlightText">Answers.</span>
          </h2>
          <p className="descriptionFAQForGlobalEnterprise">
            Everything you need to know about building, launching, and scaling your startup product with us.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="gridFAQForGlobalEnterprise">
          
          {/* Left Column: Image & Glass Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="imageColumnFAQForGlobalEnterprise"
          >
            <div className="imageWrapperFAQForGlobalEnterprise">
              {/* Dummy Image - Replace src with your actual asset */}
              <img 
                src="/FAQForGlobalEnterprise.png" 
                alt="Startup Innovation" 
                className="coverImageFAQForGlobalEnterprise"
              />
              
              {/* Glassmorphism Contact Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="glassCardFAQForGlobalEnterprise"
              >
                <h3 className="glassCardTitle">Got More Questions?</h3>
                <p className="glassCardDesc">
                  Talk to our team and get personalized guidance for your startup idea.
                </p>
                 <a href="/contact-us">
                <button className="glassCardBtn">
                  Contact Us <ArrowRight size={16} />
                </button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="accordionColumnFAQForGlobalEnterprise"
          >
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faqItemStartups ${activeIndex === index ? 'activeFaq' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faqQuestionArea">
                  <h4 className="faqQuestionText">{faq.question}</h4>
                  <motion.div 
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="faqIconWrapper"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faqAnswerArea"
                    >
                      <p className="faqAnswerText">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}