import BetterRelationCheckoutSimpleProduct from '@/components/PorductPageComponents/BetterRelationCheckoutSimpleProduct/BetterRelationCheckoutSimpleProduct'
import CateglogUnderControlProduct from '@/components/PorductPageComponents/CateglogUnderControlProduct/CateglogUnderControlProduct'
import ClickToFulfilment from '@/components/PorductPageComponents/ClickToFulfilment/ClickToFulfilment'
import MainSliderProductPage from '@/components/PorductPageComponents/MainSliderHome/MainSliderProductPage'
import OnePlatformEveryPartStoreProduct from '@/components/PorductPageComponents/OnePlatformEveryPartStoreProduct/OnePlatformEveryPartStoreProduct'
import YourProductYourWay from '@/components/PorductPageComponents/YourProductYourWay/YourProductYourWay'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderProductPage/>
        <OnePlatformEveryPartStoreProduct/>
        <YourProductYourWay/>
        <CateglogUnderControlProduct/>
        <ClickToFulfilment/>
        <BetterRelationCheckoutSimpleProduct/>
    </div>
  )
}

export default page