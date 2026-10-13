import ConnectedOppsNexzellCategory from '@/components/NexzellCategoriesComponents/ConnectedOppsNexzellCategory/ConnectedOppsNexzellCategory'
import EveryBusinessModelNexzellCategory from '@/components/NexzellCategoriesComponents/EveryBusinessModelNexzellCategory/EveryBusinessModelNexzellCategory'
import IndustrySellNexzellCategory from '@/components/NexzellCategoriesComponents/IndustrySellNexzellCategory/IndustrySellNexzellCategory'
import MainSliderNexzellCategories from '@/components/NexzellCategoriesComponents/MainSliderNexzellCategories/MainSliderNexzellCategories'
import YourIndustryNexzellCategory from '@/components/NexzellCategoriesComponents/YourIndustryNexzellCategory/YourIndustryNexzellCategory'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderNexzellCategories/>
        <IndustrySellNexzellCategory/>
        <ConnectedOppsNexzellCategory/>
        <EveryBusinessModelNexzellCategory/>
        <YourIndustryNexzellCategory/>
    </div>
  )
}

export default page