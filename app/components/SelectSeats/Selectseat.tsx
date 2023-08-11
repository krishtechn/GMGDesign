"use client"
import React, { useState } from 'react'
import { BiSolidCheckboxChecked } from 'react-icons/bi';

const Selectseat = () => {
  let data = [
    "M-ticket Supported",
    "M-ticket Supported",
    "CCTV",
    "Emergency Contact Number",
    "Charging Point",
    "No blankets/linens",
    "M-ticket Supported",
    "M-ticket Supported",
    "CCTV",
    "Emergency Contact Number",
    "Charging Point",
    "No blankets/linens",
    "M-ticket Supported",
    "M-ticket Supported",
    "CCTV",
    "Emergency Contact Number",
    "Charging Point",
    "No blankets/linens",
    "M-ticket Supported",
    "M-ticket Supported",
    "CCTV",
    "Emergency Contact Number",
    "Charging Point",
    "No blankets/linens",
    "M-ticket Supported",
    "M-ticket Supported",
    "CCTV",
    "Emergency Contact Number",
    "Charging Point",
    "No blankets/linens",
    "M-ticket Supported",
    "M-ticket Supported",
    "CCTV",
    "Emergency Contact Number",
    "Charging Point",
    "No blankets/linens",
    "M-ticket Supported",
    "M-ticket Supported",
    "CCTV",
    "Emergency Contact Number",
    "Charging Point",
    "No blankets/linens",
    "M-ticket Supported",
    "M-ticket Supported",
    "CCTV",
    "Emergency Contact Number",
    "Charging Point",
    "No blankets/linens",
    "M-ticket Supported",
    "M-ticket Supported",
    "CCTV",
    "Emergency Contact Number",
    "Charging Point",
    "No blankets/linens",
    "M-ticket Supported",
    "M-ticket Supported",
    "CCTV",
    "Emergency Contact Number",
    "Charging Point",
    "No blankets/linens",
  ];

  const [visible, setVisible] = useState(4);
  
  // to select data from 0 to state value
  const itemstoshow = data.slice(0, visible);
  const [loading, setLoading] = useState(false);
 
 
  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(visible + 4);
      setLoading(false);
    }, 2000)
  };


  return (
    <div className='m-[10px]'>
      <h1 className='font-600 text-[18px] text-left text-[#000] mb-[6px]'>Amenities</h1>
      <div className='w-full bg-[#fff] grid grid-cols-2 gap-2 py-[10px] rounded px-[10px] shadow'>

        {itemstoshow.map(item => (<div className='shadow-sm w-[100%] flex items-center border border-[1px] border-[#f2f4f7] p-[10px] rounded-sm'>
          {item !== "" && <BiSolidCheckboxChecked color='#000' />}
          <h1 className='text-[14px] font-600 text-start ml-[10px]'>{item}</h1>
        </div>))}

        {loading ? (<p className='text-[14px] font-bold text-start ml-[10px] p-[10px]'>Loading...</p>) : (visible < data.length && (<button onClick={loadMore} className='w-[128px] h-[36px] font-semibold text-[14px] shadow text-[#6941c6] border border-[1px] border-[#6941c6] rounded-sm'>View +{data.length - visible} more</button>)
        )}
      </div>
    </div>
  )
}

export default Selectseat