import FAQForGrowingBrands from '@/components/ForGrowingBransSolutions/FAQForGrowingBrands/FAQForGrowingBrands'
import FromGrowingToGlobal from '@/components/ForGrowingBransSolutions/FromGrwoingToGlobal/FromGrowingToGlobal'
import GrowingBrandsGoFurther from '@/components/ForGrowingBransSolutions/GrowingBrandsGoFurther/GrowingBrandsGoFurther'
import GrowingBrandsThatsTrustUS from '@/components/ForGrowingBransSolutions/GrowingBrandsThatsTrustUS/GrowingBrandsThatsTrustUS'
import MainSliderForGrowingBrands from '@/components/ForGrowingBransSolutions/MainSliderForGrowingBrands/MainSliderForGrowingBrands'
import StrongerBrandsForGrowingBrand from '@/components/ForGrowingBransSolutions/StrongerBrandsForGrowingBrand/StrongerBrandsForGrowingBrand'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderForGrowingBrands/>
        <GrowingBrandsGoFurther/>
        <StrongerBrandsForGrowingBrand/>
        <FromGrowingToGlobal/>
        <GrowingBrandsThatsTrustUS/>
        <FAQForGrowingBrands/>
    </div>
  )
}

export default page