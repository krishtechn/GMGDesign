import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import LocationDetails from '../ViewTrickets/LocationDetails';
import { Fromlocation, Tolocation, totalHour,Bookingpassengerdetails } from '../ViewTricketsdata';
import BusCompany from '../ViewTrickets/BusCompany';
import BrandDetails from '../ViewTrickets/BrandDetails';
import { Buscompany, Brand } from '../ViewTricketsdata';
import PassengerCards from './PassengerCards';

const BookingDetails = () => {
    return (
        <div className='mx-auto bg-secondary-100'>
            <div className=' bg-primary-900 py-[10px] px-[8px] shadow'>
                <div className='flex justify-between items-center mb-[20px]'>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color='white' className='text-white'>
                        <g id="arrow-left">
                            <path id="Icon" d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>

                    <h1 className='text-base-white text-[16px] text-center'>Booking Details</h1>

                    <AiOutlineArrowLeft width={"13.33px"} height={"10px"} color='#d92d20' />

                </div>
                <div className='mx-3'>
                <LocationDetails fromlocation={Fromlocation} tolocation={Tolocation} totalHour={totalHour} page="booking" />
                </div>
            </div>

           <div className='px-4'>
            <div className='w-full rounded-xl bg-base-white my-4 py-3 px-2'>
                <h1 className='text-[12px] font-bold text-primary-800'>Vehicle information</h1>
                <BusCompany details={Buscompany} />
                <BrandDetails brands={Brand} />
            </div>

            <div className='w-full rounded-xl bg-base-white my-4 py-3 px-2'>
                <h1 className='text-[12px] font-bold text-primary-800'>Payment information</h1>
                <div className='w-full flex justify-between flex-row mt-2 font-medium'>
                  <div className='flex flex-col leading-[24px]'>
                    <h1 className='text-[12px]'>Transaction : 23948232</h1>
                    <h1 className='text-[12px]'>Status : Paid</h1>
                    <h1 className='text-[12px]'>Method : eSewa</h1>
                    <h1 className='text-[12px]'>Date : 17 July 2023 • 10:43 AM</h1>
                  </div>

                  <div className='flex flex-col leading-[24px]'>
                    <h1 className='text-[12px]'>Bookin ID : 23948</h1>
                    <h1 className='text-[12px]'>Tickets : 6x</h1>
                    <h1 className='text-[12px]'>Price : Rs. 12,000</h1>
                  </div>
                </div>
            </div>

          <div className='flex justify-center items-center gap-3 flex-wrap'>
            <PassengerCards data={Bookingpassengerdetails}/>
          </div>
          </div>

          <div className='w-full bg-base-white h-[100px] flex justify-center items-center '>
          <div className='border border-[1px] p-4 rounded-xm border-secondary-300 hover:bg-indigo-700 
          py-3 px-5 text-center cursor-pointer w-full mx-3'>
            <p className='font-[14px] font-medium text-primary text-center hover:text-base-white'>View Tickets</p>
          </div>
          </div>
        </div>
    )
}

export default BookingDetails