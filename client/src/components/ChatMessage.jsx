import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext.js';
import useStore from '../zustand/useStore.js';

const ChatMessage = () => {
    const { user } = useContext(AuthContext);
    const { selectedChat } = useStore();
    
    return (
        <>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Chat User 1"
                            src={selectedChat?.profilePicture} />
                    </div>
                </div>
                <div className="chat-header">
                    {selectedChat?.fullName}
                </div>
                <div className="chat-bubble text-white">Hi..</div>
                <time className="text-xs chat-footer opacity-50">12:45</time>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Chat User 2"
                            src={user?.profilePicture} />
                    </div>
                </div>
                <div className="chat-header">
                    {user?.fullName}
                </div>
                <div className="chat-bubble text-white bg-blue-500">I hate you!</div>
                <time className="text-xs chat-footer opacity-50">12:46</time>
            </div>
        </>
    )
}

export default ChatMessage
