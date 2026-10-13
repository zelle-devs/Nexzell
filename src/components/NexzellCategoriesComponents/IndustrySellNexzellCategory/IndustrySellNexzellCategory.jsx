"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './IndustrySellNexzellCategory.css';

// link = /categories/<slug>  (slug must match the keys in categoryPagesDataNexzell.js)
const industryData = [
  {
    id: 1,
    title: "Furniture & Home",
    subtitle: "Furniture, decor & essentials",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    link: "/categories/furniture-home"
  },
  {
    id: 2,
    title: "Fashion & Apparel",
    subtitle: "Apparel, shoes & accessories",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop",
    link: "/categories/fashion-apparel"
  },
  {
    id: 3,
    title: "Electronics & Gadgets",
    subtitle: "Phones, gadgets & more",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop",
    link: "/categories/electronics-gadgets"
  },
  {
    id: 4,
    title: "Beauty & Personal Care",
    subtitle: "Skincare, makeup & more",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop",
    link: "/categories/beauty-personal-care"
  },
  {
    id: 5,
    title: "Sports & Outdoors",
    subtitle: "Gear up for performance",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    link: "/categories/sports-outdoors"
  },
  {
    id: 6,
    title: "Toys & Kids",
    subtitle: "Fun for every age",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop",
    link: "/categories/toys-kids"
  }
];

export default function IndustrySellNexzellCategory() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="sectionWrapperIndustrySellNexzellCategory">
      <div className="containerIndustrySellNexzellCategory">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="headerIndustrySellNexzellCategory"
        >
         <div className="badgeMainSliderNexzellCategories animDelay1">
            <span className="badgeDotMainSliderNexzellCategories"></span>
            POPULAR INDUSTRIES
          </div>
          <h2 className="headingIndustrySellNexzellCategory">
            Built for the Way Your <span style={{color:'var(--nexzell-primary)'}}>Industry Sells</span> 
          </h2>
          <p className="descIndustrySellNexzellCategory">
            Whether you're a growing brand or an established enterprise, Nexzell adapts to your industry's unique needs with the tools to sell, manage and scale — all in one place.
          </p>
        </motion.div>

        {/* --- 3x2 Grid Section --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="gridIndustrySellNexzellCategory"
        >
          {industryData.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="cardIndustrySellNexzellCategory"
              style={{ cursor: 'pointer' }}
              onClick={() => router.push(item.link)}
            >
              <div className="cardImageWrapperIndustrySellNexzellCategory">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="cardImageIndustrySellNexzellCategory"
                />
              </div>
              
              <div className="cardContentIndustrySellNexzellCategory">
                <h3 className="cardTitleIndustrySellNexzellCategory">{item.title}</h3>
                <p className="cardSubtitleIndustrySellNexzellCategory">{item.subtitle}</p>
                
                <Link
                  href={item.link}
                  className="cardLinkIndustrySellNexzellCategory"
                  onClick={(e) => e.stopPropagation()}
                >
                  Explore Industry <ArrowRight size={16} className="cardIconIndustrySellNexzellCategory" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}