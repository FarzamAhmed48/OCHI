import React from 'react'
import { useEffect,useState } from 'react'
const Eye = () => {
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
        <div className=''>
            <div  className='h-[15vw] w-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                <div  style={{ transform: ` rotate(${rotate}deg)` }} className='relative h-2/3 w-2/3 bg-zinc-900 rounded-full flex items-center justify-center'>
                    <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='absolute line w-full h-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                        <div className='h-5 w-5 bg-zinc-100 rounded-full '></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eye