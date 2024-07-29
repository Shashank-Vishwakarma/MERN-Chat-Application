import React from 'react'

const ChatMessage = () => {
    return (
        <>
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
        </>
    )
}

export default ChatMessage
