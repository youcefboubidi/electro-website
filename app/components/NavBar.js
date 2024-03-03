import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; // Add missing import statement
import { useState } from 'react';


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between text-2xl py-10 px-16 pb-24 ">
            <div className='flex gap-4 items-center'>
                <Image
                    src='/logo all white 2.png'
                    width={51}
                    height={50}
                    className='cursor-default '

                />

                <span className=' text-[24px] font-[400] cursor-default '>ELECTRO CLUB</span>
            </div>
            {isOpen ? (
                <div className=' flex flex-col gap-16 lg:flex-row  '>
                    <Link href="/" className='text-lg font-medium hover:font-bold transition-colors'>
                        HOME
                    </Link>
                    <Link href="/entertainment" className='text-lg font-medium hover:font-bold transition-colors'>
                        BOUTUS
                    </Link>
                    <Link href="/projects" className='text-lg font-medium hover:font-bold transition-colors'>
                        PROJECTS
                    </Link>
                    <Link href="/events" className='text-lg font-medium hover:font-bold transition-colors'>
                        EVENTS
                    </Link>
                    <Link href="/entertainment" className='text-lg font-medium hover:font-bold transition-colors'>
                        ENTERTAINMENT
                    </Link>
                    
                </div>
            ) : <div className='  flex-row hidden lg:flex gap-16  '>
                <Link href="/" className='text-lg font-medium hover:font-bold transition-colors'>
                    HOME
                </Link>
                <Link href="/entertainment" className='text-lg font-medium hover:font-bold transition-colors'>
                        BOUTUS
                    </Link>
                <Link href="/projects" className='text-lg font-medium hover:font-bold transition-colors'>
                    PROJECTS
                </Link>
                <Link href="/events" className='text-lg font-medium hover:font-bold transition-colors'>
                    EVENTS
                </Link>
                <Link href="/entertainment" className='text-lg font-medium hover:font-bold transition-colors'>
                    ENTERTAINMENT
                </Link>
                
            </div>
            }
            <Image
                src='/menu.jpg'
                alt='menu'
                width={100}
                height={100}
                className='inline-block cursor-pointer lg:hidden fixed right-20 '
                onClick={() => setIsOpen(!isOpen)}

            />
        </nav >
    );
}

export default NavBar;

