import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import ochi from "../../assets/content-image01.jpg"
import { motion } from 'framer-motion';
const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.7s" className='w-full h-screen bg-zinc-900 pt-1 '>
            <div className='textstructure mt-40 px-20'>
                {["We Create", "Eye-Opening", "Presentations"].map((item, index) =>{
                    return(
                    <div className='masker'>
                        <div className='w-fit flex items-center'>
                            {index===1 && (<motion.img initial={{width:0}} animate={{width:"10vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}}  src={ochi} className='w-[8vw] h-[6vw] relative top-[0.5vw] rounded-md'></motion.img>)}
                            <h1 key={index} className='uppercase text-[7vw] leading-[6vw] tracking-tighter font-["Founders Grotesk"] font-medium'>{item}</h1>
                        </div>
                        

                    </div>
                )})}


            </div>
            <div className='border-t-2 border-zinc-200 mt-20 flex justify-between items-center py-3 px-20'>
                {["For public and private companies","From the first pitch to IPO"].map((item,index)=> (
                    <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 rounded-full border-[2px] border-zinc-500 uppercase">Start a project</div>
                    <div className='w-10 h-10 rounded-full border-[2px] border-zinc-500 flex items-center justify-center'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage