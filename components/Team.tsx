import { TeamInfo } from '@/data'
import { CaladeaF } from '@/fonts'
import React from 'react'

const Team = () => {
  return (
    <div id="team" style={{
      scrollMarginTop: '50px'
    }} className='w-full h-auto py-[50px] md:py-[100px] flex flex-col items-center justify-center bg-gray-50 '>
        <h2 style={{
            fontWeight: '900'
        }} className={`${CaladeaF}  text-black text-4xl md:text-5xl text-center`}>Our Team Members</h2>
        <p className={`${CaladeaF}  text-black text-center text-lg mt-4 md:text-xl px-4 `}>
        Meet the passionate professionals driving our success. Each team member brings unique skills and dedication, working together to achieve our shared vision. </p>
     <div className='lg:w-[85%] w-full md:px-0 px-4 mt-10 md:mt-20 flex flex-wrap  Team  gap-6 items-center justify-center'>
        {
            TeamInfo.map((item, index) => (
                <div key={index} className='flex flex-col  items-center justify-center' >
                 <img className='rounded-3xl' src={item.profileImage} alt={item.profileName} height={1000} width={1000} />
                 <div className='flex flex-col items-center justify-center mt-2 md:mt-6'>
                 <h3 style={{
                    fontWeight: '900'
                 }} className={`text-3xl text-black ${CaladeaF}`}>{item.profileName}</h3>
                 <p className={`text-md text-black ${CaladeaF}  `}>{item.profileProfession}</p>
                 </div> 
                </div>
            ))
        }
     </div>
    </div>
  )
}

export default Team