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
import './StoreFrontEveryMarketGlobalCommerce.css';

export default function StoreFrontEveryMarketGlobalCommerce() {

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
    "Multi-language support",
    "Region-specific pricing",
    "Localized domains & SEO",
    "Country-specific content & catalogs",
  ];

  return (
    <section className="sectionWrapperStoreFrontEveryMarketGlobalCommerce">
      <div className="containerStoreFrontEveryMarketGlobalCommerce">
        
        <div className="imageColStoreFrontEveryMarketGlobalCommerce">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="imageWrapperStoreFrontEveryMarketGlobalCommerce"
          >
            <img 
              src="/StoreFrontEveryMarketGlobalCommerce.png" 
              alt="Dashboard on laptop" 
              className="bgImageStoreFrontEveryMarketGlobalCommerce"
            />
{/*             
            <motion.div 
              variants={floatCard1}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardTopLeftStoreFrontEveryMarketGlobalCommerce"
            >
              <div className="cardHeaderStoreFrontEveryMarketGlobalCommerce">
                <span className="cardTitleStoreFrontEveryMarketGlobalCommerce">Total Sales</span>
                <BarChart3 size={18} className="cardIconStoreFrontEveryMarketGlobalCommerce" />
              </div>
              <div className="cardValueStoreFrontEveryMarketGlobalCommerce">$248,930</div>
              <div className="cardTrendStoreFrontEveryMarketGlobalCommerce">
                <TrendingUp size={14} /> <span>20%</span>
              </div>
            </motion.div>

            <motion.div 
              variants={floatCard2}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardBottomLeftStoreFrontEveryMarketGlobalCommerce"
            >
              <div className="cardHeaderStoreFrontEveryMarketGlobalCommerce">
                <span className="cardTitleStoreFrontEveryMarketGlobalCommerce">Customers</span>
                <div className="iconCircleStoreFrontEveryMarketGlobalCommerce">
                  <Users size={16} />
                </div>
              </div>
              <div className="cardValueStoreFrontEveryMarketGlobalCommerce">125,430</div>
              <div className="cardTrendStoreFrontEveryMarketGlobalCommerce">
                <TrendingUp size={14} /> <span>25%</span>
              </div>
            </motion.div>

            <motion.div 
              variants={floatCard3}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardTopRightStoreFrontEveryMarketGlobalCommerce"
            >
              <div className="cardHeaderStoreFrontEveryMarketGlobalCommerce">
                <span className="cardTitleStoreFrontEveryMarketGlobalCommerce">Conversion Rate</span>
                <Activity size={18} className="cardIconStoreFrontEveryMarketGlobalCommerce" />
              </div>
              <div className="cardValueStoreFrontEveryMarketGlobalCommerce">4.8%</div>
              <div className="cardTrendStoreFrontEveryMarketGlobalCommerce">
                <TrendingUp size={14} /> <span>1.2%</span>
              </div>
            </motion.div> */}

          </motion.div>
        </div>

        {/* --- Right Column: Content --- */}
        <div className="contentColStoreFrontEveryMarketGlobalCommerce">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
           <div className="badgeMainSliderGlobalCommerce animDelay1" style={{width:'fit-content'}}>
            <span className="badgeDotMainSliderGlobalCommerce" ></span>
          LOCALIZED EXPERIENCE
          </div>
            
            <motion.h2 variants={itemFadeUp} className="headingStoreFrontEveryMarketGlobalCommerce">
            Create Storefronts For
              <span className="highlightTextStoreFrontEveryMarketGlobalCommerce"> Every Market</span>
            </motion.h2>
            
            <motion.p variants={itemFadeUp} className="descStoreFrontEveryMarketGlobalCommerce">
            Adapt your store to local languages, currencies and customer preferences. Deliver a seamless shopping experience that feels local-wherever your customers are.
            </motion.p>

            {/* Modern Interactive List */}
            <motion.ul variants={containerVariants} className="listContainerStoreFrontEveryMarketGlobalCommerce">
              {bulletPoints.map((point, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemFadeUp} 
                  className="listItemStoreFrontEveryMarketGlobalCommerce"
                >
                  <div className="listIconBoxStoreFrontEveryMarketGlobalCommerce">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="listTextStoreFrontEveryMarketGlobalCommerce">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button variants={itemFadeUp} className="ctaButtonStoreFrontEveryMarketGlobalCommerce">
              Explore Growth Features <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}