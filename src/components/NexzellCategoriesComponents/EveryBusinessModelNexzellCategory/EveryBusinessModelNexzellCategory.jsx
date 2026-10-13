"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Store, Building2 } from 'lucide-react';
import './EveryBusinessModelNexzellCategory.css';

const businessModels = [
    {
        id: 1,
        icon: <TrendingUp size={34} strokeWidth={1.5} />,
        title: "Growing Brands",
        description: "Launch faster, reach new markets, and scale with confidence.",
        link: "#"
    },
    {
        id: 2,
        icon: <Store size={34} strokeWidth={1.5} />,
        title: "Multi-Store Retailers",
        description: "Manage multiple stores, channels and regions from one platform.",
        link: "#"
    },
    {
        id: 3,
        icon: <Building2 size={34} strokeWidth={1.5} />,
        title: "Enterprise Commerce",
        description: "Advanced tools, integrations and support for complex operations.",
        link: "#"
    }
];

export default function EveryBusinessModelNexzellCategory() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return (
        <section className="sectionWrapperEveryBusinessModelNexzellCategory">
            <div className="containerEveryBusinessModelNexzellCategory">

                {/* --- Header Section --- */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="headerEveryBusinessModelNexzellCategory"
                >
                    <div className="badgeMainSliderNexzellCategories animDelay1">
                        <span className="badgeDotMainSliderNexzellCategories"></span>
                        FOR EVERY BUSINESS
                    </div>
                    <h2 className="headingEveryBusinessModelNexzellCategory">
                        A Better Fit for Every <span style={{ color: 'var(--nexzell-primary)' }}> Business Model</span>
                    </h2>
                    <p className="descEveryBusinessModelNexzellCategory">
                        Flexible solutions designed to support businesses at every stage — from fast-growing brands to global enterprises.
                    </p>
                </motion.div>

                {/* --- 3-Column Modern Cards Grid --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="gridEveryBusinessModelNexzellCategory"
                >
                    {businessModels.map((model) => (
                        <motion.div
                            key={model.id}
                            variants={itemVariants}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className="cardEveryBusinessModelNexzellCategory"
                        >
                            {/* Decorative Glow inside the card */}
                            <div className="cardGlowEveryBusinessModelNexzellCategory"></div>

                            <div className="cardTopEveryBusinessModelNexzellCategory">

                                <div className="iconWrapperEveryBusinessModelNexzellCategory">
                                    {model.icon}
                                </div>
                                <div>
                                    <h3 className="cardTitleEveryBusinessModelNexzellCategory">{model.title}</h3>
                                    <p className="cardDescEveryBusinessModelNexzellCategory">{model.description}</p>
                                    <a href={model.link} className="cardLinkEveryBusinessModelNexzellCategory">
                                        Learn More <ArrowRight size={18} className="linkArrowEveryBusinessModelNexzellCategory" />
                                    </a>
                                </div>



                            </div>


                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}