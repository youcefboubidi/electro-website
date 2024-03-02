import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Carousel({ type }) {
    const [sliderRef] = useKeenSlider({
        slides: {
            loop: true, // Enable infinite looping
            perView: 3, // Show three slides at a time
            spacing: 8, // Space between slides (in px)
        }
    })

    switch (type) {

        case 'projects':

            return (
                <div ref={sliderRef} className="keen-slider">
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide1'>
                        <h1 className='text-4xl'>PROJECT 1</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide2'>
                        <h1 className='text-4xl'>PROJECT 2</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide3'>
                        <h1 className='text-4xl'>PROJECT 3</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide4'>
                        <h1 className='text-4xl'>PROJECT 4</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide5'>
                        <h1 className='text-4xl'>PROJECT 5</h1>
                    </div>
                </div>
            )

        case 'events':

            return (
                <div ref={sliderRef} className="keen-slider">
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide1'>
                        <h1 className='text-4xl'>EVENT 1</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide2'>
                        <h1 className='text-4xl'>EVENT 2</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide3'>
                        <h1 className='text-4xl'>EVENT 3</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide4'>
                        <h1 className='text-4xl'>EVENT 4</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide5'>
                        <h1 className='text-4xl'>EVENT 5</h1>
                    </div>
                </div>
            )

        case 'entertainment':

            return (
                <div ref={sliderRef} className="keen-slider">
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide1'>
                        <h1 className='text-4xl'>ENTERTAINMENT 1</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide2'>
                        <h1 className='text-4xl'>ENTERTAINMENT 2</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide3'>
                        <h1 className='text-4xl'>ENTERTAINMENT 3</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide4'>
                        <h1 className='text-4xl'>ENTERTAINMENT 4</h1>
                    </div>
                    <div className='flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide5'>
                        <h1 className='text-4xl'>ENTERTAINMENT 5</h1>
                    </div>
                </div>
            )

    }
}
