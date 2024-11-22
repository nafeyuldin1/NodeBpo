'use client'
import { CaladeaF } from '@/fonts';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null); // Reference to the entire section

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register GSAP ScrollTrigger plugin

    // Scroll-triggered animation for the entire about section
    gsap.fromTo(
      aboutRef.current, 
      {
        opacity: 0, // Initially hidden
        y: 100, // Start slightly below the section
      },
      {
        opacity: 1, // Fade in to full opacity
        y: 0, // Move to normal position
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%', // Start when 80% of the section is in view
          end: 'top 20%', // End when 20% of the section is in view
          scrub: 1,
          markers: false, // Disable scroll markers
        },
      }
    );

    // Animation for the experience badge
    gsap.fromTo(
      '.experience-badge', 
      {
        scale: 0.5, // Start small
        opacity: 0, // Start hidden
        rotation: -30, // Start with a slight rotation
      },
      {
        scale: 1, // Scale to normal size
        opacity: 1, // Fade to full opacity
        rotation: 0, // No rotation
        duration: 0.8,
        ease: 'bounce.out', // Bounce effect
        scrollTrigger: {
          trigger: '.experience-badge', 
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
        },
      }
    );

    // Animate text elements (h4 and h2)
    gsap.fromTo(
      '.about-text', 
      {
        opacity: 0,
        y: 50, // Start below the normal position
      },
      {
        opacity: 1,
        y: 0, // Move into place
        duration: 1,
        stagger: 0.3, // Stagger the animations slightly
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
        },
      }
    );

    // Animate the image container with a scale-in effect
    gsap.fromTo(
      '.about-image', 
      {
        scale: 0.8, // Start slightly smaller
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
        },
      }
    );

  }, []);

  return (
    <div id="about" ref={aboutRef} style={{ scrollMarginTop: '80px' }} className="">
      <div className="flex py-7 md:py-14 lg:max-w-[90%] m-auto servicesItems gap-4 md:mx-0 mx-5 md:gap-0  lg:flex-row flex-col rounded-md items-center justify-start ">
        
        {/* Left Section: Experience Badge and Image */}
        <div className="lg:w-1/2 lg:pt-[5%] pt-10 w-full relative object-cover p-[5%]">
          <div 
            className={`experience-badge bg-yellow-400 text-center right-2 top-2 h-auto z-10 absolute md:right-10 md:top-12 text-sm md:text-lg ${CaladeaF} text-black rounded-md p-2 md:p-4`}>
            <span style={{ fontWeight: '900' }} className="text-3xl md:text-7xl">{'5+'}</span>
            <br />
            Year Experience
          </div>
          <img 
            className="lg:h-[150px] z-[1] h-[100px] w-auto absolute md:top-[10px] left-0 top-0 md:left-[15px]" 
            src='/tl (3).png' 
            alt='services' 
            height={500} 
            width={500} 
          />
          <img 
            className="about-image rounded-3xl" 
            src='/img-2.jpg' 
            alt="about-us" 
            height={1000} 
            width={1000} 
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="lg:w-1/2 w-full lg:pb-0 pb-10 flex flex-col items-start justify-center md:px-[3vw] px-6 md:gap-4">
          <h4 className={`${CaladeaF} lg:pb-0 pb-4 text-black max-w-[500px] text-xl md:text-3xl about-text`}>
            About Us
          </h4>
          <h2 
            style={{ fontWeight: '900', lineHeight: '110%' }} 
            className={`${CaladeaF} lg:pb-0 pb-4 max-w-[700px] text-2xl md:text-6xl text-black about-text`}>
            Our Business is Your Life Making Easier & Comfortable
          </h2>
          <p className={`${CaladeaF} text-sm md:text-lg text-black about-text`}>
          At NodeBPO, we are dedicated to making your life more convenient and enjoyable through our innovative services and solutions. With over five years of expertise in managing inbound and outbound campaigns, customer experience, and a range of additional services, we ensure that every interaction leaves you satisfied and taken care of.

We specialize in providing personalized support that meets your specific needs, whether it’s answering inquiries, resolving issues, or offering tailored solutions. Our team’s experience in the industry has equipped us with the skills to anticipate your requirements and deliver outstanding service with efficiency and care.

Trust us to be the bridge between you and the best solutions, and let us make your day-to-day life simpler and more comfortable.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
