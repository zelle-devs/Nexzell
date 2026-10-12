import FAQForStartups from '@/components/ForStarupsComponents/FAQForStartups/FAQForStartups'
import LaunchAndGrowStartups from '@/components/ForStarupsComponents/LaunchAndGrowStartups/LaunchAndGrowStartups'
import MainSliderForStartups from '@/components/ForStarupsComponents/MainSliderForStartups/MainSliderForStartups'
import StartupsThatsTrustUS from '@/components/ForStarupsComponents/StartupsThatsTrustUS/StartupsThatsTrustUS'
import ScalableProductForStartup from '@/components/ForStarupsComponents/ScalableProductForStartup/ScalableProductForStartup'
import SimpleProcessRealResultsStartups from '@/components/ForStarupsComponents/SimpleProcessRealResultsStartups/SimpleProcessRealResultsStartups'
import TechnologyPartnerStartups from '@/components/ForStarupsComponents/TechnologyPartnerStartups/TechnologyPartnerStartups'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderForStartups/>
        <TechnologyPartnerStartups/>
        <LaunchAndGrowStartups/>
        <ScalableProductForStartup/>
        <SimpleProcessRealResultsStartups/>
        <StartupsThatsTrustUS/>
        <FAQForStartups/>
    </div>
  )
}

export default page