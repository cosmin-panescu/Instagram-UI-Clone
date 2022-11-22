import React from 'react';
import profile from "../assets/profile.jpg";
import Post from './Post';
import post1 from '../assets/post1.jpg';
import post2 from '../assets/post2.jpg';

const Posts = () => {
    const posts = [
        {
            id: '1',
            username: "pane_cosmin",
            profilePicture: profile,
            postPhoto: post2,
            caption: "The best of me is yet to come 🧠",
            likes: 134,
            commentsNumber: 14,
            comments: [
                {
                    username: "m.tinna27",
                    comment: "Like this one ❤",
                },
                {
                    username: "florin.pnn",
                    comment: "Best investment 💡",
                }
            ]
        },
        {
            id: '2',
            username: "pane_cosmin",
            profilePicture: profile,
            postPhoto: post1,
            caption: "Attitude designs life ✨",
            likes: 408,
            commentsNumber: 51,
            comments: [
                {
                    username: "karam.hasanain",
                    comment: "Bro 🔥🔥",
                },
                {
                    username: "alex_bbc11",
                    comment: "El futuro suena bien ❤",
                },
                {
                    username: "daniel_zoican",
                    comment: "👏🏻👏🏻👏🏻",
                },
            ]
        },
    ];

    return (
        <div className='mt-1 mx-1'>
            {posts.map(post => (
                <Post
                    key={post.id}
                    username={post.username}
                    profilePicture={post.profilePicture}
                    postPhoto={post.postPhoto}
                    caption={post.caption}
                    likes={post.likes}
                    commentsNumber={post.commentsNumber}
                    comments={post.comments}
                />
            ))}
        </div>
    )
}

export default Posts