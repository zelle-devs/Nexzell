"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import './FAQForStartups.css'; // Adjust the import path to your CSS file

const faqs = [
  {
    question: "How quickly can you launch a startup MVP?",
    answer: "We specialize in rapid prototyping. Depending on the complexity, we can typically design, develop, and launch a fully functional Minimum Viable Product (MVP) within 4 to 8 weeks."
  },
  {
    question: "Do you sign NDAs to protect our startup idea?",
    answer: "Absolutely. We understand the value of your intellectual property. We always sign strict Non-Disclosure Agreements (NDAs) before any detailed discussions begin."
  },
  {
    question: "What tech stack do you recommend for scalability?",
    answer: "We build modern and scalable applications using Next.js, React, and Node.js. This ensures your product is fast, secure, and ready to handle massive traffic as your startup grows."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, launching is just the beginning. We offer flexible post-launch support, continuous maintenance, and feature-scaling solutions to help your product evolve based on user feedback."
  },
  {
    question: "How do you handle changes in project scope?",
    answer: "Startups need flexibility. We use Agile methodologies, meaning we work in sprints. If your priorities change, we can adjust the scope and deliverables in the upcoming sprint smoothly."
  }
];

export default function FAQForStartups() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="sectionWrapperFAQStartups">
      <div className="containerFAQStartups">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="headerFAQStartups"
        >
            <div className="badgeMainSliderForStartups animDelay1">
            <span className="badgeDotMainSliderForStartups"></span>
          GET STARTED
          </div>
          <h2 className="headingFAQStartups">
            Got Questions? We've Got <br/> <span className="highlightText">Answers.</span>
          </h2>
          <p className="descriptionFAQStartups">
            Everything you need to know about building, launching, and scaling your startup product with us.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="gridFAQStartups">
          
          {/* Left Column: Image & Glass Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="imageColumnFAQStartups"
          >
            <div className="imageWrapperFAQStartups">
              {/* Dummy Image - Replace src with your actual asset */}
              <img 
                src="/FAQForStartups.jpg" 
                alt="Startup Innovation" 
                className="coverImageFAQStartups"
              />
              
              {/* Glassmorphism Contact Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="glassCardFAQStartups"
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
            className="accordionColumnFAQStartups"
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