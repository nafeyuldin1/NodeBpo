import { CaladeaF } from '@/fonts'
import Link from 'next/link'
import React from 'react'

const ServiceBanner = () => {
  return (
    <div className='h-auto ServiceBanner  w-full' >
    <div  className='h-auto relative z-[1111]  flex flex-col gap-6 md:gap-10 py-[100px] md:py-[200px] px-[8vw] w-full'>
       
        <h4 className='text-white'>INCREDIBLE SERVICES</h4>
        <h1 style={{
            lineHeight:'100%',
            fontWeight: '900'
        }} className={`lg:text-[5vw] text-5xl  max-w-[900px] ${CaladeaF} text-white`}>We do a business of Satisfaction</h1>
        <p className='text-white'>We do a business of Satisfaction reflects a company dedicated to delivering exceptional value and exceeding customer expectations. Our core focus is ensuring every client experiences complete satisfaction through high-quality products, personalized service, and a commitment to meeting their needs. Satisfaction isn't just a goal—it's our business.</p>
        <Link className='bg-white text-black max-w-fit py-3 px-10 rounded-md' href='#contact' >Get Started</Link>
    </div>
    </div>

  )
}

export default ServiceBanner