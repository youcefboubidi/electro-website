import React, { useState } from 'react';
import Carousel from './Carousel';

function Main() {
    const [active, setActive] = useState(1);

    // Function to render the indicator based on the active state
    const renderIndicator = (activeIndex) => {
        return (
            <div className="w-full h-[2px] bg-green-700" style={{ transform: `translateX(${(activeIndex - 1) * 100}%)`, transition: 'transform 0.3s ease-in-out' }}></div>
        );
    };

    return (
        <div>
            <ul className="grid grid-cols-3 text-3xl ">
                {['Projects', 'Events', 'Entertainment'].map((item, index) => (
                    <li key={index} className='mx-auto my-8 squada-one-regular cursor-pointer' onClick={() => setActive(index + 1)}>
                        {item}
                    </li>
                ))}
            </ul>
            <div className="grid grid-cols-3 mb-10 relative">
                {renderIndicator(active)}
            </div>
            {active === 1 && <Carousel type='projects' />}
            {active === 2 && <Carousel type='events' />}
            {active === 3 && <Carousel type='entertainment' />}

        </div>
    );
}

export default Main;
