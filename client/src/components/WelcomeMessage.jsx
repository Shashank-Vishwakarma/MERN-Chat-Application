import React from 'react'
import { useAuthContext } from '../context/AuthContext'

const WelcomeMessage = () => {
    const { user } = useAuthContext();

    return (
        <div className='flex flex-col text-white font-bold items-center justify-center w-full text-xl'>
            <p>Welcome 👋 {user?.fullName}</p>
            <p>Select a chat to start messaging</p>
        </div>
    )
}

export default WelcomeMessage
