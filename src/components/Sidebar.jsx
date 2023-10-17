import React from 'react'
import {data} from "../data/dashboard_links";

function Sidebar() {
  return (
    <div className='px-[3.12rem] py-[3.75rem] h-full w-[17.5rem] bg-gradient-to-b from-[#4285F4] to-[#3C83F9] rounded-[1.25rem]'>
        <div className='text-[2.25rem] text-[#FFFFFF] font-bold flex flex-col'>Board.</div>
        <div className='h-full flex flex-col pt-[3.75rem] justify-between'>
            <div className='flex flex-col gap-[1.25rem]'>
                {
                    data.map((d,index)=>{
                        return (<div className={`flex items-center gap-[1.25rem] ${index===0?"font-bold":""}`}>
                            <div>{d.icon}</div>
                            <div className='text-[#FFFFFF] text-[1.125rem]'>{d.name}</div>
                                
                        </div>)
                    })
                }
            </div>
            <div className='flex flex-col gap-[1.25rem] text-[0.875rem] text-[#FFFFFF] pb-[2.5rem]'>
                <p>Help</p>
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar