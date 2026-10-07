'use client'

import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import './NexzellMainBlogsWFilters.css';

const blogData = [
  {
    id: 1,
    category: "Business",
    title: "How to Build a Scalable E-commerce Website in 2025",
    description: "Discover the key steps, tools, and strategies to build a high-performing e-commerce site that scales with your business growth.",
    date: "Apr 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Technology",
    title: "The Rise of AI Chatbots: Transforming Customer Support",
    description: "Learn how AI chatbots are changing the way businesses handle customer queries and improve user experience.",
    date: "Apr 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Marketing",
    title: "SEO Trends to Watch in 2025",
    description: "Stay ahead with the latest SEO trends, algorithm updates, and strategies to boost your website's visibility and rankings.",
    date: "Apr 22, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Development",
    title: "Full-Stack Development Roadmap for 2025",
    description: "A complete guide to learn full-stack development, from frontend to backend, with real-world project ideas.",
    date: "Apr 18, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "Design",
    title: "UI/UX Design Principles for Modern Web Apps",
    description: "Create intuitive and visually stunning experiences with these essential UI/UX design principles and best practices.",
    date: "Apr 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "Business",
    title: "Tips to Improve Team Productivity with the Right Tools",
    description: "Explore how the right tools and processes can help your team work smarter, faster, and achieve more.",
    date: "Apr 12, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
  }
];

const filters = [
  "All", 
  "Business", 
  "Technology", 
  "Marketing", 
  "Ecommerce", 
  "Development", 
  "Design", 
  "Tips & Tricks"
];

function NexzellMainBlogsWFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredBlogs = activeFilter === "All" 
    ? blogData 
    : blogData.filter(blog => blog.category === activeFilter);

  return (
    <section className="sectionWrapperNexzellMainBlogsWFilters">
      <div className="containerNexzellMainBlogsWFilters">
        
        {/* Filters */}
        <div className="filterContainerNexzellMainBlogsWFilters animFadeUpNexzellMainBlogsWFilters">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`filterBtnNexzellMainBlogsWFilters ${activeFilter === filter ? 'activeFilterNexzellMainBlogsWFilters' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Blog Grid - Keyed by filter to re-trigger animations on change */}
        <div key={activeFilter} className="gridNexzellMainBlogsWFilters">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post, index) => (
              <div 
                key={post.id} 
                className="cardNexzellMainBlogsWFilters"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cardImageWrapperNexzellMainBlogsWFilters">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="cardImageNexzellMainBlogsWFilters" 
                  />
                  <div className="categoryBadgeNexzellMainBlogsWFilters">
                    <span className="badgeDotNexzellMainBlogsWFilters"></span>
                    {post.category}
                  </div>
                </div>
                
                <div className="cardContentNexzellMainBlogsWFilters">
                  <h3 className="cardTitleNexzellMainBlogsWFilters">{post.title}</h3>
                  <p className="cardDescNexzellMainBlogsWFilters">{post.description}</p>
                  
                  <div className="cardFooterNexzellMainBlogsWFilters">
                    <div className="metaGroupNexzellMainBlogsWFilters">
                      <div className="metaItemNexzellMainBlogsWFilters">
                        <Calendar size={14} className="metaIconNexzellMainBlogsWFilters" />
                        <span>{post.date}</span>
                      </div>
                      <div className="metaItemNexzellMainBlogsWFilters">
                        <Clock size={14} className="metaIconNexzellMainBlogsWFilters" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <a href="#" className="readMoreLinkNexzellMainBlogsWFilters">
                      Read More <ArrowRight size={14} className="readMoreIconNexzellMainBlogsWFilters" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="noResultsNexzellMainBlogsWFilters">
              <p>No articles found for this category.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default NexzellMainBlogsWFilters;