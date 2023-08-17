import React from 'react'
import WithDrawActiveCards from './components/withDrawActiveCards';
import Payment from './components/payments/payment';

const withDraw = () => {
    return (
        <div className='bg-[#F2F4F7] w-full h-full flex items-center flex-col'>
            <div className='w-[357px]'>
                <div>
                    <h1 className='font-500 text-[24px] leading-[34px] text-[#101828]'>withDraw Money</h1>
                    <p className='font-400 text-[16px] leading-[24px] text-[#667085]'>You have not made any earnings. All your earnings will appear here.</p>
                </div>
            <WithDrawActiveCards />
            <Payment />
            </div>

        </div>
    )
}

export default withDraw