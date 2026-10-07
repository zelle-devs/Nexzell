import EverythingBlogsWebsiteNeed from '@/components/BlogPageComponents/EverythingBlogsWebsiteNeed/EverythingBlogsWebsiteNeed'
import InsightsDeliverdYourBox from '@/components/BlogPageComponents/InsightsDeliverdYourBox/InsightsDeliverdYourBox'
import MainSliderBlogs from '@/components/BlogPageComponents/MainSliderBlogs/MainSliderBlogs'
import NexzellMainBlogsWFilters from '@/components/BlogPageComponents/NexzellMainBlogsWFilters/NexzellMainBlogsWFilters'
import React from 'react'

function page() {
  return (
    <div>
        <MainSliderBlogs/>
        <NexzellMainBlogsWFilters/>
        <EverythingBlogsWebsiteNeed/>
        <InsightsDeliverdYourBox/>
    </div>  
  )
}

export default page