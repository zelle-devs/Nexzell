"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Box, 
  Database, 
  ShieldCheck, 
  Users, 
  Headphones 
} from 'lucide-react';
import './LargeScaleCommerceGlobalForEnterprise.css';

const enterpriseFeatures = [
  {
    id: 1,
    icon: <Globe size={28} strokeWidth={1.5} />,
    title: "Multi-Brand Management",
    description: "Manage multiple brands, stores and regions from one platform."
  },
  {
    id: 2,
    icon: <Box size={28} strokeWidth={1.5} />,
    title: "Advanced Integrations",
    description: "Connect with ERP, CRM, PIM, WMS and third-party systems."
  },
  {
    id: 3,
    icon: <Database size={28} strokeWidth={1.5} />,
    title: "High Performance & Scalability",
    description: "Built to handle high traffic and large catalogs with global reach."
  },
  {
    id: 4,
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Enterprise Security",
    description: "Secure, compliant and reliable infrastructure for your business."
  },
  {
    id: 5,
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Custom Workflows",
    description: "Tailored to your complex business processes and approval flows."
  },
  {
    id: 6,
    icon: <Headphones size={28} strokeWidth={1.5} />,
    title: "Dedicated Account Team",
    description: "Work with enterprise experts for strategic guidance and ongoing support."
  }
];

export default function LargeScaleCommerceGlobalForEnterprise() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="sectionWrapperLargeScaleCommerceGlobalForEnterprise">
      <div className="containerLargeScaleCommerceGlobalForEnterprise">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="headerLargeScaleCommerceGlobalForEnterprise"
        >
          <div className="badgeMainSliderGlobalForEnterprise animDelay1">
            <span className="badgeDotMainSliderGlobalForEnterprise"></span>
           ENTERPRISE GRADE CAPABILITIES
          </div>
          <h2 className="headingLargeScaleCommerceGlobalForEnterprise">
            Everything You Need for <br className="mobileBreakLargeScaleCommerceGlobalForEnterprise" />
            <span className="highlightLargeScaleCommerceGlobalForEnterprise">Large-Scale Commerce.</span>
          </h2>
          <p className="descLargeScaleCommerceGlobalForEnterprise">
            From complex catalogs to multi-brand operations, Nexzell provides the infrastructure, flexibility and control to run your enterprise seamlessly.
          </p>
        </motion.div>

        {/* 6-Column Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="gridLargeScaleCommerceGlobalForEnterprise"
        >
          {enterpriseFeatures.map((feature) => (
            <motion.div 
              key={feature.id} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="cardLargeScaleCommerceGlobalForEnterprise"
            >
              <div className="iconWrapperLargeScaleCommerceGlobalForEnterprise">
                {feature.icon}
              </div>
              <h3 className="cardTitleLargeScaleCommerceGlobalForEnterprise">
                {feature.title}
              </h3>
              <p className="cardDescLargeScaleCommerceGlobalForEnterprise">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}