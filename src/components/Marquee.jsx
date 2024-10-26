import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

const Marquee = () => {
    
  return (

    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#004043] rounded-tl-3xl rounded-tr-3xl'>

        <div className='text border-b-2 border-t-2 flex whitespace-nowrap  overflow-hidden '>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[17vw] font-[Founders Grotesk] leading none font-bold uppercase -mt-[2vw] -mb-[5vw] -tracking-[1.1vw] pr-5'>We Are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity ,duration:5}} className='text-[17vw] font-[Founders Grotesk] leading none font-bold uppercase -mt-[2vw] -mb-[5vw] -tracking-[1.1vw]'>We Are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
