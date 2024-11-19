import React from 'react'
import Header from './Header'
import Link from 'next/link'
import { CaladeaF } from '@/fonts'

const Hero = () => {
  return (
    <div  className='h-screen flex flex-col  w-full bg-black text-white'>
<div 
  
className='h-full items-start  heroS justify-center flex  flex-col w-full'>
<Header/>
<div className=' mx-[10vw]  h-auto '>
<h1 style={{
  lineHeight:'100%',
  fontWeight: '900'
}} className={`${CaladeaF} text-black capitalize  text-3xl  max-w-[800px] md:text-[4vw]  `}>Handles incoming & outgoing customer interactions other.</h1>
<p className={` ${CaladeaF} text-md text-black md:text-2xl  mt-4  max-w-[900px] `}> We empower businesses to expand their reach, strengthen customer relationships, and drive revenue growth through strategic communication initiatives.</p>
<div className=' mt-6'>
  <Link className={` ${CaladeaF}   flex items-center  gap-2 font-extrabold px-4 md:px-8 py-3 max-w-fit text-black  bg-white rounded-md text-lg md:text-xl`} href="#contact">
  Let's Talk
  {/* <span><svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 330 330" >
<path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
</svg></span> */}
</Link>


</div>

</div>


</div>
    </div>
  )
}

export default Hero