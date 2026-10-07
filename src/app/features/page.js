import AllInOneFeaturesPlatform from '@/components/FeaturesPageComponents/AllInOneFeaturesPlatform/AllInOneFeaturesPlatform'
import BuiltForScaleFeatures from '@/components/FeaturesPageComponents/BuiltForScaleFeatures/BuiltForScaleFeatures'
import CreateStorefrontConverts from '@/components/FeaturesPageComponents/CreateStorefrontConverts/CreateStorefrontConverts'
import EcommerceDataBetterDecision from '@/components/FeaturesPageComponents/EcommerceDataBetterDecision/EcommerceDataBetterDecision'
import MainSliderFeatures from '@/components/FeaturesPageComponents/MainSliderFeatures/MainSliderFeatures'
import OrderFullFilmentFeatures from '@/components/FeaturesPageComponents/OrderFullFilmentFeatures/OrderFullFilmentFeatures'
import CateglogUnderControlProduct from '@/components/PorductPageComponents/CateglogUnderControlProduct/CateglogUnderControlProduct'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderFeatures/>
        <AllInOneFeaturesPlatform/>
        <CreateStorefrontConverts/>
        <CateglogUnderControlProduct/>
        <EcommerceDataBetterDecision/>
        <BuiltForScaleFeatures/>
    </div>
  )
}

export default page