import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import './TipsTrendsResources.css';

function TipsTrendsResources() {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
      category: "Development",
      title: "10 Essential Web Development Trends for 2025",
      date: "Sep 25, 2025",
      readTime: "5 min read"
    },
   {
      id: 2,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
      category: "Business",
      title: "How to Build a Scalable Ecommerce Business",
      date: "Sep 22, 2025",
      readTime: "6 min read"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      category: "Digital Marketing",
      title: "Proven SEO Strategies to Boost Your Traffic",
      date: "Sep 18, 2025",
      readTime: "4 min read"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
      category: "Technology",
      title: "The Future of AI in Ecommerce",
      date: "Sep 14, 2025",
      readTime: "5 min read"
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
                  <ArrowRight size={16} className="cardActionIconTipsTrendsResources" />
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