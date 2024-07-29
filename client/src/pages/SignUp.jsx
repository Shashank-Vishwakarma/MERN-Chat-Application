import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignUp from '../hooks/useSignUp.js';

const SignUp = () => {
    const navigateTo = useNavigate();
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });
    const { loading, signUp } = useSignUp();

    const handleSignUp = async (e)=>{
        e.preventDefault();
        await signUp({...inputs});
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up</h1>

                <form 
                    className='flex flex-col justify-center gap-4 my-4'
                    onSubmit={handleSignUp}
                >
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <input 
                            type="text" 
                            className="grow" 
                            placeholder="Full Name" 
                            value={inputs.fullName}
                            onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}
                        />
                    </label>

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
                            placeholder="Confirm Password" 
                            value={inputs.confirmPassword}
                            onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </label>

                    <select 
                        className="select select-bordered select-md w-full"
                        value={inputs.gender}
                        onChange={(e)=> setInputs({...inputs, gender: e.target.value})}
                    >
                        <option defaultValue>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <div className='flex gap-4 justify-center'>
                        <span>Already have an account?</span>
                        <span onClick={() => navigateTo('/login')} className='font-bold cursor-pointer text-blue-400'>Login</span>
                    </div>
                    <button type='submit' className='btn btn-block btn-sm mt-2'>
                        { loading ? <span className='loading loading-spinner'></span> : 'Sign Up' }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
