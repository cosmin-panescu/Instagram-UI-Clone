import Image from 'next/image';
import React from 'react';
import dots from "../assets/dots.png";
import hearth from "../assets/hearth.png";
import comment from "../assets/comment.png";
import message from "../assets/message.png";
import save from "../assets/save.png";
import emojy from "../assets/emojy.png";

const Post = ({ username, profilePicture, postPhoto, caption, likes, commentsNumber, comments }) => {

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="border  my-3">

                {/* Header */}
                <div className="flex items-center p-3">
                    <div className="flex items-center w-full">
                        <div className="h-8 w-8 mr-3">
                            <img src={profilePicture.src} alt="" className='rounded-full' />
                        </div>
                        <p className='font-semibold text-sm'>{username}</p>
                    </div>
                    <div className="h-6 w-6 cursor-pointer">
                        <Image src={dots} />
                    </div>
                </div>

                {/* Photo */}
                <div className="">
                    <img src={postPhoto.src} alt="" />
                </div>

                <div className="m-3">
                    {/* Buttons */}
                    <div className="">
                        <div className="flex justify-between">
                            <div className="flex space-x-4">
                                <div className="Btn">
                                    <Image src={hearth} />
                                </div>
                                <div className="Btn">
                                    <Image src={comment} />
                                </div>
                                <div className="Btn">
                                    <Image src={message} />
                                </div>
                            </div>
                            <div className="Btn">
                                <Image src={save} />
                            </div>
                        </div>
                        <div className="mt-2 custom-font">
                            <p>{likes} likes</p>
                        </div>
                    </div>

                    {/* Caption */}
                    <div className="flex items-center mt-2">
                        <p className="custom-font mr-2 whitespace-nowrap">{username}</p>
                        <p className='truncate '>{caption}</p>
                    </div>

                    {/* Comments number */}
                    <p className="text-sm text-gray-500 mt-1 my-2">View all {commentsNumber} commets
                    </p>

                    {/* Comments */}
                    <div className="">
                        {comments.map(comment => (
                            <div className="flex justify-between max-w-24 overflow-y-auto">
                                <div className="flex items-center">
                                    <p className='cursor-pointer custom-font mr-2 whitespace-nowrap'>{comment.username}</p>
                                    <p className='truncate'>{comment.comment}</p>
                                </div>
                                <div className="w-3 h-3 cursor-pointer shrink-0">
                                    <Image src={hearth} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Timestamp */}
                    <p className="text-gray-400 text-xs my-2">4 hours ago</p>

                    {/* Border */}
                    <div className="border-t -mx-3 my-3"></div>

                    {/* Comments Input */}
                    <div className="flex justify-between p-1">
                        <div className="flex">
                            <div className="Btn mr-4">
                                <Image src={emojy} />
                            </div>

                            <input
                                type="text"
                                placeholder='Add a comment...'
                                className='outline-0'
                            />
                        </div>
                        <button className='font-bold text-sm text-[#0095f6]'>Post</button>
                    </div>

                </div>

            </div >
        </div >
    )
}

export default Post