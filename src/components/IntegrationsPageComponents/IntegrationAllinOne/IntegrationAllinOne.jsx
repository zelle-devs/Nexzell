import React from 'react';
import { ArrowRight, CheckCircle2, Megaphone, Store, Search, Facebook, Bot, MessageCircle, TrendingUp } from 'lucide-react';
import './IntegrationAllinOne.css';
import { FaFacebook } from 'react-icons/fa';

function IntegrationAllinOne() {
  const integrations = [
    {
      id: 1,
      icon: <Megaphone size={28} className="integrationLogoIntegrationAllinOne googleColorIntegrationAllinOne" />,
      title: "Google Ads",
      desc: "Run smarter campaigns and get better results with Google Ads integration.",
      features: ["Track conversions", "Sync campaign data", "Optimize performance"]
    },
    {
      id: 2,
      icon: <Store size={28} className="integrationLogoIntegrationAllinOne googleColorIntegrationAllinOne" />,
      title: "Google Merchants",
      desc: "List your products on Google Shopping and reach millions of ready-to-buy customers.",
      features: ["Product feed sync", "Real-time updates", "More visibility & sales"]
    },
    {
      id: 3,
      icon: <Search size={28} className="integrationLogoIntegrationAllinOne googleColorIntegrationAllinOne" />,
      title: "Search Console",
      desc: "Monitor your website's performance and improve your search presence with Google Search Console.",
      features: ["Track indexing status", "Find and fix issues", "Improve SEO performance"]
    },
    {
      id: 4,
      icon: <FaFacebook size={28} className="integrationLogoIntegrationAllinOne metaColorIntegrationAllinOne" />,
      title: "Meta Market Place",
      desc: "Showcase your products on Facebook & Instagram Marketplace and reach new buyers.",
      features: ["Auto sync products", "Manage listings", "Grow your audience"]
    },
    {
      id: 5,
      icon: <Bot size={28} className="integrationLogoIntegrationAllinOne botColorIntegrationAllinOne" />,
      title: "Chatbot Integration",
      desc: "Automate conversations, answer FAQs, and provide 24/7 support with chatbot integration.",
      features: ["Smart responses", "Lead capture", "Better customer engagement"]
    },
    {
      id: 6,
      icon: <MessageCircle size={28} className="integrationLogoIntegrationAllinOne whatsappColorIntegrationAllinOne" />,
      title: "WhatsApp",
      desc: "Connect with your customers instantly and manage conversations with ease.",
      features: ["Automated messages", "Order notifications", "Real-time support"]
    },
    {
      id: 7,
      icon: <TrendingUp size={28} className="integrationLogoIntegrationAllinOne seoColorIntegrationAllinOne" />,
      title: "SEO",
      desc: "Improve your search rankings and drive organic traffic with powerful SEO tools and insights.",
      features: ["Keyword tracking", "Performance reports", "Actionable recommendations"]
    }
  ];

  return (
    <section className="sectionWrapperIntegrationAllinOne">
      <div className="containerIntegrationAllinOne">
        
        {/* Header Row */}
        <div className="headerRowIntegrationAllinOne animFadeUpIntegrationAllinOne">
          <div className="headerLeftIntegrationAllinOne">
            <div className="badgeIntegrationAllinOne">
              <span className="badgeDotIntegrationAllinOne"></span>
              OUR INTEGRATIONS
            </div>
            <h2 className="headingIntegrationAllinOne">
              Everything You Need,<br />
              All in <span className="textHighlightIntegrationAllinOne">One Platform.</span>
            </h2>
          </div>
          <div className="headerRightIntegrationAllinOne">
            <p className="descriptionIntegrationAllinOne">
              Seamlessly connect with the tools you already use and the platforms 
              your customers trust. Our integrations help you save time, improve 
              efficiency, and grow faster.
            </p>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="gridIntegrationAllinOne">
          {integrations.map((item, index) => (
            <div 
              key={item.id} 
              className={`cardIntegrationAllinOne animDelay${index + 1}IntegrationAllinOne`}
            >
              <div className="cardIconBoxIntegrationAllinOne">
                {item.icon}
              </div>
              <h3 className="cardTitleIntegrationAllinOne">{item.title}</h3>
              <p className="cardDescIntegrationAllinOne">{item.desc}</p>
              
              <ul className="featureListIntegrationAllinOne">
                {item.features.map((feat, i) => (
                  <li key={i} className="featureItemIntegrationAllinOne">
                    <CheckCircle2 
                      size={16} 
                      className="checkIconIntegrationAllinOne" 
                      fill="var(--nexzell-primary, #00E699)" 
                      color="var(--nexzell-bg-base, #06080C)" 
                    />
                    <span className="featureTextIntegrationAllinOne">{feat}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className="learnMoreLinkIntegrationAllinOne">
                Learn More <ArrowRight size={14} className="learnMoreIconIntegrationAllinOne" />
              </a>
            </div>
          ))}

          {/* Custom 8th Slot for Annotation & Glow */}
         

        </div>

      </div>
    </section>
  );
}

export default IntegrationAllinOne;