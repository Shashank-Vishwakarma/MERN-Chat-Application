import React from 'react'
import ChatList from '../components/ChatList'
import ChatBox from '../components/ChatBox'

const Home = () => {
    return (
        <div className='flex gap-3 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <ChatList />
            <ChatBox />
        </div>
    )
}

export default Home
