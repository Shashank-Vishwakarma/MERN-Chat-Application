import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigateTo = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up</h1>

                <form className='flex flex-col justify-center gap-1'>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='Enter your full name' className='w-full input input-bordered h-10' />

                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />

                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />

                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="text" placeholder='Enter Password again' className='w-full input input-bordered h-10' />

                    <label className='label p-2'>
                        <span className='text-base label-text'>Gender</span>
                    </label>

                    <select className="select select-bordered select-sm w-full">
                        <option disabled selected>Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    <div className='flex gap-4 justify-center'>
                        <span>Already have an account?</span>
                        <span onClick={()=> navigateTo('/login')} className='font-bold cursor-pointer text-blue-400'>Login</span>
                    </div>
                    <button type='submit' className='btn btn-block btn-sm mt-2' onClick={(e) => e.preventDefault()}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
