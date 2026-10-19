"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import './CommerceOppsGlobalForEnterprise.css';

export default function CommerceOppsGlobalForEnterprise() {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Combining entrance animation with infinite float
  const floatCard1 = {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay: 0.2 } },
    float: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
  };

  const floatCard2 = {
    hidden: { opacity: 0, x: -30, y: -20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay: 0.4 } },
    float: { y: [0, -12, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }
  };

  const floatCard3 = {
    hidden: { opacity: 0, x: 30, y: 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay: 0.6 } },
    float: { y: [0, -8, 0], transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }
  };

  const bulletPoints = [
    "Multi-store and multi-region management",
    "Localized pricing, tax and compliance",
    "Multi-currency and multi-language support",
    "Centralized analytics and reporting",
    "Seamless third-party integrations"
  ];

  return (
    <section className="sectionWrapperCommerceOppsGlobalForEnterprise">
      <div className="containerCommerceOppsGlobalForEnterprise">
        
        <div className="imageColCommerceOppsGlobalForEnterprise">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="imageWrapperCommerceOppsGlobalForEnterprise"
          >
            <img 
              src="/CommerceOppsGlobalForEnterprise.png" 
              alt="Dashboard on laptop" 
              className="bgImageCommerceOppsGlobalForEnterprise"
            />
{/*             
            <motion.div 
              variants={floatCard1}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardTopLeftCommerceOppsGlobalForEnterprise"
            >
              <div className="cardHeaderCommerceOppsGlobalForEnterprise">
                <span className="cardTitleCommerceOppsGlobalForEnterprise">Total Sales</span>
                <BarChart3 size={18} className="cardIconCommerceOppsGlobalForEnterprise" />
              </div>
              <div className="cardValueCommerceOppsGlobalForEnterprise">$248,930</div>
              <div className="cardTrendCommerceOppsGlobalForEnterprise">
                <TrendingUp size={14} /> <span>20%</span>
              </div>
            </motion.div>

            <motion.div 
              variants={floatCard2}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardBottomLeftCommerceOppsGlobalForEnterprise"
            >
              <div className="cardHeaderCommerceOppsGlobalForEnterprise">
                <span className="cardTitleCommerceOppsGlobalForEnterprise">Customers</span>
                <div className="iconCircleCommerceOppsGlobalForEnterprise">
                  <Users size={16} />
                </div>
              </div>
              <div className="cardValueCommerceOppsGlobalForEnterprise">125,430</div>
              <div className="cardTrendCommerceOppsGlobalForEnterprise">
                <TrendingUp size={14} /> <span>25%</span>
              </div>
            </motion.div>

            <motion.div 
              variants={floatCard3}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardTopRightCommerceOppsGlobalForEnterprise"
            >
              <div className="cardHeaderCommerceOppsGlobalForEnterprise">
                <span className="cardTitleCommerceOppsGlobalForEnterprise">Conversion Rate</span>
                <Activity size={18} className="cardIconCommerceOppsGlobalForEnterprise" />
              </div>
              <div className="cardValueCommerceOppsGlobalForEnterprise">4.8%</div>
              <div className="cardTrendCommerceOppsGlobalForEnterprise">
                <TrendingUp size={14} /> <span>1.2%</span>
              </div>
            </motion.div> */}

          </motion.div>
        </div>

        {/* --- Right Column: Content --- */}
        <div className="contentColCommerceOppsGlobalForEnterprise">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="badgeMainSliderGlobalForEnterprise animDelay1">
            <span className="badgeDotMainSliderGlobalForEnterprise"></span>
         ONE PLATFORM. GLOBAL IMPACT.
          </div>
            
            <motion.h2 variants={itemFadeUp} className="headingCommerceOppsGlobalForEnterprise">
             Unify Your Global 
              <span className="highlightTextCommerceOppsGlobalForEnterprise"> Commerce Operations.</span>
            </motion.h2>
            
            <motion.p variants={itemFadeUp} className="descCommerceOppsGlobalForEnterprise">
              Nexzell enables enterprises to streamline operations, localize experiences and scale across new markets - all from a single, powerful platform.
            </motion.p>

            {/* Modern Interactive List */}
            <motion.ul variants={containerVariants} className="listContainerCommerceOppsGlobalForEnterprise">
              {bulletPoints.map((point, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemFadeUp} 
                  className="listItemCommerceOppsGlobalForEnterprise"
                >
                  <div className="listIconBoxCommerceOppsGlobalForEnterprise">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="listTextCommerceOppsGlobalForEnterprise">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* <motion.button variants={itemFadeUp} className="ctaButtonCommerceOppsGlobalForEnterprise">
              Explore Growth Features <ArrowRight size={18} />
            </motion.button> */}
          </motion.div>
        </div>

      </div>
    </section>
  );
}