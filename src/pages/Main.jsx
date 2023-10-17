import React, { useState } from 'react'
import {data} from "../data/social_link";
import {btn} from "../data/btn";
import { Link } from 'react-router-dom';

function Main() {
    const [formData,setFormData]=useState({email:"",password:""});
    const handleOnChange=(e)=>{
        setFormData((prevData)=>(
            {
                ...prevData,
                [e.target.name]:e.target.value
            }
        ))
    }
    const {email,password}=formData;
  return (
    <div className='w-[100vw] h-[100vh] flex overflow-y-hidden bg-[#F8FAFF]'>
        {/* first section */}
        <div className='w-1/2 h-ful relative'>
            <div className='absolute w-full h-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="720" height="1024" viewBox="0 0 720 1024" fill="none">
                <path d="M0 0L719.988 0L569.314 1024H0V0Z" fill="url(#paint0_linear_0_147)"/>
                <defs>
                    <linearGradient id="paint0_linear_0_147" x1="359.994" y1="0" x2="359.994" y2="1024" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4285F4"/>
                    <stop offset="1" stop-color="#286DE0"/>
                    </linearGradient>
                </defs>
                </svg>
            </div>
            <div className='absolute w-full h-full flex flex-col justify-between px-[4.56rem] py-[3.74rem] text-[1.5rem] font-semibold text-white'>
                <div>
                    LOGO
                </div>
                <div className='w-full text-center text-[4.5rem] font-bold'>
                    Board.
                </div>
                <div className='w-[18.68rem] flex justify-between items-center ml-[8rem] mr-[17.28rem]'>
                    {
                        data.map((d,index)=>{
                            return (<div key={index}>
                                    {d.icon}
                                    </div>)
                        })
                    }
                </div>
            </div>
        </div>
        {/* second section */}
        <div className='w-1/2 h-full pl-[5.8rem] pr-[12.56rem] flex flex-col justify-center gap-[1.78rem]'>
            {/* login text */}
            <div className='flex flex-col'>
                <p className='text-[2.25rem] font-bold'>Sign In</p>
                <p className='text-[1rem]'>Sign in to your account</p>
            </div>
            {/* google and apple button */}
            <div className='flex gap-[1.72rem] items-center'>
                {
                    btn.map((b,index)=>{
                        return  <button key={index} className='w-[12.3rem] h-[2rem] flex gap-[0.69rem] justify-center items-center bg-[#FFFFFF] rounded-md'>
                            <div>{b.icon}</div>
                            <div className='text-[0.75rem] text-[#858585]'>{b.name}</div>
                        </button>
                    })
                }
            </div>
            {/* form  */}
            <form className='w-[26.5rem] p-[2.06rem] bg-[#FFFFFF] rounded-md flex flex-col gap-[1rem]'>
                <label>
                    <p className='text-[1rem]'>Email address</p>
                    <input 
                    required
                    type="email" 
                    name="email" 
                    value={email}
                    placeholder="Enter email address"
                    onChange={handleOnChange}
                    className='w-full mt-[0.69rem] h-[2.7rem] p-[1rem] bg-[#F5F5F5] rounded-md focus:bg-[#EAEAEA]'
                     />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"
                    name="password"
                    value={password} 
                    placeholder="Enter password"
                    onChange={handleOnChange}
                    className='w-full mt-[0.69rem] h-[2.7rem] p-[1rem] bg-[#F5F5F5] rounded-md focus:bg-[#EAEAEA]'
                    />
                </label>
                <p className=' text-[#346BD4]'>Forgot Password?</p>
                <Link to={"/dashboard"}>
                <button 
                type='submit'
                className='w-full h-[2.7rem] rounded-md bg-[#4285F4] text-[#FFFFFF] font-bold'
                >
                    Sign In
                </button>
                </Link>
            </form>
            {/* ending text */}
            <div className='text-center text-[#858585]'>
                Don’t have an account? <span className='text-[#346BD4]'>Register here</span>
            </div>
        </div>
    </div>
  )
}

export default Main