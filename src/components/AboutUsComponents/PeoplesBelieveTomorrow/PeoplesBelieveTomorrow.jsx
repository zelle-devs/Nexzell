import React from 'react';
import { ArrowRight } from 'lucide-react';
import './PeoplesBelieveTomorrow.css';

function PeoplesBelieveTomorrow() {
  const rightList = [
    "Different Perspectives",
    "Stronger Businesses",
    "A Brighter Tomorrow"
  ];

  return (
    <section className="sectionWrapperPeoplesBelieveTomorrow">
      
      <div className="bgContainerPeoplesBelieveTomorrow">
        
        <div className="overlayLeftPeoplesBelieveTomorrow"></div>
        <div className="overlayRightPeoplesBelieveTomorrow"></div>
      </div>

      <div className="containerPeoplesBelieveTomorrow">
        
        <div className="leftColumnPeoplesBelieveTomorrow animFadeUpPeoplesBelieveTomorrow">
          <div className="badgePeoplesBelieveTomorrow">
            <span className="badgeDotPeoplesBelieveTomorrow"></span>
            OUR TEAM
          </div>

          <h2 className="headingPeoplesBelieveTomorrow">
            People Who<br />
            Believe in a Bigger<br />
            Tomorrow.
          </h2>

          <p className="descriptionPeoplesBelieveTomorrow">
            Nexzell is powered by a diverse team of builders, 
            thinkers and doers who are passionate about 
            commerce and the businesses behind it.
          </p>

          <button className="btnPrimaryPeoplesBelieveTomorrow">
            Join Our Team <ArrowRight size={18} className="btnIconPeoplesBelieveTomorrow" />
          </button>
        </div>

       

        <div className="rightColumnPeoplesBelieveTomorrow animFadeUpDelay2PeoplesBelieveTomorrow">
          <div className="rightListWrapperPeoplesBelieveTomorrow">
            {rightList.map((text, index) => (
              <div key={index} className="rightListItemPeoplesBelieveTomorrow">
                <span className="rightListTextPeoplesBelieveTomorrow">{text}</span>
                <div className="animatedLineWrapperPeoplesBelieveTomorrow">
                  <div className="animatedLineBasePeoplesBelieveTomorrow"></div>
                  <div className={`movingPointPeoplesBelieveTomorrow delay${index}PeoplesBelieveTomorrow`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default PeoplesBelieveTomorrow;