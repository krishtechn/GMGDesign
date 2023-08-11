import React from 'react'
import DateCard from './DateCard'

const DateCards = () => {
    let data = [
        {
            status:"disabled",
            name:"Jul",
            day:"07"
        },
        {
            status:"",
            name:"Today",
            day:"08"
        },
        {
            status:"",
            name:"Jul",
            day:"10"
        },
        {
            status:"",
            name:"Jul",
            day:"11"
        },
        {
            status:"",
            name:"Jul",
            day:"12"
        },
        {
            status:"",
            name:"Jul",
            day:"13"
        },
        {
            status:"",
            name:"Jul",
            day:"14"
        }
    ];

  return (
    <div className={`w-[100%] py-1 bg-[#493683] overflow-x-hidden`}>
        <div className='overflow-scroll flex flex-row justify-start '>
        <DateCard data={data}/>
        </div>
    </div>
  )
}

export default DateCards