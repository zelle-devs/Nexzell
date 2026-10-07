import Link from 'next/link';
import {
  Calendar, ArrowRight, ArrowLeft, LayoutTemplate, Target, Zap,
  Building2, Clock, Layers, Quote, ChevronLeft, ChevronRight, Check
} from 'lucide-react';
import { caseStudiesData } from './NexzellCaseSturidesMainWFiltersData';
// Reuse the same stylesheet as the listing so the design stays identical
import './NexzellCaseSturidesMainWFilters.css';

// Helper to avoid typing the long class suffix every time
const c = (name) => `${name}NexzellCaseSturidesMainWFilters`;

function NexzellCaseStudyDetail({ slug }) {
  const index = caseStudiesData.findIndex((item) => item.slug === slug);
  if (index === -1) return null;

  const selectedCase = caseStudiesData[index];
  const total = caseStudiesData.length;
  const prevCase = total > 1 ? caseStudiesData[(index - 1 + total) % total] : null;
  const nextCase = total > 1 ? caseStudiesData[(index + 1) % total] : null;

  return (
    <section className={c('detailPage')}>
      <div className={c('container')}>

        <Link href="/case-studies" className={c('detailBackLink')}>
          <ArrowLeft size={16} />
          Back to all case studies
        </Link>

        <article className={c('detailCard')}>

          {/* Hero */}
          <div className={c('modalHero')}>
            <img src={selectedCase.image} alt={selectedCase.title} className={c('modalHeroImg')} />
            <div className={c('modalHeroOverlay')}></div>
            <div className={c('modalHeroText')}>
              <div className={`${c('categoryBadge')} ${c('categoryBadgeStatic')}`}>
                <span className={c('badgeDot')}></span>
                {selectedCase.category}
              </div>
              <h1 className={c('modalTitle')}>{selectedCase.title}</h1>
              <div className={c('modalHeroMeta')}>
                <div className={c('metaItem')}><Calendar size={14} /> <span>{selectedCase.date}</span></div>
                <div className={c('metaItem')}><Building2 size={14} /> <span>{selectedCase.client}</span></div>
                <div className={c('metaItem')}><Clock size={14} /> <span>{selectedCase.duration}</span></div>
              </div>
            </div>
          </div>

          {/* Key metrics */}
          <div className={c('modalMetrics')}>
            {selectedCase.details.metrics.map((metric) => (
              <div key={metric.label} className={c('modalMetricItem')}>
                <span className={c('modalMetricValue')}>{metric.value}</span>
                <span className={c('modalMetricLabel')}>{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Body */}
          <div className={c('modalBody')}>
            <div className={c('modalLayout')}>

              <div className={c('modalMain')}>
                <p className={c('modalIntro')}>{selectedCase.shortDescription}</p>
                <p className={c('modalOverview')}>{selectedCase.overview}</p>

                {/* Challenge */}
                <div className={c('modalSection')}>
                  <div className={c('modalSectionHeader')}>
                    <span className={`${c('modalSectionIconWrap')} ${c('iconDanger')}`}><Target size={20} /></span>
                    <h2 className={c('modalSectionTitle')}>The Challenge</h2>
                  </div>
                  <p className={c('modalSectionText')}>{selectedCase.details.challenge}</p>
                  <ul className={c('modalList')}>
                    {selectedCase.details.challengePoints.map((point) => (
                      <li key={point} className={c('modalListItem')}>
                        <span className={c('modalListDot')}></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className={c('modalSection')}>
                  <div className={c('modalSectionHeader')}>
                    <span className={`${c('modalSectionIconWrap')} ${c('iconPrimary')}`}><LayoutTemplate size={20} /></span>
                    <h2 className={c('modalSectionTitle')}>Our Solution</h2>
                  </div>
                  <p className={c('modalSectionText')}>{selectedCase.details.solution}</p>
                  <ol className={c('stepsList')}>
                    {selectedCase.details.approach.map((step, i) => (
                      <li key={step.title} className={c('stepItem')}>
                        <span className={c('stepNumber')}>{i + 1}</span>
                        <div className={c('stepBody')}>
                          <h3 className={c('stepTitle')}>{step.title}</h3>
                          <p className={c('stepText')}>{step.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Results */}
                <div className={c('modalSection')}>
                  <div className={c('modalSectionHeader')}>
                    <span className={`${c('modalSectionIconWrap')} ${c('iconWarning')}`}><Zap size={20} /></span>
                    <h2 className={c('modalSectionTitle')}>The Results</h2>
                  </div>
                  <div className={c('resultsCallout')}>
                    <Check size={18} className={c('resultsCalloutIcon')} />
                    <p className={c('modalSectionText')}>{selectedCase.details.results}</p>
                  </div>
                </div>

                {/* Testimonial */}
                {selectedCase.testimonial && (
                  <figure className={c('testimonial')}>
                    <Quote size={28} className={c('testimonialIcon')} />
                    <blockquote className={c('testimonialQuote')}>{selectedCase.testimonial.quote}</blockquote>
                    <figcaption className={c('testimonialAuthor')}>
                      <span className={c('testimonialName')}>{selectedCase.testimonial.author}</span>
                      <span className={c('testimonialRole')}>{selectedCase.testimonial.role}</span>
                    </figcaption>
                  </figure>
                )}
              </div>

              {/* Sidebar */}
              <aside className={c('modalAside')}>
                <div className={c('asideCard')}>
                  <h2 className={c('asideTitle')}>Project snapshot</h2>
                  {[
                    ['Client', selectedCase.client],
                    ['Industry', selectedCase.industry],
                    ['Duration', selectedCase.duration],
                    ['Completed', selectedCase.date],
                  ].map(([label, value]) => (
                    <div key={label} className={c('asideRow')}>
                      <span className={c('asideLabel')}>{label}</span>
                      <span className={c('asideValue')}>{value}</span>
                    </div>
                  ))}
                </div>

                <div className={c('asideCard')}>
                  <h2 className={c('asideTitle')}><Layers size={16} /> Services</h2>
                  <ul className={c('asideServices')}>
                    {selectedCase.services.map((service) => (
                      <li key={service} className={c('asideServiceItem')}>
                        <Check size={14} className={c('asideServiceIcon')} />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={c('asideCard')}>
                  <h2 className={c('asideTitle')}>Tools and technology</h2>
                  <div className={c('asideTags')}>
                    {selectedCase.techStack.map((tech) => (
                      <span key={tech} className={c('techTag')}>{tech}</span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            {/* Footer navigation: real links between case studies */}
            <div className={c('modalFooter')}>
              {prevCase ? (
                <Link href={`/case-studies/${prevCase.slug}`} className={c('modalNavBtn')}>
                  <ChevronLeft size={20} />
                  <span className={c('modalNavText')}>
                    <span className={c('modalNavLabel')}>Previous</span>
                    <span className={c('modalNavTitle')}>{prevCase.title}</span>
                  </span>
                </Link>
              ) : <span></span>}

              <Link href="/contact-us" className={c('modalCta')}>
                Start a similar project
                <ArrowRight size={16} />
              </Link>

              {nextCase ? (
                <Link href={`/case-studies/${nextCase.slug}`} className={`${c('modalNavBtn')} ${c('modalNavBtnNext')}`}>
                  <span className={c('modalNavText')}>
                    <span className={c('modalNavLabel')}>Next</span>
                    <span className={c('modalNavTitle')}>{nextCase.title}</span>
                  </span>
                  <ChevronRight size={20} />
                </Link>
              ) : <span></span>}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default NexzellCaseStudyDetail;