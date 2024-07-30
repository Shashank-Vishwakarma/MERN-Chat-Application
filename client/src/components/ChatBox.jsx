import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import MessageInput from './MessageInput'
import WelcomeMessage from './WelcomeMessage';
import useStore from '../zustand/useStore.js';
import useGetMessages from '../hooks/useGetMessages.js';

const ChatBox = () => {
    const { selectedChat, setSelectedChat } = useStore();
    const { loading, messages } = useGetMessages();

    useEffect(() => {
        // cleanup resources
        return () => {
            setSelectedChat(null);
        }
    }, [setSelectedChat]);

    return !selectedChat ? <WelcomeMessage /> : (
        <div className='flex flex-col w-3/4 h-full'>
            <div className='bg-[#282e3b] w-full rounded-t-lg p-2 h-fit text-center font-bold text-white'>
                {selectedChat?.fullName}
            </div>

            {/* Chat Messages between users */}
            <div className='overflow-auto h-96 p-3'>
                {
                    loading ? (
                        <span className='loading loading-spinner mx-auto'></span>
                    ) : (
                        messages?.map((message) => (
                            <ChatMessage key={message?._id} message={message} />
                        ))
                    )
                }

                {
                    !loading && !messages && (
                        <p className='text-center text-lg font-medium text-white align-middle'>Send a message to start a Conversation</p>
                    )
                }
            </div>

            {/* Text Input */}
            <MessageInput />
        </div>
    )
}


export default ChatBox
