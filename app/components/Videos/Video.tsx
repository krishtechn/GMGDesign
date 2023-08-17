import React from 'react'

interface props {
    link: string,
    title: string,
    subtitle: string,
}
const Video = (props?: any) => {
    return (
        <>
        {props.data.map((items?:any,index?:number)=><div className='md:w-[50%] w-[172px] my-[15px] md:px-[30px]'>
            <iframe className='rounded-[10px] object-contain md:w-full md:px-[30px] md:h-[250px]' width="172px" height="172px" src={items.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <p className='text-[12px] font-400 text-[#98a2b3] gap-[2px] tracking-wider uppercase my-[10px] md:px-[30px]'>{items.title}</p>
            <p className='text-[16px] font-bold text-[#101828] gap-[2px] line-clamp-2 md:px-[30px]'>{items.subtitle}</p>
        </div>)}
        </>
    )
}

export default Video