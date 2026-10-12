"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import './FAQForGrowingBrands.css'; // Adjust the import path to your CSS file
const faqs = [
  {
    question: "Is Nexzell suitable for mid-sized and growing brands?", /*[cite: 1] */
    answer: "Yes, Nexzell is highly scalable and specifically built to support the operations and needs of mid-sized and rapidly growing brands."
  },
  {
    question: "Can I integrate my existing tools and systems?", /*[cite: 1] */
    answer: "Absolutely. We offer seamless integrations with a wide variety of popular third-party tools, CRMs, and systems to ensure a smooth workflow."
  },
  {
    question: "How does Nexzell handle high traffic and large catalogs?", /*[cite: 1] */
    answer: "Our platform is built on a robust, modern infrastructure designed to easily manage sudden traffic spikes and extensive product catalogs without compromising speed or performance."
  },
  {
    question: "Can I expand to international markets?", /*[cite: 1] */
    answer: "Yes, Nexzell supports multi-currency, localization, and international shipping integrations, making it easy to scale your brand globally."
  },
  {
    question: "Do you provide dedicated support for growing brands?", /*[cite: 1] */
    answer: "We certainly do. We offer dedicated, priority support and account management to ensure growing brands have the technical assistance they need at all times."
  }
];

export default function FAQForGrowingBrands() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="sectionWrapperFAQForGrowingBrands">
      <div className="containerFAQForGrowingBrands">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="headerFAQForGrowingBrands"
        >
           <div className="badgeMainSliderForGrowingBrands animDelay1">
            <span className="badgeDotMainSliderForGrowingBrands"></span>
          GROW YOUR BRAND
          </div>
          <h2 className="headingFAQForGrowingBrands">
            Got Questions? We've <br/>Got <span className="highlightText">Answers.</span>
          </h2>
          <p className="descriptionFAQForGrowingBrands">
            Everything you need to know about building, launching, and scaling your startup product with us.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="gridFAQForGrowingBrands">
          
          {/* Left Column: Image & Glass Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="imageColumnFAQForGrowingBrands"
          >
            <div className="imageWrapperFAQForGrowingBrands">
              {/* Dummy Image - Replace src with your actual asset */}
              <img 
                src="/FAQForGrowingBrands.png" 
                alt="Startup Innovation" 
                className="coverImageFAQForGrowingBrands"
              />
              
              {/* Glassmorphism Contact Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="glassCardFAQForGrowingBrands"
              >
                <h3 className="glassCardTitle">Got More Questions?</h3>
                <p className="glassCardDesc">
                  Talk to our team and get personalized guidance for your startup idea.
                </p>
                <button className="glassCardBtn">
                  Contact Us <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="accordionColumnFAQForGrowingBrands"
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