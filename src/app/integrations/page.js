import IntegrationAllinOne from '@/components/IntegrationsPageComponents/IntegrationAllinOne/IntegrationAllinOne'
import IntegrationsPartnesSlider from '@/components/IntegrationsPageComponents/IntegrationsPartnesSlider/IntegrationsPartnesSlider'
import IntegrationStartConnecting from '@/components/IntegrationsPageComponents/IntegrationStartConnecting/IntegrationStartConnecting'
import MainSliderIntegrations from '@/components/IntegrationsPageComponents/MainSliderIntegrations/MainSliderIntegrations'
import React from 'react'

function page() {
  return (
    <div>
         <MainSliderIntegrations/>
         <IntegrationsPartnesSlider/>
         <IntegrationAllinOne/>
         <IntegrationStartConnecting/>
    </div>
  )
}

export default page