import BuildWhatsNextAbout from '@/components/AboutUsComponents/BuildWhatsNextAbout/BuildWhatsNextAbout'
import MainSliderAbout from '@/components/AboutUsComponents/MainSliderHome/MainSliderAbout'
import MakeEcommerceSimpler from '@/components/AboutUsComponents/MakeEcommerceSimpler/MakeEcommerceSimpler'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderAbout/>
        <MakeEcommerceSimpler/>
        <BuildWhatsNextAbout/>
    </div>
  )
}

export default page