

import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-52 pl-16 bg-gradient-to-r from-black absolute w-screen aspect-video'>
      <div className='flex flex-col gap-4'>
        <div className='text-6xl font-bold text-white'>{title}</div>
        <div className='text-white text-xl w-2/5'>{overview}</div>
      </div>
      <div className='mt-8'>
        <button className='rounded-lg bg-white text-black px-8 py-2 text-xl hover:opacity-80 cursor-pointer'>▶️ Play</button>
        <button className='rounded-lg bg-slate-600 text-white px-8 py-2 ml-3 text-xl hover:opacity-80 cursor-pointer'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle