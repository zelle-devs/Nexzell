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
import './ConnectedOppsNexzellCategory.css';

export default function ConnectedOppsNexzellCategory() {

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
    "Product catalogs & variants",
    "Inventory and order management",
    "Payments and checkout",
    "Customer profiles & promotions",
    "Analytics across your business",
  ];

  return (
    <section className="sectionWrapperConnectedOppsNexzellCategory">
      <div className="containerConnectedOppsNexzellCategory">
        
        <div className="imageColConnectedOppsNexzellCategory">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="imageWrapperConnectedOppsNexzellCategory"
          >
            <img 
              src="/ConnectedOppsNexzellCategory.png" 
              alt="Dashboard on laptop" 
              className="bgImageConnectedOppsNexzellCategory"
            />
{/*             
            <motion.div 
              variants={floatCard1}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardTopLeftConnectedOppsNexzellCategory"
            >
              <div className="cardHeaderConnectedOppsNexzellCategory">
                <span className="cardTitleConnectedOppsNexzellCategory">Total Sales</span>
                <BarChart3 size={18} className="cardIconConnectedOppsNexzellCategory" />
              </div>
              <div className="cardValueConnectedOppsNexzellCategory">$248,930</div>
              <div className="cardTrendConnectedOppsNexzellCategory">
                <TrendingUp size={14} /> <span>20%</span>
              </div>
            </motion.div>

            <motion.div 
              variants={floatCard2}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardBottomLeftConnectedOppsNexzellCategory"
            >
              <div className="cardHeaderConnectedOppsNexzellCategory">
                <span className="cardTitleConnectedOppsNexzellCategory">Customers</span>
                <div className="iconCircleConnectedOppsNexzellCategory">
                  <Users size={16} />
                </div>
              </div>
              <div className="cardValueConnectedOppsNexzellCategory">125,430</div>
              <div className="cardTrendConnectedOppsNexzellCategory">
                <TrendingUp size={14} /> <span>25%</span>
              </div>
            </motion.div>

            <motion.div 
              variants={floatCard3}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardTopRightConnectedOppsNexzellCategory"
            >
              <div className="cardHeaderConnectedOppsNexzellCategory">
                <span className="cardTitleConnectedOppsNexzellCategory">Conversion Rate</span>
                <Activity size={18} className="cardIconConnectedOppsNexzellCategory" />
              </div>
              <div className="cardValueConnectedOppsNexzellCategory">4.8%</div>
              <div className="cardTrendConnectedOppsNexzellCategory">
                <TrendingUp size={14} /> <span>1.2%</span>
              </div>
            </motion.div> */}

          </motion.div>
        </div>

        {/* --- Right Column: Content --- */}
        <div className="contentColConnectedOppsNexzellCategory">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
          <div className="badgeMainSliderNexzellCategories animDelay1">
            <span className="badgeDotMainSliderNexzellCategories"></span>
            LOCALIZED EXPERIENCE
          </div>
            
            <motion.h2 variants={itemFadeUp} className="headingConnectedOppsNexzellCategory">
          Every Industry. One <br/>
              <span className="highlightTextConnectedOppsNexzellCategory"> Connected Operation.</span>
            </motion.h2>
            
            <motion.p variants={itemFadeUp} className="descConnectedOppsNexzellCategory">
            Nexzell gives you a complete commerce ecosystem to run and grow your business - no matter your industry. Manage everything from one powerful platform.
            </motion.p>

            {/* Modern Interactive List */}
            <motion.ul variants={containerVariants} className="listContainerConnectedOppsNexzellCategory">
              {bulletPoints.map((point, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemFadeUp} 
                  className="listItemConnectedOppsNexzellCategory"
                >
                  <div className="listIconBoxConnectedOppsNexzellCategory">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="listTextConnectedOppsNexzellCategory">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* <motion.button variants={itemFadeUp} className="ctaButtonConnectedOppsNexzellCategory">
              Explore Growth Features <ArrowRight size={18} />
            </motion.button> */}  
          </motion.div>
        </div>

      </div>
    </section>
  );
}