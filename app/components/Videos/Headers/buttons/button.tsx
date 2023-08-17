import React from 'react'

const button = (props?:any) => {
  return (
    <div>
        {props.btndata.map((items?:any,index?:number)=><button className={`${items == 'All' ? "bg-[#6941c6]":"bg-white"} mr-[5px] w-[100px] rounded-[10px] text-${items == "All"?"white":"black"} py-[4px] px-[12px]`}>{items}</button>)}
    </div>
  )
}

export default button