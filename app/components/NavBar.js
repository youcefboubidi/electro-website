import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; // Add missing import statement
import { useState } from 'react';


    function NavBar() {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <nav className="flex justify-between text-2xl py-10 px-16 pb-24 ">
                <div className='flex gap-4 items-center'>
                    <Link href="/"></Link>
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
                        <Link href="/" className='text-[24px] font-[400]  transition-all cursor-pointer   hover:font-medium '>
                            HOME    
                        </Link>
                        <Link href="/projects" className='text-[24px] font-[400] transition-all cursor-pointer  hover:font-medium '>
                            PROJECTS
                        </Link>
                        <Link href="/events" className='text-[24px] font-[400]  transition-all cursor-pointer  hover:font-medium '>
                            EVENTS
                        </Link>
                        <Link href="/entertainment" className='text-[24px] font-[400]  transition-all cursor-pointer  hover:font-medium'>
                            ENTERTAINMENT
                        </Link>
                    </div>
                ) : <div className='  flex-row hidden lg:flex gap-16  '>
                        <Link href="/" className='text-[24px] font-[400]  transition-all cursor-pointer   hover:font-medium '>
                            HOME    
                        </Link>
                        <Link href="/projects" className='text-[24px] font-[400] transition-all cursor-pointer  hover:font-medium '>
                            PROJECTS
                        </Link>
                        <Link href="/events" className='text-[24px] font-[400]  transition-all cursor-pointer  hover:font-medium '>
                            EVENTS
                        </Link>
                        <Link href="/entertainment" className='text-[24px] font-[400]  transition-all cursor-pointer  hover:font-medium'>
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

