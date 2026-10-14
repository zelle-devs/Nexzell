import HomePartnesSlider from '@/components/HomePageComps/HomePartnesSlider/HomePartnesSlider'
import IntegrationAllinOne from '@/components/IntegrationsPageComponents/IntegrationAllinOne/IntegrationAllinOne'
import IntegrationsLinkedChannels from '@/components/IntegrationsPageComponents/IntegrationsLinkedChannels/IntegrationsLinkedChannels'
import IntegrationsPartnesSlider from '@/components/IntegrationsPageComponents/IntegrationsPartnesSlider/IntegrationsPartnesSlider'
import IntegrationStartConnecting from '@/components/IntegrationsPageComponents/IntegrationStartConnecting/IntegrationStartConnecting'
import MainSliderIntegrations from '@/components/IntegrationsPageComponents/MainSliderIntegrations/MainSliderIntegrations'
import React from 'react'

function page() {
  return (
    <div>
         <MainSliderIntegrations/>
         <HomePartnesSlider/>
         <IntegrationsLinkedChannels/>
         <IntegrationAllinOne/>
         <IntegrationStartConnecting/>
    </div>
  )
}

export default page