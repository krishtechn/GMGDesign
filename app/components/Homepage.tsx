import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { HiSun } from 'react-icons/hi';
import img from '../../public/developerpng.webp';

const Homepage = () => {
    return (
        <div className='bg-black flex flex-col justify-between h-screen'>
            <div className='flex justify-between items-center py-[10px] px-[20px] h-[10%]'>
                <button className={`border border-white rounded-sm text-white py-[4px] px-[10px]`}>Connect with us</button>
                <HiSun color='white' width={"20px"} height={"20px"} className='object-contain'/>
            </div>
            <div className=' text-white w-full h-[80%] flex justify-center items-center flex-col'>
               <Image src={img} alt='' className='md:w-[40%] md:h-auto justify-center items-center' objectFit='cover'/>
                <div className='justify-center flex flex-col gap-[6px] md:w-[357px] px-[15px]'>
                    <h1 className='font-600 text-[32px] leading-[34px] tracking-tighter text-white'>Technical krish</h1>
                    <p className='font-400 text-[14px] leading-[16px] tracking-tighter text-[#d6bbfb] line-clamp-5'>
                        Hi Guys This Is Technical krish It upload videos about technology, web development, App development,programming.
                        So Please subscribe and press the bell icon for latest tech updates.i would like to thank you all for your love and support for my personal channel.please do not forget to watch my video,give a like,comment and subscribe my channel.this is very new thing for me i mean in technical .thank you all and love you all.😍</p>
                </div>

                <div className='px-[15px] pt-[30px] mb-[20px]'>
                    <Link href={'Videos'} className={`bg-indigo-800 rounded-[10px] text-white py-[10px] px-[12px] w-[357px]`}>About me</Link>
                </div>
            </div>

            <p className='font-400 text-[14px] leading-[16px] tracking-tighter text-[#d6bbfb] mb-[10px] ml-[20px]'>Copyright @Technical krish {new Date().getFullYear()}</p>              
        </div>
    )
}

export default Homepage