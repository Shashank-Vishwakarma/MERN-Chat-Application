import React from 'react'
import { Scrollbar } from 'react-scrollbars-custom'

const ChatBox = () => {
    return (
        <div className='flex flex-col w-3/4 h-full p-2'>
            <div className='bg-[#282e3b] w-full rounded-t-lg p-2 h-fit text-center font-bold text-white'>
                John Doe
            </div>

            {/* Chat Messages between users */}
                <div className='overflow-auto h-96 p-3'>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-header">
                            John Doe
                        </div>
                        <div className="chat-bubble text-white">You were the Chosen One!</div>
                        <time className="text-xs chat-footer opacity-50">12:45</time>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Shashank Vishwakarma
                        </div>
                        <div className="chat-bubble text-white bg-blue-500">I hate you!</div>
                        <time className="text-xs chat-footer opacity-50">12:46</time>
                    </div>

                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-header">
                            John Doe
                        </div>
                        <div className="chat-bubble text-white">You were the Chosen One!</div>
                        <time className="text-xs chat-footer opacity-50">12:45</time>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Shashank Vishwakarma
                        </div>
                        <div className="chat-bubble text-white bg-blue-500">I hate you!</div>
                        <time className="text-xs chat-footer opacity-50">12:46</time>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Shashank Vishwakarma
                        </div>
                        <div className="chat-bubble text-white bg-blue-500">I hate you!</div>
                        <time className="text-xs chat-footer opacity-50">12:46</time>
                    </div>
                </div>

            {/* Text Input */}
            <div className="relative">
                <input
                    type="text"
                    className="input input-bordered w-full pr-10 text-white"
                    placeholder="Type a message..."
                />
                <button className="absolute inset-y-0 right-0 flex items-center px-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-gray-500 hover:text-gray-700">
                        <path d="M2 21l21-9-21-9v7l15 2-15 2v7z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}


export default ChatBox
