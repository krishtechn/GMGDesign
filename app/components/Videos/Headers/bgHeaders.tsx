import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import Buttons from './buttons/button';

const bgHeaders = (props?:any) => {
  let {data} = props;
  return (
    <div className='bg-gradient-to-r from-[#42307D] to-[#9E77ED] w-full'>
      <div>
         <BiArrowBack width={"30px"} height={"30px"} color='white' className='my-[20px] ml-[15px]'/>
      </div>
     <div className='justify-center flex flex-col h-full gap-[6px] w-[357px] px-[15px]'>
     <h1 className='font-600 text-[32px] leading-[34px] tracking-tighter text-white'>{data.title}</h1>
     <p className='font-400 text-[12px] leading-[16px] tracking-tighter text-[#d6bbfb]'>{data.desc}</p>
     </div>

     <div className='md:w-full w-[357px] px-[15px] pt-[30px] mb-[20px]'>
     <Buttons btndata={data.buttons}/>
     </div>
    </div>
  )
}

export default bgHeaders