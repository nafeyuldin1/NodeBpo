import { CaladeaF } from '@/fonts'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" style={{
      scrollMarginTop: '50px'
    }} className=''>
          <div  className='flex py-7 md:py-14 lg:max-w-[90%] m-auto servicesItems  gap-4 md:gap-0 bg-gray-100 lg:flex-row flex-col rounded-md items-center justify-start'>
          <div className='lg:w-1/2 lg:pt-[5%] pt-10 w-full relative object-cover p-[5%]'>
          <div className={`bg-yellow-400 text-center right-2 top-2 h-auto z-10 absolute md:right-10 md:top-12 text-sm md:text-lg ${CaladeaF} text-black rounded-md p-4 `}>
             <span style={{
                fontWeight:'900'
             }} className={` text-3xl md:text-7xl CaladeaF `}> 15+</span>  <br></br> Year Experience
          </div>
                       <Image className='lg:h-[150px] h-[100px]  w-auto absolute md:top-[10px]    left-0 top-0 md:left-[15px]' src='/tl (3).png' alt='services' height={500} width={500} />
                        <Image className='rounded-3xl' src='/img-2.jpg' alt="about-us" height={1000} width={1000} />
                       </div>
                      <div className='lg:w-1/2 w-full lg:pb-0 pb-10 flex flex-col items-start justify-center px-[3vw] md:gap-4'>
                      <h4 className={`${CaladeaF} lg:pb-0 pb-4 text-black  max-w-[500px] text-xl md:text-3xl `}>About Us</h4>
                        <h2 style={{
                            fontWeight:'900',
                            lineHeight: '110%'
                        }} className={`${CaladeaF} lg:pb-0 pb-4  max-w-[700px] text-2xl md:text-6xl text-black`}>
                            Our Business is Your life Making Easier & Comfortable
                        </h2>
                        <p className={`${CaladeaF}  text-sm md:text-lg text-black`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis.
                        </p>
                   
                      </div>
                     

                    </div>
    </div>
  )
}

export default About