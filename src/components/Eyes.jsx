import React, { useEffect, useState } from 'react'
import Eye from './Eye'
const Eyes = () => {
    const [rotate,setRotate]=useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX
            let mouseY=e.clientY
            let deltaX=mouseX-window.innerWidth/2
            let deltaY=mouseY-window.innerHeight/2
            let angle=Math.atan2(deltaY,deltaX)*(180 / Math.PI)
            setRotate(angle-180)
        })
        
    })
    return (
        <div  data-scroll data-scroll-section data-scroll-speed=".5" className='w-full h-screen'>
            <div className={`relative w-full h-screen bg-[url("../../assets/bgimg.jpg")] bg-cover bg-center `}>
                <div  className='absolute flex gap-10 top-1/2 -translate-x-[50%] -translate-y-[50%] left-1/2'>
                    <Eye/>
                    <Eye/>
                </div>
            </div>
        </div>
    )
}

export default Eyes