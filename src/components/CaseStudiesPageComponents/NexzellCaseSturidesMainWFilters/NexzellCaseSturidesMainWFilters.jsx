"use client"

import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  ArrowRight,
  X,
  LayoutTemplate,
  Target,
  Zap,
  Building2,
  Clock,
  Layers,
  Quote,
  ChevronLeft,
  ChevronRight,
  Check
} from 'lucide-react';
import { caseStudiesData, categoriesList } from './NexzellCaseSturidesMainWFiltersData';
import './NexzellCaseSturidesMainWFilters.css';

function NexzellCaseSturidesMainWFilters() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);

  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const keyHandlerRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const filteredCases = activeFilter === "All"
    ? caseStudiesData
    : caseStudiesData.filter(item => item.category === activeFilter);

  const getCount = (filter) =>
    filter === "All"
      ? caseStudiesData.length
      : caseStudiesData.filter(item => item.category === filter).length;

  const currentIndex = selectedCase
    ? filteredCases.findIndex(item => item.id === selectedCase.id)
    : -1;

  const prevCase = currentIndex > -1 && filteredCases.length > 1
    ? filteredCases[(currentIndex - 1 + filteredCases.length) % filteredCases.length]
    : null;

  const nextCase = currentIndex > -1 && filteredCases.length > 1
    ? filteredCases[(currentIndex + 1) % filteredCases.length]
    : null;

  const openModal = (caseItem) => {
    lastFocusedRef.current = document.activeElement;
    setSelectedCase(caseItem);
  };

  const handleCloseModal = () => {
    setSelectedCase(null);
    if (lastFocusedRef.current && typeof lastFocusedRef.current.focus === 'function') {
      lastFocusedRef.current.focus();
    }
  };

  // Keep the latest key handler in a ref so the listener never goes stale
  keyHandlerRef.current = (e) => {
    if (e.key === 'Escape') handleCloseModal();
    if (e.key === 'ArrowRight' && nextCase) setSelectedCase(nextCase);
    if (e.key === 'ArrowLeft' && prevCase) setSelectedCase(prevCase);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [!!selectedCase]);

  // Keyboard support: Esc to close, arrows to move between case studies
  useEffect(() => {
    if (!selectedCase) return undefined;
    const listener = (e) => keyHandlerRef.current && keyHandlerRef.current(e);
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [!!selectedCase]);

  // Return to the top of the popup and focus the close button when the case changes
  useEffect(() => {
    if (selectedCase) {
      if (modalRef.current) modalRef.current.scrollTo({ top: 0 });
      if (closeBtnRef.current) closeBtnRef.current.focus({ preventScroll: true });
    }
  }, [selectedCase && selectedCase.id]);

  const handleCardKeyDown = (e, caseItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(caseItem);
    }
  };

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
              <article
                key={caseItem.id}
                className="cardNexzellCaseSturidesMainWFilters"
                style={{ animationDelay: `${index * 0.08}s` }}
                role="button"
                tabIndex={0}
                aria-label={`Open case study: ${caseItem.title}`}
                onClick={() => openModal(caseItem)}
                onKeyDown={(e) => handleCardKeyDown(e, caseItem)}
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
              </article>
            ))
          ) : (
            <div className="noResultsNexzellCaseSturidesMainWFilters">
              <p>No case studies found for this category yet.</p>
            </div>
          )}
        </div>

        {/* Modal Popup */}
        {selectedCase && (
          <div
            className="modalOverlayNexzellCaseSturidesMainWFilters animFadeInNexzellCaseSturidesMainWFilters"
            onClick={handleCloseModal}
          >
            <div
              ref={modalRef}
              key={selectedCase.id}
              className="modalContentNexzellCaseSturidesMainWFilters animScaleUpNexzellCaseSturidesMainWFilters"
              role="dialog"
              aria-modal="true"
              aria-label={selectedCase.title}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeBtnRef}
                className="modalCloseBtnNexzellCaseSturidesMainWFilters"
                onClick={handleCloseModal}
                aria-label="Close case study"
              >
                <X size={22} />
              </button>

              {/* Hero */}
              <div className="modalHeroNexzellCaseSturidesMainWFilters">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="modalHeroImgNexzellCaseSturidesMainWFilters"
                />
                <div className="modalHeroOverlayNexzellCaseSturidesMainWFilters"></div>
                <div className="modalHeroTextNexzellCaseSturidesMainWFilters">
                  <div className="categoryBadgeNexzellCaseSturidesMainWFilters categoryBadgeStaticNexzellCaseSturidesMainWFilters">
                    <span className="badgeDotNexzellCaseSturidesMainWFilters"></span>
                    {selectedCase.category}
                  </div>
                  <h2 className="modalTitleNexzellCaseSturidesMainWFilters">{selectedCase.title}</h2>
                  <div className="modalHeroMetaNexzellCaseSturidesMainWFilters">
                    <div className="metaItemNexzellCaseSturidesMainWFilters">
                      <Calendar size={14} /> <span>{selectedCase.date}</span>
                    </div>
                    <div className="metaItemNexzellCaseSturidesMainWFilters">
                      <Building2 size={14} /> <span>{selectedCase.client}</span>
                    </div>
                    <div className="metaItemNexzellCaseSturidesMainWFilters">
                      <Clock size={14} /> <span>{selectedCase.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key metrics */}
              <div className="modalMetricsNexzellCaseSturidesMainWFilters">
                {selectedCase.details.metrics.map((metric) => (
                  <div key={metric.label} className="modalMetricItemNexzellCaseSturidesMainWFilters">
                    <span className="modalMetricValueNexzellCaseSturidesMainWFilters">{metric.value}</span>
                    <span className="modalMetricLabelNexzellCaseSturidesMainWFilters">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Body */}
              <div className="modalBodyNexzellCaseSturidesMainWFilters">
                <div className="modalLayoutNexzellCaseSturidesMainWFilters">

                  <div className="modalMainNexzellCaseSturidesMainWFilters">
                    <p className="modalIntroNexzellCaseSturidesMainWFilters">{selectedCase.shortDescription}</p>
                    <p className="modalOverviewNexzellCaseSturidesMainWFilters">{selectedCase.overview}</p>

                    {/* Challenge */}
                    <div className="modalSectionNexzellCaseSturidesMainWFilters">
                      <div className="modalSectionHeaderNexzellCaseSturidesMainWFilters">
                        <span className="modalSectionIconWrapNexzellCaseSturidesMainWFilters iconDangerNexzellCaseSturidesMainWFilters">
                          <Target size={20} />
                        </span>
                        <h4 className="modalSectionTitleNexzellCaseSturidesMainWFilters">The Challenge</h4>
                      </div>
                      <p className="modalSectionTextNexzellCaseSturidesMainWFilters">{selectedCase.details.challenge}</p>
                      <ul className="modalListNexzellCaseSturidesMainWFilters">
                        {selectedCase.details.challengePoints.map((point) => (
                          <li key={point} className="modalListItemNexzellCaseSturidesMainWFilters">
                            <span className="modalListDotNexzellCaseSturidesMainWFilters"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div className="modalSectionNexzellCaseSturidesMainWFilters">
                      <div className="modalSectionHeaderNexzellCaseSturidesMainWFilters">
                        <span className="modalSectionIconWrapNexzellCaseSturidesMainWFilters iconPrimaryNexzellCaseSturidesMainWFilters">
                          <LayoutTemplate size={20} />
                        </span>
                        <h4 className="modalSectionTitleNexzellCaseSturidesMainWFilters">Our Solution</h4>
                      </div>
                      <p className="modalSectionTextNexzellCaseSturidesMainWFilters">{selectedCase.details.solution}</p>

                      <ol className="stepsListNexzellCaseSturidesMainWFilters">
                        {selectedCase.details.approach.map((step, i) => (
                          <li key={step.title} className="stepItemNexzellCaseSturidesMainWFilters">
                            <span className="stepNumberNexzellCaseSturidesMainWFilters">{i + 1}</span>
                            <div className="stepBodyNexzellCaseSturidesMainWFilters">
                              <h5 className="stepTitleNexzellCaseSturidesMainWFilters">{step.title}</h5>
                              <p className="stepTextNexzellCaseSturidesMainWFilters">{step.text}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Results */}
                    <div className="modalSectionNexzellCaseSturidesMainWFilters">
                      <div className="modalSectionHeaderNexzellCaseSturidesMainWFilters">
                        <span className="modalSectionIconWrapNexzellCaseSturidesMainWFilters iconWarningNexzellCaseSturidesMainWFilters">
                          <Zap size={20} />
                        </span>
                        <h4 className="modalSectionTitleNexzellCaseSturidesMainWFilters">The Results</h4>
                      </div>
                      <div className="resultsCalloutNexzellCaseSturidesMainWFilters">
                        <Check size={18} className="resultsCalloutIconNexzellCaseSturidesMainWFilters" />
                        <p className="modalSectionTextNexzellCaseSturidesMainWFilters">{selectedCase.details.results}</p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    {selectedCase.testimonial && (
                      <figure className="testimonialNexzellCaseSturidesMainWFilters">
                        <Quote size={28} className="testimonialIconNexzellCaseSturidesMainWFilters" />
                        <blockquote className="testimonialQuoteNexzellCaseSturidesMainWFilters">
                          {selectedCase.testimonial.quote}
                        </blockquote>
                        <figcaption className="testimonialAuthorNexzellCaseSturidesMainWFilters">
                          <span className="testimonialNameNexzellCaseSturidesMainWFilters">{selectedCase.testimonial.author}</span>
                          <span className="testimonialRoleNexzellCaseSturidesMainWFilters">{selectedCase.testimonial.role}</span>
                        </figcaption>
                      </figure>
                    )}
                  </div>

                  {/* Sidebar */}
                  <aside className="modalAsideNexzellCaseSturidesMainWFilters">
                    <div className="asideCardNexzellCaseSturidesMainWFilters">
                      <h5 className="asideTitleNexzellCaseSturidesMainWFilters">Project snapshot</h5>
                      <div className="asideRowNexzellCaseSturidesMainWFilters">
                        <span className="asideLabelNexzellCaseSturidesMainWFilters">Client</span>
                        <span className="asideValueNexzellCaseSturidesMainWFilters">{selectedCase.client}</span>
                      </div>
                      <div className="asideRowNexzellCaseSturidesMainWFilters">
                        <span className="asideLabelNexzellCaseSturidesMainWFilters">Industry</span>
                        <span className="asideValueNexzellCaseSturidesMainWFilters">{selectedCase.industry}</span>
                      </div>
                      <div className="asideRowNexzellCaseSturidesMainWFilters">
                        <span className="asideLabelNexzellCaseSturidesMainWFilters">Duration</span>
                        <span className="asideValueNexzellCaseSturidesMainWFilters">{selectedCase.duration}</span>
                      </div>
                      <div className="asideRowNexzellCaseSturidesMainWFilters">
                        <span className="asideLabelNexzellCaseSturidesMainWFilters">Completed</span>
                        <span className="asideValueNexzellCaseSturidesMainWFilters">{selectedCase.date}</span>
                      </div>
                    </div>

                    <div className="asideCardNexzellCaseSturidesMainWFilters">
                      <h5 className="asideTitleNexzellCaseSturidesMainWFilters">
                        <Layers size={16} /> Services
                      </h5>
                      <ul className="asideServicesNexzellCaseSturidesMainWFilters">
                        {selectedCase.services.map((service) => (
                          <li key={service} className="asideServiceItemNexzellCaseSturidesMainWFilters">
                            <Check size={14} className="asideServiceIconNexzellCaseSturidesMainWFilters" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="asideCardNexzellCaseSturidesMainWFilters">
                      <h5 className="asideTitleNexzellCaseSturidesMainWFilters">Tools and technology</h5>
                      <div className="asideTagsNexzellCaseSturidesMainWFilters">
                        {selectedCase.techStack.map((tech) => (
                          <span key={tech} className="techTagNexzellCaseSturidesMainWFilters">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </aside>
                </div>

                {/* Footer navigation */}
                <div className="modalFooterNexzellCaseSturidesMainWFilters">
                  {prevCase ? (
                    <button
                      className="modalNavBtnNexzellCaseSturidesMainWFilters"
                      onClick={() => setSelectedCase(prevCase)}
                    >
                      <ChevronLeft size={20} />
                      <span className="modalNavTextNexzellCaseSturidesMainWFilters">
                        <span className="modalNavLabelNexzellCaseSturidesMainWFilters">Previous</span>
                        <span className="modalNavTitleNexzellCaseSturidesMainWFilters">{prevCase.title}</span>
                      </span>
                    </button>
                  ) : <span></span>}

                  <a href="/contact" className="modalCtaNexzellCaseSturidesMainWFilters">
                    Start a similar project
                    <ArrowRight size={16} />
                  </a>

                  {nextCase ? (
                    <button
                      className="modalNavBtnNexzellCaseSturidesMainWFilters modalNavBtnNextNexzellCaseSturidesMainWFilters"
                      onClick={() => setSelectedCase(nextCase)}
                    >
                      <span className="modalNavTextNexzellCaseSturidesMainWFilters">
                        <span className="modalNavLabelNexzellCaseSturidesMainWFilters">Next</span>
                        <span className="modalNavTitleNexzellCaseSturidesMainWFilters">{nextCase.title}</span>
                      </span>
                      <ChevronRight size={20} />
                    </button>
                  ) : <span></span>}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default NexzellCaseSturidesMainWFilters;