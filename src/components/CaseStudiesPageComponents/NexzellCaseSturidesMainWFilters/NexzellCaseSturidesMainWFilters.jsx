"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Building2 } from 'lucide-react';
import { caseStudiesData, categoriesList } from './NexzellCaseSturidesMainWFiltersData';
import './NexzellCaseSturidesMainWFilters.css';

function NexzellCaseSturidesMainWFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCases = activeFilter === "All"
    ? caseStudiesData
    : caseStudiesData.filter(item => item.category === activeFilter);

  const getCount = (filter) =>
    filter === "All"
      ? caseStudiesData.length
      : caseStudiesData.filter(item => item.category === filter).length;

  return (
    <section className="sectionWrapperNexzellCaseSturidesMainWFilters">
      <div className="containerNexzellCaseSturidesMainWFilters">

        {/* Filters */}
        <div
          className="filterContainerNexzellCaseSturidesMainWFilters animFadeUpNexzellCaseSturidesMainWFilters"
          role="tablist"
          aria-label="Filter case studies by category"
        >
          {categoriesList.map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`filterBtnNexzellCaseSturidesMainWFilters ${activeFilter === filter ? 'activeFilterNexzellCaseSturidesMainWFilters' : ''}`}
            >
              {filter}
              <span className="filterCountNexzellCaseSturidesMainWFilters">{getCount(filter)}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div key={activeFilter} className="gridNexzellCaseSturidesMainWFilters">
          {filteredCases.length > 0 ? (
            filteredCases.map((caseItem, index) => (
              <Link
                key={caseItem.id}
                href={`/case-studies/${caseItem.slug}`}
                className="cardNexzellCaseSturidesMainWFilters"
                style={{ animationDelay: `${index * 0.08}s` }}
                aria-label={`Open case study: ${caseItem.title}`}
              >
                <div className="cardImageWrapperNexzellCaseSturidesMainWFilters">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="cardImageNexzellCaseSturidesMainWFilters"
                    loading="lazy"
                  />
                  <div className="cardImageOverlayNexzellCaseSturidesMainWFilters"></div>

                  <div className="categoryBadgeNexzellCaseSturidesMainWFilters">
                    <span className="badgeDotNexzellCaseSturidesMainWFilters"></span>
                    {caseItem.category}
                  </div>

                  <div className="cardMetricNexzellCaseSturidesMainWFilters">
                    <span className="cardMetricValueNexzellCaseSturidesMainWFilters">{caseItem.heroMetric.value}</span>
                    <span className="cardMetricLabelNexzellCaseSturidesMainWFilters">{caseItem.heroMetric.label}</span>
                  </div>
                </div>

                <div className="cardContentNexzellCaseSturidesMainWFilters">
                  <div className="cardMetaNexzellCaseSturidesMainWFilters">
                    <div className="metaItemNexzellCaseSturidesMainWFilters">
                      <Calendar size={14} className="metaIconNexzellCaseSturidesMainWFilters" />
                      <span>{caseItem.date}</span>
                    </div>
                    <div className="metaItemNexzellCaseSturidesMainWFilters">
                      <Building2 size={14} className="metaIconNexzellCaseSturidesMainWFilters" />
                      <span>{caseItem.industry}</span>
                    </div>
                  </div>

                  <h3 className="cardTitleNexzellCaseSturidesMainWFilters">{caseItem.title}</h3>
                  <p className="cardDescNexzellCaseSturidesMainWFilters">{caseItem.shortDescription}</p>

                  <div className="cardTagsNexzellCaseSturidesMainWFilters">
                    {caseItem.tags.map((tag) => (
                      <span key={tag} className="tagNexzellCaseSturidesMainWFilters">{tag}</span>
                    ))}
                  </div>

                  <div className="cardFooterNexzellCaseSturidesMainWFilters">
                    <span className="readMoreBtnNexzellCaseSturidesMainWFilters">
                      View case study
                      <ArrowRight size={16} className="readMoreIconNexzellCaseSturidesMainWFilters" />
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="noResultsNexzellCaseSturidesMainWFilters">
              <p>No case studies found for this category yet.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default NexzellCaseSturidesMainWFilters;