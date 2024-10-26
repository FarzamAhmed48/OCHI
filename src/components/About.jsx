import React from 'react'
import img from "../../assets/mwimg.jpg"
const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.005" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className='font-[Neue Montreal] text-5xl tracking-tight leading-[4vw] font-md'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full border-t-[2px] border-[#a1b562] mt-20 pt-5 flex gap-10'>
            <div className="w-1/2">
                <h1 className="text-5xl font-normal">Our Approach:</h1>
                <button className="flex gap-10 px-7 py-4 rounded-full mt-5 bg-zinc-900 text-white items-center uppercase">Read More <div className='w-2 h-2 bg-white rounded-full'></div></button>
            </div>
            <div className='w-1/2 h-[70vh]  rounded-2xl'><img src={img} alt="" className='rounded-2xl'/></div>
        </div>
    </div>
  )
}

export default About