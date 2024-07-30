import React from 'react';
import useStore from '../zustand/useStore.js';

const ChatItem = ({ chat }) => {
    const { selectedChat, setSelectedChat } = useStore();
    const isSelected = chat?._id === selectedChat?._id;

    return (
        <div 
            className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? 'bg-sky-500' : ''}`}
            onClick={()=> setSelectedChat(chat)}
        >
            <div className="avatar relative online">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img src={chat?.profilePicture} />
                </div>
            </div>

            <div className='flex flex-col gap-4 justify-center p-2 items-center'>
                <span className='font-bold'>{chat?.fullName}</span>
                <span></span>
            </div>
        </div>
    )
}

export default ChatItem
