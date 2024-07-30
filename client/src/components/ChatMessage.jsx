import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext.js';
import useStore from '../zustand/useStore.js';
import formatTime from '../utils/formatTime.js';
import useListenMessages from '../hooks/useListenMessages.js';

const ChatMessage = ({ message }) => {
    const { user } = useContext(AuthContext);
    const { selectedChat } = useStore();
    const chatClass = (message?.senderId === user?._id) ? 'chat-end' : 'chat-start';
    const profilePicture = (message?.senderId === user?._id) ? user?.profilePicture : selectedChat?.profilePicture;
    const fullName = (message?.senderId === user?._id) ? user?.fullName : selectedChat?.fullName;

    useListenMessages();

    return (
        <div className={`chat ${chatClass}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="User" src={profilePicture} />
                </div>
            </div>
            <div className="chat-header">
                {fullName}
            </div>
            <div className={`chat-bubble text-white ${message?.senderId === user?._id ? 'bg-blue-500' : ''}`}>{message?.message}</div>
            <time className="text-xs chat-footer">{formatTime(message?.createdAt)}</time>
        </div>
    )
}

export default ChatMessage
