import RealBusinessGrowthHome from '@/components/HomePageComps/RealBusinessGrowthHome/RealBusinessGrowthHome'
import FitYourBusinessSolutions from '@/components/SolutionsPageComponents/FitYourBusinessSolutions/FitYourBusinessSolutions'
import MainSliderSolutions from '@/components/SolutionsPageComponents/MainSliderSolutions/MainSliderSolutions'
import MoreThenJustPlatformSolutions from '@/components/SolutionsPageComponents/MoreThenJustPlatformSolutions/MoreThenJustPlatformSolutions'
import OurFutureTogetherSolutions from '@/components/SolutionsPageComponents/OurFutureTogether/OurFutureTogetherSolutions'
import PoweringBusinessSoluitons from '@/components/SolutionsPageComponents/PoweringBusinessSoluitons/PoweringBusinessSoluitons'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderSolutions/>
        <FitYourBusinessSolutions/>
        <MoreThenJustPlatformSolutions/>
        <OurFutureTogetherSolutions/>
        <PoweringBusinessSoluitons/>
        <RealBusinessGrowthHome/>
    </div>
  )
}

export default page