import React from 'react';
import { ArrowRight } from 'lucide-react';
import './BuildResourcesGrowNexzell.css';

function BuildResourcesGrowNexzell() {
    return (
        <section className="sectionWrapperBuildResourcesGrowNexzell">
            <div className="containerBuildResourcesGrowNexzell">

                <div className="cardBuildResourcesGrowNexzell animFadeUpBuildResourcesGrowNexzell">

                    <div className="leftImageColBuildResourcesGrowNexzell">
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
                            alt="Workspace with laptop"
                            className="cardImageBuildResourcesGrowNexzell"
                        />
                        <div className="imageOverlayFadeBuildResourcesGrowNexzell"></div>
                    </div>

                    <div className="rightTextColBuildResourcesGrowNexzell">
                        <div className="badgeMainSliderResources animDelay1" style={{width:'fit-content'}}>
                            <span className="badgeDotMainSliderResources"></span>
                            RESOURCES FOR A SMARTER TOMORROW
                        </div>

                        <h2 className="headingBuildResourcesGrowNexzell animDelay2BuildResourcesGrowNexzell">
                            Build, Learn, Grow <br />
                            With <span className="textHighlightBuildResourcesGrowNexzell">Nexzell.</span>
                        </h2>

                        <p className="descriptionBuildResourcesGrowNexzell animDelay3BuildResourcesGrowNexzell">
                            Access the right resources, tools and insights to stay ahead,
                            solve problems faster and achieve your goals.
                        </p>

                        <div className="btnGroupBuildResourcesGrowNexzell animDelay4BuildResourcesGrowNexzell">
                            <button className="btnPrimaryBuildResourcesGrowNexzell">
                                Explore All Resources <ArrowRight size={18} className="btnIconBuildResourcesGrowNexzell" />
                            </button>
                            <button className="btnSecondaryBuildResourcesGrowNexzell">
                                Contact Us
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default BuildResourcesGrowNexzell;