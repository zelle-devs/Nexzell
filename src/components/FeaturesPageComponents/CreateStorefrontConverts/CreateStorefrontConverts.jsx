import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './CreateStorefrontConverts.css';

function CreateStorefrontConverts() {
  const features = [
    "Modern, responsive themes",
    "Drag & drop customization",
    "Built-in pages (home, shop, blog, etc.)",
    "Mobile-optimized design"
  ];

  return (
    <section className="sectionWrapperCreateStorefrontConverts">
      <div className="containerCreateStorefrontConverts">
         <div className="bgGradientMainSliderFeatures"></div>
        
        {/* Left Content */}
        <div className="leftContentCreateStorefrontConverts animFadeUpCreateStorefrontConverts">
         <div className="badgeMainSliderFeatures animDelay1">
            <span className="badgeDotMainSliderFeatures"></span>
           STOREFRONT
          </div>
          
          <h2 className="headingCreateStorefrontConverts">
            Create a Storefront<br />
            That Converts.
          </h2>
          
          <p className="descriptionCreateStorefrontConverts">
            Design a unique and professional online store 
            with modern, mobile-ready themes. Customize 
            everything to match your brand — no coding 
            required.
          </p>

          <ul className="featureListCreateStorefrontConverts">
            {features.map((feature, index) => (
              <li key={index} className={`featureItemCreateStorefrontConverts animDelay${index + 1}CreateStorefrontConverts`}>
                <CheckCircle2 
                  size={20} 
                  className="checkIconCreateStorefrontConverts" 
                  fill="var(--nexzell-primary, #00E699)" 
                  color="var(--nexzell-bg-base, #06080C)" 
                />
                <span className="featureTextCreateStorefrontConverts">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="btnPrimaryCreateStorefrontConverts animDelay6CreateStorefrontConverts">
            Explore Storefront Features <ArrowRight size={18} className="btnIconCreateStorefrontConverts" />
          </button>
        </div>

        {/* Right Content (Background Image Placeholder) */}
        <div className="rightContentCreateStorefrontConverts animFadeInRightCreateStorefrontConverts">
          {/* <div className="imageWrapperCreateStorefrontConverts">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
              alt="Storefront Devices Mockup" 
              className="mainImageCreateStorefrontConverts" 
            />
            <div className="imageGlowCreateStorefrontConverts"></div>
          </div> */}
        </div>

      </div>
    </section>
  );
}

export default CreateStorefrontConverts;