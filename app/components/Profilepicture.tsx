"use client"
import React, { useState } from 'react'
import { FiUploadCloud } from './index';
import Uploadphoto from '../../public/Uploadphoto.svg';

const Profilepicture = () => {
  let [image, setimage] = useState<any>();
  let [showimage, setshowimage] = useState(false);


  //convert user select image into buffor link
  let HandleImageChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setimage(reader.result);
      setshowimage(true);
    };
    reader.readAsDataURL(file);
  }
  return (
    // profile picture  
    <div className='mt-3'>
      <p className='text-xs-r text-secondary-700 mb-1'>Profile Picture</p>
      <div className='bg-base-white py-[16px] px-[24px] mb-[20px] border-[#EAECF0]-1 rounded-[12px] flex justify-center items-center flex-col' style={{ border: "1px solid #EAECF0" }}>
        {showimage == false ? (<div className='bg-[#F4EBFF] shadow-lg mb-[12px] w-[40px] h-[40px] rounded-[8px] flex justify-center items-center'>
          <div className="input">
            <input type="file" accept='.png' className='w-[125px] h-[125px]' name='profileimage' onChange={(e) => HandleImageChange(e)} />
            <label className="input-icon">
              <FiUploadCloud width={"20px"} height={"20px"} color='#475467' name='profileimage' />
              {/* <img src='/Uploadphoto.svg'/> */}
            </label>
          </div>
        </div>) :
          (
            <div className='w-[125px] h-[125px] rounded-full' style={{ border: "3px solid #FFFFFF" }}>
              <img className='w-full h-full rounded-full' src={`${image}`} />
            </div>
          )}
        <p className='text-sm-sb text-primary-700 mt-[4px]'>click hero to upload</p>
        <p className='text-secondary-600 text-xs-r'>PNG or JPG(max. 800x800px)</p>
      </div>
    </div>
  )
}

export default Profilepicture