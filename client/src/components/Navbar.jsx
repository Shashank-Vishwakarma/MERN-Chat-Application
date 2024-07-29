import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout.js';

const Navbar = () => {
    const navigateTo = useNavigate();
    const { loading, logout } = useLogout();

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout();
        navigateTo('/login');
    }

    return (
        <div className="navbar backdrop-filter backdrop-blur-lg backdrop-opacity-0">
            <div className="navbar-center">
                <h1 className='text-lg font-bold'>MERN CHAT</h1>
            </div>
            <div className='flex flex-1'></div>
            <div className="navbar-end">
                <button
                    className="btn btn-ghost btn-circle"
                    onClick={handleLogout}
                >
                    {
                        loading ? <span className='loading loading-spinner'></span> : <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6 opacity-70">
                            <path
                                d="M10 16l-1.41-1.41L13.17 10H3v-2h10.17l-4.58-4.59L10 2l7 7-7 7zM20 19v-14h-2v14h-14v2h14c1.1 0 2-.9 2-2z" />
                        </svg>
                    }
                </button>
            </div>
        </div>
    )
}

export default Navbar
