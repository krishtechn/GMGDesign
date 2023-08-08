import React from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai';

const Buttons = (props?:any) => {
    let {leftbtn,rightbtn} = props;
  return (
    <div className='flex justify-between items-center my-[15px]'>
        <button className='font-semibold text-[12px] bg-[#d1fadf] rounded-s tracking-widest text-[#027a48] py-[3px] px-[8px] border border-[1px] border-[#6ce9a6]'>{leftbtn}</button>
        <div className='flex justify-center items-center w-[100px] h-[22px] rounded-[4px] py-[3px] pl-[5px] pr-[8px] gap-[3px] bg-[#fef0c7] rounded-xl border border-[1px] border-[#fec84b]'>
             <AiFillEyeInvisible  color='#b54708' height={"10.5px"} cursor={"pointer"}/>
            <p className='font-semibold text-[12px] ml-2 text-right text-[#b54708]'>{rightbtn}</p>
        </div>
    </div>
  )
}

export default Buttons