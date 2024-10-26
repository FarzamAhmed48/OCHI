import React from 'react'
import Eye from './Eye'

const Lower = () => {
  return (
    <div className='w-full h-screen bg-[#CDEA68]'>
        <div className='flex flex-col text-center px-10'>
            <h1 className='text-[13vw] leading-[9rem] text-zinc-800 tracking-tighter uppercase font-bold'>Ready</h1>
            <h1 className='text-[13vw] leading-[9rem] text-zinc-800 tracking-tighter uppercase font-bold'>To Start</h1>
            <h1 className='text-[13vw] leading-[9rem] text-zinc-800 tracking-tighter uppercase font-bold'>The Project?</h1>
        </div>
        <div className='flex gap-10 relative -top-[25vw] left-[35vw] '>
            <Eye/>
            <Eye/>
        </div>
    </div>
  )
}

export default Lower