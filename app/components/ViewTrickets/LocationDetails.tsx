"use client"
import React from 'react'

const LocationDetails = (props?:any) => {
    let {fromlocation,tolocation,totalHour,page} = props;

    return (
     <div className='w-[376px h-[60px] flex justify-center items-center flex-row'>
    <div className='flex flex-col'>
        <p className={`font-400 text-[10px] ${page=="booking"?"text-primary-400":""} text-left`}>{fromlocation.time}</p>
        <h1 className={`font-semibold ${page=="booking"?"text-base-white":""} text-[16px]`}>{fromlocation.fromlocation}</h1>
        <p className={`font-400 text-[11px] ${page=="booking"?"text-primary-400":""}`}>{fromlocation.currentdate}</p>
    </div>

    <div className='w-full justify-center items-center flex flex-col'>
    {
            page == "booking"?
            <div className='flex justify-between flex-row items-center'>
                <div className='flex justify-center items-center'>
                <div className="w-[10px] h-[10px] rounded-full bg-[#e0e0e0]"></div>
                <h1 className='text-[#e0e0e0] font-normal mr-2 ml-2'>- - - -</h1>
                    </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path d="M6.16667 12.6667V14.1333C6.16667 14.32 6.16667 14.4134 6.13034 14.4847C6.09838 14.5474 6.04738 14.5984 5.98466 14.6303C5.91336 14.6667 5.82002 14.6667 5.63333 14.6667H4.36667C4.17998 14.6667 4.08664 14.6667 4.01534 14.6303C3.95262 14.5984 3.90162 14.5474 3.86966 14.4847C3.83333 14.4134 3.83333 14.32 3.83333 14.1333V12.6667M13.1667 12.6667V14.1333C13.1667 14.32 13.1667 14.4134 13.1303 14.4847C13.0984 14.5474 13.0474 14.5984 12.9847 14.6303C12.9134 14.6667 12.82 14.6667 12.6333 14.6667H11.3667C11.18 14.6667 11.0866 14.6667 11.0153 14.6303C10.9526 14.5984 10.9016 14.5474 10.8697 14.4847C10.8333 14.4134 10.8333 14.32 10.8333 14.1333V12.6667M2.5 8H14.5M2.5 3.66666H14.5M4.83333 10.3333H5.83333M11.1667 10.3333H12.1667M5.7 12.6667H11.3C12.4201 12.6667 12.9802 12.6667 13.408 12.4487C13.7843 12.2569 14.0903 11.951 14.282 11.5746C14.5 11.1468 14.5 10.5868 14.5 9.46666V4.53333C14.5 3.41322 14.5 2.85317 14.282 2.42535C14.0903 2.04902 13.7843 1.74306 13.408 1.55132C12.9802 1.33333 12.4201 1.33333 11.3 1.33333H5.7C4.5799 1.33333 4.01984 1.33333 3.59202 1.55132C3.21569 1.74306 2.90973 2.04902 2.71799 2.42535C2.5 2.85317 2.5 3.41322 2.5 4.53333V9.46666C2.5 10.5868 2.5 11.1468 2.71799 11.5746C2.90973 11.951 3.21569 12.2569 3.59202 12.4487C4.01984 12.6667 4.5799 12.6667 5.7 12.6667Z" stroke={`${page == "booking"?"#fff":"#6941C6"}`} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
           </svg>
           <div className='flex justify-center items-center'>
                 <h1 className='text-[#e0e0e0] font-normal mr-2 ml-2'>- - - -</h1>
                <div className="w-[10px] h-[10px] rounded-full bg-[#e0e0e0]"></div>
                    </div>
           </div>
            :""
        }
    
        <h1 className={`font-semibold mt-2 text-xs ${page=="booking"?"text-success-400":"text-black"}  tracking-wide`}>{page=="booking"?"Completed":totalHour}</h1>
    </div>

    <div className='flex flex-col justify-center'>
    <p className={`font-400 text-[10px] ${page=="booking"?"text-primary-400":""} text-left`}>{tolocation.time}</p>
        <h1 className={`font-semibold ${page=="booking"?"text-base-white":""} text-[16px]`}>{tolocation.fromlocation}</h1>
        <p className={`font-400 text-[11px] ${page=="booking"?"text-primary-400":""}`}>{tolocation.currentdate}</p>
    </div>
   </div>
  )
}

export default LocationDetails