'use client'
import { faqs } from '@/data';
import { CaladeaF } from '@/fonts';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

interface FAQ {
    id: number;
    header: string;
    text: string;
}

interface AccordionItemProps {
    handleToggle: (id: number) => void;
    active: number | null;
    faq: FAQ;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ handleToggle, active, faq }) => {
    const contentEl = useRef<HTMLDivElement>(null);
    const { id, header, text } = faq;

    const isActive = active === id;

    // State to manage the height for the collapsing effect
    const [height, setHeight] = useState<string | number>('0px');

    useEffect(() => {
        if (isActive && contentEl.current) {
            setHeight(contentEl.current.scrollHeight);
        } else {
            setHeight('0px');
        }
    }, [isActive]);

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
            <div className={`rc-accordion-toggle p-4 bg-gray-900 border-b-2 border-gray-400  md:p-6 ${isActive ? 'active' : ''}`} onClick={() => handleToggle(id)}>
    <h5 className={` ${CaladeaF} rc-accordion-title text-lg md:text-xl `}>{id}. {header}</h5>
    {isActive ? (
        <svg className="md:h-[30px] md:w-[30px] h-[25px] w-[25px] " width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L18 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ) : (
        <svg className="md:h-[30px] md:w-[30px] h-[25px] w-[25px] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M12 4V20" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )}
</div>

            </div>
            <div className="rc-collapse" style={{ height }}>
                <div ref={contentEl} className="rc-accordion-body">
                    <p className={`${CaladeaF} mb-0  text-lg`}>{text}</p>
                </div>
            </div>
        </div>
    );
}

const FAQS: React.FC = () => {
    const [active, setActive] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActive(active === index ? null : index);
    }

    return (
        <div id="FAQs" style={{
            scrollMarginTop: '50px'
          }} className='flex lg:flex-row flex-col-reverse h-auto gap-0 lg:gap-20  px-[6vw] py-[45px] lg:py-[80px] bg-[#FCD44B] items-center justify-center'>
   <div className='h-auto relative w-full  lg:w-1/2 mt-[50px] lg:mt-[100px] z-[111]   flex flex-col justify-center items-start'>
            <h2 style={{
                lineHeight: '100%',
                fontWeight: '900'
            }} className={`${CaladeaF} text-4xl  m-auto md:text-left text-center md:text-[4.5vw] pb-8  text-black `} >Frequently Asked Questions</h2>
            <p className={`${CaladeaF} md:text-left m-auto text-center text-md md:text-xl text-black `} >Our FAQs section provides quick answers to common inquiries about our services, project timelines, support options, and more.</p>
            <div className="container-fluid pt-0 md:pt-10 mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body">
                                {faqs.map((faq) => (
                                    <AccordionItem key={faq.id} active={active} handleToggle={handleToggle} faq={faq} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className='lg:w-1/2 w-full h-full min-h-full'>
    <Image  className='w-full h-full min-h-full ' src='/35260ea394.jpg' height={1000} width={1000} alt="FAQs" />
</div>
        </div>
     
    );
}

export default FAQS;
