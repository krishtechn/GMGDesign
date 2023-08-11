import React from 'react'

const TabViewContent = ({items,id}:{items:any,id:number}) => {
  return (
    <>
    {items[id].content.map((items?:any,index?:any)=>( <div className='my-[15px]'>
        <h1 className='text-[14px] capitalize font-bold text-[#344054]'>{items.title}</h1>
        <p className='text-[12px] font-400 text-[#475467]'>{items.subtitle}</p>
     </div>
    ))}
    </>
  )
}

export default TabViewContent