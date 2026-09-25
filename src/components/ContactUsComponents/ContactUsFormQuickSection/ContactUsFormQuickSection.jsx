import React from 'react';
import { ArrowRight, Clock, Plus, ChevronDown } from 'lucide-react';
import './ContactUsFormQuickSection.css';

function ContactUsFormQuickSection() {
  const faqs = [
    "How quickly will I get a response?",
    "Can I request a demo for my team?",
    "Do you offer custom solutions for large businesses?"
  ];

  return (
    <section className="sectionWrapperContactUsFormQuickSection">
      <div className="containerContactUsFormQuickSection">
        
        {/* Form Card */}
        <div className="cardContactUsFormQuickSection animFadeUpContactUsFormQuickSection">
          
          <div className="cardHeaderContactUsFormQuickSection">
           <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
           SEND US A MESSAGE
          </div>
            <h2 className="headingContactUsFormQuickSection">
              We'd Love to Hear From You.
            </h2>
            <p className="descriptionContactUsFormQuickSection">
              Fill out the form and our team will get back to you shortly.
            </p>
          </div>

          <form className="formContactUsFormQuickSection">
            <div className="formGridContactUsFormQuickSection">
              
              <div className="inputGroupContactUsFormQuickSection">
                <label className="labelContactUsFormQuickSection">
                  First Name <span className="requiredContactUsFormQuickSection">*</span>
                </label>
                <input type="text" className="inputContactUsFormQuickSection" placeholder="John" />
              </div>

              <div className="inputGroupContactUsFormQuickSection">
                <label className="labelContactUsFormQuickSection">
                  Last Name <span className="requiredContactUsFormQuickSection">*</span>
                </label>
                <input type="text" className="inputContactUsFormQuickSection" placeholder="Doe" />
              </div>

              <div className="inputGroupContactUsFormQuickSection">
                <label className="labelContactUsFormQuickSection">
                  Business Email <span className="requiredContactUsFormQuickSection">*</span>
                </label>
                <input type="email" className="inputContactUsFormQuickSection" placeholder="john@company.com" />
              </div>

              <div className="inputGroupContactUsFormQuickSection">
                <label className="labelContactUsFormQuickSection">
                  Company Name <span className="requiredContactUsFormQuickSection">*</span>
                </label>
                <input type="text" className="inputContactUsFormQuickSection" placeholder="Your Company" />
              </div>

              <div className="inputGroupContactUsFormQuickSection">
                <label className="labelContactUsFormQuickSection">Phone Number</label>
                <div className="phoneInputWrapperContactUsFormQuickSection">
                  <div className="phonePrefixContactUsFormQuickSection">
                    <span className="flagContactUsFormQuickSection">🇺🇸</span>
                    <span className="codeContactUsFormQuickSection">+1</span>
                    <ChevronDown size={14} className="chevronContactUsFormQuickSection" />
                  </div>
                  <div className="phoneDividerContactUsFormQuickSection"></div>
                  <input type="tel" className="inputContactUsFormQuickSection phoneFieldContactUsFormQuickSection" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="inputGroupContactUsFormQuickSection">
                <label className="labelContactUsFormQuickSection">
                  What can we help you with? <span className="requiredContactUsFormQuickSection">*</span>
                </label>
                <div className="selectWrapperContactUsFormQuickSection">
                  <select className="inputContactUsFormQuickSection selectContactUsFormQuickSection">
                    <option value="" disabled selected>Select an option</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                  <ChevronDown size={16} className="selectChevronContactUsFormQuickSection" />
                </div>
              </div>

            </div>

            <div className="inputGroupContactUsFormQuickSection fullWidthContactUsFormQuickSection">
              <label className="labelContactUsFormQuickSection">Tell us more about your business...</label>
              <textarea 
                className="inputContactUsFormQuickSection textareaContactUsFormQuickSection" 
                placeholder="Share a few details about your goals, current setup, or any specific requirements."
                rows="4"
              ></textarea>
            </div>

            <button type="button" className="btnSubmitContactUsFormQuickSection">
              Send Message <ArrowRight size={18} className="btnIconContactUsFormQuickSection" />
            </button>

            <div className="formFooterContactUsFormQuickSection">
              <Clock size={14} className="clockIconContactUsFormQuickSection" />
              <span>We'll be in touch within 24 hours.</span>
            </div>
          </form>

        </div>

        {/* FAQ Card */}
        <div className="cardFaqContactUsFormQuickSection animFadeUpDelay1ContactUsFormQuickSection">
          
          <div className="faqHeaderRowContactUsFormQuickSection">
            <div>
              <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
           FREQUENTLY ASKED
          </div>
              <h2 className="headingFaqContactUsFormQuickSection">Quick Answers</h2>
            </div>
            <a href="#" className="viewAllLinkContactUsFormQuickSection">
              View All FAQs <ArrowRight size={16} />
            </a>
          </div>

          <div className="faqListContactUsFormQuickSection">
            {faqs.map((question, index) => (
              <div key={index} className="faqItemContactUsFormQuickSection">
                <span className="faqQuestionContactUsFormQuickSection">{question}</span>
                <Plus size={18} className="faqIconContactUsFormQuickSection" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactUsFormQuickSection;