import React from 'react'
import { IoMdClose } from 'react-icons/io';

const Useruploadimage = ({data,setimages}:any) => {
  let filteritems = (index?:number)=>{
    // let filteritems = data.filter((items:any,i:number)=>{
    //       return i !== index;   
    // });
    setimages((prev?:any)=>prev.filter((items?:any,i?:number)=>i !== index));
    alert("Delete Items "+index);
  }
 
  return (
    // <Swiper
    //   spaceBetween={2}
    //   slidesPerView={data.length >= 2?2:0}>
    //   {data.map((items?:any,index?:number)=>{
    //     return <SwiperSlide key={index}>
    //     <IoMdClose color='white' className='absolute top-1 right-5' width={"40px"} onClick={()=>filteritems(index)}/>
    //     <img className='w-[126px] h-[126px] rounded-xl object-cover' data-lazy={items} src={items} />
    //      </SwiperSlide>
    //   })}
    // </Swiper>
    
      <div className='no-scrollbar flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-2 cursor-auto'>
      {data.map((items?:any,index?:number)=>{
        return <div key={index} className='flex-none rounded snap-always snap-center'>
         <IoMdClose color='white' className='absolute' onClick={()=>filteritems(index)}/>
         <img className='w-full h-[126px] rounded-xl object-cover' data-lazy={items} src={items} />
          </div>
       })}
      </div>
    )
  
}

export default Useruploadimage