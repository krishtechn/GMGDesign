import React from 'react'

const BusCompany = (props?:any) => {
    return (
        <div className='w-full flex justify-between flex-row mt-5'>
            <div>
                <p className='font-400 text-[10px] text-[rgba(140, 141, 137, 1)] text-left'>Bus Compnay</p>
                <h1 className='font-medium text-[#1d2939] text-[10px] underline'>{props.details.company}</h1>
            </div>

            <div>
                <p className='font-400 text-[10px] text-[rgba(140, 141, 137, 1)] text-left'>Operator Name</p>
                <h1 className='font-semibold text-[#1d2939] text-[12px]'>{props.details.operatorName}</h1>
            </div>


            <div>
                <p className='font-400 text-[10px] text-[rgba(140, 141, 137, 1)] text-left'>Number</p>
                <h1 className='font-semibold text-[#1d2939] text-[12px]'>{props.details.no}</h1>
            </div>
        </div>
    )
}

export default BusCompany