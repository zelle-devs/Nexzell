import BuildWhatsNextAbout from '@/components/AboutUsComponents/BuildWhatsNextAbout/BuildWhatsNextAbout'
import MainSliderAbout from '@/components/AboutUsComponents/MainSliderHome/MainSliderAbout'
import MakeEcommerceSimpler from '@/components/AboutUsComponents/MakeEcommerceSimpler/MakeEcommerceSimpler'
import OutTeamSaysAbout from '@/components/AboutUsComponents/OutTeamSaysAbout/OutTeamSaysAbout'
import PeoplesBelieveTomorrow from '@/components/AboutUsComponents/PeoplesBelieveTomorrow/PeoplesBelieveTomorrow'
import SimplerFutureCommerceAbout from '@/components/AboutUsComponents/SimplerFutureCommerceAbout/SimplerFutureCommerceAbout'
import WhatDrivesUsAbout from '@/components/AboutUsComponents/WhatDrivesUsAbout/WhatDrivesUsAbout'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderAbout/>
        <MakeEcommerceSimpler/>
        <BuildWhatsNextAbout/>
        <WhatDrivesUsAbout/>
        <PeoplesBelieveTomorrow/>
        <OutTeamSaysAbout/>
        <SimplerFutureCommerceAbout/>
    </div>
  )
}

export default page