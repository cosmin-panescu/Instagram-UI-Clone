import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        setStories([...Array(30)].map(profile => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
        })))
    }, []);

    return (
        <div className="">
            <div className='flex space-x-4 bg-white border overflow-x-scroll mx-1 rounded-lg custom-scrollbar p-5'>
                {stories.map((profile) => (
                    <Story key={profile.userId} username={profile.username} avatar={profile.avatar} />
                ))}
            </div>
        </div>
    )
}

export default Stories