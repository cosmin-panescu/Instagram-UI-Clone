import Image from 'next/image';
import React from 'react';
import instagram from "../assets/instagram.png";
import search from "../assets/search.png";
import home from "../assets/home.png";
import message from "../assets/message.png";
import upload from "../assets/upload.png";
import discover from "../assets/discover.png";
import hearth from "../assets/hearth.png";
import profile from "../assets/profile.jpg";

const Header = () => {
    return (
        <div className='border-b shadow-sm bg-white sticky top-0 z-10'>
            <div className='flex justify-between items-center h-16 px-2 max-w-5xl mx-auto'>

                {/* Left */}
                <div className='w-28 flex'>
                    <Image src={instagram} />
                </div>

                {/* Middle */}
                <div className='hidden w-72 mx-4 sm:flex relative '>
                    <div className='w-3 h-full ml-2 absolute flex items-center'>
                        <Image src={search} />
                    </div>
                    <input
                        type="text"
                        placeholder='Search'
                        className='h-9 w-full rounded-md bg-[#efefef] pl-7 outline-0'
                    />
                </div>

                {/* Right */}
                <div className="flex space-x-5">
                    <div className="Btn hidden sm:flex">
                        <Image src={home} />
                    </div>
                    <div className="Btn hidden sm:flex relative">
                        <Image src={message} />
                        <div className="absolute flex -top-1 left-3.5 items-center justify-center bg-red-500 text-white rounded-full w-4 h-4 text-xs">
                            1
                        </div>
                    </div>
                    <div className="Btn">
                        <Image src={upload} />
                    </div>
                    <div className="Btn hidden sm:flex">
                        <Image src={discover} />
                    </div>
                    <div className="Btn hidden sm:flex">
                        <Image src={hearth} />
                    </div>
                    <div className="flex">
                        <div className="Btn mr-5">
                            <Image src={profile} className="aspect-square rounded-full" />
                        </div>
                        <button className='cursor-pointer text-[#0095f6] font-semibold whitespace-nowrap text-sm'>Sign Out</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header