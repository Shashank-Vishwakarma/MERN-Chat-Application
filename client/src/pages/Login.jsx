import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin.js';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
    const navigateTo = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });
    const { loading, login } = useLogin();
    const { user } = useAuthContext();

    if(user) {
        return <Navigate to={'/'} />
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        await login({...inputs});
        navigateTo('/');
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login</h1>

                <form className='flex flex-col justify-center gap-4 my-4' onSubmit={handleLogin}>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input 
                            type="text" 
                            className="grow" 
                            placeholder="Username" 
                            value={inputs.username}
                            onChange={(e)=> setInputs({...inputs, username: e.target.value})}
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input 
                            type="password" 
                            className="grow" 
                            placeholder="Password" 
                            value={inputs.password}
                            onChange={(e)=> setInputs({...inputs, password: e.target.value})}
                        />
                    </label>

                    <div className='flex gap-4 justify-center'>
                        <span>Don't have an account?</span>
                        <span onClick={() => navigateTo('/signup')} className='font-bold cursor-pointer text-blue-400'>Sign Up</span>
                    </div>
                    <button type='submit' className='btn btn-block btn-sm mt-2'>
                        { loading ? <span className='loading loading-spinner'></span> : 'Login' }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
