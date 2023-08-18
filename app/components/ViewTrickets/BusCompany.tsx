import React from 'react'

const BusCompany = (props?:any) => {
    return (
        <div className='w-full flex justify-between flex-row mt-5'>
            <div>
                <p className='text-xs'>Bus Compnay</p>
                <h1 className='font-medium text-[#1d2939] text-xs underline'>{props.details.company}</h1>
            </div>

            <div>
                <p className='text-xs'>Operator Name</p>
                <h1 className='font-semibold text-[#1d2939] text-[12px] text-xs/semibold'>{props.details.operatorName}</h1>
            </div>


            <div>
                <p className='text-xs'>Number</p>
                <h1 className='font-semibold text-xs'>{props.details.no}</h1>
            </div>
        </div>
    )
}

export default BusCompany