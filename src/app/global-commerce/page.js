import StartupsThatsTrustUS from '@/components/ForStarupsComponents/StartupsThatsTrustUS/StartupsThatsTrustUS'
import HomePartnesSlider from '@/components/HomePageComps/HomePartnesSlider/HomePartnesSlider'
import EveryThingYouNeedGlobalCommerce from '@/components/NexzelleGlobalCommerce/EveryThingYouNeedGlobalCommerce/EveryThingYouNeedGlobalCommerce'
import MainSliderGlobalCommerce from '@/components/NexzelleGlobalCommerce/MainSliderGlobalForEnterprise/MainSliderGlobalCommerce'
import StoreFrontEveryMarketGlobalCommerce from '@/components/NexzelleGlobalCommerce/StoreFrontEveryMarketGlobalCommerce/StoreFrontEveryMarketGlobalCommerce'
import WorldWideOppGlobalCommerce from '@/components/NexzelleGlobalCommerce/WorldWideOppGlobalCommerce/WorldWideOppGlobalCommerce'
import ProductPageBottomLastCards from '@/components/PorductPageComponents/ProductPageBottomLastCards/ProductPageBottomLastCards'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderGlobalCommerce/>
        <HomePartnesSlider/>
        <EveryThingYouNeedGlobalCommerce/>
        <WorldWideOppGlobalCommerce/>
        <StoreFrontEveryMarketGlobalCommerce/>
        <ProductPageBottomLastCards/>
        <StartupsThatsTrustUS/>
    </div>
  )
}

export default page