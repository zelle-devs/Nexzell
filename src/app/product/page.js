import AllInOneFeaturesPlatform from '@/components/FeaturesPageComponents/AllInOneFeaturesPlatform/AllInOneFeaturesPlatform'
import BetterRelationCheckoutSimpleProduct from '@/components/PorductPageComponents/BetterRelationCheckoutSimpleProduct/BetterRelationCheckoutSimpleProduct'
import CateglogUnderControlProduct from '@/components/PorductPageComponents/CateglogUnderControlProduct/CateglogUnderControlProduct'
import ClickToFulfilment from '@/components/PorductPageComponents/ClickToFulfilment/ClickToFulfilment'
import MainSliderProductPage from '@/components/PorductPageComponents/MainSliderHome/MainSliderProductPage'
import OnePlatformEveryPartStoreProduct from '@/components/PorductPageComponents/OnePlatformEveryPartStoreProduct/OnePlatformEveryPartStoreProduct'
import ProductPageBottomLastCards from '@/components/PorductPageComponents/ProductPageBottomLastCards/ProductPageBottomLastCards'
import WhatsWorkingAutomateWork from '@/components/PorductPageComponents/WhatsWorkingAutomateWork/WhatsWorkingAutomateWork'
import YourProductYourWay from '@/components/PorductPageComponents/YourProductYourWay/YourProductYourWay'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderProductPage/>
        <AllInOneFeaturesPlatform/>
        <YourProductYourWay/>
        <CateglogUnderControlProduct/>
        <ClickToFulfilment/>
        {/* <BetterRelationCheckoutSimpleProduct/> */}
        {/* <WhatsWorkingAutomateWork/> */}
        <ProductPageBottomLastCards/>
    </div>
  )
}

export default page