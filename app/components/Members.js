import React from 'react'
import { info } from './constants'
const Members = () => {
  return (
    <div className='flex justify-around align-center rounded-lg text-lg p-10 bg-[#2a303b] cursor-default'>
      {info.map((item) => (
        <div className='flex flex-col items-center gap-3'>
          <h3 className='text-4xl font-semibold'>{item.count}</h3>
          <p className='font-extralight'>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Members