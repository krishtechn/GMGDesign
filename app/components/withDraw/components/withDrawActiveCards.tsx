"use client"
import React, { useState } from 'react'
import WithDrawActiveCard from '../components/withDrawActiveCard';
import { FaRegEyeSlash } from 'react-icons/fa';

const withDrawActiveCards = () => {
  let [showprice,setShowprice] = useState("");
  return (
    <div className='w-[357px] h-[87px] py-[20px] px-[18px] border-[1px] bg-white shadow-lg my-[20px] border-[#eaecf0] rounded-[8px] flex justify-between items-center'>
        <WithDrawActiveCard title="Active" color="7f56d9" iconcolor="fff" price={2000} showprice={showprice}/>

        <FaRegEyeSlash color="#000" width={"14.77px"} height={"13.5px"} className='cursor-pointer' onClick={()=>showprice == ""?setShowprice("XXXX"):setShowprice("")}/>

        <WithDrawActiveCard title="Hold"  color="667085" iconcolor="98a2b3" price={2000} showprice={showprice}/>
    </div>
  )
}

export default withDrawActiveCards