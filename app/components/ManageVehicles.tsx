import React from 'react'
import Profilepicture from './Profilepicture';
import Exteriorphotos from './VehiclesPhotos/Exteriorphotos';
import Interiorphotos from './VehiclesPhotos/Interiorphotos';
import { IoIosAdd } from 'react-icons/io';

const ManageVehicles = () => {
  return (
    <div className='w-full h-screen pt-[20px] bg-secondary-100 px-5'>
       <div>
         <h1 className='text-secondary-900 font-semibold font-600 text-[24px]'>Vehicles Photos</h1>
         <p className='font-400 text-[16px] line-clamp-[24px] text-secondary-600'>Uploades the photos of your vehicles</p>
       </div>
        <Profilepicture />
        <Interiorphotos />
        <Exteriorphotos />

              {/* add button sections  */}
      <div className='rounded-[8px] flex justify-center items-center py-[12px] px-[20px] bg-[#FFFFFF] mt-5' style={{ border: "1px solid #D0D5DD" }}>
        <IoIosAdd width={"11.67px"} height={"11.67px"} color='#344054' />
        <span className='ml-4 font-600 text-[16px] line-clamp-[24px] text-[#344054]'>Add section</span>
      </div>

      <button className='bg-[#7F56D9] w-full py-[12px] px-[20px] rounded-[8px] text-white' style={{ border: "1px solid #7F56D9" }}>Next</button>
    </div>
  )
}

export default ManageVehicles