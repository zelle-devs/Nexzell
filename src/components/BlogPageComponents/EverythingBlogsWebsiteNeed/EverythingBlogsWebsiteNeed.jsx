import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import './EverythingBlogsWebsiteNeed.css';

function EverythingBlogsWebsiteNeed() {
  return (
    <section className="sectionWrapperEverythingBlogsWebsiteNeed">
      <div className="containerEverythingBlogsWebsiteNeed">
        
        <div className="cardEverythingBlogsWebsiteNeed animFadeUpEverythingBlogsWebsiteNeed">
          
          {/* Left Column: Image */}
          <div className="imageColEverythingBlogsWebsiteNeed animFadeInLeftEverythingBlogsWebsiteNeed">
            <img 
              src="/EverythingYouNeedTOBuildWebsiteBlog.jpg" 
              alt="Workspace with laptop" 
              className="mainImageEverythingBlogsWebsiteNeed" 
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="textColEverythingBlogsWebsiteNeed">
            <div className="badgeMainSliderBlogs animDelay1">
            <span className="badgeDotMainSliderBlogs"></span>
            FEATURED
          </div>
            
            <h2 className="headingEverythingBlogsWebsiteNeed animDelay2EverythingBlogsWebsiteNeed">
              Everything You Need to<br />
              Build a Better Website
            </h2>
            
            <p className="descriptionEverythingBlogsWebsiteNeed animDelay3EverythingBlogsWebsiteNeed">
              From choosing the right tech stack to optimizing 
              performance, this complete guide covers everything 
              you need to know to build a modern, high-converting 
              website in 2025.
            </p>
            
            <div className="metaInfoEverythingBlogsWebsiteNeed animDelay4EverythingBlogsWebsiteNeed">
              <div className="metaItemEverythingBlogsWebsiteNeed">
                <Calendar size={16} className="metaIconEverythingBlogsWebsiteNeed" />
                <span>May 02, 2025</span>
              </div>
              <div className="metaItemEverythingBlogsWebsiteNeed">
                <Clock size={16} className="metaIconEverythingBlogsWebsiteNeed" />
                <span>8 min read</span>
              </div>
            </div>
            
            <button className="btnPrimaryEverythingBlogsWebsiteNeed animDelay5EverythingBlogsWebsiteNeed">
              Read Full Article <ArrowRight size={18} className="btnIconEverythingBlogsWebsiteNeed" />
            </button>
          </div>

          {/* Bottom Right Logo Placeholder */}
          <div className="bgLogoEverythingBlogsWebsiteNeed animDelay6EverythingBlogsWebsiteNeed">
            {/* Replace this src with your actual transparent N logo */}
            <img 
              src="/main_logoFav.png" 
              alt="Nexzell" 
              className="logoImgEverythingBlogsWebsiteNeed" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default EverythingBlogsWebsiteNeed;