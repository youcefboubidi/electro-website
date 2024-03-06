import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; // Add missing import statement
import { useState } from 'react';
import { navigation } from './constants'


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" flex justify-around items-center rounded-lg text-2xl p-2 px-16 pb-24 py-4  bg-[#23272f]">
            <div className='flex gap-4 items-center'>
                <Link href="/" className='flex items-center gap-4'> <Image
                    src='/logo all white 2.png'
                    width={51}
                    height={50}
                    className=' '

                />

                    <span className=' text-[24px] font-[400] '>ELECTRO CLUB</span> </Link>
            </div>
            {isOpen ? (
                <div className=' flex flex-col gap-16 lg:flex-row '>
                    {navigation.map((item) => (
                        <Link href={item.href} className='text-lg font-medium hover:font-bold transition-colors'>
                            {item.title}
                        </Link>
                    ))}
                </div>
            ) : <div className='  flex-row hidden lg:flex gap-16  '>

                {navigation.map((item) => (
                    <Link href={item.href} className='text-lg font-medium hover:font-bold transition-colors'>
                        {item.title}
                    </Link>
                ))}

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

