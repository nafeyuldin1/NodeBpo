'use client';
import { ServicesInfo } from '@/data';
import { CaladeaF } from '@/fonts';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Define types for each service item
interface ServiceItem {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  TextColor: string;
}

const Services = () => {
  // Create a ref array to hold multiple refs (one for each service item)
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

    // Loop through the ServicesInfo array and create the animations for each item
    ServicesInfo.forEach((item, index) => {
      // Ensure that the element exists before trying to query or animate it
      const textElement = boxRefs.current[index]?.querySelector('.text-container') as HTMLElement | null;
      const imageElement = boxRefs.current[index]?.querySelector('.image-container') as HTMLElement | null;

      // If the elements exist, create the GSAP animation
      if (textElement && imageElement) {
        // Scroll-triggered animation for text
        gsap.fromTo(
          textElement, // Target text container
          {
            x: -1000, // Start from the left
            opacity: 0,
          },
          {
            x: 0, // Move to normal position
            opacity: 1,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: boxRefs.current[index], // Trigger when the section enters the viewport
              start: 'top 80%', // Start when 80% of the container is in view
              end: 'top 20%', // End when 20% of the container is visible
              scrub: 1, // Smooth transition with scroll
              markers: false, // Disable markers
            },
          }
        );

        // Scroll-triggered animation for image
        gsap.fromTo(
          imageElement, // Target image container
          {
            x: 1000, // Start from the right
            opacity: 0,
          },
          {
            x: 0, // Move to normal position
            opacity: 1,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: boxRefs.current[index], // Trigger when the section enters the viewport
              start: 'top 80%', // Start when 80% of the container is in view
              end: 'top 20%', // End when 20% of the container is visible
              scrub: 1, // Smooth transition with scroll
              markers: false, // Disable markers
            },
          }
        );
      }
    });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div
      id="services"
      style={{
        scrollMarginTop: '50px',
      }}
      className="bg-white px-[5vw] py-[50px] md:py-[100px] h-auto flex items-center justify-center flex-col"
    >
      <div className="max-w-[800px] mb-12 flex flex-col items-center justify-center text-center gap-4">
        <h3 className={`text-2xl ${CaladeaF} text-black`}>Our Services</h3>
        <h1
          style={{
            fontWeight: '900',
          }}
          className={`lg:text-6xl text-4xl ${CaladeaF} text-black`}
        >
          How We Can Help
        </h1>
        <p className={`lg:text-lg text-md ${CaladeaF} text-black`}>
          Discover our comprehensive suite of services designed to elevate your customer engagement and sales strategies.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {ServicesInfo.map((item: ServiceItem, index: number) => (
          <div
            ref={(el: HTMLDivElement | null) => { // Callback ref for each div
              if (el) {
                boxRefs.current[index] = el;
              }
            }}
            key={index}
            className={`flex servicesItems gap-4 md:gap-0 lg:flex-row flex-col-reverse rounded-md items-center justify-start`}
            style={{ backgroundColor: item.backgroundColor }} // Dynamically setting background color
          >
            <div className="lg:w-1/2 w-full lg:pb-0 pb-10 flex flex-col items-start justify-center px-[3vw] md:gap-4 text-container">
              <h2
                style={{
                  fontWeight: '900',
                  lineHeight: '120%',
                  color: item.TextColor, // Dynamically setting text color for the title
                }}
                className={`${CaladeaF} lg:pb-0 pb-4 max-w-[500px] text-2xl md:text-5xl`}
              >
                {item.title}
              </h2>
              <p
                style={{
                  color: item.TextColor, // Dynamically setting text color for the description
                }}
                className={`${CaladeaF} text-sm md:text-lg`}
              >
                {item.description}
              </p>
              <Link
                style={{
                  background: `${item.TextColor}`,
                  color: `#fff`,
                  fontWeight: '900',
                }}
                className={`${CaladeaF} mt-5 px-10 py-3 rounded-md`}
                href="#contact"
              >
                Get Support
              </Link>
            </div>

            <div className="lg:w-1/2 lg:pt-[5%] pt-10 w-full relative object-cover p-[5%] image-container">
              <img
                className="rounded-3xl"
                src={item.image}
                alt={item.title}
                height={1000}
                width={1000}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
