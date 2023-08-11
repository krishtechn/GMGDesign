'use client'
import React,{useState} from 'react'
import { IoIosAdd } from 'react-icons/io';
import Useruploadimage from '../Useruploadimage';

const Exteriorphotos = () => {
let [images,setimages] = useState<any>([]);


// to select image from gallery
const addimages = (e:any)=>{
  let file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setimages([...images,reader.result]);
  };
  reader.readAsDataURL(file);
}

  return (
    <div className='mt-4'>
    <p className='text-secondary-700 text-xs-r mb-[10px]'>Exterior photos</p>
    <div className='flex items-center w-full'>
    <div className='bg-secondary-200 border-[#D0D5DD]-1 flex justify-center items-center' style={{ border: "1px solid #D0D5DD",height:"100px",width:"155px" }}>
     <input type="file" accept='.png' className='w-[125px] h-[125px]' name='profileimage' onChange={(e)=>addimages(e)}/>
            <label className="input-icon">
             <IoIosAdd color='#98A2B3' width={"9.33px"} height={"9.33px"}/>
            </label>
    </div>
    <Useruploadimage data={images} setimages={setimages}/>
    </div>
   </div>
  )
}

export default Exteriorphotos