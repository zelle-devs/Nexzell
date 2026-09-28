import SimplerFutureCommerceAbout from '@/components/AboutUsComponents/SimplerFutureCommerceAbout/SimplerFutureCommerceAbout'
import PricingSectionHome from '@/components/HomePageComps/PricingSectionHome/PricingSectionHome'
import BetterRelationCheckoutSimpleProduct from '@/components/PorductPageComponents/BetterRelationCheckoutSimpleProduct/BetterRelationCheckoutSimpleProduct'
import PricingPageSlider from '@/components/PricingPageComps/PricingPageSlider/PricingPageSlider'
import FitYourBusinessSolutions from '@/components/SolutionsPageComponents/FitYourBusinessSolutions/FitYourBusinessSolutions'
import React from 'react'

function page() {
  return (
    <div>
        {/* Yahan style tag add kar diya gaya hai */}
        <style>
          {`
            .sectionWrapperPricingSectionHome {
              padding-bottom: 0 !important;
            }
            .sectionWrapperFitYourBusinessSolutions  {
              padding-bottom: 0 !important;
            }
              
          `}
        </style>

        <PricingPageSlider/>
        <PricingSectionHome/>
        <FitYourBusinessSolutions/>
        <BetterRelationCheckoutSimpleProduct/>
        <SimplerFutureCommerceAbout/>
    </div>
  )
}

export default page