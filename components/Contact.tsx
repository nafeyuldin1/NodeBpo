'use client';
import { CaladeaF } from '@/fonts';
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: 'Node BPO', // Hidden field value
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [captchaError, setCaptchaError] = useState(false);

  // Update to specify event types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Load the reCAPTCHA script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js`;
    script.async = true;
    document.body.appendChild(script);

    // Define handleCaptcha globally
    (window as any).handleCaptcha = (token: string) => {
      setCaptchaToken(token);
      setCaptchaError(false); // Remove the error message when reCAPTCHA is completed
    };

    gsap.registerPlugin(ScrollTrigger); // Register GSAP ScrollTrigger

    // Animating form fields on scroll
    gsap.fromTo(
      '.contact-input',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    // Animate the background image on scroll
    gsap.fromTo(
      '.contact-image',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.contact-image',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    // Animate the "Send" button on hover
    gsap.fromTo(
      '.send-button',
      { scale: 1, backgroundColor: '#FFD262' },
      {
        scale: 1.1,
        backgroundColor: '#FCD44B',
        duration: 0.4,
        ease: 'power2.inOut',
        paused: true,
        hover: {
          scale: 1.1,
          backgroundColor: '#FFD262',
        },
      }
    );

    // Animating popup
    if (popupVisible) {
      gsap.fromTo(
        '.popup-message',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power4.out',
        }
      );
    }
  }, [popupVisible]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if reCAPTCHA is complete
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }

    const formDataWithCaptcha = {
      ...formData,
      captchaToken,
    };

    const formJson = JSON.stringify(formDataWithCaptcha);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: formJson,
      });

      const result = await response.json();
      if (result.success) {
        setPopupMessage('Form submitted successfully!');
        setPopupVisible(true);
        setCaptchaToken(null); // Reset reCAPTCHA token
        (window as any).grecaptcha.reset(); // Reset the reCAPTCHA widget
      } else {
        setPopupMessage('Form submission error. Please try again.');
        setPopupVisible(true);
      }
    } catch (error: any) {
      setPopupMessage('Error sending form: ' + error.message);
      setPopupVisible(true);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div id="contact" className="bg-gray-50" style={{ scrollMarginTop: '50px' }}>
      <form onSubmit={handleSubmit} method="post">
        <section className=" py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="lg:mb-0 mb-10">
                <div className="group w-full h-full">
                  <div className="relative h-full contact-image">
                    <img
                      width={1000}
                      height={1000}
                      src="/80ec6d0b75.jpg"
                      alt="ContactUs tailwind section"
                      className="w-full h-[50vh] md:h-[75vh] object-cover bg-blend-multiply bg-indigo-700"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 lg:p-11 contact-form">
                <h2 style={{ fontWeight: '900' }} className={`text-black font-manrope text-5xl font-semibold leading-10 mb-11 ${CaladeaF} `}>
                  Get In Touch
                </h2>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`contact-input w-full h-16 text-black placeholder-gray-400 shadow-sm bg-transparent text-xl font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-5 md:mb-10 ${CaladeaF} `}
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`contact-input w-full h-16 text-black placeholder-gray-400 shadow-sm bg-transparent text-xl font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-5 md:mb-10 ${CaladeaF} `}
                  placeholder="Email"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`contact-input w-full h-16 text-black placeholder-gray-400 shadow-sm bg-transparent text-xl font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-5 md:mb-10 ${CaladeaF} `}
                  placeholder="Phone"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`contact-input w-full h-16 text-black placeholder-gray-400 bg-transparent text-xl shadow-sm font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-5 md:mb-10 ${CaladeaF} `}
                  placeholder="Message"
                />

                {/* Hidden Website Field */}
                <input type="hidden" name="website" value="Node BPO" />

                {/* Add reCAPTCHA Widget */}
                <div className="g-recaptcha mb-4" data-sitekey="6LemCocqAAAAAF4LqQJgYqr6tuBEcZdAQPeubEBn" data-callback="handleCaptcha" aria-required="true"></div>
                {captchaError && <p className="text-red-500 -mt-8 text-sm">Please complete the reCAPTCHA to submit the form.</p>}

                <button
                  type="submit"
                  className="send-button w-full text-2xl h-16 text-black font-semibold leading-6 rounded-lg transition-all duration-700 hover:bg-yellow-500 bg-[#FFD262] shadow-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>

      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-green bg-opacity-0 z-50">
          <div className="bg-white popup-message flex items-center justify-center flex-col rounded-lg p-6 shadow-lg transform transition-all duration-300 scale-100">
            <h2 className="text-2xl mb-4">{popupMessage}</h2>
            <button onClick={closePopup} className="bg-black hover:shadow-lg hover:shadow-white text-xl text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
