"use client"
import React,{useState} from 'react'
import clsx from 'clsx';



const DateCard = (props?:any) => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleCardClick = (index?:any) => {
        setSelectedCardIndex(index === selectedCardIndex ? null : index);
    };

    return (
        <>
           {props.data.map((items?:any,index?:number)=>{
             return  <div onClick={()=>handleCardClick(index)} className={`w-[60px] h-[52px] ${items.status == "active" || index == selectedCardIndex ?"bg-[#6941c6]":items.status=="disabled"?"bg-[#f2f4f7]":"bg-white"} p-[10px] m-[9px] rounded-[6px] flex justify-center items-center flex-col`}>
             <h1 className={`font-500 ${items.status == "active" || index == selectedCardIndex?"text-[#fff]":items.status=="disabled"?"text-[#d0d5dd]":"text-[#98a2b3]"} text-[10px]`}>{items.name}</h1>
             <p className={`font-bold text-[16px] ${items.status == "active" || index == selectedCardIndex?"text-[#fff]":items.status=="disabled"?"text-[#d0d5dd]":"text-[#42307d]"} font-600`}>{items.day}</p>
         </div>
           })}
        </>
    )
}

export default DateCard