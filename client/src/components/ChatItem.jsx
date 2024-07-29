import React from 'react'

const ChatItem = () => {
    return (
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointe'>
            <div className="avatar relative online">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img src="https://avatar.iran.liara.run/public/boy" />
                </div>
            </div>

            <div className='flex flex-col gap-1 justify-center p-2'>
                <span className='font-bold'>Shashank Vishwakarma</span>
                <span>Hi...</span>
            </div>
        </div>
    )
}

export default ChatItem
