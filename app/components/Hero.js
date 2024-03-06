import Image from 'next/image'
import React from 'react'
import { hero } from './constants'
function Hero() {
    const paragraph = 'We are a team of passionate and motiated comunity join us now cocks and balls '
    return (
        <div className=' pb-32 px-32 bg-[#23272f]'>
            <div className="flex justify-around ">
                <div className="flex flex-col justify-center gap-4 ">

                    <h1 className="text-6xl squada-one-regular ">{hero.title}</h1>
                    <p className='text-xl pr-20 font-medium opacity-70 ' >{hero.description}</p>
                    <div className=''><button className='flex justify-self-center gap-3 rounded-md border p-3' width={24} height={24}><label className="bold-16 whitespace-nowrap cursor-pointer">About Us</label>     </button></div>
                </div>

                <img src="/hero.png" alt="" className='my-auto ms-auto rounded-3xl' />

            </div>

        </div>
    )
}

export default Hero