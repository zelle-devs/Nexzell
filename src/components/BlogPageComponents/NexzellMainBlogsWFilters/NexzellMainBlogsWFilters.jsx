'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogData, blogFilters } from './blogData';
import './NexzellMainBlogsWFilters.css';

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
          {blogFilters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`filterBtnNexzellMainBlogsWFilters ${activeFilter === filter ? 'activeFilterNexzellMainBlogsWFilters' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div key={activeFilter} className="gridNexzellMainBlogsWFilters">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post, index) => (
              <Link 
                href={`/blogs/${post.slug}`} 
                key={post.id} 
                className="cardNexzellMainBlogsWFilters"
                style={{ animationDelay: `${index * 0.1}s`, textDecoration: 'none' }}
              >
                <div className="cardImageWrapperNexzellMainBlogsWFilters">
                  <img 
                    src={post.image} 
                    alt={post.imageAlt || post.title} 
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
                    
                    <div className="readMoreLinkNexzellMainBlogsWFilters">
                      Read More <ArrowRight size={14} className="readMoreIconNexzellMainBlogsWFilters" />
                    </div>
                  </div>
                </div>
              </Link>
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