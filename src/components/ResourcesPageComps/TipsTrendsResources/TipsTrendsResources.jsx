import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import './TipsTrendsResources.css';

function TipsTrendsResources() {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      category: "Business",
      title: "How to Build a Scalable E-commerce Website in 2025",
      date: "Apr 28, 2025",
      readTime: "8 min read",
      link: "/blogs/how-to-build-a-scalable-ecommerce-website-in-2025"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
      category: "Technology",
      title: "The Rise of AI Chatbots: Transforming Customer Support",
      date: "Apr 25, 2025",
      readTime: "9 min read",
      link: "/blogs/the-rise-of-ai-chatbots-transforming-customer-support"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      category: "Marketing",
      title: "SEO Trends to Watch in 2025",
      date: "Apr 22, 2025",
      readTime: "7 min read",
      link: "/blogs/seo-trends-to-watch-in-2025"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
      category: "Development",
      title: "Full-Stack Development Roadmap for 2025",
      date: "Apr 18, 2025",
      readTime: "10 min read",
      link: "/blogs/full-stack-development-roadmap-for-2025"
    }
  ];

  return (
    <section className="sectionWrapperTipsTrendsResources">
      <div className="containerTipsTrendsResources">
        
        <div className="headerTipsTrendsResources animFadeUpTipsTrendsResources">
         <div className="badgeMainSliderResources animDelay1">
            <span className="badgeDotMainSliderResources"></span>
            LATEST FROM OUR BLOGS
          </div>
          <h2 className="headingTipsTrendsResources">
            Tips, Trends & <span className="textHighlightTipsTrendsResources">Insights</span>
          </h2>
          <p className="descriptionTipsTrendsResources">
            Stay informed with the latest articles, tips and industry trends to help you 
            make better decisions and grow faster.
          </p>
        </div>

        <div className="gridTipsTrendsResources">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className={`cardTipsTrendsResources animDelay${index + 1}TipsTrendsResources`}
            >
              <div className="cardImageWrapperTipsTrendsResources">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="cardImageTipsTrendsResources" 
                />
              </div>
              
              <div className="cardContentTipsTrendsResources">
                <div className="cardCategoryTipsTrendsResources">{post.category}</div>
                <h3 className="cardTitleTipsTrendsResources">{post.title}</h3>
                
                <div className="cardFooterTipsTrendsResources">
                  <div className="cardMetaGroupTipsTrendsResources">
                    <div className="cardMetaItemTipsTrendsResources">
                      <Calendar size={14} className="metaIconTipsTrendsResources" />
                      <span>{post.date}</span>
                    </div>
                    <div className="cardMetaItemTipsTrendsResources">
                      <Clock size={14} className="metaIconTipsTrendsResources" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <a href={post.link} style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                    <ArrowRight size={16} className="cardActionIconTipsTrendsResources" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TipsTrendsResources;