import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex gap-5 items-center px-24'>
        <div className='cardcontainer w-1/2 h-[55vh]'>
            <div className='card relative w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" className='w-32' />
                <button className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full font-light tracking-tighter uppercase'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer w-1/2 h-[55vh] flex gap-5 '>
            <div className='relative card w-full h-full bg-[#192826] rounded-xl flex justify-center items-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" className='w-32' />
                <button className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full font-light uppercase '>Rating 5.0 on Clutch </button>
            </div>
            <div className='relative card w-full h-full bg-[#192826] rounded-xl relative flex justify-center items-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className='w-32' />
                <button className='absolute left-5 bottom-10 px-3  border-2 rounded-full font-light tracking-tighter uppercase'>Business Bootcamp Alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards