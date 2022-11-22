import { faker } from '@faker-js/faker';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        setSuggestions([...Array(5)].map(profile => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
        })))
    }, []);

    return (
        <div className="mt-4">
            <div className="flex items-center justify-between mt-1">
                <p className="text-sm font-semibold text-gray-400">Suggestions for you</p>
                <button className="font-semibold text-xs">See all</button>
            </div>

            {suggestions.map(profile => (
                <div key={profile.userId} className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <div className="cursor-pointer w-8 h-8">
                            <img src={profile.avatar} className="rounded-full" alt="Avatar" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-semibold cursor-pointer ">{profile.username}</p>
                            <p className="text-xs text-gray-500">Suggested for you</p>
                        </div>
                    </div>
                    <button className="text-xs font-semibold text-[#0095f6]">Follow</button>
                </div>
            ))}

            <div className="cursor-pointer flex flex-wrap text-xs mt-6 text-semibold text-[#d2d2d2] space-x-1">
                <p>About</p>
                <span>&#183; </span>
                <p>Help</p>
                <span>&#183; </span>
                <p>Press</p>
                <span>&#183; </span>
                <p>API</p>
                <span>&#183; </span>
                <p>Jobs</p>
                <span>&#183; </span>
                <p>Privacy</p>
                <span>&#183; </span>
                <p>Terms</p>
                <span>&#183; </span>
                <p>Locations</p>
                <span className='mt-1'>&#183; </span>
                <p className='mt-1'>Language</p>
            </div>

            <div className="cursor-pointer text-xs text-semibold mt-6 text-[#c1c1c1]">
                <p className=''>&copy; 2022 INSTAGRAM FROM META</p>
            </div>
        </div>
    )
}

export default Suggestions