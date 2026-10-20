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
            {/* <div className="badgeMainSliderBlogs animDelay1">
              <span className="badgeDotMainSliderBlogs"></span>
              FEATURED
            </div> */}

           <h2 className="headingEverythingBlogsWebsiteNeed animDelay2EverythingBlogsWebsiteNeed">
              Everything You Need to<br />
              Build a Better Website
            </h2>

            <p className="descriptionEverythingBlogsWebsiteNeed animDelay3EverythingBlogsWebsiteNeed">
              From choosing the right tech stack and designing an intuitive user experience to optimizing for lightning-fast performance and SEO, this complete guide covers everything you need to know. Whether you are launching a dynamic e-commerce platform, crafting a responsive corporate interface, or scaling an existing digital presence, we provide the actionable strategies and expert insights required to build a modern, high-converting website that truly stands out.
            </p>

            {/* <div className="metaInfoEverythingBlogsWebsiteNeed animDelay4EverythingBlogsWebsiteNeed">
              <div className="metaItemEverythingBlogsWebsiteNeed">
                <Calendar size={16} className="metaIconEverythingBlogsWebsiteNeed" />
                <span>May 02, 2025</span>
              </div>
              <div className="metaItemEverythingBlogsWebsiteNeed">
                <Clock size={16} className="metaIconEverythingBlogsWebsiteNeed" />
                <span>8 min read</span>
              </div>
            </div> */}

            {/* <button className="btnPrimaryEverythingBlogsWebsiteNeed animDelay5EverythingBlogsWebsiteNeed">
              Read Full Article <ArrowRight size={18} className="btnIconEverythingBlogsWebsiteNeed" />
            </button> */}
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