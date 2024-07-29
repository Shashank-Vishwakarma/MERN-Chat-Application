import React, { useContext } from 'react'
import ChatList from '../components/ChatList'
import ChatBox from '../components/ChatBox'
import Navbar from '../components/Navbar'
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.js';

const Home = () => {
    const { user } = useContext(AuthContext);

    if(!user) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className='w-2/3 flex flex-col gap-3 p-4 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Navbar />
            <div className='flex flex-row gap-3 h-full'>
                <ChatList />
                <ChatBox />
            </div>
        </div>
    )
}

export default Home
