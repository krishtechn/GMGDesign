import React from 'react'
import { AiFillBell } from 'react-icons/ai';

const withDrawActiveCard = (props?:any) => {
  return (
    <div className='flex justify-between items-center w-[124px] mx-[10px] h-[46px] gap-[10px]'>
        <div className={`w-[32px] h-[32px] justify-center items-center flex rounded-[8px] p-[10px] shadow-sm bg-${props.color}`}>
         <AiFillBell color={`${props.iconcolor}`} width={"9px"} height={"9.22px"}/>
        </div>

        <div className='flex flex-col items-start'>
            <p className={`font-400 text-[12px] leading-[20px] text-center text-${props.color} select-none`}>{props.title}</p>
            <h1 className={`font-500 text-[15px] leading-[20px] text-center text-${props.color} select-none`}>Rs: {props.showprice !== "" ? props.showprice : props.price}</h1>
        </div>
    </div>
  )
}

export default withDrawActiveCard