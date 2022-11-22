import Image from 'next/image';
import React from 'react';
import profile from "../assets/profile.jpg";

const ProfileRight = () => {
    return (
        <div className="flex justify-between items-center mt-7">
            <div className="flex items-center">
                <div className="w-14 h-14">
                    <Image src={profile} alt="User" className='cursor-pointer rounded-full' />
                </div>
                <p className="pl-3 text-sm font-semibold cursor-pointer ">pane_cosmin</p>
            </div>
            <button className="text-xs font-semibold text-[#0095f6]">Sign Out</button>
        </div>
    )
}

export default ProfileRight