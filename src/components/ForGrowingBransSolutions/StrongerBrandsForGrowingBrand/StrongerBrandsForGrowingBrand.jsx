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
import './StrongerBrandsForGrowingBrand.css';

export default function StrongerBrandsForGrowingBrand() {
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
    "Optimized shopping experience",
    "Upsell & cross-sell tools",
    "Advanced customer segmentation",
    "Loyalty & rewards programs",
    "Scalable infrastructure for high traffic"
  ];

  return (
    <section className="sectionWrapperStrongerBrandsForGrowingBrand">
      <div className="containerStrongerBrandsForGrowingBrand">
        
        {/* --- Left Column: Image & Floating Cards --- */}
        <div className="imageColStrongerBrandsForGrowingBrand">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="imageWrapperStrongerBrandsForGrowingBrand"
          >
            <img 
              src="/StrongerBrandsForGrowingBrand.png" 
              alt="Dashboard on laptop" 
              className="bgImageStrongerBrandsForGrowingBrand"
            />
            
            {/* Card 1: Total Sales */}
            <motion.div 
              variants={floatCard1}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardTopLeftStrongerBrandsForGrowingBrand"
            >
              <div className="cardHeaderStrongerBrandsForGrowingBrand">
                <span className="cardTitleStrongerBrandsForGrowingBrand">Total Sales</span>
                <BarChart3 size={18} className="cardIconStrongerBrandsForGrowingBrand" />
              </div>
              <div className="cardValueStrongerBrandsForGrowingBrand">$248,930</div>
              <div className="cardTrendStrongerBrandsForGrowingBrand">
                <TrendingUp size={14} /> <span>20%</span>
              </div>
            </motion.div>

            {/* Card 2: Customers */}
            <motion.div 
              variants={floatCard2}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardBottomLeftStrongerBrandsForGrowingBrand"
            >
              <div className="cardHeaderStrongerBrandsForGrowingBrand">
                <span className="cardTitleStrongerBrandsForGrowingBrand">Customers</span>
                <div className="iconCircleStrongerBrandsForGrowingBrand">
                  <Users size={16} />
                </div>
              </div>
              <div className="cardValueStrongerBrandsForGrowingBrand">125,430</div>
              <div className="cardTrendStrongerBrandsForGrowingBrand">
                <TrendingUp size={14} /> <span>25%</span>
              </div>
            </motion.div>

            {/* Card 3: Conversion Rate */}
            <motion.div 
              variants={floatCard3}
              initial="hidden"
              whileInView={["visible", "float"]}
              viewport={{ once: true }}
              className="glassCardTopRightStrongerBrandsForGrowingBrand"
            >
              <div className="cardHeaderStrongerBrandsForGrowingBrand">
                <span className="cardTitleStrongerBrandsForGrowingBrand">Conversion Rate</span>
                <Activity size={18} className="cardIconStrongerBrandsForGrowingBrand" />
              </div>
              <div className="cardValueStrongerBrandsForGrowingBrand">4.8%</div>
              <div className="cardTrendStrongerBrandsForGrowingBrand">
                <TrendingUp size={14} /> <span>1.2%</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* --- Right Column: Content --- */}
        <div className="contentColStrongerBrandsForGrowingBrand">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="badgeMainSliderForGrowingBrands animDelay1">
            <span className="badgeDotMainSliderForGrowingBrands"></span>
            TURN GROWTH INTO OPPORTUNITY
          </div>
            
            <motion.h2 variants={itemFadeUp} className="headingStrongerBrandsForGrowingBrand">
              More Sales.
              More Customers.
              <span className="highlightTextStrongerBrandsForGrowingBrand"> Stronger Brand.</span>
            </motion.h2>
            
            <motion.p variants={itemFadeUp} className="descStrongerBrandsForGrowingBrand">
              Nexzell helps growing brands unlock new revenue opportunities with a powerful, flexible platform that adapts to your evolving needs.
            </motion.p>

            {/* Modern Interactive List */}
            <motion.ul variants={containerVariants} className="listContainerStrongerBrandsForGrowingBrand">
              {bulletPoints.map((point, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemFadeUp} 
                  className="listItemStrongerBrandsForGrowingBrand"
                >
                  <div className="listIconBoxStrongerBrandsForGrowingBrand">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="listTextStrongerBrandsForGrowingBrand">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button variants={itemFadeUp} className="ctaButtonStrongerBrandsForGrowingBrand">
              Explore Growth Features <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}