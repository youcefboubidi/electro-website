import React from 'react'
import { aboutus } from './constants'
const About_us = () => {
    return (
        <div className='cursor-default pb-32 px-32 pt-24 bg-[#1b1d24]'>
            <div className="flex justify-center ">
                <div className="flex flex-col justify-center gap-4 ">
                    <p className="text-[32px] font-semibold">About Us</p>
                    <p className='text-[17px] opacity-90 font-light mr-40  ' >{aboutus.description}</p>
                </div>

                <img src="/hero.png" alt="" className='my-auto ms-auto rounded-3xl' />

            </div>
        </div>
    )
}

export default About_us