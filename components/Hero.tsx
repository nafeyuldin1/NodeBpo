'use client'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';

import Header from './Header';
import Link from 'next/link';
import { CaladeaF } from '@/fonts';

const Hero = () => {
  const boxRef = useRef<HTMLDivElement>(null);  // Properly typed ref

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);  // Register GSAP ScrollTrigger plugin

    if (boxRef.current) {
      // Animation for the entire section when it first loads (slide-in from left and fade in)
      gsap.fromTo(
        boxRef.current,
        {
          opacity: 0,
          x: -1000,
        },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: 'power4.out',
        }
      );

      // Title animation: Scale and rotate effect (fade-in, scale from 0.5 to 1, slight rotation)
      gsap.fromTo(
        '.hero-title',
        {
          opacity: 0,
          scale: 0.5,
          rotation: -10,
          y: 100,  // Slight vertical movement
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 2,
          ease: 'power4.out',
        }
      );

      // Paragraph animation: Slide in from bottom with fade-in and slight scaling
      gsap.fromTo(
        '.hero-paragraph',
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: 'power4.out',
          delay: 0.5,  // Slight delay for paragraph
        }
      );

      // Button animation: Scale effect with a hover interaction
      gsap.fromTo(
        '.hero-button',
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          delay: 1,  // Delay the button animation slightly
        }
      );

      // Button hover animation: Scale up on hover with a smooth ease
      gsap.to('.hero-button', {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.inOut',
        paused: true,
        hover: {
          scale: 1.1,
        },
      });
    }
  }, []);

  return (
    <div id="home" className="h-screen flex flex-col w-full bg-black text-black">
      <div className="h-full items-start heroS justify-center flex flex-col w-full">
        <Header />
        <div ref={boxRef} className="mx-[10vw] translate-x-[-1000px] h-auto">
          <h1
            className={`${CaladeaF} hero-title text-black capitalize text-3xl max-w-[800px] md:text-[4vw]`}
            style={{
              lineHeight: '100%',
              fontWeight: '900',
            }}
          >
            Handles Outbound & Inbound Campaigns.
          </h1>
          <p
            className={`${CaladeaF} hero-paragraph text-md text-black md:text-2xl mt-4 max-w-[900px]`}
          >
            We empower businesses to expand their reach, strengthen customer relationships, and drive
            revenue growth through strategic communication initiatives.
          </p>
          <div className="mt-6">
            <Link
              className={`${CaladeaF} hero-button flex items-center gap-2 font-extrabold px-4 md:px-8 py-3 max-w-fit text-black bg-white rounded-md text-lg md:text-xl`}
              href="#contact"
            >
              Let&apos;s Talk {/* Fixed unescaped apostrophe */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
