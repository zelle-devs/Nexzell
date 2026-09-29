import RealBusinessGrowthHome from '@/components/HomePageComps/RealBusinessGrowthHome/RealBusinessGrowthHome'
import BuildResourcesGrowNexzell from '@/components/ResourcesPageComps/BuildResourcesGrowNexzell/BuildResourcesGrowNexzell'
import ExploreResourceCategory from '@/components/ResourcesPageComps/ExploreResourceCategory/ExploreResourceCategory'
import MainSliderResources from '@/components/ResourcesPageComps/MainSliderResources/MainSliderResources'
import TipsTrendsResources from '@/components/ResourcesPageComps/TipsTrendsResources/TipsTrendsResources'
import ToolsResourcesFingertips from '@/components/ResourcesPageComps/ToolsResourcesFingertips/ToolsResourcesFingertips'
import React from 'react'

function pages() {
  return (
    <div>
        <MainSliderResources/>
        <ExploreResourceCategory/>
        <TipsTrendsResources/>
        <ToolsResourcesFingertips/>
        <BuildResourcesGrowNexzell/>
        <RealBusinessGrowthHome/>
    </div>
  )
}

export default pages