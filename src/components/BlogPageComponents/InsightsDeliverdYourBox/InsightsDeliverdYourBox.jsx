'use client'
import React from 'react';
import { Mail, ArrowRight, FileText, Zap, Lightbulb } from 'lucide-react';
import './InsightsDeliverdYourBox.css';

function InsightsDeliverdYourBox() {
  return (
    <section className="sectionWrapperInsightsDeliverdYourBox">
      <div className="containerInsightsDeliverdYourBox">
        
        {/* Left Content */}
        <div className="leftContentInsightsDeliverdYourBox animFadeUpInsightsDeliverdYourBox">
           <div className="badgeMainSliderBlogs animDelay1">
            <span className="badgeDotMainSliderBlogs"></span>
            STAY UPDATED
          </div>
          
          <h2 className="headingInsightsDeliverdYourBox">
            Get the Latest Insights<br />
            Delivered to <span className="textHighlightInsightsDeliverdYourBox">Your Inbox.</span>
          </h2>
          
          <p className="descriptionInsightsDeliverdYourBox">
            Subscribe to our newsletter and never miss the latest blogs, 
            product updates, and industry insights.
          </p>

          <form className="formWrapperInsightsDeliverdYourBox animDelay2InsightsDeliverdYourBox" onSubmit={(e) => e.preventDefault()}>
            <div className="inputGroupInsightsDeliverdYourBox">
              <Mail size={20} className="mailIconInsightsDeliverdYourBox" />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="inputInsightsDeliverdYourBox"
                required
              />
            </div>
            <button type="submit" className="submitBtnInsightsDeliverdYourBox">
              Subscribe <ArrowRight size={16} className="btnArrowInsightsDeliverdYourBox" />
            </button>
          </form>
        </div>

        {/* Right Content - Floating Cards */}
        <div className="rightContentInsightsDeliverdYourBox">
          
          {/* Card 1 - Top Right */}
          <div className="floatingCardInsightsDeliverdYourBox card1InsightsDeliverdYourBox animFadeInRightDelay1InsightsDeliverdYourBox">
            <div className="cardIconBoxInsightsDeliverdYourBox">
              <FileText size={20} className="cardIconInsightsDeliverdYourBox" />
            </div>
            <div className="cardTextInsightsDeliverdYourBox">
              Latest Articles<br />& Insights
            </div>
          </div>

          {/* Card 2 - Middle Left */}
          <div className="floatingCardInsightsDeliverdYourBox card2InsightsDeliverdYourBox animFadeInRightDelay2InsightsDeliverdYourBox">
            <div className="cardIconBoxInsightsDeliverdYourBox">
              <Zap size={20} className="cardIconInsightsDeliverdYourBox" />
            </div>
            <div className="cardTextInsightsDeliverdYourBox">
              Product Updates<br />& Announcements
            </div>
          </div>

          {/* Card 3 - Bottom Right */}
          <div className="floatingCardInsightsDeliverdYourBox card3InsightsDeliverdYourBox animFadeInRightDelay3InsightsDeliverdYourBox">
            <div className="cardIconBoxInsightsDeliverdYourBox">
              <Lightbulb size={20} className="cardIconInsightsDeliverdYourBox" />
            </div>
            <div className="cardTextInsightsDeliverdYourBox">
              Exclusive Tips<br />& Resources
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default InsightsDeliverdYourBox;