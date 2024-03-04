import React from 'react'

const Members = () => {
  return (
    <div className='flex justify-around align-center rounded-lg text-lg p-10 bg-[#2a303b] cursor-default'>
      
         <div className='flex flex-col items-center gap-3'><h3 className='text-4xl font-semibold'>132  </h3><p className='font-extralight ' >Members</p> </div>
         <div className='flex flex-col items-center gap-3'><h3 className='text-4xl font-semibold'>13  </h3><p className='font-extralight '>Projects</p> </div>
         <div className='flex flex-col items-center gap-3'><h3 className='text-4xl font-semibold'>112  </h3><p className='font-extralight '>Events</p> </div>
         <div className='flex flex-col items-center gap-3'><h3 className='text-4xl font-semibold'>132  </h3><p className='font-extralight'>Nerds</p> </div>
    </div>
  )
}

export default Members