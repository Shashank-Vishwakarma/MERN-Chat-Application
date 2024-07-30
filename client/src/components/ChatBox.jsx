import React from 'react'
import ChatMessage from './ChatMessage'
import MessageInput from './MessageInput'
import WelcomeMessage from './WelcomeMessage';
import useStore from '../zustand/useStore.js';

const ChatBox = () => {
    const { selectedChat } = useStore();

    return !selectedChat ? <WelcomeMessage/> : (
        <div className='flex flex-col w-3/4 h-full'>
            <div className='bg-[#282e3b] w-full rounded-t-lg p-2 h-fit text-center font-bold text-white'>
                {selectedChat?.fullName}
            </div>

            {/* Chat Messages between users */}
            <div className='overflow-auto h-96 p-3'>
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>

            {/* Text Input */}
            <MessageInput />
        </div>
    )
}


export default ChatBox
