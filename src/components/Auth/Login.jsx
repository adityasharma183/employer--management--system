import React from 'react'
import { useState } from 'react';

function Login({handleLogin}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler =(e)=>{
        e.preventDefault();
        handleLogin(email,password);
        setEmail("")
        setPassword("")
        
    }
  return (
    <div className='flex h-screen w-auto items-center justify-center'>
        <div className='border-2 border-emerald-600 rounded-xl p-20 '>
            <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                
                className='border-2 required text-xl text-white outline-none bg-transparent placeholder:text-gray-400  border-emerald-600 py-3  px-5 rounded-full' type="email" placeholder='Enter your Email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                
                className='border-2 required text-xl mt-5 text-white outline-none bg-transparent placeholder:text-gray-400  border-emerald-600 py-3  px-5 rounded-full'type="password" placeholder='Enter your password' />
                <button className='border-2 text-xl text-black outline-none mt-12  text-white bg-emerald-600 py-3  px-5 rounded-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login