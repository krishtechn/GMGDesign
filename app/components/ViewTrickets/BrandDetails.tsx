import React from 'react'

const BrandDetails = (props?:any) => {
  return (
    
    <div className='w-full flex justify-between flex-row mt-5'>
    <div>
        <p className='font-400 text-[10px] text-[#8c8d89] text-left'>Brand</p>
        <h1 className='font-semibold text-[#1d2939] text-[12px]'>{props.brands.name}</h1>
    </div>

    <div>
        <p className='font-400 text-[10px] text-[#8c8d89] text-left'>Type</p>
        <h1 className='font-semibold text-[#1d2939] text-[12px]'>{props.brands.type}</h1>
    </div>


    <div>
            <p className='font-400 text-[10px] text-[#8c8d89] text-left'>Number Plate</p>
            <h1 className='font-semibold text-[#1d2939] text-[12px]'>{props.brands.noPlate}</h1>
    </div>

    <div>
            <p className='font-400 text-[10px] text-[rgba(140, 141, 137, 1)] text-left'>Color</p>
            <h1 className='font-600 text-[rgba(102, 112, 133, 1)] text-[10px]'>{props.brands.color}</h1>
    </div>
</div>
  )
}

export default BrandDetails