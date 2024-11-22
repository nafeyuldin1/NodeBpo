'use client';
import { CaladeaF } from '@/fonts';
import Link from 'next/link';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ServiceBanner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register GSAP ScrollTrigger

    // Animation for the main title (fade-in and scale from -1 to 1)
    gsap.fromTo(
      '.service-title',
      { opacity: 0, scale: -1, y: 100 }, // Start at scale -1 and off-screen
      {
        opacity: 1,
        scale: 1, // Animate to scale 1
        y: 0, // Reset the vertical position
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.ServiceBanner',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
      }
    );

    // Animation for the subtitle paragraph (fade-in and scale from -1 to 1)
    gsap.fromTo(
      '.service-paragraph',
      { opacity: 0, scale: -1, y: 150 }, // Start at scale -1 and off-screen
      {
        opacity: 1,
        scale: 1, // Animate to scale 1
        y: 0, // Reset vertical position
        duration: 2,
        ease: 'power4.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: '.ServiceBanner',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
      }
    );

    // Button animation on hover (scale effect)
    gsap.fromTo(
      '.service-button',
      { scale: 1 },
      {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.inOut',
        paused: true,
        hover: {
          scale: 1.1,
        },
      }
    );
  }, []);

  return (
    <div className='h-auto ServiceBanner w-full'>
      <div className='h-auto relative z-[1111] flex flex-col gap-6 md:gap-10 py-[50px] md:py-[100px] px-[8vw] w-full'>
        <h4 className='text-white'>INCREDIBLE SERVICES</h4>
        <h1
          className={`service-title lg:text-[5vw] text-5xl max-w-[900px] ${CaladeaF} text-white`}
          style={{
            lineHeight: '100%',
            fontWeight: '900',
          }}
        >
          We do a business of Satisfaction{/* No changes here */}
        </h1>
        <p className='service-paragraph text-white'>
          We do a business of Satisfaction reflects a company dedicated to delivering exceptional value and exceeding customer expectations. Our core focus is ensuring every client experiences complete satisfaction through high-quality products, personalized service, and a commitment to meeting their needs. Satisfaction isn&apos;t just a goal—it&apos;s our business. {/* Escaped apostrophes */}
        </p>
        <Link
          className='service-button bg-white text-black max-w-fit py-3 px-10 rounded-md'
          href='#contact'
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default ServiceBanner;
