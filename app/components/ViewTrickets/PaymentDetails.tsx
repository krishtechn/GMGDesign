import React from 'react'


const PaymentDetails = (props?:any) => {
    let {payment} = props;
  return (
    <div className='w-full flex justify-between flex-row mt-5'>
                    <div className='flex flex-col'>
                        <p className='font-400 text-[10px] text-[rgba(140, 141, 137, 1)] text-left'>Payment Status</p>
                        <h1 className={`font-medium ${payment.status == "paid"?"text-[#039855]":"text-red-500"}  text-[12px]`}>{payment.status}</h1>
                    </div>

                    <div className='flex flex-col'>
                        <p className='font-400 text-[10px] text-[rgba(140, 141, 137, 1)] text-left'>Payment Method</p>
                        <h1 className='font-medium text-[#667085] text-sm/Medium'>{payment.method}</h1>
                    </div>


                    <div className=' flex flex-row items-center'>
                        <div>
                            <p className='font-400 text-[10px] text-[rgba(140, 141, 137, 1)] text-left'>ID Number</p>
                            <h1 className='font-medium text-[#667085] text-sm/Medium'>{payment.idNo}</h1>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='left-[5px] ml-2' width="18" height="18" viewBox="0 0 25 25" fill="none">
                            <path d="M6.25 2.5H12.1667C14.0335 2.5 14.9669 2.5 15.68 2.86331C16.3072 3.18289 16.8171 3.69282 17.1367 4.32003C17.5 5.03307 17.5 5.96649 17.5 7.83333V13.75M5.16667 17.5H11.9167C12.8501 17.5 13.3168 17.5 13.6733 17.3183C13.9869 17.1586 14.2419 16.9036 14.4017 16.59C14.5833 16.2335 14.5833 15.7668 14.5833 14.8333V8.08333C14.5833 7.14991 14.5833 6.6832 14.4017 6.32668C14.2419 6.01308 13.9869 5.75811 13.6733 5.59832C13.3168 5.41667 12.8501 5.41667 11.9167 5.41667H5.16667C4.23325 5.41667 3.76654 5.41667 3.41002 5.59832C3.09641 5.75811 2.84144 6.01308 2.68166 6.32668C2.5 6.6832 2.5 7.14991 2.5 8.08333V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
  )
}

export default PaymentDetails