import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Project from './Project'

export default function Carousel({ type }) {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 3,
            spacing: 15,
        },
    })

    const projectClassName = 'flex justify-center items-center w-full aspect-[4/3] keen-slider__slide number-slide'

    switch (type) {
        case 'projects':
            return (
                <div ref={sliderRef} className="keen-slider ">
                    <div className={`${projectClassName}1 rounded-xl cursor-pointer`}>
                        <Project id={1} />
                    </div>
                    <div className={`${projectClassName}2 rounded-xl cursor-pointer`}>
                        <Project id={2} />
                    </div>
                    <div className={`${projectClassName}3 rounded-xl cursor-pointer`}>
                        <Project id={3} />
                    </div>
                    <div className={`${projectClassName}1 rounded-xl cursor-pointer`}>
                        <Project id={1} />
                    </div>
                    <div className={`${projectClassName}2 rounded-xl cursor-pointer`}>
                        <Project id={2} />
                    </div>
                    <div className={`${projectClassName}3 rounded-xl cursor-pointer`}>
                        <Project id={3} />
                    </div>
                </div>
            )

        case 'events':
            return (
                <div ref={sliderRef} className="keen-slider">
                    <div className={`${projectClassName}1`}>
                        <h1 className='text-4xl'>EVENT 1</h1>
                    </div>
                    <div className={`${projectClassName}2`}>
                        <h1 className='text-4xl'>EVENT 2</h1>
                    </div>
                    <div className={`${projectClassName}3`}>
                        <h1 className='text-4xl'>EVENT 3</h1>
                    </div>
                    <div className={`${projectClassName}4`}>
                        <h1 className='text-4xl'>EVENT 4</h1>
                    </div>
                    <div className={`${projectClassName}5`}>
                        <h1 className='text-4xl'>EVENT 5</h1>
                    </div>
                </div>
            )

        case 'entertainment':
            return (
                <div ref={sliderRef} className="keen-slider ">
                    <div className={`${projectClassName}1`}>
                        <h1 className='text-4xl'>ENTERTAINMENT 1</h1>
                    </div>
                    <div className={`${projectClassName}2`}>
                        <h1 className='text-4xl'>ENTERTAINMENT 2</h1>
                    </div>
                    <div className={`${projectClassName}3`}>
                        <h1 className='text-4xl'>ENTERTAINMENT 3</h1>
                    </div>
                    <div className={`${projectClassName}4`}>
                        <h1 className='text-4xl'>ENTERTAINMENT 4</h1>
                    </div>
                    <div className={`${projectClassName}5`}>
                        <h1 className='text-4xl'>ENTERTAINMENT 5</h1>
                    </div>
                </div>
            )
    }
}
