import React from 'react'
import {main} from "../data/main";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS,BarElement,Tooltip,Title,CategoryScale,Legend,LinearScale} from 'chart.js';

ChartJS.register(BarElement,Tooltip,Title,CategoryScale,Legend,LinearScale);

function BarChart() {
    const data={
        labels:["Week 1","Week 2","Week 3","Week 4"],
        datasets:[
            {
                label:"Guest",
                data:main.dummy.guest,
                backgroundColor:'#98D89E',
                borderWidth:1,
                borderRadius:5,
                barThickness: 40,   
                maxBarThickness:35,
                borderSkipped:false
            },
            {
                label:"User",
                data:main.dummy.user,
                backgroundColor:'#EE8484',
                borderWidth:1,
                borderRadius:5,
                barThickness: 40,   
                maxBarThickness:35,
                borderSkipped:false
            }
        ]
    }
    const options = {
        responsive:true,
        maintainAspectRatio: false,
        plugins: {
            title: {
            display: false,
            },
            legend:{
                display:false
            },
        },
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y: {
            ticks: {
            stepSize: 100
            }
        }
    }
    }
  return (
    <div className='shadow-md h-[18rem] w-full px-[1.5rem] py-[1rem]  flex flex-col gap-5 rounded-[1.25rem] border border-[#E0E0E0] bg-[#FFFFFF]'>
        <div className='flex justify-between items-center h-fit'>
            <div>
                <p className='text-[1.125rem] font-semibold'>Activities</p>
                <p className='text-[0.875rem] text-xs text-[#858585]'>May - June 2021</p>
            </div>
            <div className='flex gap-[2rem]'>
                <div className='flex justify-center items-center gap-2'>
                    <p className='bg-[#EE8484] p-1 rounded-full w-fit h-fit'></p>
                    <p className='text-[0.875rem]'>Guest</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <p className='bg-[#98D89E] p-1 rounded-full w-fit h-fit'></p>
                    <p className='text-[0.875rem]'>User</p>
                </div>
            </div>
        </div>
        <div>
            <Bar data={data} options={options}></Bar>
        </div>
    </div>
  )
}

export default BarChart