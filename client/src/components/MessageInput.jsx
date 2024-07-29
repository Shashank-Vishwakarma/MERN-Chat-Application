import React from 'react'

const MessageInput = () => {
    return (
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
    )
}

export default MessageInput
