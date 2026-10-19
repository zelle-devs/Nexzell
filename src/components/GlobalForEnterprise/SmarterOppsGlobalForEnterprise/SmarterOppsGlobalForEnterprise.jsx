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
import './SmarterOppsGlobalForEnterprise.css';

export default function SmarterOppsGlobalForEnterprise() {
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
    "Warehouse and inventory integration",
    "Automated order management",
    "Real-time stock synchronization",
    "Advanced reporting & forecasting",
    "Operational efficiency at scale"
  ];

  return (
    <section className="sectionWrapperSmarterOppsGlobalForEnterprise">
      <div className="containerSmarterOppsGlobalForEnterprise">
        
        <div className="imageColSmarterOppsGlobalForEnterprise">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="imageWrapperSmarterOppsGlobalForEnterprise"
          >
            <img 
              src="/SmarterOppsGlobalForEnterprise.png" 
              alt="Dashboard on laptop" 
              className="bgImageSmarterOppsGlobalForEnterprise"
            />
{/*             
            <motion.div 
              variants={floatCard1}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardTopLeftSmarterOppsGlobalForEnterprise"
            >
              <div className="cardHeaderSmarterOppsGlobalForEnterprise">
                <span className="cardTitleSmarterOppsGlobalForEnterprise">Total Sales</span>
                <BarChart3 size={18} className="cardIconSmarterOppsGlobalForEnterprise" />
              </div>
              <div className="cardValueSmarterOppsGlobalForEnterprise">$248,930</div>
              <div className="cardTrendSmarterOppsGlobalForEnterprise">
                <TrendingUp size={14} /> <span>20%</span>
              </div>
            </motion.div>

            <motion.div 
              variants={floatCard2}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardBottomLeftSmarterOppsGlobalForEnterprise"
            >
              <div className="cardHeaderSmarterOppsGlobalForEnterprise">
                <span className="cardTitleSmarterOppsGlobalForEnterprise">Customers</span>
                <div className="iconCircleSmarterOppsGlobalForEnterprise">
                  <Users size={16} />
                </div>
              </div>
              <div className="cardValueSmarterOppsGlobalForEnterprise">125,430</div>
              <div className="cardTrendSmarterOppsGlobalForEnterprise">
                <TrendingUp size={14} /> <span>25%</span>
              </div>
            </motion.div>

            <motion.div 
              variants={floatCard3}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardTopRightSmarterOppsGlobalForEnterprise"
            >
              <div className="cardHeaderSmarterOppsGlobalForEnterprise">
                <span className="cardTitleSmarterOppsGlobalForEnterprise">Conversion Rate</span>
                <Activity size={18} className="cardIconSmarterOppsGlobalForEnterprise" />
              </div>
              <div className="cardValueSmarterOppsGlobalForEnterprise">4.8%</div>
              <div className="cardTrendSmarterOppsGlobalForEnterprise">
                <TrendingUp size={14} /> <span>1.2%</span>
              </div>
            </motion.div> */}

          </motion.div>
        </div>

        {/* --- Right Column: Content --- */}
        <div className="contentColSmarterOppsGlobalForEnterprise">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="badgeMainSliderGlobalForEnterprise animDelay1">
            <span className="badgeDotMainSliderGlobalForEnterprise"></span>
          BUILT FOR COMPLEX OPERATIONS
          </div>
            
            <motion.h2 variants={itemFadeUp} className="headingSmarterOppsGlobalForEnterprise">
             Smarter Operations. Higher  
              <span className="highlightTextSmarterOppsGlobalForEnterprise"> Efficiency.</span>
            </motion.h2>
            
            <motion.p variants={itemFadeUp} className="descSmarterOppsGlobalForEnterprise">
            Automate workflows, streamline fulfillment and gain real-time visibility across your entire operation.
            </motion.p>

            {/* Modern Interactive List */}
            <motion.ul variants={containerVariants} className="listContainerSmarterOppsGlobalForEnterprise">
              {bulletPoints.map((point, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemFadeUp} 
                  className="listItemSmarterOppsGlobalForEnterprise"
                >
                  <div className="listIconBoxSmarterOppsGlobalForEnterprise">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="listTextSmarterOppsGlobalForEnterprise">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* <motion.button variants={itemFadeUp} className="ctaButtonSmarterOppsGlobalForEnterprise">
              Explore Growth Features <ArrowRight size={18} />
            </motion.button> */}
          </motion.div>
        </div>

      </div>
    </section>
  );
}