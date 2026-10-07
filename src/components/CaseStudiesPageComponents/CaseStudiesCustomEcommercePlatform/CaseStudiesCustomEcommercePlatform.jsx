import React from 'react';
import { LayoutTemplate, Package, Link2, Search, ArrowRight, BarChart3, TrendingUp } from 'lucide-react';
import './CaseStudiesCustomEcommercePlatform.css';

function CaseStudiesCustomEcommercePlatform() {
    const features = [
        { icon: <LayoutTemplate size={20} />, text: "Custom Website Design" },
        { icon: <Link2 size={20} />, text: "GTIN & Merchant Center" },
        { icon: <Package size={20} />, text: "Inventory Management" },
        { icon: <Search size={20} />, text: "SEO Optimization" }
    ];

    const stats = [
        { value: "162%", label: "Increase in Online Sales" },
        { value: "48%", label: "Improved Site Speed" },
        { value: "320%", label: "Growth in Organic Traffic" },
        { value: "95%", label: "Customer Satisfaction" }
    ];

    return (
        <section className="sectionWrapperCaseStudiesCustomEcommercePlatform">
            <div className="containerCaseStudiesCustomEcommercePlatform">

                <div className="mainCardCaseStudiesCustomEcommercePlatform animFadeUpCaseStudiesCustomEcommercePlatform">

                    {/* Top Section */}
                    <div className="topSectionCaseStudiesCustomEcommercePlatform">

                        {/* Left Content */}
                        <div className="leftContentCaseStudiesCustomEcommercePlatform">
                            <div className="badgeMainSliderCaseStudies animDelay1">
                                <span className="badgeDotMainSliderCaseStudies"></span>
                                FEATURED CASE STUDY
                            </div>

                            <h2 className="headingCaseStudiesCustomEcommercePlatform animDelay2CaseStudiesCustomEcommercePlatform">
                                Furniture <span className="textHighlightCaseStudiesCustomEcommercePlatform">Mecca</span>
                            </h2>

                            <h3 className="subheadingCaseStudiesCustomEcommercePlatform animDelay3CaseStudiesCustomEcommercePlatform">
                                Custom eCommerce Platform for a Leading<br />
                                Furniture Store
                            </h3>

                            <p className="descriptionCaseStudiesCustomEcommercePlatform animDelay4CaseStudiesCustomEcommercePlatform">
                                We developed a modern, high-performing eCommerce
                                website for Furniture Mecca with a focus on user experience,
                                product display, and seamless checkout.
                            </p>
                            <div>
                                <div className="featuresGridCaseStudiesCustomEcommercePlatform animDelay5CaseStudiesCustomEcommercePlatform">
                                {features.map((feature, index) => (
                                    <div key={index} className="featureItemCaseStudiesCustomEcommercePlatform">
                                        <div className="featureIconCaseStudiesCustomEcommercePlatform">
                                            {feature.icon}
                                        </div>
                                        <span className="featureTextCaseStudiesCustomEcommercePlatform">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                            </div>
                            

                            <button className="btnPrimaryCaseStudiesCustomEcommercePlatform animDelay6CaseStudiesCustomEcommercePlatform">
                                View Live Project <ArrowRight size={18} className="btnIconCaseStudiesCustomEcommercePlatform" />
                            </button>
                        </div>

                        {/* Right Content (Image) */}
                        <div className="rightContentCaseStudiesCustomEcommercePlatform animFadeInRightCaseStudiesCustomEcommercePlatform">
                            <div className="imageWrapperCaseStudiesCustomEcommercePlatform">
                                {/* Replace src with your exact mockup image */}
                                <img
                                    src="/casestudiescustomecommerce.png"
                                    alt="Furniture Mecca Mockup"
                                    className="mainImageCaseStudiesCustomEcommercePlatform"
                                />

                                {/* Floating Widget */}
                                {/* <div className="floatingWidgetCaseStudiesCustomEcommercePlatform floatAnimCaseStudiesCustomEcommercePlatform">
                  <div className="widgetIconBoxCaseStudiesCustomEcommercePlatform">
                    <TrendingUp size={16} />
                  </div>
                  <div className="widgetTextCaseStudiesCustomEcommercePlatform">
                    <span className="widgetValueCaseStudiesCustomEcommercePlatform">+162%</span>
                    <span className="widgetLabelCaseStudiesCustomEcommercePlatform">Online Sales</span>
                  </div>
                  <BarChart3 size={24} className="widgetChartIconCaseStudiesCustomEcommercePlatform" />
                </div> */}
                            </div>
                        </div>

                    </div>

                    {/* Bottom Stats Section */}
                    <div className="bottomStatsCaseStudiesCustomEcommercePlatform animDelay7CaseStudiesCustomEcommercePlatform">
                        {stats.map((stat, index) => (
                            <div key={index} className="statBlockCaseStudiesCustomEcommercePlatform">
                                <h4 className="statValueCaseStudiesCustomEcommercePlatform">{stat.value}</h4>
                                <p className="statLabelCaseStudiesCustomEcommercePlatform">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default CaseStudiesCustomEcommercePlatform;