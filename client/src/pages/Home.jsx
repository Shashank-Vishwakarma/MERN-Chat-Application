import React from 'react'
import ChatList from '../components/ChatList'
import ChatBox from '../components/ChatBox'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className='w-2/3 flex flex-col gap-3 p-4 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Navbar />
            <div className='flex flex-row gap-3 justify-between h-full'>
                <ChatList />
                <ChatBox />
            </div>
        </div>
    )
}

export default Home
