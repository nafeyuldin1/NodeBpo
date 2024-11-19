"use client"

import { TrustBadgesInfo } from '@/data';
import { CaladeaF } from '@/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

// Declare global custom element type for lottie-player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        autoplay?: boolean;
        controls?: boolean;
        loop?: boolean;
        mode?: string;
        src?: string;
      }, HTMLElement>;
    }
  }
}

const TrustBadges = () => {
  useEffect(() => {
    // Ensure that the LottiePlayer custom element is loaded
    import('@lottiefiles/lottie-player');
  }, []);

  return (
    <div 
    
   
    className=' py-[50px] bg-white  flex flex-col justify-center items-center md:py-[100px] relative '>
      {/* <Image src='/tl (1).png' className='h-[250px] w-auto absolute right-10 top-10' alt='pattern' height={500} width={500} /> */}
         <h2 style={{
            fontWeight: '900',
            lineHeight: "100%"
         }} className={` ${CaladeaF} text-black mx-[5vw] text-4xl text-center md:text-5xl mb-4`}>Call Center Solutions</h2>
         <p className={` md:text-xl text-md  text-black max-w-[1000px] px-6 text-center  mx-[5vw] ${CaladeaF} `}>Our Call Center Solutions provide advanced tools and technologies to optimize customer support, ensuring seamless communication and efficient service delivery across multiple channels.</p>
 <div className='h-aut mt-6 gap-4 md:gap-6 w-full bg-transparent flex flex-wrap items-end justify-center'>
      {TrustBadgesInfo.map((item, index) => (
        <div
        // style={{
        //   backgroundImage: "url('/923674af4c.jpg')",
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat'
        // }}
        className='flex  md:mx-0 mx-4 text-center flex-col bg-white rounded-lg items-center justify-center trustItems  p-6 ' key={index}>
          <lottie-player
 className='h-[200px] w-auto'
autoplay={true}
            loop={true}
            mode="normal"
            src={item.image}
          ></lottie-player>
          <h3 style={{
            fontWeight: '900',
            lineHeight:'100%'
          }} className={`text-2xl text-black  max-w-[320px] ${CaladeaF}  `}>{item.title} </h3>
          <p className={`text-sm max-w-[400px] text-black md:text-md ${CaladeaF}   mt-6  `} >{item.description} </p>
         
        </div>
      ))}
    </div>

    </div>
   
  );
}

export default TrustBadges;
