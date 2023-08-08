"use client"
import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr';

const PassengerCards = (props?: any) => {
    let [show, setshow] = useState(false);
    return (
        <>
            {props.data.map((items?: any, index?: number) => 
              <div key={index} className='rounded-xl bg-white py-3 px-6 border border-[1px] border-[#eaecf0] my-1 h-[190px]'>
                    <div className='flex justify-between items-center'>
                        <div className={`w-[44px] h-[47px] flex justify-center flex-col items-center rounded-[6px] border-1 bg-[#${items.seatcolor}] text-center`}>
                            <p className='font-500 text-[10px] text-white pt-[10px]'>Seat</p>
                            <h1 className='font-600 text-white text-[16px]'>{items.seatname}</h1>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => {
                                show ? setshow(false) : setshow(true);
                            }}>
                                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>

                    {/* show dialog after click to the button  */}
                    {show && <div className='bg-white w-[160px] rounded p-3 flex justify-between items-center shadow-xl'>
                        <GrFormClose color='red' className='text-red-500 font-bold' onClick={() => setshow(false)} />
                        <p className='text-red-500 font-bold'>cancel request</p>
                    </div>}

                    <div className='flex-1 w-full mt-3 leading-[20px]'>
                        <h1 className='font-semibold text-[14px] text-[#000] tracking-wide'>{items.passengerName}</h1>
                        <p className='font-400 text-[11px] text-[#475467] tracking-wide'>{items.tricket}</p>
                     
                      {/* show full details if show full details true  */}
                        {items.showfulldetails && <div><p className='font-400 text-[11px] text-[#98a2b3] tracking-wide'>{items.email}</p>
                            <p className='font-400 text-[11px] text-[#98a2b3] tracking-wide'>{items.age}</p></div>}
                    </div>
                </div>
            )}
        </>
    )
}

export default PassengerCards