'use client'
import React,{useState} from 'react'
import { IoIosAdd } from 'react-icons/io'
import 'swiper/css';
import Useruploadimage from '../Useruploadimage';

const Interiorphotos = () => {
    let [images,setimages] = useState<any>([]);

    //select image from gallery add from array
    const addimages = (e:any)=>{
      let file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setimages([...images,reader.result]);
      };
      reader.readAsDataURL(file);
    }

  return (
    <div>
    <p className='text-secondary-700 text-xs-r mb-[10px]'>Interior photos</p>
      <div className='flex justify-center'>
      <div className='bg-secondary-200 border-[#D0D5DD]-1 flex justify-center items-center' style={{ border: "1px solid #D0D5DD",height:"100px",width:"200px" }}>
     <input type="file" accept='.png' className='w-[125px] h-[125px]' name='profileimage' onChange={(e)=>addimages(e)}/>
          <label className="input-icon">
           <IoIosAdd color='#98A2B3' width={"9.33px"} height={"9.33px"}/>
          </label>
      </div>
      <div className='flex flex-nowrap overflow-x-auto w-full'>
      <Useruploadimage data={images} setimages={setimages}  />
      </div>
    </div>
    </div>
  )
}

export default Interiorphotos