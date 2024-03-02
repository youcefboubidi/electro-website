import React from 'react'
import Carousel from './Carousel'
import { useState } from 'react'
function Main() {
    const [active, setActive] = useState(1)
    const hidden = true;
    return (
        <div>
            <ul className="grid grid-cols-3 text-4xl">
                <li className='mx-auto my-8 squada-one-regular' onClick={() => setActive(1)}>Projects</li>
                <li className='mx-auto my-8 squada-one-regular' onClick={() => setActive(2)}>Events</li>
                <li className='mx-auto my-8 squada-one-regular' onClick={() => setActive(3)}>Entertainment</li>
            </ul>
            <div className="grid grid-cols-3 mb-10">
                <div className="w-full h-2 bg-red-500"></div>
                {/* NEED LEARN CSS GARDEN TO POSITION ONLY ONE COLUMN TO ONE OF THE THREE POSITIONS SMOOTHLY ACCORDING TO THE ACTIVE TAB */}

            </div>
            {active === 1 && <Carousel type="projects" />}
            {active === 2 && <Carousel type="events" />}
            {active === 3 && <Carousel type="entertainment" />}
        </div>
    )
}
export default Main