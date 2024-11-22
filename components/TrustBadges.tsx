'use client'

import { TrustBadgesInfo } from '@/data'; // Ensure this is typed correctly
import { CaladeaF } from '@/fonts';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// TypeScript - Ensure proper typing of TrustBadgesInfo, assuming it is an array of objects
interface TrustBadge {
  image: string;
  title: string;
  description: string;
}

const TrustBadges = () => {
  // Create a ref array to hold multiple refs (one for each badge)
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Ensure that the LottiePlayer custom element is loaded
    import('@lottiefiles/lottie-player');
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

    // Initial fade-in animation when page loads (animate opacity from 0 to 1)
  

    // Scroll-triggered fade-in effect for trust badges
    gsap.fromTo(
      '.trust-badge', // Target trust badges with class
      {
        opacity: 0, // Start with opacity 0
        y: 1000, // Start by moving them down
      },
      {
        opacity: 1, // End with full opacity
        y: 0, // Move to normal position
        stagger: 0.3, // Stagger the animations for a spaced-out effect
        ease: 'power5.out', // Smooth easing

        scrollTrigger: {
          trigger: '.trust-badges-container', // The container element
          start: 'top 80%', // Start when 80% of the container is in view
          end: 'top 20%', // End when 20% of the container is visible
          scrub: 1, // Smooth transition
          markers: false, // Disable markers
        },
      }
    );
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className='py-[50px] bg-white flex flex-col justify-center items-center md:py-[100px] relative'>
      <h2
        style={{
          fontWeight: '900',
          lineHeight: '100%',
        }}
        className={`${CaladeaF} text-black mx-[5vw] text-4xl text-center md:text-5xl mb-4`}
      >
        Call Center Solutions
      </h2>
      <p className={`md:text-xl text-md text-black max-w-[1000px] px-6 text-center mx-[5vw] ${CaladeaF}`}>
        Our Call Center Solutions provide advanced tools and technologies to optimize customer support, ensuring seamless communication and efficient service delivery across multiple channels.
      </p>
      <div
        className='h-aut mt-6 gap-4 md:gap-6 w-full bg-transparent flex flex-wrap items-end justify-center trust-badges-container'
      >
        {TrustBadgesInfo.map((item: TrustBadge, index: number) => (
          <div
            ref={(el) => { boxRefs.current[index] = el; }} // Callback ref with no return
            className='trust-badge translate-y-[1000px] flex md:mx-0 mx-4 text-center flex-col bg-[#FFD262] rounded-lg items-center justify-center p-6'
            key={index}
          >
            <lottie-player
              className='h-[200px] w-auto'
              autoplay={true}
              loop={true}
              mode="normal"
              src={item.image}
            ></lottie-player>
            <h3
              style={{
                fontWeight: '900',
                lineHeight: '100%',
              }}
              className={`text-2xl text-black max-w-[320px] ${CaladeaF}`}
            >
              {item.title}
            </h3>
            <p className={`text-sm max-w-[400px] text-black md:text-md ${CaladeaF} mt-6`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
