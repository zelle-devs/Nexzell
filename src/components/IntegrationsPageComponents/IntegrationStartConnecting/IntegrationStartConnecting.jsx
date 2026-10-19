import React from 'react';
import { ArrowRight } from 'lucide-react';
import './IntegrationStartConnecting.css';
import Link from 'next/link';
function IntegrationStartConnecting() {
  return (
    <section className="sectionWrapperIntegrationStartConnecting">
      <div className="containerIntegrationStartConnecting">
        <div className="leftContentIntegrationStartConnecting animFadeUpIntegrationStartConnecting">
          <div className="badgeIntegrationStartConnecting">
            <span className="badgeDotIntegrationStartConnecting"></span>
            LETS BUILD YOUR SUCCESS
          </div>
          
          <h2 className="headingIntegrationStartConnecting">
           Ready to Create Your Own Success Story
          </h2>
          
          <p className="descriptionIntegrationStartConnecting">
           Lets discuss your projects and see how we can help you grow with the custom web solutions and digital marketing 
          </p>
          
          <div className="btnGroupIntegrationStartConnecting">
            <Link href='/consultation'>
            <button className="btnPrimaryIntegrationStartConnecting">
              Book a Free Demo <ArrowRight size={18} className="btnIconIntegrationStartConnecting" />
            </button>
            </Link>
            <a href="/contact-us">
            <button className="btnSecondaryIntegrationStartConnecting">
              Contact Us
              
            </button>
            </a>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default IntegrationStartConnecting;