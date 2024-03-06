import React from 'react'
import { info } from './constants'
const Members = () => {
  return (
    <div className='flex justify-around align-center rounded-lg text-lg p-10 bg-[#2a303b] cursor-default'>
      <div className='flex flex-col items-center gap-3'><h3 className='text-4xl font-semibold'>{info.members.count}</h3><p className='font-extralight ' >{info.members.description}</p> </div>
      <div className='flex flex-col items-center gap-3'><h3 className='text-4xl font-semibold'>{info.projects.count}</h3><p className='font-extralight ' >{info.projects.description}</p> </div>
      <div className='flex flex-col items-center gap-3'><h3 className='text-4xl font-semibold'>{info.events.count}</h3><p className='font-extralight ' >{info.events.description}</p> </div>
      <div className='flex flex-col items-center gap-3'><h3 className='text-4xl font-semibold'>{info.nerds.count}</h3><p className='font-extralight ' >{info.nerds.description}</p> </div>

    </div>
  )
}

export default Members