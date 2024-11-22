import { MenuLinks } from '@/data'
import { CaladeaF } from '@/fonts'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
<div className={`h-auto bg-[#FFD262] flex flex-wrap justify-start md:justify-center gap-10 py-12 md:py-16 px-[10vw] ${CaladeaF}`}>
        <div className={`flex flex-col items-start justify-start gap-3 md:px-10 ${CaladeaF}`}>
        <img className='h-[100px] w-auto' src='/favicon.png' height={500} width={500} alt="NodeBPO" />
        <p className={`${CaladeaF} text-lg text-black max-w-[340px]`}>We  value transparency, integrity & open communication in building lasting client relationships.</p>
        </div>
       <div className='flex flex-col  gap-2 lg:px-10 '>
        <h3
         style={{
          fontWeight:'900'
        }}
        className={` text-black text-3xl mb-4 ${CaladeaF}`}>Menu</h3>
        {
            MenuLinks.map((item, index) => (
                     <Link key={index} href={item.link} className={`txt-md text-black href={item.link}`} > 
                           {item.label}
                     </Link>
            ))
        }
       </div>
       <div>
       <h3 
        style={{
          fontWeight:'900'
        }}
       className={` ${CaladeaF} text-black text-3xl mb-4`}>Get In Touch</h3>
        <div>
          <p className={`text-black ${CaladeaF}`}>
          Email: info@hotline.com
          <br></br>
Phone: +1 234 567 89 0 0
<br></br>

Address:  VIP, Service Road East, Ghori, Town, Islamabad, 44000, Islamabad, 55000

          </p>
        </div>
       </div>
    </div>
    <p className={`text-sm ${CaladeaF} md:text-md text-center text-black bg-[#FFD262] pb-4 `}>©2024 – Copyright NodeBPO</p>
    </div>
  )
}

export default Footer