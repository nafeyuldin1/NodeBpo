import { ServicesInfo } from '@/data'
import { CaladeaF } from '@/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div id="services" style={{
      scrollMarginTop: '50px'
    }} className='bg-white px-[5vw] py-[50px] md:py-[100px] h-auto flex items-center justify-center flex-col' >
        <div className='max-w-[800px] mb-12 flex flex-col items-center justify-center text-center gap-4'>
        <h3 
        className={`text-2xl ${CaladeaF} text-black `}>Our Services</h3>
        <h1 style={{
            fontWeight: '900'
        }} className={`lg:text-6xl text-4xl ${CaladeaF} text-black `}>How We can help</h1>
        <p className={`lg:text-lg text-md ${CaladeaF} text-black `}>Discover our comprehensive suite of services designed to elevate your customer engagement and sales strategies.</p>
        </div>
        
        <div className='flex flex-col gap-10'>
            {
                ServicesInfo.map((item, index) => (
                    <div 
                        key={index} 
                        className={`flex servicesItems gap-4 md:gap-0 lg:flex-row flex-col-reverse rounded-md items-center justify-start`}
                        style={{ backgroundColor: item.backgroundColor }} // Dynamically setting background color
                    >
                      <div className='lg:w-1/2 w-full lg:pb-0 pb-10 flex flex-col items-start justify-center px-[3vw] md:gap-4'>
                        <h2 
                          style={{
                            fontWeight:'900',
                            lineHeight: '120%',
                            color: item.TextColor // Dynamically setting text color for the title
                          }} 
                          className={`${CaladeaF} lg:pb-0 pb-4 max-w-[500px] text-2xl md:text-5xl`}
                        >
                          {item.title}
                        </h2>
                        <p 
                          style={{
                            color: item.TextColor // Dynamically setting text color for the description
                          }}
                          className={`${CaladeaF} text-sm md:text-lg`}
                        >
                          {item.description}
                        </p>
                        <Link 
                        style={{
                          background: `${item.TextColor}`,
                          color:`${item.backgroundColor}`
                        }}
                          className={`${CaladeaF} mt-5 px-10 py-3  rounded-md `}
                          href="/contact"
                        >
                          Get Support
                        </Link>
                      </div>
                       <div className='lg:w-1/2 lg:pt-[5%] pt-10 w-full relative object-cover p-[5%]'>
                        <Image 
                          className='rounded-3xl' 
                          src={item.image} 
                          alt={item.title} 
                          height={1000} 
                          width={1000} 
                        />
                       </div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services
