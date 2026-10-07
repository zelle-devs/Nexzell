import OutTeamSaysAbout from '@/components/AboutUsComponents/OutTeamSaysAbout/OutTeamSaysAbout'
import CaseStudiesCustomEcommercePlatform from '@/components/CaseStudiesPageComponents/CaseStudiesCustomEcommercePlatform/CaseStudiesCustomEcommercePlatform'
import CaseStudiesWhyItWorked from '@/components/CaseStudiesPageComponents/CaseStudiesWhyItWorked/CaseStudiesWhyItWorked'
import CaseStudyOwnSuccessStory from '@/components/CaseStudiesPageComponents/CaseStudyOwnSuccessStory/CaseStudyOwnSuccessStory'
import MainSliderCaseStudies from '@/components/CaseStudiesPageComponents/MainSliderCaseStudies/MainSliderCaseStudies'
import NexzellCaseSturidesMainWFilters from '@/components/CaseStudiesPageComponents/NexzellCaseSturidesMainWFilters/NexzellCaseSturidesMainWFilters'
import RealBusinessGrowthHome from '@/components/HomePageComps/RealBusinessGrowthHome/RealBusinessGrowthHome'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderCaseStudies/>
        <NexzellCaseSturidesMainWFilters/>
        <CaseStudiesCustomEcommercePlatform/>
        <CaseStudiesWhyItWorked/>
       <RealBusinessGrowthHome/>
        <CaseStudyOwnSuccessStory/>
    </div>
  )
}

export default page