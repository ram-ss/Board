import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { main } from '../data/main';

ChartJS.register(ArcElement, Tooltip, Legend);
// box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.10);

function DoughnutChart() {
  const data={
    labels:["Basic Tees","Custom Short Pants","Super Hoodies"],
    datasets:[
      {
        label:"% of sales",
        data:main.dummy.top,
        backgroundColor:[
          "#98D89E",
          "#EE8484",
          "#F6DC7D"
        ],
        borderWidth:0.1,
        // borderRadius:1
      }
    ]
  }
  const options={
    cutout:60,
    maintainAspectRatio: false,
    responsive:true,

    plugins:{
      legend:{
        display:false
      },
      title:{
        display:false
      }
    }
  }
  return (
    <div className='shadow-md w-1/2 h-fit rounded-[1.25rem] gap-[] flex flex-col border border-[#E0E0E0] bg-[#FFFFFF] px-[1.5rem] py-[1rem]'>
      <div className='w-full h-fit flex justify-between items-center'>
        <p className='text-[1.125rem] font-semibold'>Top products</p>
        <p className='text-[0.75rem] text-[#858585]'>May - June 2021</p>
      </div>
      <div className='flex'>
        <div className='w-[]'>
          <Doughnut data={data} options={options}/>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='flex items-center gap-2'>
            <p className='bg-[#98D89E] p-1 rounded-full w-fit h-fit'></p>
            <div>
              <p className='text-[0.875rem] font-bold'>Basic Tees</p>
              <p className='text-[0.75rem] text-[#858585]'>55%</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <p className='bg-[#F6DC7D] p-1 rounded-full w-fit h-fit'></p>
            <div>
              <p className='text-[0.875rem] font-bold'>Custom Short Pants</p>
              <p className='text-[0.75rem] text-[#858585]'>31%</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <p className='bg-[#EE8484] p-1 rounded-full w-fit h-fit'></p>
            <div>
              <p className='text-[0.875rem] font-bold'>Super Hoodies</p>
              <p className='text-[0.75rem] text-[#858585]'>14%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoughnutChart