'use client'
import ContactUsCloserMapForwards from '@/components/ContactUsComponents/ContactUsCloserMapForwards/ContactUsCloserMapForwards'
import ContactUsFormQuickSection from '@/components/ContactUsComponents/ContactUsFormQuickSection/ContactUsFormQuickSection'
import MainSliderContactUs from '@/components/ContactUsComponents/MainSliderContactUs/MainSliderContactUs'
import React from 'react'

function page() {
    return (
        <div>
            <MainSliderContactUs />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
                className="contactUsMainWrapper"
            >
                <ContactUsFormQuickSection />
                <ContactUsCloserMapForwards />
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          .contactUsMainWrapper {
            flex-direction: column !important;
            gap:0;
            padding:0;
          }
        
        }
      `}</style>
        </div>
    )
}

export default page 
