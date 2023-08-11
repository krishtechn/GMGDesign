"use client"
import React, { useEffect, useState } from 'react'
import 'swiper/css';
import Loadingscreen from './Loadingscreen';
import CheckBox from './components/checkBox/checkBox';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import BottomSheetItems from '././components/BottomSheet/BottomSheetItems';
import DateCards from './components/DateCards/DateCards';
import Selectseats from './components/SelectSeats/Selectseats';
import CustomTabViews from './components/Tabs/CustomTabs';
import CustomTabView from './components/Tabs/CustomTabView';
import { tabs,tabs1 } from './components/ViewTricketsdata';

const page = () => {
  // const [value, onChange] = useState<any>(new Date());
useEffect(()=>{
  // setTimeout(()=>{
  //   document.location.href = "http://localhost:3000/ViewTrickets";
  // },300)
})  

  return (
  <>
  <DateCards />
  
  <div className='w-full h-screen bg-[#F2F4F7]'>
  <Selectseats />
  <CustomTabViews />

  <CustomTabView tabs={tabs} />

  {/* <div className='w-full h-screen bg-[#F2F4F7]'>
   <BottomSheetItems />    
  </div> */}
  </div>

  </>
  )
}

export default page



    {/* <ManageVehicles /> */}
    {/* <Loadingscreen loading={true} animationduration={"1"} animationdelay={"5s"}/> */}
    {/* <CheckBox /> */}
    {/* <div>
      <DateTimePicker onChange={onChange} value={value} format='y-MM-dd h:mm:ss a' />
    </div> */}
   {/* <div className='flex flex-col'>
   <label className='font-semibold text-[14px] leading-[20px] tracking-wide	'>Child passenger</label>   
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a country</option>
  {options.map(items=><option value="DE">{items}</option>)}
</select>

<button className='bg-indigo-600 rounded-sm text-white' style={{padding:"12px, 20px, 12px, 20px"}}>Create trip</button>
</div> */}