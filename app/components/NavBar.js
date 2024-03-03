import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="flex justify-center gap-96 bg-[#212121] rounded-lg items-center text-white py-4 px-6">
                <div className='flex items-center gap-4'>
                    <Link href="/">
                        <p>
                            <Image
                                src='/logo all white 2.png'
                                alt='Electro Club Logo'
                                width={51}
                                height={50}
                                className='cursor-pointer'
                            />
                        </p>
                    </Link>
                    <span className='text-xl font-semibold'>ELECTRO CLUB</span>
                </div>
                <div className={`flex-col gap-4 lg:flex-row lg:flex ${isOpen ? 'flex' : 'hidden'}`}>
                    <Link href="/">
                        <p className='text-lg font-medium hover:font-bold transition-colors'>HOME</p>
                    </Link>
                    <Link href="/projects">
                        <p className='text-lg font-medium hover:font-bold transition-colors'>PROJECTS</p>
                    </Link>
                    <Link href="/events">
                        <p className='text-lg font-medium hover:font-bold transition-colors'>EVENTS</p>
                    </Link>
                    <Link href="/entertainment">
                        <p className='text-lg font-medium hover:font-bold transition-colors'>ENTERTAINMENT</p>
                    </Link>
                </div>

                <button
                    className='lg:hidden p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image
                        src='/menu.jpg'
                        alt='menu'
                        width={40}
                        height={40}
                        className='cursor-pointer'
                    />
                </button>

            </nav>
            <div className='mb-10' />

        </div>
    );
}

export default NavBar;
