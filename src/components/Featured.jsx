import { easeIn, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Power4, Linear } from 'gsap'
const Featured = () => {
    const [hover, setHover] = useState(false)
    const [hover1, setHover1] = useState(false)

    const hoveri = (e) => {
        setHover(true)
    }
    const hoveri1 = (e) => {
        setHover1(true)
    }
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-2 pb-10'>
                <h1 className='text-6xl font-["Neue Montreal"] tracking-tighter' >Featured projects</h1>
            </div>
            <div className='cards w-full flex gap-10 mt-10 px-20'>
                <div onMouseEnter={(e) => hoveri(e)} onMouseLeave={() => setHover(false)} className='cardcontainer w-1/2 h-[75vh] relative'>
                    <h1 className="absolute flex text-[#CDEA68] overflow-hidden font-bold text-8xl font-['Founders Grotesk'] leading-none tracking-tighter left-full z-[9] top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {"FYDE".split("").map((item, index) => (
                            <motion.span key={index} className='inline-block' initial={{ y: "100%" }} animate={hover ? { y: "0" } : { y: "100%" }} transition={{ ease: easeIn,delay:index*.02 }}>{item} </motion.span>
                        ))}
                    </h1>
                    <div className=' card w-full h-full bg-green-700 rounded-xl overflow-hidden'>

                        <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div onMouseEnter={(e) => hoveri1(e)} onMouseLeave={() => setHover1(false)} className='relative cardcontainer w-1/2 h-[75vh]'>
                    <h1 className="absolute text-[#CDEA68] font-bold text-8xl font-['Founders Grotesk'] leading-none tracking-tighter flex overflow-hidden right-full z-[9] top-1/2 translate-x-1/2 -translate-y-1/2">
                        {"VISE".split("").map((item, index) => (
                            <motion.span key={index} className='inline-block' initial={{ y: "100%" }} animate={hover1 ? { y: "0" } : { y: "100%" }} transition={{ ease: easeIn ,delay:index*.02}}>{item} </motion.span>
                        ))}
                    </h1>

                    <div className='card w-full h-full bg-green-700 rounded-xl'>
                        <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" className='bg-white' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured