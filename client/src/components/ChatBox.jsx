import React from 'react'

const ChatBox = () => {
    return (
        <div className='flex flex-col justify-between w-3/4'>
            <div className='bg-[#282e3b] w-full rounded-t-lg p-2 h-fit text-center font-bold text-white'>
                John Doe
            </div>

            <div className='bg-transparent p-4 flex flex-col h-2/3 overflow-auto'>
                <div className='bg-transparent rounded-lg text-start'>
                    <span className='p-1 border rounded-lg text-white'>Hi...</span>
                </div>
                <div className='p-1 bg-transparent rounded-lg text-end text-white'>
                    <span className='p-1 border rounded-lg'>Hello...</span>
                </div>

                <div className='bg-transparent rounded-lg text-start'>
                    <span className='p-1 border rounded-lg text-white'>Hi...</span>
                </div>
                <div className='p-1 bg-transparent rounded-lg text-end text-white'>
                    <span className='p-1 border rounded-lg'>Hello...</span>
                </div>
            </div>

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
