import React, { useEffect, useState } from 'react'
import ChatItem from './ChatItem'
import useGetChats from '../hooks/useGetChats';

const ChatList = () => {
    const [searchInput, setSearchInput] = useState("");
    const { loading, chats } = useGetChats();
    const [tempUsers, setTempUsers] = useState(chats);

    useEffect(() => {
        const tempChats = chats?.filter((chat) => {
            return chat?.username.toLowerCase().includes(searchInput.toLowerCase())
                || chat?.fullName.toLowerCase().includes(searchInput.toLowerCase())
        });

        setTempUsers(tempChats);
    }, [chats, searchInput]);

    return (
        <div className='w-1/2 h-full'>
            {/* Search Input */}
            <div className="relative w-full flex items-center mx-auto">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for user..."
                    required
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>

            {/* Divider */}
            <div className='divider'></div>

            {/* Users */}
            <div className='p-2 overflow-auto flex flex-col h-96'>
                {
                    loading ? <span className='loading loading-spinner mx-auto'></span> : (
                        tempUsers?.map((chat, index) => (
                            <ChatItem key={chat?._id} chat={chat} index={index} />
                        ))
                    )
                }
            </div>
        </div>
    )
}


export default ChatList
