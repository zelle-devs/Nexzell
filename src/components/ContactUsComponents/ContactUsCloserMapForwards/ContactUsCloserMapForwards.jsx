import React from 'react';
import { Building2, Mail, Globe2, MessageSquare, ArrowRight } from 'lucide-react';
import './ContactUsCloserMapForwards.css';

function ContactUsCloserMapForwards() {
  return (
    <section className="sectionWrapperContactUsCloserMapForwards">
      <div className="containerContactUsCloserMapForwards">
        
        {/* Card 1: Offices */}
        <div className="cardOfficesContactUsCloserMapForwards animFadeUpContactUsCloserMapForwards">
          <div className="cardHeaderContactUsCloserMapForwards">
            <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
          OUR OFFICES
          </div>
            <h2 className="headingContactUsCloserMapForwards">A Global Team, Closer to You.</h2>
            <p className="descriptionContactUsCloserMapForwards">
              Nexzell is a global company, helping businesses around the world.
            </p>
          </div>

          <div className="officeListContactUsCloserMapForwards">
            {/* Headquarters */}
            <div className="officeItemContactUsCloserMapForwards">
              <div className="officeLeftContactUsCloserMapForwards">
                <div className="iconBoxContactUsCloserMapForwards">
                  <Building2 size={20} className="officeIconContactUsCloserMapForwards" />
                </div>
                <div className="officeTitlesContactUsCloserMapForwards">
                  <h4 className="officeNameContactUsCloserMapForwards">Headquarters</h4>
                  <p className="officeLocationContactUsCloserMapForwards">Karachi, Pakistan</p>
                </div>
              </div>
              <div className="officeRightContactUsCloserMapForwards">
                <p className="officeAddressContactUsCloserMapForwards">
                  Office 303, 3rd Floor, Progressive Square,<br />
                  Shahra-e-Faisal, Karachi 75350
                </p>
              </div>
            </div>

            {/* North America Office */}
            <div className="officeItemContactUsCloserMapForwards">
              <div className="officeLeftContactUsCloserMapForwards">
                <div className="iconBoxContactUsCloserMapForwards">
                  <Building2 size={20} className="officeIconContactUsCloserMapForwards" />
                </div>
                <div className="officeTitlesContactUsCloserMapForwards">
                  <h4 className="officeNameContactUsCloserMapForwards">North America Office</h4>
                  <p className="officeLocationContactUsCloserMapForwards">Wilmington, Delaware, USA.</p>
                </div>
              </div>
              <div className="officeRightContactUsCloserMapForwards">
                <p className="officeAddressContactUsCloserMapForwards">
                  8 The Green, Suite A, Dover, DE 19901
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="officeItemContactUsCloserMapForwards">
              <div className="officeLeftContactUsCloserMapForwards">
                <div className="iconBoxContactUsCloserMapForwards">
                  <Mail size={20} className="officeIconContactUsCloserMapForwards" />
                </div>
                <div className="officeTitlesContactUsCloserMapForwards">
                  <h4 className="officeNameContactUsCloserMapForwards">Email Us</h4>
                  <p className="officeLocationContactUsCloserMapForwards">hello@nexzell.com</p>
                </div>
              </div>
              <div className="officeRightContactUsCloserMapForwards">
                <p className="officeAddressContactUsCloserMapForwards">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Map Section */}
        <div className="cardMapContactUsCloserMapForwards animFadeUpDelay1ContactUsCloserMapForwards">
          <div className="floatingMapCardContactUsCloserMapForwards">
            <div className="floatingIconBoxContactUsCloserMapForwards">
              <Globe2 size={24} className="floatingIconContactUsCloserMapForwards" />
            </div>
            <div className="floatingTextContactUsCloserMapForwards">
              <h4 className="floatingTitleContactUsCloserMapForwards">
                Building a More Connected<br />
                Commerce World.
              </h4>
              <p className="floatingDescContactUsCloserMapForwards">
                Supporting businesses in<br />
                120+ countries.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: CTA Section */}
        <div className="cardCtaContactUsCloserMapForwards animFadeUpDelay2ContactUsCloserMapForwards">
          <div className="ctaContentContactUsCloserMapForwards">
            <div className="badgeEverythingBusinessStarter">
            <span className="badgeDotEverythingBusinessStarter"></span>
          STILL HAVE QUESTIONS?
          </div>
            <h2 className="headingCtaContactUsCloserMapForwards">Let's Find the Right Way Forward.</h2>
            <p className="descriptionCtaContactUsCloserMapForwards">
              Our team is here to help you explore what's possible<br />
              with Nexzell.
            </p>
            <button className="btnCtaContactUsCloserMapForwards">
              <MessageSquare size={16} className="btnCtaIconContactUsCloserMapForwards" />
              Talk to an Expert <ArrowRight size={16} className="btnCtaArrowContactUsCloserMapForwards" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactUsCloserMapForwards;