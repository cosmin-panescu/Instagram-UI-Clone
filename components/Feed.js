import React from 'react'
import Posts from './Posts'
import ProfileRight from './ProfileRight'
import Stories from './Stories'
import Suggestions from './Suggestions'

const Feed = () => {
    return (
        <div className='flex max-w-[790px] mt-4 mx-auto lg:max-w-[854px]'>
            <section className='max-w-[470px] mx-auto w-[100vw]'>
                <Stories />
                <Posts />
            </section>

            <section className='max-w-[320px] w-full mx-8 hidden lg:block'>
                <ProfileRight />
                <Suggestions />
            </section>
        </div>
    )
}

export default Feed