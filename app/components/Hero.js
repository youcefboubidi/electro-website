import Image from 'next/image'
import React from 'react'

function Hero() {
    const paragraph = 'Once upon a time, in the whimsical land of Cagts, there lived a giant cat named Whiskerius the Grand. Whiskerius wasn’t just any ordinary feline; he was the undisputed ruler of all Cagts. His fur shimmered like the golden sands of the desert, and his eyes glowed with the wisdom of a thousand lifetimes.'
    return (
        <>
            <div className="grid grid-cols-2 mb-12">
                <div className="flex flex-col justify-center gap-8 col-span-1">

                    <h1 className="text-6xl squada-one-regular">Electro Anti-Social Club</h1>
                    <p className='text-2xl'>{paragraph}</p>
                </div>
                <img src="/hero.png" alt="" className='my-auto ms-auto' />

            </div>
        </>
    )
}

export default Hero