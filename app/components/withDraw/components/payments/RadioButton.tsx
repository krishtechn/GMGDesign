import React from 'react'

const RadioButton = (props?:any) => {
  return (
    <div className='flex items-center justify-between my-[20px]'>
        {props.options.map((items?:any,index?:any)=>{
            return <div className='flex'>
                <input type='radio'/>
                <p className='font-medium ml-[10px] text-[14px] leading-[20px] text-[#344054]'>{items}</p>
                </div>
        })}
    </div>
  )
}

export default RadioButton