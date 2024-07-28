import React from 'react'
import ChatList from '../components/ChatList'
import ChatBox from '../components/ChatBox'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className='flex flex-col gap-3 p-4 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Navbar />
            <div className='flex flex-row gap-3'>
                <ChatList />
                <ChatBox />
            </div>
        </div>
    )
}

export default Home
