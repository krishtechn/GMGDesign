"use client"
import React, { useState } from 'react'
import WithDrawActiveCard from '../components/withDrawActiveCard';
import { FaRegEyeSlash } from 'react-icons/fa';

const withDrawActiveCards = () => {
  let [showprice,setShowprice] = useState("");
  return (
    <div className='w-[357px] h-[87px] py-[20px] px-[12px] border-[1px] bg-base-white shadow-lg my-[30px] border-secondary-200 rounded-[8px] flex justify-between items-center px-[10px]'>
        <WithDrawActiveCard title="Active" color="primary-600" iconcolor="base-white" price={2000} showprice={showprice}/>

        <FaRegEyeSlash color="#000" width={"14.77px"} height={"13.5px"} className='cursor-pointer' onClick={()=>showprice == ""?setShowprice("XXXX"):setShowprice("")}/>

        <WithDrawActiveCard title="Hold"  color="secondary-500" iconcolor="secondary-400" price={2000} showprice={showprice}/>
    </div>
  )
}

export default withDrawActiveCards