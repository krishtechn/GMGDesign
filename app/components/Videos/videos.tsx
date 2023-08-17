import React from 'react'
import Video from './Video'
import BgHeaders from './Headers/bgHeaders'

const videos = () => {
  let data = [
    {
        link:"https://www.youtube.com/embed/prviSWcsxOw",
        title:"Payment",
        subtitle:"First vlog at Kathmandu"
    },
    {
        link:"https://www.youtube.com/embed/XHSz-78S1B4",
        title:"Android",
        subtitle:"Food Recipe App Ui Design Android Studio"
    },
    {
        link:"https://www.youtube.com/embed/dbEaqFQAvsc",
        title:"Android",
        subtitle:"Doctor App Using Android Studio #3"
    },
    {
        link:"https://www.youtube.com/embed/5IkuKIYhhl0",
        title:"Payment",
        subtitle:"Armaan Malik Top 10 Song"
    },
    {
        link:"https://www.youtube.com/embed/5IkuKIYhhl0",
        title:"Payment",
        subtitle:"Armaan Malik Top 10 Song"
    },
    {
        link:"https://www.youtube.com/embed/5IkuKIYhhl0",
        title:"Payment",
        subtitle:"Armaan Malik Top 10 Song"
    },
    {
        link:"https://www.youtube.com/embed/5IkuKIYhhl0",
        title:"Payment",
        subtitle:"Armaan Malik Top 10 Song"
    },
    {
        link:"https://www.youtube.com/embed/5IkuKIYhhl0",
        title:"Payment",
        subtitle:"Armaan Malik Top 10 Song"
    }
  ]

  let topdata={
    title:"Techncial krish",
    desc:"Hi Guys This Is Technical krish It upload videos about technology, web development, App development,programming. ",
    buttons:["All","Android","website"],
 };

  return (
    <div className='w-full flex justify-center flex-col items-center'>
        <BgHeaders data={topdata}/>
        {/* <h1 className='text-[16px] font-bold text-[#000] text-center gap-[2px] tracking-wider uppercase my-[10px]'>Technical krish</h1> */}
        <div className='md:w-full w-[357px] md:px-[20px] flex flex-wrap justify-between items-center'>
        <Video data={data}/>
        </div>
    </div>
  )
}

export default videos