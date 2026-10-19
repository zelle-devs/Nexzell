'use client'

import React, { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  Megaphone,
  Store,
  Search,
  Bot,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './IntegrationAllinOne.css';

const ICON_SIZE = 26;

const integrations = [
  {
    id: 1,
    icon: <Megaphone size={ICON_SIZE} strokeWidth={1.8} />,
    accent: '#4285F4',
    tag: 'Google',
    title: 'Google Ads',
    desc: 'Run smarter campaigns and get better results with Google Ads integration.',
    features: ['Track conversions', 'Sync campaign data', 'Optimize performance'],
  },
  {
    id: 2,
    icon: <Store size={ICON_SIZE} strokeWidth={1.8} />,
    accent: '#34A853',
    tag: 'Google',
    title: 'Google Merchants',
    desc: 'List your products on Google Shopping and reach millions of ready-to-buy customers.',
    features: ['Product feed sync', 'Real-time updates', 'More visibility & sales'],
  },
  {
    id: 3,
    icon: <Search size={ICON_SIZE} strokeWidth={1.8} />,
    accent: '#FBBC05',
    tag: 'Google',
    title: 'Search Console',
    desc: "Monitor your website's performance and improve your search presence with Google Search Console.",
    features: ['Track indexing status', 'Find and fix issues', 'Improve SEO performance'],
  },
  {
    id: 4,
    icon: <FaFacebook size={ICON_SIZE} />,
    accent: '#1877F2',
    tag: 'Meta',
    title: 'Meta Marketplace',
    desc: 'Showcase your products on Facebook & Instagram Marketplace and reach new buyers.',
    features: ['Auto sync products', 'Manage listings', 'Grow your audience'],
  },
  {
    id: 5,
    icon: <Bot size={ICON_SIZE} strokeWidth={1.8} />,
    accent: '#A78BFA',
    tag: 'Automation',
    title: 'Chatbot Integration',
    desc: 'Automate conversations, answer FAQs, and provide 24/7 support with chatbot integration.',
    features: ['Smart responses', 'Lead capture', 'Better customer engagement'],
  },
  {
    id: 6,
    icon: <FaWhatsapp size={ICON_SIZE} />,
    accent: '#25D366',
    tag: 'Messaging',
    title: 'WhatsApp',
    desc: 'Connect with your customers instantly and manage conversations with ease.',
    features: ['Automated messages', 'Order notifications', 'Real-time support'],
  },
  {
    id: 7,
    icon: <TrendingUp size={ICON_SIZE} strokeWidth={1.8} />,
    accent: '#00E699',
    tag: 'Growth',
    title: 'SEO',
    desc: 'Improve your search rankings and drive organic traffic with powerful SEO tools and insights.',
    features: ['Keyword tracking', 'Performance reports', 'Actionable recommendations'],
  },
];

function IntegrationAllinOne() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSettled, setIsSettled] = useState(false);

  // Trigger the entrance sequence once, when the section scrolls into view
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Once the entrance sequence is done, remove stagger delays so hover feels instant
  useEffect(() => {
    if (!isVisible) return undefined;
    const t = setTimeout(() => setIsSettled(true), 2200);
    return () => clearTimeout(t);
  }, [isVisible]);

  // Cursor-following spotlight: feeds --mx / --my to the card's CSS
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      className={`sectionWrapperIntegrationAllinOne${isVisible ? ' isVisibleIntegrationAllinOne' : ''}${isSettled ? ' isSettledIntegrationAllinOne' : ''}`}
    >
      {/* Ambient background */}
      <div className="bgGlowOneIntegrationAllinOne" aria-hidden="true" />
      <div className="bgGlowTwoIntegrationAllinOne" aria-hidden="true" />
      <div className="bgGridIntegrationAllinOne" aria-hidden="true" />

      <div className="containerIntegrationAllinOne">
        {/* Header Row */}
        <div className="headerRowIntegrationAllinOne">
          <div className="headerLeftIntegrationAllinOne">
            <div className="badgeMainSliderIntegrations">
            <span className="badgeDotMainSliderIntegrations"></span>
           OUR INTEGRATIONS
          </div>
            <h2 className="headingIntegrationAllinOne revealIntegrationAllinOne" style={{ '--i': 1 }}>
              Everything You Need,
              <br />
              All in <span className="textHighlightIntegrationAllinOne">One Platform.</span>
            </h2>
          </div>

          <div className="headerRightIntegrationAllinOne revealIntegrationAllinOne" style={{ '--i': 2 }}>
            <p className="descriptionIntegrationAllinOne">
              Seamlessly connect with the tools you already use and the platforms your customers
              trust. Our integrations help you save time, improve efficiency, and grow faster.
            </p>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="gridIntegrationAllinOne">
          {integrations.map((item, index) => (
            <article
              key={item.id}
              className="cardIntegrationAllinOne revealIntegrationAllinOne"
              style={{ '--i': index + 3, '--accent': item.accent }}
              onMouseMove={handleMouseMove}
            >
              <span className="cardSpotlightIntegrationAllinOne" aria-hidden="true" />
              <span className="cardTopLineIntegrationAllinOne" aria-hidden="true" />

              <div className="cardHeadIntegrationAllinOne">
                <div className="cardIconBoxIntegrationAllinOne">
                  <span className="cardIconRingIntegrationAllinOne" aria-hidden="true" />
                  <span className="cardIconInnerIntegrationAllinOne">{item.icon}</span>
                </div>
                <span className="cardTagIntegrationAllinOne">{item.tag}</span>
              </div>

              <h3 className="cardTitleIntegrationAllinOne">{item.title}</h3>
              <p className="cardDescIntegrationAllinOne">{item.desc}</p>

              <ul className="featureListIntegrationAllinOne">
                {item.features.map((feat, i) => (
                  <li
                    key={feat}
                    className="featureItemIntegrationAllinOne"
                    style={{ '--fi': i }}
                  >
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
            </article>
          ))}

          {/* 8th slot: fills the grid and invites a request */}
          <article
            className="cardIntegrationAllinOne ctaCardIntegrationAllinOne revealIntegrationAllinOne"
            style={{ '--i': integrations.length + 3, '--accent': '#00E699' }}
            onMouseMove={handleMouseMove}
          >
            <span className="cardSpotlightIntegrationAllinOne" aria-hidden="true" />
            <span className="cardTopLineIntegrationAllinOne" aria-hidden="true" />

            <div className="ctaIconIntegrationAllinOne">
              <Sparkles size={22} strokeWidth={1.8} />
            </div>
            <h3 className="cardTitleIntegrationAllinOne">Need another tool?</h3>
            <p className="cardDescIntegrationAllinOne">
              Tell us which platform you want connected and we will look at adding it.
            </p>
            <a href="/contact" className="ctaLinkIntegrationAllinOne">
              Request an integration
              <ArrowUpRight size={16} className="ctaLinkIconIntegrationAllinOne" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default IntegrationAllinOne;