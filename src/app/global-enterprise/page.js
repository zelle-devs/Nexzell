import CommerceOppsGlobalForEnterprise from '@/components/GlobalForEnterprise/CommerceOppsGlobalForEnterprise/CommerceOppsGlobalForEnterprise'
import FAQForGlobalEnterprise from '@/components/GlobalForEnterprise/FAQForGlobalEnterprise/FAQForGlobalEnterprise'
import GlobalForEnterpriseBrandsMarque from '@/components/GlobalForEnterprise/GlobalForEnterpriseBrandsMarque/GlobalForEnterpriseBrandsMarque'
import LargeScaleCommerceGlobalForEnterprise from '@/components/GlobalForEnterprise/LargeScaleCommerceGlobalForEnterprise/LargeScaleCommerceGlobalForEnterprise'
import MainSliderGlobalForEnterprise from '@/components/GlobalForEnterprise/MainSliderGlobalForEnterprise/MainSliderGlobalForEnterprise'
import RealNumbersSuccessGlobalForEnterprise from '@/components/GlobalForEnterprise/RealNumbersSuccessGlobalForEnterprise/RealNumbersSuccessGlobalForEnterprise'
import SmarterOppsGlobalForEnterprise from '@/components/GlobalForEnterprise/SmarterOppsGlobalForEnterprise/SmarterOppsGlobalForEnterprise'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderGlobalForEnterprise/>
        <LargeScaleCommerceGlobalForEnterprise/>
        <CommerceOppsGlobalForEnterprise/>
        <SmarterOppsGlobalForEnterprise/>
        <GlobalForEnterpriseBrandsMarque/>
        <RealNumbersSuccessGlobalForEnterprise/>
        <FAQForGlobalEnterprise/>
    </div>
  )
}

export default page