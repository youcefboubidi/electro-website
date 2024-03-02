import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; // Add missing import statement

function NavBar() {
    return (
        <nav className="flex justify-between text-2xl  py-10 px-16">
            <div className='flex gap-4 items-center'>
                <Link href="/"></Link>
                <Image
                    src='/logo all white 2.png'
                    width={51}
                    height={50}
                />

                <span className='font-bold'>ELECTRO CLUB</span>
            </div>
            <div className='flex justify-end gap-16'>
                <Link href="/" className='font-light transition-all duration-300 hover:font-medium '>
                    HOME
                </Link>
                <Link href="/projects" className='font-light transition-all duration-300 hover:font-medium '>
                    PROJECTS
                </Link>
                <Link href="/events" className='font-light transition-all duration-300 hover:font-medium '>
                    EVENTS
                </Link>
                <Link href="/entertainment" className='font-light transition-all duration-300 hover:font-medium'>
                    ENTERTAINMENT
                </Link>
            </div>
        </nav >
    );
}

export default NavBar;
